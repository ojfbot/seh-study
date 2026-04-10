import { Router, type IRouter, type Request, type Response } from 'express';

export const beadsRouter: IRouter = Router();

/**
 * GET /api/beads
 *
 * FrameBeadLike projection endpoint (ADR-0016).
 * Read-only — Mayor/frame-agent aggregation endpoint.
 *
 * Currently returns empty: study sessions are client-side (localStorage).
 * Once server-side session persistence is added, this will return
 * scenario runs as beads with seh- prefix.
 */
beadsRouter.get('/', (_req: Request, res: Response) => {
  res.json({ beads: [], count: 0 });
});
