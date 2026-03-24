import { useAppSelector, useAppDispatch } from '../../../store/store.js'
import ScenarioSelector from './ScenarioSelector.js'
import ScenarioRunner from './ScenarioRunner.js'
import ScenarioDebrief from './ScenarioDebrief.js'
import './ScenarioPanel.css'

export default function ScenarioPanel() {
  const { activeRun, debrief } = useAppSelector(s => s.scenario)

  if (debrief) return <ScenarioDebrief />
  if (activeRun) return <ScenarioRunner />
  return <ScenarioSelector />
}
