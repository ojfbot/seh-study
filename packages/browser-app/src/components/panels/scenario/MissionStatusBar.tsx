import type { MissionStatus } from '@ojfbot/seh-study-shared'

interface MissionStatusBarProps {
  status: MissionStatus
}

export default function MissionStatusBar({ status }: MissionStatusBarProps) {
  const gauges = [
    { key: 'risk', label: 'Risk', value: status.risk, mod: 'risk' },
    { key: 'schedule', label: 'Schedule', value: status.schedule, mod: 'schedule' },
    { key: 'budget', label: 'Budget', value: status.budget, mod: 'budget' },
  ] as const

  return (
    <div className="seh-study-scenario-mission-bar">
      {gauges.map(g => (
        <div key={g.key} className={`seh-study-scenario-gauge seh-study-scenario-gauge--${g.mod}`}>
          <div className="seh-study-scenario-gauge-label">
            <span>{g.label}</span>
            <span>{g.key === 'risk' ? g.value : g.value}%</span>
          </div>
          <div className="seh-study-scenario-gauge-track">
            <div className="seh-study-scenario-gauge-fill" style={{ width: `${g.value}%` }} />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.25rem' }}>
        <span className="seh-study-scenario-phase-pill">{status.phase}</span>
        <span className="seh-study-scenario-terms-count">
          {status.termsEncountered.length} terms encountered
        </span>
      </div>
    </div>
  )
}
