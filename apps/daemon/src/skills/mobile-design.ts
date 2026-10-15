import type { ChatSessionMode, ProjectMetadata } from '@open-design/contracts';

export const MOBILE_DESIGN_SKILL_ID = 'platform-design';

/** Add platform guidance to mobile prototypes without replacing selected skills. */
export function mobileDesignSkillIds(input: {
  metadata: ProjectMetadata | null | undefined;
  skillIds?: unknown;
  sessionMode?: ChatSessionMode;
}): string[] {
  const selected = Array.isArray(input.skillIds)
    ? input.skillIds.filter((id): id is string => typeof id === 'string' && id.trim().length > 0)
      .map((id) => id.trim())
    : [];
  const metadata = input.metadata;
  if (!metadata || input.sessionMode === 'chat' || metadata.intent === 'web-clone') return selected;
  if (metadata.kind && !['prototype', 'template', 'other'].includes(metadata.kind)) return selected;

  const targets = metadata.platformTargets?.filter((target) => target !== 'auto') ?? [];
  const explicit = targets.length > 0
    ? targets
    : metadata.platform && metadata.platform !== 'auto' ? [metadata.platform] : [];
  const mobile = explicit.length > 0
    ? explicit.some((target) => target === 'mobile-android' || target === 'mobile-ios')
    : metadata.kind === 'prototype';
  if (mobile && !selected.includes(MOBILE_DESIGN_SKILL_ID)) selected.push(MOBILE_DESIGN_SKILL_ID);
  return selected;
}
