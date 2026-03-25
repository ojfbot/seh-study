import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh4412ProcessActivities: ScenarioTemplate = {
  meta: {
    id: 'seh-4-4-1-2-process-activities',
    title: 'Design Solution Definition Process',
    subtitle: 'Navigate the iterative development of alternative design concepts',
    difficulty: 'intermediate',
    categories: ['design', 'technology'],
    termIndices: [
      t('Design Solution Definition Process'),
      t('Trade Study'),
      t('Technology Assessment'),
      t('Iterative'),
      t('Preliminary Design Review'),
      t('Goal'),
      t('Objective'),
      t('Model'),
      t('System'),
      t('Operational Environment'),
      t('Acceptable Risk'),
      t('Need')
    ],
    estimatedMinutes: 15,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Concept Development',
      title: 'Defining the Mars Sample Return Orbiter',
      narrative:
        'You are leading the Design Solution Definition Process for a Mars Sample Return orbiter mission. The goal is to retrieve samples from the Martian surface and return them to Earth. Your team must develop alternative design concepts for the orbiter\'s propulsion system. The operational environment includes deep space conditions and Mars orbital operations with extreme temperature variations.',
      termHighlights: [t('Design Solution Definition Process'), t('Goal'), t('Operational Environment')],
      decisions: [
        {
          id: 'a',
          text: 'Begin immediately with detailed component specifications for a chemical propulsion system based on heritage technology.',
          termIndices: [t('Heritage (or legacy)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Starting with detailed specifications violates the iterative approach of successive refinement. You must first explore multiple alternative concepts before converging on specific technologies. This premature focus limits innovation and may miss better solutions.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Create multiple alternative propulsion concepts including chemical, electric, and hybrid systems while assessing technology maturity.',
          termIndices: [t('Design Solution Definition Process'), t('Technology Assessment'), t('Iterative')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Design Solution Definition Process requires creating alternative design concepts while considering technology maturity. This iterative approach allows you to explore the full trade space before making decisions that become harder to change later in development.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus solely on the most advanced electric propulsion technology to maximize performance capabilities.',
          termIndices: [t('Technology Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Focusing on a single advanced technology without considering alternatives or technology maturity creates unacceptable risk. The Design Solution Definition Process emphasizes exploring multiple concepts to ensure the selected approach is feasible within cost, schedule, and risk constraints.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 2, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Analysis',
      title: 'Conducting Trade Studies',
      narrative:
        'Your team has developed three alternative propulsion concepts: chemical bipropellant, electric ion propulsion, and a hybrid system. Now you must analyze each alternative to determine which best meets the system objectives. You need to establish clear evaluation criteria for your trade study that considers performance, cost, schedule, and technical risk.',
      termHighlights: [t('Trade Study'), t('Objective'), t('Acceptable Risk')],
      decisions: [
        {
          id: 'a',
          text: 'Base the trade study solely on which system provides the highest specific impulse performance.',
          termIndices: [t('Trade Study'), t('Objective')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A trade study must evaluate alternatives against multiple criteria, not just a single performance metric. You must consider technology maturity, cost, schedule, risk, and how well each alternative meets all system objectives within the mission constraints.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 2 },
        },
        {
          id: 'b',
          text: 'Develop a comprehensive trade study using models that evaluate each alternative against mission objectives, cost, schedule, and acceptable risk levels.',
          termIndices: [t('Trade Study'), t('Model'), t('Objective'), t('Acceptable Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A proper trade study uses models to evaluate alternatives against multiple criteria including mission objectives, life cycle cost, schedule constraints, and acceptable risk. This comprehensive analysis ensures the selected design concept can achieve the system goals within available resources.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Select the concept with the lowest development cost regardless of other factors.',
          termIndices: [t('Trade Study')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Cost is important but cannot be the sole selection criterion. The trade study must balance cost against performance, schedule, and technical risk to ensure the selected alternative can actually achieve the mission need and system objectives.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Technology Assessment',
      title: 'Evaluating Technology Maturity',
      narrative:
        'Your trade study analysis shows that the hybrid propulsion concept offers the best balance of performance and efficiency. However, this system requires advanced plasma ignition technology that has never been flight-tested in deep space conditions. You must conduct a thorough technology assessment to understand the development requirements and associated risks.',
      termHighlights: [t('Technology Assessment'), t('Technology Readiness Level'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Assume the plasma ignition technology is mature enough since it works in laboratory conditions.',
          termIndices: [t('Technology Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Laboratory demonstration does not equal flight readiness. Technology assessment must systematically evaluate maturity in terms of the actual operational environment. Assuming maturity without proper assessment creates significant technical risk for the program.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 4, budget: 3 },
        },
        {
          id: 'b',
          text: 'Perform a systematic technology assessment including current maturity levels, development needs, and required resources to achieve flight readiness.',
          termIndices: [t('Technology Assessment'), t('Technology Readiness Level'), t('Operational Environment')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Systematic technology assessment evaluates current maturity and quantifies what development is required to advance the technology to flight readiness. This assessment must consider the specific operational environment and architecture to accurately assess cost, schedule, and risk impacts.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Immediately switch to the chemical propulsion alternative to avoid any technology development risks.',
          termIndices: [t('Technology Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Switching alternatives without completing the technology assessment abandons potentially superior solutions. Even heritage systems require assessment when used in new architectures or environments. Proper technology assessment enables informed risk-based decisions rather than risk avoidance.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Design Refinement',
      title: 'Iterative Design Development',
      narrative:
        'The technology assessment reveals that the plasma ignition system needs two years of development to reach acceptable risk levels for flight. Your team must now refine the design concept to address this technology gap while maintaining the hybrid system\'s performance advantages. The Preliminary Design Review is scheduled in 18 months.',
      termHighlights: [t('Iterative'), t('Preliminary Design Review'), t('Acceptable Risk')],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with the original hybrid design and request a schedule extension to accommodate the two-year technology development.',
          termIndices: [t('Preliminary Design Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Requesting a schedule extension without exploring design alternatives fails to leverage the iterative nature of the Design Solution Definition Process. You should first explore design modifications that could reduce technology development requirements while maintaining system performance.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 4, budget: 2 },
        },
        {
          id: 'b',
          text: 'Iteratively refine the hybrid concept to use existing ignition technology while maintaining key performance benefits.',
          termIndices: [t('Iterative'), t('Design Solution Definition Process'), t('Acceptable Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The iterative Design Solution Definition Process allows you to refine concepts based on technology assessment results. By modifying the design to use more mature ignition technology, you can achieve acceptable risk levels while preserving most performance advantages.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Completely abandon the hybrid concept and start over with a new alternative design approach.',
          termIndices: [t('Design Solution Definition Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Completely abandoning the concept wastes the valuable analysis already completed. The Design Solution Definition Process supports iterative refinement to address specific issues while preserving beneficial aspects of promising alternatives.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Solution Definition',
      title: 'Finalizing the Design Solution',
      narrative:
        'Your iterative refinement has produced a viable hybrid propulsion system using proven ignition technology with 90% of the original performance benefits. The design meets all system objectives within acceptable risk levels and fits the development timeline. You must now prepare for the formal design solution definition that will guide detailed design activities.',
      termHighlights: [t('Design Solution Definition Process'), t('System'), t('Need')],
      decisions: [
        {
          id: 'a',
          text: 'Document only the final selected design concept without preserving the rationale for rejected alternatives.',
          termIndices: [t('Design Solution Definition Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Failing to document the design rationale and alternative analysis creates knowledge gaps for future decisions. The Design Solution Definition Process requires capturing the trade study results and decision rationale to support later design reviews and potential design changes.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Complete the design solution definition with comprehensive documentation of alternatives considered, trade study results, and rationale for the selected approach.',
          termIndices: [t('Design Solution Definition Process'), t('Trade Study'), t('Need')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A complete Design Solution Definition Process includes thorough documentation of the analysis performed, alternatives considered, and rationale for the selected solution. This documentation ensures the design solution addresses the original need and provides traceability for future design decisions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Immediately begin detailed component design without completing the solution definition documentation.',
          termIndices: [t('Design Solution Definition Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Moving to detailed design without completing the solution definition violates proper systems engineering process flow. The Design Solution Definition Process must be completed to provide clear guidance and requirements for detailed design activities.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully applied the Design Solution Definition Process by creating alternative concepts, conducting comprehensive trade studies, performing technology assessments, and iteratively refining the design to meet system objectives within acceptable risk levels. This systematic approach ensured the selected propulsion system addresses the mission need while remaining feasible for development.',
    failureNarrative: 'The Design Solution Definition Process requires systematic evaluation of alternatives, comprehensive trade studies, and iterative refinement based on technology assessment results. Premature convergence on single solutions or inadequate analysis of technology maturity leads to increased risk and potential mission failure.',
    successThreshold: 60,
  },
}
