import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixMCmPlanOutline: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-m-cm-plan-outline',
    title: 'Configuration Management Planning Crisis',
    subtitle: 'Save a deep space telescope project from configuration chaos',
    difficulty: 'beginner',
    categories: ['configuration', 'project-mgmt'],
    termIndices: [
      t('Configuration Management Process'),
      t('Technical Data Management Process'),
      t('Configuration Items (CI)'),
      t('Baseline'),
      t('Technical Team'),
      t('Project Plan'),
      t('Systems Engineering Management Plan (SEMP)'),
      t('Work Breakdown Structure (WBS)'),
      t('Control Account Manager'),
      t('Earned Value Management'),
      t('Technical Planning Process'),
      t('Process'),
      t('Activity'),
      t('Deliverable Data Item'),
      t('Variance')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase B',
      title: 'The Configuration Crisis',
      narrative: 'As HSI Lead on the deep space telescope project, you arrive Monday morning to find the project manager in a panic. Three different versions of the optical system requirements exist across teams, the mirror specifications changed without approval tracking, and nobody knows which baseline documents are current. The project desperately needs a formal configuration management approach.',
      termHighlights: [
        t('Configuration Management Process'),
        t('Baseline'),
        t('Technical Planning Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Immediately implement the Configuration Management Process to establish controlled baselines and manage all technical planning work products systematically.',
          termIndices: [
            t('Configuration Management Process'),
            t('Technical Planning Process'),
            t('Baseline')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Configuration Management Process is essential for controlling technical planning outputs like requirements, specifications, and design documents. This prevents the chaos you are experiencing and ensures all teams work from the same controlled baselines.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Send an email asking all teams to use the latest versions and hope the problem resolves itself.',
          termIndices: [t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Email coordination cannot substitute for formal configuration management. Without controlled processes, version confusion will continue and worsen as the project progresses, leading to rework and integration failures.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -3 }
        },
        {
          id: 'c',
          text: 'Focus only on managing the most critical documents and let teams handle their own version control.',
          termIndices: [
            t('Configuration Management Process'),
            t('Technical Team')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Partially acceptable but risky. While prioritizing critical documents helps, inconsistent version control across teams creates integration risks. A comprehensive Configuration Management Process prevents these downstream problems.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Phase B',
      title: 'Identifying Configuration Items',
      narrative: 'With configuration management approved, you need to determine which project work products require formal control. The technical team has produced dozens of documents, models, and specifications. Your challenge is identifying what constitutes Configuration Items versus what can be managed through less formal processes.',
      termHighlights: [
        t('Configuration Items (CI)'),
        t('Technical Data Management Process'),
        t('Systems Engineering Management Plan (SEMP)')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Designate the WBS, SEMP, project schedule, and key specifications as Configuration Items under formal control, while using Technical Data Management Process for trade studies and analysis reports.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Work Breakdown Structure (WBS)'),
            t('Systems Engineering Management Plan (SEMP)'),
            t('Technical Data Management Process')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Critical baseline documents like the WBS, SEMP, and schedule require formal configuration control, while supporting analyses can be managed through the Technical Data Management Process. This balanced approach provides control without bureaucratic overhead.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Put every single document and file under formal configuration control to ensure nothing is missed.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Configuration Management Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Over-controlling creates bureaucratic burden without benefit. Not all documents need formal configuration control - only those affecting baselines or interfaces. Use Technical Data Management Process for supporting documents.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -2 }
        },
        {
          id: 'c',
          text: 'Only control the final deliverable specifications and let teams manage everything else informally.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Deliverable Data Item')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While controlling deliverables is important, key planning documents like the WBS and SEMP also affect project execution and should be Configuration Items. Missing these creates coordination risks.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Phase B',
      title: 'Managing Technical Work Directives',
      narrative: 'The Control Account Managers are struggling to create consistent detailed plans because they lack clear technical guidance. Without proper technical work directives, their cost account plans vary wildly in scope and approach. This threatens the Earned Value Management baseline the project desperately needs.',
      termHighlights: [
        t('Control Account Manager'),
        t('Earned Value Management'),
        t('Technical Team')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Issue formal technical work directives to all Control Account Managers, providing clear scope and technical guidance that enables consistent detailed planning for EVM baseline development.',
          termIndices: [
            t('Control Account Manager'),
            t('Earned Value Management'),
            t('Technical Team')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Technical work directives provide CAMs with the guidance they need for consistent detailed planning. This produces a reliable EVM baseline and prevents the schedule and budget variances that result from inconsistent planning assumptions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 2 }
        },
        {
          id: 'b',
          text: 'Let the Control Account Managers coordinate directly with each other to align their planning approaches.',
          termIndices: [
            t('Control Account Manager'),
            t('Technical Team')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but inefficient. While CAM coordination helps, they lack the technical authority to make binding decisions. Technical work directives from the technical team provide the authoritative guidance needed for consistent planning.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Allow each Control Account Manager to interpret project requirements individually and adjust the EVM baseline later if needed.',
          termIndices: [
            t('Control Account Manager'),
            t('Earned Value Management'),
            t('Variance')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Individual interpretation leads to inconsistent planning and significant variances between baseline and actual work. This undermines EVM effectiveness and creates major replanning efforts. Technical work directives prevent this problem.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -3 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Phase B',
      title: 'Capturing Work Products and Decisions',
      narrative: 'As the configuration management system takes shape, you realize the project has been losing critical information. Meeting minutes with stakeholder decisions are scattered across personal folders, important trade study results exist only in draft emails, and key technical analyses lack formal documentation. The project needs a systematic approach to capture and retain technical planning work products.',
      termHighlights: [
        t('Technical Data Management Process'),
        t('Activity'),
        t('Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Implement both Configuration Management Process for controlled documents and Technical Data Management Process for trade studies, analyses, and correspondence containing decisions or stakeholder agreements.',
          termIndices: [
            t('Configuration Management Process'),
            t('Technical Data Management Process'),
            t('Activity')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The dual approach properly categorizes work products - formal control for baseline documents and systematic data management for supporting analyses and decisions. This ensures critical project information is retained and accessible throughout the life cycle.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Focus only on managing the final configuration-controlled documents and let teams handle their own supporting materials.',
          termIndices: [
            t('Configuration Management Process'),
            t('Technical Team')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable for controlled documents but misses critical supporting information. Trade studies, stakeholder decisions, and technical correspondence often contain essential project knowledge that must be retained using Technical Data Management Process.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Create a simple shared folder structure and ask teams to save everything there without formal processes.',
          termIndices: [
            t('Technical Data Management Process'),
            t('Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Shared folders without formal processes lead to inconsistent storage, poor organization, and eventual information loss. Technical Data Management Process provides the systematic approach needed to retain and access critical project knowledge.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Phase B',
      title: 'Integration Success',
      narrative: 'Six months later, your configuration management implementation has transformed the project. All teams work from controlled baselines, technical work directives have produced consistent planning, and critical project knowledge is systematically captured and retained. The project manager commends you for turning potential chaos into organized execution.',
      termHighlights: [
        t('Baseline'),
        t('Technical Planning Process'),
        t('Project Plan')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document lessons learned from this configuration management implementation to improve processes on future projects.',
          termIndices: [
            t('Process'),
            t('Technical Planning Process')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent. Capturing lessons learned from successful process implementation helps the organization improve its technical planning capabilities and avoid similar configuration crises on future projects.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Continue monitoring the configuration management system to ensure it remains effective as the project progresses.',
          termIndices: [
            t('Configuration Management Process'),
            t('Technical Planning Process')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Good practice. Ongoing monitoring ensures configuration management remains effective, though documenting lessons learned would provide additional organizational benefit.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'You successfully implemented configuration management processes that transformed project chaos into organized execution. Your systematic approach to controlling baselines, managing work products, and providing technical guidance enabled consistent planning and effective project coordination.',
    failureNarrative: 'The lack of proper configuration management led to continued version conflicts and planning inconsistencies. Without systematic processes for controlling baselines and capturing work products, the project struggled with coordination problems and information loss.',
    successThreshold: 60
  }
}
