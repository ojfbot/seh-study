import { useState } from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react'
import { Heading } from '@carbon/react'
import { Menu, Close } from '@carbon/icons-react'
import { Tooltip } from '@carbon/react'
import { DashboardLayout } from '@ojfbot/frame-ui-components'
import '@ojfbot/frame-ui-components/styles/dashboard-layout'
import { TAB_SLUGS, TAB_LABELS, type TabSlug } from '@ojfbot/seh-study-shared'
import { useAppSelector, useAppDispatch } from '../store/store.js'
import { toggleSidebar } from '../store/threadsSlice.js'
import StudyPanel from './panels/StudyPanel.js'
import BrowsePanel from './panels/BrowsePanel.js'
import ProgressPanel from './panels/ProgressPanel.js'
import ScenarioPanel from './panels/scenario/ScenarioPanel.js'
import SehStudySidePanel from './SehStudySidePanel.js'
import './Dashboard.css'

const PANEL_MAP: Record<TabSlug, React.ComponentType> = {
  study: StudyPanel,
  browse: BrowsePanel,
  progress: ProgressPanel,
  scenarios: ScenarioPanel,
}

interface DashboardContentProps {
  shellMode: boolean
}

export default function DashboardContent({ shellMode }: DashboardContentProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dispatch = useAppDispatch()
  const sidebarExpanded = useAppSelector(s => s.threads.sidebarExpanded)

  return (
    <DashboardLayout shellMode={shellMode} sidebarExpanded={sidebarExpanded}>
      <DashboardLayout.Header>
        <Heading className="page-header">SEH Study Dashboard</Heading>
        <div className="seh-study-header-actions">
          <Tooltip align="bottom-right" label={sidebarExpanded ? 'Close panel' : 'Sessions & Chat'}>
            <button className="sidebar-toggle-btn" onClick={() => dispatch(toggleSidebar())} aria-label="Toggle sessions / chat panel">
              {sidebarExpanded ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </Tooltip>
        </div>
      </DashboardLayout.Header>

      <Tabs selectedIndex={selectedIndex} onChange={({ selectedIndex: idx }) => setSelectedIndex(idx)}>
        <TabList aria-label="SEH Study tabs" contained>
          {TAB_SLUGS.map(slug => (
            <Tab key={slug}>{TAB_LABELS[slug]}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {TAB_SLUGS.map(slug => {
            const PanelComponent = PANEL_MAP[slug]
            return (
              <TabPanel key={slug}>
                <PanelComponent />
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>

      <SehStudySidePanel />
    </DashboardLayout>
  )
}
