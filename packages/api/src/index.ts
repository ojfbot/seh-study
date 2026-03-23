import express from 'express'
import cors from 'cors'
import { registerRoutes } from './routes/index.js'
import { getLogger } from './utils/logger.js'

const log = getLogger('server')
const app = express()
const PORT = parseInt(process.env.PORT ?? '3031', 10)

app.use(cors({ origin: process.env.CORS_ORIGIN ?? 'http://localhost:4000' }))
app.use(express.json())

registerRoutes(app)

app.listen(PORT, () => {
  log.info(`SEH Study API running on port ${PORT}`)
})
