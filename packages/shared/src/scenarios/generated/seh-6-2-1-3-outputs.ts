import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6213Outputs: ScenarioTemplate = {
  meta: {
    id: 'seh-6-2-1-3-outputs',
    title: 'Requirements Documentation Crisis',
    subtitle: 'Manage critical requirements outputs when the baseline is compromised',
    difficulty: 'intermediate',
    categories: ['requirements', 'configuration', 'project-mgmt'],
    termIndices: [
      t('Requirements Management Process'),
      t('Baseline'),
      t('Configuration Management Process'),
      t('Bidirectional Traceability'),
      t('Requirement'),
      t('Product'),
      t('System'),
      t('Traceability'),
      t('Project'),
      t('Process'),
      t('Technical Requirements'),
      t('Validated Requirements'),
      t('Approval'),
    ],
    estimatedMinutes: 15,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Document Control',
      title: 'Baseline Corruption Discovered',
      narrative:
        'Your ISS science experiment project has encountered a critical issue: the requirements management tool has corrupted the baselined requirements documents due to a software update failure. The official controlled versions maintained in electronic format are unreadable, and stakeholders need access to current requirements for an upcoming critical design review. You must determine the best approach to restore the requirements outputs.',
      termHighlights: [t('Requirements Management Process'), t('Baseline'), t('Configuration Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Immediately recreate all requirements documents from memory and email drafts to stakeholders.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Recreating requirements from memory bypasses the Configuration Management Process and eliminates traceability. This approach risks introducing errors and invalidates the baseline integrity. Requirements documents must be restored through proper configuration control procedures.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Restore the baseline from the most recent backup and validate all requirements linkages before releasing documents.',
          termIndices: [t('Baseline'), t('Configuration Management Process'), t('Traceability')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Restoring from backup maintains the integrity of the baseline and preserves the bidirectional traceability relationships. Validating the linkages ensures the requirements matrix remains intact with all traceable relationships before submitting to stakeholders.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Cancel the upcoming review and wait for the tool vendor to provide a permanent fix.',
          termIndices: [t('Project')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Canceling the critical design review creates significant schedule delays and impacts project milestones. The Requirements Management Process must continue despite tool issues, and backup procedures should enable document recovery without waiting for vendor fixes.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -5, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Change Management',
      title: 'Ripple Effect Analysis',
      narrative:
        'During the restoration process, you discover that three approved changes to the requirements were never properly integrated into the baseline before the corruption occurred. One change involves modifying the experiment\'s data collection frequency, which could impact multiple subsystems including power management, data storage, and communications. You need to assess the full scope of this requirements change.',
      termHighlights: [t('Requirement'), t('System'), t('Bidirectional Traceability')],
      decisions: [
        {
          id: 'a',
          text: 'Apply the change only to the primary requirement document and notify affected teams later.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A single requirements change can have far-reaching ripple effects across multiple system components. Applying changes without full impact assessment violates proper Requirements Management Process procedures and risks creating inconsistencies across requirement documents.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: 2 },
        },
        {
          id: 'b',
          text: 'Use bidirectional traceability to identify all affected requirements and assess impacts across the entire system.',
          termIndices: [t('Bidirectional Traceability'), t('System'), t('Requirements Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Bidirectional traceability enables you to trace the change from parent to children requirements and identify all affected system elements. This systematic approach ensures all impacts are assessed before implementing changes, preventing cascading issues across multiple documents.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Revert to the previous baseline version and ignore the approved changes to maintain stability.',
          termIndices: [t('Baseline'), t('Approval')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Ignoring approved changes undermines the Requirements Management Process and wastes stakeholder investment in change evaluation. Approved changes must be integrated into the baseline, but through proper impact assessment and controlled implementation procedures.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Traceability Verification',
      title: 'Matrix Validation Challenge',
      narrative:
        'Your impact assessment reveals that the data collection frequency change affects fifteen derived requirements across four different subsystem specifications. The requirements matrix shows some traceability links may be broken or outdated. The project manager needs confidence that all bidirectional traceability relationships are properly maintained before approving the restored baseline.',
      termHighlights: [t('Traceability'), t('Validated Requirements'), t('Product')],
      decisions: [
        {
          id: 'a',
          text: 'Manually spot-check a few key traceability links and assume the rest are correct.',
          termIndices: [t('Traceability')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Spot-checking traceability links is insufficient for ensuring requirements integrity. Broken or outdated links can lead to missing requirements during verification and validation, potentially causing system failures or non-compliance with stakeholder expectations.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Generate a complete traceability report and systematically verify all parent-child relationships.',
          termIndices: [t('Bidirectional Traceability'), t('Validated Requirements'), t('Requirements Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A complete traceability report enables systematic verification of all parent-child relationships, ensuring bidirectional traceability is maintained. This validation process confirms that requirements can be traced both upward to their source and downward to their implementation, supporting proper verification and validation activities.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Rebuild the entire requirements matrix from scratch using current documentation.',
          termIndices: [t('Requirements Management Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While rebuilding the matrix would ensure accuracy, this approach requires significant time and resources that may not be available before the critical design review. A more efficient approach would validate and repair the existing traceability relationships rather than starting over.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -4, budget: -4 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Work Product Documentation',
      title: 'Reporting Requirements Status',
      narrative:
        'With the baseline restored and traceability verified, you must prepare requirements management work products for the project review board. The board needs clear documentation of the restoration process, current traceability status, and any outstanding issues. These work products will be used in verification and validation reports and must demonstrate that the Requirements Management Process remains robust.',
      termHighlights: [t('Process'), t('Product'), t('Technical Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Provide only a brief status summary stating that all requirements have been restored successfully.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A brief summary lacks the detail needed for work products that support verification and validation activities. The review board requires comprehensive documentation of process integrity, traceability status, and any residual risks from the restoration effort.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Prepare detailed work products including traceability status reports, change impact assessments, and process integrity documentation.',
          termIndices: [t('Product'), t('Requirements Management Process'), t('Traceability')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Comprehensive work products demonstrate that the Requirements Management Process has been properly executed and documented. These reports provide the evidence needed for verification and validation activities and give stakeholders confidence in requirements integrity.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus only on documenting the technical requirements changes without addressing process or traceability issues.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Focusing only on technical requirements changes ignores the critical process and traceability aspects that ensure requirements integrity. Work products must demonstrate that the entire Requirements Management Process remains effective, not just document individual requirement modifications.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Process Improvement',
      title: 'Preventing Future Failures',
      narrative:
        'The project review board accepts your work products and approves proceeding with the critical design review. However, they mandate that you implement measures to prevent similar requirements baseline corruption in the future. You need to recommend process improvements that strengthen the Requirements Management Process outputs while maintaining efficient project operations.',
      termHighlights: [t('Requirements Management Process'), t('Configuration Management Process'), t('Project')],
      decisions: [
        {
          id: 'a',
          text: 'Implement daily manual backups of all requirements documents with email notifications to stakeholders.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Manual daily backups create excessive overhead and email notifications would overwhelm stakeholders with non-essential information. Effective process improvements should be automated and minimize manual intervention while providing robust protection for requirements outputs.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -2, budget: -3 },
        },
        {
          id: 'b',
          text: 'Establish automated backup procedures with integrity checking and implement redundant tool configurations.',
          termIndices: [t('Requirements Management Process'), t('Configuration Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Automated backup procedures with integrity checking ensure requirements outputs are protected without manual overhead. Redundant tool configurations provide failover capabilities that maintain Requirements Management Process continuity during system failures.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Switch to paper-based requirements documentation to eliminate electronic system vulnerabilities.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Paper-based documentation eliminates the electronic linkages essential for bidirectional traceability and requirements matrix functionality. This approach would severely compromise the Requirements Management Process effectiveness and create greater risks than electronic system vulnerabilities.',
          nextNodeId: null,
          scoreImpact: { risk: 7, schedule: -4, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully managed the requirements documentation crisis by following proper Configuration Management Process procedures and maintaining bidirectional traceability. Your systematic approach to impact assessment and comprehensive work products demonstrated effective Requirements Management Process execution under pressure.',
    failureNarrative: 'The requirements baseline restoration was compromised by inadequate process adherence and insufficient attention to traceability relationships. Critical requirements outputs were not properly validated, creating risks for downstream verification and validation activities.',
    successThreshold: 60,
  },
}
