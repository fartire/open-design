import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { listSkills } from '../src/skills.js';
import { captureOdNextSessionSkillPackage } from '../src/strategies/od-next/session-skill-package.js';
import { mobileDesignSkillIds } from '../src/skills/mobile-design.js';

const skillsRoot = fileURLToPath(new URL('../../../skills', import.meta.url));

describe('mobile platform design material', () => {
  it.each(['mobile-android', 'mobile-ios'] as const)(
    'carries both complete reference bundles into a %s task without a manual mention',
    async (platform) => {
      const catalog = await listSkills(skillsRoot);
      const frozen = await captureOdNextSessionSkillPackage({
        metadata: { kind: 'prototype', platform, platformTargets: [platform] },
        getLocalPluginBySource: undefined,
        selection: {},
        listSkillCatalog: async () => catalog,
      });
      const mobile = frozen.selections.find((entry) => entry.canonicalId === 'platform-design');
      expect(mobile).toBeDefined();
      for (const target of ['android', 'ios']) {
        const guide = mobile?.files.find((file) => file.path === `references/${target}/SKILL.md`);
        expect(guide?.byteLength).toBeGreaterThan(10000);
        expect(mobile?.files.some((file) => file.path === `references/${target}/rules/_sections.md`)).toBe(true);
      }
      expect(mobile?.files.some((file) => file.path === 'references/LICENSE')).toBe(true);
    },
  );

  it('keeps an explicitly responsive web task free of mobile defaults', async () => {
    const frozen = await captureOdNextSessionSkillPackage({
      metadata: { kind: 'prototype', platform: 'responsive', platformTargets: ['responsive'] },
      getLocalPluginBySource: undefined,
      selection: {},
      listSkillCatalog: () => listSkills(skillsRoot),
    });
    expect(frozen.selections).toEqual([]);
  });

  it('preserves named skills, deduplicates the mobile bundle, and leaves the input untouched', () => {
    const selected = ['figma', 'platform-design'];
    expect(mobileDesignSkillIds({
      metadata: { kind: 'prototype', platform: 'mobile-android' },
      skillIds: selected,
    })).toEqual(['figma', 'platform-design']);
    expect(selected).toEqual(['figma', 'platform-design']);
  });

  it('adds Android-first guidance to an unspecified prototype target', () => {
    expect(mobileDesignSkillIds({ metadata: { kind: 'prototype' } })).toEqual(['platform-design']);
  });

  it('keeps Ask mode, website clones, decks, and image tasks on their own paths', () => {
    expect(mobileDesignSkillIds({ metadata: { kind: 'prototype' }, sessionMode: 'chat' })).toEqual([]);
    expect(mobileDesignSkillIds({ metadata: { kind: 'prototype', intent: 'web-clone' } })).toEqual([]);
    expect(mobileDesignSkillIds({ metadata: { kind: 'deck', platform: 'mobile-android' } })).toEqual([]);
    expect(mobileDesignSkillIds({ metadata: { kind: 'image', platform: 'mobile-android' } })).toEqual([]);
  });
});
