import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6112ProcessActivities: ScenarioTemplate = {
  meta: {
    id: 'seh-6-1-1-2-process-activities',
    title: 'Building the Technical Foundation',
    subtitle: 'Establish a robust technical planning framework for Mars rover operations',
    difficulty: 'advanced',
    categories: ['project-mgmt', 'lifecycle', 'risk'],
    termIndices: [
      t('Technical Planning Process'),
      t('Systems Engineering Management Plan (SEMP)'),
      t('Technical Team'),
      t('Activity'),
      t('Work Breakdown Structure (WBS)'),
      t('Technical Risk Management Process'),
      t('Technical Assessment Process'),
      t('Product Verification Process'),
      t('Decision Analysis Process'),
      t('Baseline'),
      t('Approval'),
      t('Concurrence'),
      t('Evaluation'),
      t('Fault Tolerance'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'Team Assembly Strategy',
      narrative:
        'As HSI Lead for the new Mars rover mission, you need to establish the technical planning framework. The project manager asks you to define how the technical team will be organized and what processes will guide the work. You must decide on the initial approach for building your technical foundation.',
      termHighlights: [t('Technical Planning Process'), t('Technical Team')],
      decisions: [
        {
          id: 'a',
          text: 'Implement a formal Technical Planning Process that identifies required skills, defines team roles, and establishes how all 17 NASA common technical processes will be applied throughout the project lifecycle.',
          termIndices: [t('Technical Planning Process'), t('Technical Team'), t('Activity')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Technical Planning Process is designed to define how the project will be organized and conducted, identifying how all common technical processes will be applied across lifecycle phases. This systematic approach ensures comprehensive coverage.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus on assembling the core engineering disciplines first and develop processes as needs arise during implementation.',
          termIndices: [t('Technical Team')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky approach. While getting core team members is important, developing processes reactively leads to inconsistencies and gaps. The SEH emphasizes that technical planning should define processes upfront to avoid crisis management later.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Use the previous rover mission team structure and processes without modification to save time.',
          termIndices: [t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Poor choice. Each project requires tailored technical planning based on its unique requirements, mission class, and development risks. Copying previous approaches without evaluation ignores project-specific needs and constraints.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'SEMP Development Approach',
      narrative:
        'The project is entering Phase A and you need to prepare the Systems Engineering Management Plan. The project manager emphasizes that cost estimates depend on having a solid SEMP that defines the technical work scope. You must determine the best approach for SEMP development.',
      termHighlights: [t('Systems Engineering Management Plan (SEMP)')],
      decisions: [
        {
          id: 'a',
          text: 'Develop the SEMP collaboratively with programmatic and technical experts, ensuring it defines technical processes, organization, and associated costs before initial cost estimates are prepared.',
          termIndices: [t('Systems Engineering Management Plan (SEMP)'), t('Technical Planning Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. The SEH specifically states that the SEMP should be developed before attempting initial cost estimates, involving knowledgeable experts from all areas that can influence project outcomes to ensure credibility and team commitment.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 2 },
        },
        {
          id: 'b',
          text: 'Create a basic SEMP outline now and fill in details after the cost estimate is approved to avoid scope creep.',
          termIndices: [t('Systems Engineering Management Plan (SEMP)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Backwards approach. The SEMP describes technical content, risk management activities, and verification techniques that should be included in cost estimates. Developing it after costing leads to inaccurate budgets and scope misalignment.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -3 },
        },
        {
          id: 'c',
          text: 'Delegate SEMP development to contractors since they will do most of the technical work.',
          termIndices: [t('Systems Engineering Management Plan (SEMP)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inappropriate delegation. NASA must have its own SEMP to describe how it will conduct technical management. The contractor SEMP should align with NASA\'s approach, not replace it. This creates accountability gaps.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Phase A',
      title: 'Work Definition Strategy',
      narrative:
        'With the SEMP framework established, you need to define the technical work in detail. The team is eager to start design activities, but you recognize that proper work definition includes realistic resource estimates and contingency planning. Historical data shows many projects underestimate planning resources.',
      termHighlights: [t('Work Breakdown Structure (WBS)'), t('Activity')],
      decisions: [
        {
          id: 'a',
          text: 'Define technical work using the project WBS, include realistic cost and schedule estimates with appropriate contingencies, and plan for scenarios like additional software debugging during hardware testing.',
          termIndices: [t('Work Breakdown Structure (WBS)'), t('Activity')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct approach. The SEH emphasizes using realistic values and including contingency based on complexity and criticality. Planning for scenarios like Hardware-In-the-Loop debugging prevents cost and schedule overruns.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus on major design tasks and handle detailed planning later when requirements are more stable.',
          termIndices: [t('Work Breakdown Structure (WBS)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky deferral. The SEH warns that many projects underestimate planning resources and are forced into crisis management. Early detailed planning, even if updated later, provides better resource visibility and control.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Use optimistic estimates to keep the project competitive, adding buffers only for critical path activities.',
          termIndices: [t('Activity')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Dangerous approach. The SEH specifically calls for realistic values with appropriate contingencies. Optimistic estimates lead to systematic underestimation and project failures when unforeseen but typical issues arise.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -3, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Phase B',
      title: 'Process Integration Challenge',
      narrative:
        'As the rover design matures, you realize that technical planning must integrate tightly with risk management and technical assessment processes. A recent technical review identified several integration risks that could impact the human-system interfaces you\'re responsible for. You need to decide how to coordinate these crosscutting processes.',
      termHighlights: [t('Technical Risk Management Process'), t('Technical Assessment Process')],
      decisions: [
        {
          id: 'a',
          text: 'Integrate Technical Planning with Technical Risk Management and Technical Assessment processes to ensure corrective actions from current issues are incorporated into future planning activities.',
          termIndices: [t('Technical Planning Process'), t('Technical Risk Management Process'), t('Technical Assessment Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect integration approach. The SEH explicitly states that technical planning should be tightly integrated with these processes to ensure corrective action for future activities incorporates current identified issues.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Keep the processes separate to avoid confusion, but share information through weekly status meetings.',
          termIndices: [t('Technical Risk Management Process'), t('Technical Assessment Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Suboptimal separation. While information sharing helps, the SEH emphasizes tight integration, not just communication. Separate processes miss opportunities for proactive adjustment of future activities based on current findings.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus technical planning on future activities and let risk management handle current problems separately.',
          termIndices: [t('Technical Planning Process'), t('Technical Risk Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Poor separation of concerns. This approach ignores the feedback loop that should exist between current issues and future planning. It prevents learning from ongoing work and adapting plans based on real project experience.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Phase C',
      title: 'Verification Planning Integration',
      narrative:
        'The rover design is now detailed enough to finalize verification approaches. You must ensure that verification planning aligns with the overall technical planning framework, especially for human-system interfaces that require special attention to operational scenarios and fault tolerance. The verification plan needs to be baselined at PDR.',
      termHighlights: [t('Product Verification Process'), t('Fault Tolerance')],
      decisions: [
        {
          id: 'a',
          text: 'Develop verification plans as an integral part of Technical Planning, establishing verification methods based on lifecycle phase, product position, and cost considerations, with special attention to fault tolerance verification.',
          termIndices: [t('Product Verification Process'), t('Technical Planning Process'), t('Fault Tolerance')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent integration. The SEH positions verification planning as part of the Technical Planning Process, emphasizing the need to establish methods based on multiple factors including lifecycle considerations and cost implications.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus verification planning on final flight units since those are what matter for mission success.',
          termIndices: [t('Product Verification Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Too narrow a focus. The SEH describes verification across multiple product forms from breadboards to flight units. Early verification on lower fidelity units helps identify issues when they\'re cheaper to fix.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Use standard verification approaches from similar missions without detailed planning to save resources.',
          termIndices: [t('Product Verification Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inadequate planning. Each project requires tailored verification planning based on its specific products, requirements, and operational scenarios. Generic approaches miss project-specific verification needs and risks.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 0, budget: -3 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully established a comprehensive technical planning framework that integrates all necessary processes and sets the foundation for successful rover development. Your systematic approach to team organization, SEMP development, and process integration demonstrates mastery of NASA technical planning principles.',
    failureNarrative: 'Your technical planning approach had significant gaps that could lead to project difficulties. Focus on the integrated nature of technical planning processes and the importance of upfront definition of technical work scope and methods.',
    successThreshold: 60,
  },
}
