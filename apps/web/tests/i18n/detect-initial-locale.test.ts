// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { installMockOpenDesignHost } from '@open-design/host/testing';
import { detectInitialLocale } from '../../src/i18n';

const LS_KEY = 'open-design:locale';
const LS_SOURCE_KEY = 'open-design:locale-source';

function setStoredLocale(locale: string, source: 'manual' | 'untagged' = 'manual'): void {
  window.localStorage.setItem(LS_KEY, locale);
  if (source === 'manual') {
    window.localStorage.setItem(LS_SOURCE_KEY, 'manual');
  } else {
    window.localStorage.removeItem(LS_SOURCE_KEY);
  }
}

function setNavigatorLanguages(languages: readonly string[]): void {
  Object.defineProperty(window.navigator, 'languages', {
    configurable: true,
    get: () => languages,
  });
  Object.defineProperty(window.navigator, 'language', {
    configurable: true,
    get: () => languages[0] ?? 'en',
  });
}

// Track the installed mock so each test can swap it out without leaking
// state into the next case (installMockOpenDesignHost returns an
// uninstall callback that restores the previous value).
let uninstallHost: (() => void) | null = null;

function installHostWithOsLocale(value: unknown): void {
  uninstallHost?.();
  uninstallHost = installMockOpenDesignHost({
    host: {
      // The mock host's defaultHost() already sets client.type to
      // 'desktop'; we only override the field exercised here.
      client: { osLocale: value as string | undefined },
    },
  });
}

function clearHost(): void {
  uninstallHost?.();
  uninstallHost = null;
}

describe('detectInitialLocale priority chain', () => {
  beforeEach(() => {
    window.localStorage.clear();
    clearHost();
    setNavigatorLanguages(['en-US']);
  });

  afterEach(() => {
    window.localStorage.clear();
    clearHost();
  });

  it('prefers a manually-tagged localStorage pick over host and navigator', () => {
    setStoredLocale('ja', 'manual');
    installHostWithOsLocale('zh-CN');
    setNavigatorLanguages(['fr-FR']);

    expect(detectInitialLocale()).toBe('ja');
  });

  it('uses Vietnamese instead of a legacy auto-detected language', () => {
    setStoredLocale('ja', 'untagged');
    installHostWithOsLocale('zh-CN');

    expect(detectInitialLocale()).toBe('vi');
  });

  it('uses Vietnamese when an unsupported locale was stored', () => {
    setStoredLocale('xx-YY', 'manual');
    setNavigatorLanguages(['de-DE']);

    expect(detectInitialLocale()).toBe('vi');
  });

  it('defaults to Vietnamese even when desktop and browser use another language', () => {
    installHostWithOsLocale('zh-CN');
    setNavigatorLanguages(['en-US']);

    expect(detectInitialLocale()).toBe('vi');
  });

  it('defaults to Vietnamese with a regional desktop locale', () => {
    installHostWithOsLocale('zh-Hant-TW');
    setNavigatorLanguages(['en-US']);

    expect(detectInitialLocale()).toBe('vi');
  });

  it('defaults to Vietnamese when host osLocale is missing or not a string', () => {
    installHostWithOsLocale(undefined);
    setNavigatorLanguages(['ko-KR']);
    expect(detectInitialLocale()).toBe('vi');

    installHostWithOsLocale(42);
    setNavigatorLanguages(['fr-FR']);
    expect(detectInitialLocale()).toBe('vi');
  });

  it('defaults to Vietnamese with an unsupported desktop locale', () => {
    installHostWithOsLocale('nl-NL');
    setNavigatorLanguages(['pt-PT']);

    expect(detectInitialLocale()).toBe('vi');
  });

  it('defaults to Vietnamese when no system language is available', () => {
    clearHost();
    setNavigatorLanguages([]);

    expect(detectInitialLocale()).toBe('vi');
  });

  it('keeps an explicit English choice after the default changes', () => {
    setStoredLocale('en', 'manual');
    expect(detectInitialLocale()).toBe('en');
  });

  it('accepts an explicit Vietnamese choice', () => {
    setStoredLocale('vi', 'manual');
    expect(detectInitialLocale()).toBe('vi');
  });
});
