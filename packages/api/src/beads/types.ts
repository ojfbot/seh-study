/**
 * SehBeadLike — FrameBeadLike shape for SEH Study scenarios.
 *
 * Satisfies the FrameBeadLike contract defined in ADR-0016 (core repo).
 * Deliberately not imported from @core/workflows to avoid cross-repo coupling.
 *
 * Prefix: "seh-"
 * sourceApp: "seh-study"
 *
 * Note: study sessions are currently client-side (localStorage).
 * This route returns an empty array until server-side session persistence is added.
 */

export type SehBeadStatus = 'created' | 'live' | 'closed' | 'archived';

export interface SehBead {
  id: string;
  type: 'task';
  status: SehBeadStatus;
  sourceApp: 'seh-study';
  created_at: string;
  updated_at: string;
  payload: {
    scenarioId: string;
    title: string;
    difficulty: string;
    missionStatus?: string;
    score?: number;
  };
}
