import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh90ComplianceMatrices: ScenarioTemplate = {
  meta: {
    id: 'seh-9-0-compliance-matrices',
    title: 'SEMP Compliance Matrix Review',
    subtitle: 'Evaluate systems engineering process compliance for crewed vehicle certification',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'requirements', 'reviews'],
    termIndices: [
      t('Systems Engineering Management Plan (SEMP)'),
      t('Process'),
      t('Technical Requirements'),
      t('Project Plan'),
      t('Baseline'),
      t('Product'),
      t('System'),
      t('Activity'),
      t('Technical Planning Process'),
      t('Risk Management'),
      t('Program'),
      t('Data Management'),
      t('Maintainability'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Matrix Assessment',
      title: 'NPR 7123.1A Compliance Evaluation',
      narrative:
        'You are reviewing the SEMP compliance matrix against NPR 7123.1A requirements for your crewed transport vehicle program. The matrix shows several entries marked as "partially compliant" for technical requirements definition processes. Your program manager needs a recommendation on how to address these gaps before the next milestone review.',
      termHighlights: [t('Systems Engineering Management Plan (SEMP)'), t('Technical Requirements'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Mark all partially compliant items as compliant to avoid delays, since they meet the basic intent.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach misrepresents the actual compliance status and violates the integrity of the compliance matrix. Partially compliant areas require honest assessment and specific rationale or corrective actions. Falsely marking items as compliant creates risk for downstream activities and review board acceptance.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -3, budget: 0 },
        },
        {
          id: 'b',
          text: 'Document the specific gaps, provide rationale for partial compliance, and develop action plans with schedules for achieving full compliance.',
          termIndices: [t('Process'), t('Technical Planning Process'), t('Activity')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The compliance matrix should accurately reflect current status with clear rationale for any non-compliance or partial compliance. Action plans with specific activities and schedules demonstrate proactive management and provide a path forward for achieving full compliance before critical milestones.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Request a waiver from the Center for all partially compliant requirements to avoid additional work.',
          termIndices: [t('Program')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Blanket waiver requests for multiple requirements without proper justification are rarely approved and demonstrate poor systems engineering discipline. Each requirement exists for valid technical or programmatic reasons, and partial compliance gaps should be addressed through proper process implementation rather than avoided.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Process Integration',
      title: 'Cross-Reference Analysis',
      narrative:
        'While updating the compliance matrix, you discover that your data management processes are compliant, but they are not properly cross-referenced with the project plan for resource allocation. The technical data management process shows as compliant through Center processes, but the integration with project scheduling and personnel assignments is unclear.',
      termHighlights: [t('Data Management'), t('Project Plan'), t('Technical Data Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Leave the entry as compliant since the Center process covers the technical requirements adequately.',
          termIndices: [t('Data Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While Center processes may satisfy technical requirements, the compliance matrix must address integration with project management activities. The SEMP requires clear integration between technical processes and project resource allocation. Incomplete integration creates coordination gaps.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Update the matrix to reference both the Center process and a project-specific integration procedure that links data management to resource planning.',
          termIndices: [t('Technical Data Management Process'), t('Project Plan'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The compliance matrix should clearly show how technical processes integrate with project management activities. By referencing both the compliant Center process and the project-specific integration approach, you demonstrate comprehensive compliance that addresses both technical execution and project coordination.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Mark this as non-compliant and recommend developing an entirely new project-specific data management process.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Creating redundant processes when compliant Center processes exist is inefficient and unnecessary. The issue is integration, not the underlying technical process capability. Developing parallel processes creates confusion and wastes resources while potentially introducing inconsistencies.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -4, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Risk Integration',
      title: 'Risk Management Process Compliance',
      narrative:
        'Your compliance matrix review reveals that risk management processes are listed as compliant through NPR 8000.4, but the integration with technical decision-making activities needs clarification. The program has a risk management plan, but technical teams report uncertainty about when and how to escalate technical risks to programmatic risk management.',
      termHighlights: [t('Risk Management'), t('Technical Risk Management Process'), t('Activity')],
      decisions: [
        {
          id: 'a',
          text: 'Add a reference to existing project procedures that define technical risk escalation criteria and decision-making integration points.',
          termIndices: [t('Risk Management'), t('Technical Risk Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. The compliance matrix should clearly reference how programmatic risk management integrates with technical activities. Defining escalation criteria and decision points ensures technical risks are properly elevated and managed within the overall program risk framework, satisfying both NPR requirements and practical implementation needs.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Keep the current compliance status since NPR 8000.4 compliance covers all risk management requirements.',
          termIndices: [t('Risk Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While NPR 8000.4 compliance addresses programmatic requirements, the SEMP compliance matrix must show how risk management integrates specifically with technical processes and activities. Technical teams need clear guidance on escalation and integration points to effectively participate in the risk management system.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Mark risk management as non-compliant until a completely separate technical risk management system is implemented.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Creating separate risk management systems creates dangerous disconnects between technical and programmatic risk management. The solution is integration and clear interfaces, not parallel systems. Separate systems lead to communication gaps and inconsistent risk treatment across the program.',
          nextNodeId: null,
          scoreImpact: { risk: 7, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'System Integration',
      title: 'Product Integration Compliance',
      narrative:
        'The compliance matrix shows product integration processes as compliant, but during your review you notice that maintainability requirements for the crewed vehicle are addressed through multiple disconnected processes. Some requirements are in the design process, others in the integration plan, and lifecycle support aspects are in a separate logistics plan.',
      termHighlights: [t('Product'), t('System'), t('Maintainability')],
      decisions: [
        {
          id: 'a',
          text: 'Update the compliance entry to reference all relevant processes and add a cross-reference table showing how maintainability requirements are addressed across multiple plans.',
          termIndices: [t('Product'), t('Maintainability'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Complex requirements like maintainability often span multiple processes and plans. The compliance matrix should clearly show how distributed requirements are addressed comprehensively. Cross-referencing demonstrates systematic coverage and helps reviewers understand the complete implementation approach.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Consolidate all maintainability requirements into a single process to simplify compliance tracking.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Artificially consolidating naturally distributed requirements creates inefficiencies and may not align with established organizational processes. Maintainability naturally spans design, integration, and operations phases. The key is clear traceability and coordination, not artificial consolidation.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Mark product integration as partially compliant since maintainability coverage is fragmented.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Having requirements addressed across multiple appropriate processes is not inherently non-compliant. The issue is documentation and cross-referencing in the compliance matrix, not the underlying process structure. Well-coordinated distributed processes can be fully compliant.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Matrix Finalization',
      title: 'Compliance Matrix Completion',
      narrative:
        'You have completed your compliance matrix review and identified several areas requiring updates and cross-references. The program manager asks for your final recommendation on presenting the matrix to the Standing Review Board. Some entries show partial compliance with clear action plans, while others demonstrate full compliance through well-documented processes.',
      termHighlights: [t('Baseline'), t('Program'), t('Systems Engineering Management Plan (SEMP)')],
      decisions: [
        {
          id: 'a',
          text: 'Present the matrix as-is with honest compliance status, clear rationale for any gaps, and specific action plans with schedules for achieving full compliance.',
          termIndices: [t('Systems Engineering Management Plan (SEMP)'), t('Program'), t('Baseline')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. An honest, well-documented compliance matrix with clear action plans demonstrates mature systems engineering management. Review boards value transparency and systematic approaches to addressing gaps. This builds confidence in the program\'s ability to manage compliance systematically.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Delay the matrix presentation until all partially compliant items can be made fully compliant to avoid any perceived program weaknesses.',
          termIndices: [t('Program')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Delaying compliance matrix presentation can negatively impact milestone schedules and suggests poor program planning. Review boards expect to see systematic progress and honest assessment of current status. Perfect compliance at presentation is less important than demonstrated management of compliance gaps.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -4, budget: -1 },
        },
        {
          id: 'c',
          text: 'Focus only on compliant items and minimize discussion of partially compliant areas during the presentation.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Minimizing discussion of gaps rather than addressing them systematically undermines the purpose of the compliance matrix. Review boards need complete visibility into compliance status to make informed decisions. Transparency about gaps with clear management plans builds more confidence than avoidance.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully demonstrated how to create and manage a comprehensive SEMP compliance matrix that accurately reflects process implementation status while providing clear paths forward for any compliance gaps. Your systematic approach to cross-referencing processes and integrating technical activities with project management builds confidence in program execution.',
    failureNarrative: 'Your approach to compliance matrix management showed some concerning gaps in understanding the importance of honest assessment and systematic gap management. Effective compliance matrices require transparency, clear cross-references between processes, and realistic action plans for addressing any deficiencies.',
    successThreshold: 60,
  },
}
