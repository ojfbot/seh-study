import type { Express } from 'express'
import healthRouter from './health.js'
import toolsRouter from './tools.js'

export function registerRoutes(app: Express): void {
  app.use('/health', healthRouter)
  app.use('/api/tools', toolsRouter)
}
