import { createAction } from '@reduxjs/toolkit'

/** Cross-slice action: apply scenario debrief SR updates to study cards. */
export const scenarioSrUpdate = createAction<{
  termsPromoted: number[]
  termsDemoted: number[]
}>('scenario/srUpdate')
