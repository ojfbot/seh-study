import type { ScenarioTemplate } from '../scenario-types.js'
import { marsSampleReturn } from './mars-sample-return.js'
import { anomalyOnStation } from './anomaly-on-station.js'
import { requirementsTangle } from './requirements-tangle.js'
import { nextGenTelescope } from './next-gen-telescope.js'
import { launchReadiness } from './launch-readiness.js'
import { GENERATED_SCENARIOS } from './generated/index.js'

const HAND_AUTHORED: ScenarioTemplate[] = [
  marsSampleReturn,
  anomalyOnStation,
  requirementsTangle,
  nextGenTelescope,
  launchReadiness,
]

export const SCENARIOS: ScenarioTemplate[] = [
  ...HAND_AUTHORED,
  ...GENERATED_SCENARIOS,
]
