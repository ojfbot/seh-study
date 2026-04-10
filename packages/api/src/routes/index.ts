import type { Express } from 'express'
import healthRouter from './health.js'
import toolsRouter from './tools.js'
import { beadsRouter } from './beads.js'

export function registerRoutes(app: Express): void {
  app.use('/health', healthRouter)
  app.use('/api/tools', toolsRouter)
  app.use('/api/beads', beadsRouter)
}
