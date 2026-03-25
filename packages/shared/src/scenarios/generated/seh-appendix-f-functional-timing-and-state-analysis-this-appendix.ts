import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixFFunctionalTimingAndStateAnalysisThisAppendix: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-f-functional-timing-and-state-analysis-this-appendix',
    title: 'Functional Flow Modeling for Sounding Rocket Recovery',
    subtitle: 'Design functional decomposition models for payload recovery operations',
    difficulty: 'intermediate',
    categories: ['design', 'requirements'],
    termIndices: [
      t('Functional Flow Block Diagram'),
      t('Enhanced Functional Flow Block Diagram'),
      t('Functional Analysis'),
      t('Functional Decomposition'),
      t('Requirements Allocation Sheet'),
      t('Analysis'),
      t('Model'),
      t('Requirement'),
      t('System'),
      t('Technical Requirements'),
      t('Logical Decomposition Models'),
      t('Logical Decomposition Process'),
      t('Systems Engineering Management Plan (SEMP)'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Planning',
      title: 'Recovery System Analysis Approach',
      narrative:
        'Your sounding rocket mission requires a comprehensive recovery system for the scientific payload after atmospheric flight. The mission director asks you to develop a systematic approach to analyze the recovery operations from payload separation through ground retrieval. You need to select the most appropriate modeling technique to capture the functional requirements and timing constraints.',
      termHighlights: [t('Functional Analysis'), t('Model'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Create a functional flow block diagram to decompose recovery functions and show the sequential flow of operations.',
          termIndices: [t('Functional Flow Block Diagram'), t('Functional Decomposition')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A functional flow block diagram is the ideal starting point for recovery system analysis. It allows you to decompose high-level recovery functions into specific operations while showing the logical sequence and timing relationships. This systematic approach ensures all critical functions are identified and properly sequenced.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Begin with detailed component specifications and work backwards to understand system functions.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This bottom-up approach skips the essential functional analysis phase. Without first understanding what functions the recovery system must perform, you risk developing specifications that do not align with mission requirements. Functional decomposition should precede detailed component design.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus only on the parachute deployment sequence since that is the most critical recovery function.',
          termIndices: [t('Functional Analysis')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While parachute deployment is critical, focusing on only one function ignores the comprehensive nature of recovery operations. A proper functional analysis must consider all functions including separation, stabilization, descent, impact, and retrieval phases. This narrow approach creates gaps in system understanding.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Modeling',
      title: 'Enhanced Flow Diagram Development',
      narrative:
        'You have created a basic functional flow block diagram showing the main recovery phases. However, the project team realizes they need more detailed information about control signals and data flows between functions, particularly for the automated deployment sequences. The systems engineering management plan requires enhanced modeling for autonomous operations.',
      termHighlights: [t('Enhanced Functional Flow Block Diagram'), t('Systems Engineering Management Plan (SEMP)')],
      decisions: [
        {
          id: 'a',
          text: 'Develop an enhanced functional flow block diagram that includes control flows and data flows between functions.',
          termIndices: [t('Enhanced Functional Flow Block Diagram'), t('Logical Decomposition Models')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. An enhanced functional flow block diagram extends the basic model by showing control flows and data flows, which is essential for autonomous recovery systems. This enhanced representation captures the information exchanges and control signals that enable automated decision-making during recovery operations.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Add more detail boxes to the existing diagram without changing the modeling approach.',
          termIndices: [t('Model')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While adding detail improves the model, simply expanding the basic functional flow diagram does not address the specific need for control and data flow representation. This approach provides more information but misses the enhanced modeling capabilities needed for complex autonomous systems.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Keep the basic functional flow diagram and create separate documents for control and data specifications.',
          termIndices: [t('Functional Flow Block Diagram')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Separating control and data flow information from the functional model creates disconnect and increases the risk of inconsistencies. The power of enhanced functional flow block diagrams lies in integrating all these elements into a coherent model that shows the complete functional behavior.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Requirements Allocation',
      title: 'Linking Functions to Requirements',
      narrative:
        'With your enhanced functional flow diagram complete, you need to connect the identified functions to specific performance requirements and physical system elements. The chief engineer emphasizes that every function must be traceable to requirements and allocated to system components for the upcoming design review.',
      termHighlights: [t('Requirements Allocation Sheet'), t('Requirement')],
      decisions: [
        {
          id: 'a',
          text: 'Create requirements allocation sheets that map each function to its performance requirements and assigned system components.',
          termIndices: [t('Requirements Allocation Sheet'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Requirements allocation sheets provide the essential link between functional analysis and system design. They document how each function connects to specific performance requirements and which system components are responsible for implementation, ensuring complete traceability and accountability.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Assume the functional flow diagram is sufficient documentation and proceed directly to component design.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The functional flow diagram shows what functions are needed but does not establish the critical link to specific requirements and responsible components. Without requirements allocation, you cannot verify that all functions meet their performance criteria or ensure proper component accountability.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Create a simple matrix showing functions versus components without detailed performance requirements.',
          termIndices: [t('Analysis')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While a function-component matrix provides some traceability, omitting performance requirements creates a gap in the analysis. Requirements allocation sheets must include both the functional assignments and the specific performance criteria that each function must satisfy.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Analysis',
      title: 'Timing Analysis Challenge',
      narrative:
        'During model validation, you discover that the parachute deployment function must complete within 2.5 seconds of separation, but your preliminary analysis shows the current sequence requires 3.1 seconds. The functional flow model reveals timing conflicts between altitude sensor reading, deployment decision logic, and mechanical actuation.',
      termHighlights: [t('Analysis'), t('Logical Decomposition Process')],
      decisions: [
        {
          id: 'a',
          text: 'Use the logical decomposition process to break down the deployment function into smaller sub-functions and analyze their individual timing.',
          termIndices: [t('Logical Decomposition Process'), t('Functional Decomposition')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Logical decomposition allows you to break down the complex deployment function into constituent sub-functions, enabling detailed timing analysis of each step. This systematic approach helps identify which specific sub-functions are causing delays and where optimization opportunities exist.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Modify the requirements to allow 3.5 seconds for deployment to accommodate the current design.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Changing requirements to fit the design rather than addressing the underlying timing issues is poor engineering practice. The 2.5-second requirement likely exists for safety reasons related to altitude and trajectory. The proper approach is to analyze and optimize the functional sequence.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Add redundant sensors and actuators to speed up the deployment process.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While adding redundancy might improve timing, this hardware-focused solution does not address the fundamental issue identified in your functional analysis. You should first understand exactly which sub-functions are consuming time before implementing costly hardware changes.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Documentation',
      title: 'Model Integration and Documentation',
      narrative:
        'Your functional analysis is complete and has revealed several design improvements. The project manager asks you to document the modeling approach and results for inclusion in the systems engineering management plan. The documentation must explain how functional flow analysis contributed to the overall systems engineering process.',
      termHighlights: [t('Systems Engineering Management Plan (SEMP)'), t('Logical Decomposition Models')],
      decisions: [
        {
          id: 'a',
          text: 'Document the complete functional modeling process showing how it supports requirements definition and system architecture development.',
          termIndices: [t('Systems Engineering Management Plan (SEMP)'), t('Model')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Documenting the functional modeling process in the SEMP demonstrates how these analytical techniques integrate with the overall systems engineering approach. This documentation provides valuable guidance for future phases and helps other team members understand the rationale behind design decisions.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Provide only the final functional flow diagrams without explaining the modeling methodology.',
          termIndices: [t('Functional Flow Block Diagram')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Delivering only the final diagrams without methodology documentation limits the value for future phases and other projects. The SEMP should capture not just what was done, but how and why, enabling consistent application of functional analysis techniques throughout the program.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus documentation on the timing analysis results since those provided the most value.',
          termIndices: [t('Analysis')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While timing analysis was crucial for this specific issue, limiting documentation to only that aspect ignores the broader value of functional modeling. Complete documentation should cover the entire functional analysis process to support comprehensive systems engineering practices.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'Excellent work applying functional modeling techniques to the sounding rocket recovery system. Your systematic use of functional flow block diagrams, enhanced modeling, and requirements allocation sheets provided the analytical foundation needed to identify and resolve critical timing issues.',
    failureNarrative:
      'Your functional analysis approach had some gaps that could lead to incomplete system understanding. Review how functional flow block diagrams, requirements allocation, and logical decomposition work together to provide comprehensive system analysis.',
    successThreshold: 60,
  },
}
