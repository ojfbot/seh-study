import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6612ProcessActivities: ScenarioTemplate = {
  meta: {
    id: 'seh-6-6-1-2-process-activities',
    title: 'Data Management Strategy Crisis',
    subtitle: 'Recover from a critical data management failure during Earth observation satellite development',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'configuration'],
    termIndices: [
      t('Data Management'),
      t('Technical Data Management Process'),
      t('Technical Data Package'),
      t('Contractor'),
      t('Project Plan'),
      t('Baseline'),
      t('Configuration Items (CI)'),
      t('Approval'),
      t('Process'),
      t('Activity'),
      t('Acquisition'),
      t('Product'),
      t('Evaluation'),
      t('Program'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Crisis Discovery',
      title: 'Missing Critical Data Package',
      narrative:
        'Your Earth observation satellite project is three weeks from Critical Design Review when disaster strikes. The primary contractor reports they cannot locate the complete technical data package for the imaging sensor assembly — the mission-critical component worth $45 million. Initial investigation reveals that your data management process failed to capture contractor deliverables properly. The flight director demands immediate action to recover the situation.',
      termHighlights: [t('Technical Data Package'), t('Contractor'), t('Data Management')],
      decisions: [
        {
          id: 'a',
          text: 'Immediately delay the Critical Design Review by six months while rebuilding all technical data packages from scratch.',
          termIndices: [t('Technical Data Package')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A six-month delay is excessive and costly. While data recovery is critical, you must first evaluate what data exists and implement a systematic technical data management process to recover efficiently. Proper process activities can often recover situations faster than complete rebuilds.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -5, budget: -4 },
        },
        {
          id: 'b',
          text: 'Conduct an immediate evaluation of existing data repositories and implement emergency data collection activities per the technical data management process.',
          termIndices: [t('Evaluation'), t('Technical Data Management Process'), t('Activity')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The first process activity is to evaluate what data actually exists across all repositories. Many technical data packages may be recoverable through systematic data collection activities. This follows proper technical data management process procedures before making schedule decisions.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Terminate the contractor relationship and procure the imaging sensor from a different supplier.',
          termIndices: [t('Contractor'), t('Acquisition')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Terminating the contractor is premature and extremely expensive. The technical data management failure may be recoverable through proper process activities. Acquisition of a replacement sensor would add years to the schedule and millions to the budget.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -5, budget: -5 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Data Recovery Planning',
      title: 'Establishing Recovery Process',
      narrative:
        'Your evaluation reveals that 60% of the technical data exists in scattered contractor databases, but lacks proper configuration management. The remaining 40% must be regenerated. You need to establish a formal technical data management process to coordinate recovery activities. The contractor is cooperative but needs clear procedures for data collection and storage activities.',
      termHighlights: [t('Process'), t('Technical Data Management Process'), t('Activity')],
      decisions: [
        {
          id: 'a',
          text: 'Create a detailed technical data management plan with specific control procedures, data formats, and stakeholder responsibilities.',
          termIndices: [t('Technical Data Management Process'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent. A comprehensive technical data management plan addresses control procedures, data exchange formats, storage requirements, and stakeholder responsibilities. This systematic approach ensures all recovery activities are coordinated and data integrity is maintained throughout the process.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Simply request that the contractor gather all available data and send it in whatever format they prefer.',
          termIndices: [t('Contractor')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This informal approach will create more chaos. Without established control procedures and data exchange formats, you risk receiving incompatible, incomplete, or improperly formatted data. Technical data management requires systematic process activities, not ad-hoc requests.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus only on the 40% missing data and ignore the existing 60% until after recovery is complete.',
          termIndices: [t('Data Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Ignoring existing data is a critical error. The 60% of available data needs to be properly collected, stored, and integrated under configuration management. Effective data management process activities must address both existing and missing data simultaneously.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Implementation Strategy',
      title: 'Database and Collection Setup',
      narrative:
        'With your technical data management plan approved, you must now implement the actual data collection and storage activities. The contractor has identified their existing technical database systems, but they use different formats than NASA standards. You need to establish procedures for data collection, establish appropriate databases, and train personnel on the new process activities.',
      termHighlights: [t('Activity'), t('Process'), t('Data Management')],
      decisions: [
        {
          id: 'a',
          text: 'Establish a NASA technical database and require the contractor to convert all data to NASA formats before submission.',
          termIndices: [t('Data Management'), t('Contractor')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This approach ensures NASA format compliance but may be time-consuming. The policy states NASA should not impose changes on existing contractor data management systems unless technical requirements cannot otherwise be met. Consider whether format conversion is truly necessary for this recovery effort.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -2 },
        },
        {
          id: 'b',
          text: 'Work with the contractor to establish electronic data exchange interfaces that accommodate both NASA standards and contractor formats.',
          termIndices: [t('Process'), t('Activity'), t('Data Management')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect. This follows the recommended approach of not imposing unnecessary changes on existing contractor systems while ensuring data exchange requirements are met. Electronic interfaces can bridge format differences efficiently, and training activities can ensure proper implementation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Skip the database setup and just collect all data files onto a shared network drive without any formal organization.',
          termIndices: [t('Data Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A shared drive without proper organization defeats the purpose of technical data management. You need established procedures, proper storage systems, and configuration control. This informal approach will recreate the original data management problems.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Data Collection Execution',
      title: 'Coordinating Recovery Activities',
      narrative:
        'Data collection activities are underway, but you discover that some technical data contains export-controlled information that requires special handling. Additionally, the contractor questions who has approval authority for releasing certain proprietary design data. You must ensure all data management activities comply with security requirements while maintaining recovery momentum.',
      termHighlights: [t('Activity'), t('Approval'), t('Data Management')],
      decisions: [
        {
          id: 'a',
          text: 'Establish proper approval procedures for data release and implement security controls for export-controlled information.',
          termIndices: [t('Approval'), t('Process'), t('Data Management')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Technical data management must address data rights, distribution limitations, and security requirements. Establishing clear approval procedures and security controls ensures compliance while enabling continued data collection activities. This protects critical program information appropriately.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Temporarily suspend all data collection activities until legal review is complete for every data item.',
          termIndices: [t('Activity')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Complete suspension is unnecessary and damaging to schedule recovery. Most technical data can be processed while establishing proper procedures for sensitive items. Effective data management activities can continue with appropriate controls rather than complete stoppage.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: 0 },
        },
        {
          id: 'c',
          text: 'Ignore the security concerns and collect all data immediately to meet the schedule.',
          termIndices: [t('Data Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Ignoring security requirements is unacceptable and potentially illegal. Export control violations and improper handling of proprietary data can result in severe penalties and program termination. Technical data management must always include proper security controls.',
          nextNodeId: null,
          scoreImpact: { risk: 8, schedule: 2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Recovery Assessment',
      title: 'Baseline Restoration',
      narrative:
        'After two weeks of intensive data management activities, you have recovered 95% of the required technical data package. The remaining 5% consists of test data that can be regenerated from existing hardware. You need to establish this recovered data as a new baseline under configuration management and prepare for the rescheduled Critical Design Review. The program manager asks for your recommendation on managing this restored technical data package going forward.',
      termHighlights: [t('Baseline'), t('Configuration Items (CI)'), t('Technical Data Package')],
      decisions: [
        {
          id: 'a',
          text: 'Establish the recovered data as a new baseline with full configuration management and implement ongoing technical data management procedures.',
          termIndices: [t('Baseline'), t('Configuration Items (CI)'), t('Technical Data Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent. Establishing a proper baseline with configuration management prevents future data management failures. Implementing ongoing technical data management procedures ensures this crisis does not recur. This systematic approach provides the foundation for successful project completion.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Archive all recovered data without formal baseline establishment and return to the original informal data management approach.',
          termIndices: [t('Data Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Returning to informal data management repeats the same mistakes that caused this crisis. Without establishing a proper baseline and ongoing technical data management process, you risk another catastrophic data loss. The lessons learned must be institutionalized through formal procedures.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until after Critical Design Review to implement any configuration management changes to avoid disrupting the schedule.',
          termIndices: [t('Configuration Items (CI)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Delaying configuration management implementation is risky. The recovered technical data package must be baselined immediately to prevent loss during the critical review period. Proper configuration management supports rather than disrupts the review process.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully recovered from a catastrophic data management failure by implementing systematic technical data management processes. Your methodical approach to data collection, stakeholder coordination, and security compliance restored project momentum while establishing robust procedures to prevent recurrence.',
    failureNarrative: 'The data management crisis escalated due to inadequate process implementation and poor coordination of recovery activities. Future success requires understanding that technical data management is a systematic discipline requiring formal procedures, proper tools, and stakeholder commitment.',
    successThreshold: 60,
  },
}
