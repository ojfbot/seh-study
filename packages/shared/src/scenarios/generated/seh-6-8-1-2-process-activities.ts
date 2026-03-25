import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6812ProcessActivities: ScenarioTemplate = {
  meta: {
    id: 'seh-6-8-1-2-process-activities',
    title: 'Critical Thermal Protection Decision',
    subtitle: 'Navigate a complex decision analysis for crew vehicle heat shield selection',
    difficulty: 'advanced',
    categories: ['risk', 'project-mgmt', 'design'],
    termIndices: [
      t('Decision Analysis Process'),
      t('Decision Matrix'),
      t('Risk'),
      t('Evaluation'),
      t('Analysis'),
      t('Trade Tree'),
      t('Decision Authority'),
      t('Concurrence'),
      t('Process'),
      t('Critical Design Review'),
      t('Technical Risk'),
      t('Safety'),
      t('Trade Study'),
      t('Analysis of Alternatives (AoA)')
    ],
    estimatedMinutes: 20,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Phase B',
      title: 'Defining Decision Criteria',
      narrative: 'Your crewed transport vehicle team faces a critical decision on thermal protection system design. Three competing approaches have emerged: ablative shields, reusable tiles, and metallic heat shields. The mission directorate wants your recommendation in 30 days. You must first establish the decision criteria that will drive this analysis.',
      termHighlights: [t('Decision Analysis Process'), t('Decision Matrix')],
      decisions: [
        {
          id: 'a',
          text: 'Develop comprehensive decision criteria covering safety, cost, schedule, risk, mission success, and technical performance, with clear operational definitions and importance rankings.',
          termIndices: [t('Decision Analysis Process'), t('Safety'), t('Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent approach. The SE Handbook emphasizes that decision criteria must be objective, measurable, and able to differentiate among alternatives. Including both mandatory criteria like safety and enhancing criteria provides a complete evaluation framework.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Focus primarily on cost and schedule since those are the main program constraints, with safety as a mandatory requirement.',
          termIndices: [t('Decision Matrix'), t('Safety')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'This narrow approach misses critical factors like technical risk, manufacturability, and long-term supportability. For crew systems, broader criteria including mission success probability and operational flexibility are essential.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Let each stakeholder group define their own criteria and weight them based on organizational influence.',
          termIndices: [t('Decision Authority')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This political approach violates SE principles. Decision criteria must be based on mission and system context, not organizational power. The decision authority should approve criteria based on technical merit and mission requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },

    {
      id: 'node-2',
      phase: 'Phase B',
      title: 'Identifying Alternative Solutions',
      narrative: 'With decision criteria established, you need to systematically identify all viable thermal protection alternatives. Your initial three options may not represent the full solution space, and you want to ensure no promising approaches are overlooked while avoiding analysis paralysis.',
      termHighlights: [t('Trade Tree'), t('Analysis of Alternatives (AoA)')],
      decisions: [
        {
          id: 'a',
          text: 'Create a comprehensive trade tree to systematically explore all design options, then prune to manageable alternatives using screening criteria before detailed analysis.',
          termIndices: [t('Trade Tree'), t('Analysis of Alternatives (AoA)')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Perfect application of SE methodology. The trade tree approach ensures systematic exploration of the design space while the pruning process keeps analysis focused on viable options. This balances thoroughness with efficiency.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Conduct extensive brainstorming sessions with subject matter experts and research all thermal protection systems ever flown.',
          termIndices: [t('Analysis')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'While brainstorming and research are valuable, this approach lacks structure and could lead to analysis paralysis. The SE Handbook recommends systematic methods like trade trees to organize and filter alternatives efficiently.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -1 }
        },
        {
          id: 'c',
          text: 'Stick with the three original alternatives since they represent the main technology families and additional options would delay the analysis.',
          termIndices: [t('Trade Study')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This premature convergence violates the principle of considering all possible options. You may miss innovative hybrid approaches or dismiss viable alternatives without proper evaluation. Systematic identification is crucial for high-stakes decisions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },

    {
      id: 'node-3',
      phase: 'Phase B',
      title: 'Selecting Evaluation Methods',
      narrative: 'You now have five thermal protection alternatives to evaluate against your established criteria. The decision complexity requires careful selection of evaluation methods. Some criteria like cost can be quantified, while others like manufacturability involve significant uncertainty and engineering judgment.',
      termHighlights: [t('Evaluation'), t('Decision Matrix')],
      decisions: [
        {
          id: 'a',
          text: 'Use a combination of simulation models for thermal performance, cost estimation tools, expert assessments for manufacturability, and weighted decision matrices to integrate all factors.',
          termIndices: [t('Evaluation'), t('Decision Matrix'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Outstanding method selection. You are matching evaluation tools to the nature of each criterion while using decision matrices to integrate quantitative and qualitative factors. This multi-method approach provides robust evaluation.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Rely primarily on expert judgment and simple scoring since detailed analysis would take too long for the 30-day deadline.',
          termIndices: [t('Decision Matrix')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'While expert judgment is valuable, this approach lacks rigor for such a critical safety decision. The SE Handbook emphasizes that evaluation methods should match decision complexity. Some quantitative analysis is essential.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 }
        },
        {
          id: 'c',
          text: 'Perform detailed engineering analysis on all criteria for all alternatives to ensure maximum accuracy.',
          termIndices: [t('Analysis'), t('Evaluation')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This over-analysis approach is inefficient and may not improve decision quality. The SE Handbook advises selecting methods appropriate to available information and decision timeline. Some criteria may not warrant extensive analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -2 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },

    {
      id: 'node-4',
      phase: 'Phase B',
      title: 'Handling Uncertainty in Evaluation',
      narrative: 'Your evaluation reveals that two alternatives score very closely, but there is significant uncertainty in manufacturing cost estimates and thermal performance under extreme conditions. The uncertainty is large enough that it could potentially change the alternative ranking.',
      termHighlights: [t('Technical Risk'), t('Risk')],
      decisions: [
        {
          id: 'a',
          text: 'Conduct sensitivity analysis to determine if uncertainty reduction could alter rankings, assess the value of reducing uncertainty, and document this analysis for the decision authority.',
          termIndices: [t('Technical Risk'), t('Analysis'), t('Decision Authority')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent handling of uncertainty. The SE Handbook specifically states that uncertainty matters only if it could alter alternative rankings. Your approach properly assesses this and provides decision makers with uncertainty impact information.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 }
        },
        {
          id: 'b',
          text: 'Recommend both top alternatives to the decision authority since they are too close to differentiate given the uncertainty.',
          termIndices: [t('Decision Authority')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'While acceptable in some cases, this approach does not fully utilize SE analysis capabilities. You should assess whether uncertainty reduction is valuable and provide more definitive guidance to decision makers.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Select the alternative with the highest score and proceed, noting that all analyses have uncertainty.',
          termIndices: [t('Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This approach ignores significant uncertainty that could affect the decision. The SE Handbook requires evaluation of whether uncertainty affects alternative ranking. For critical safety decisions, uncertainty analysis is mandatory.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 1 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },

    {
      id: 'node-5',
      phase: 'Phase B',
      title: 'Presenting Results and Recommendations',
      narrative: 'Your analysis recommends the metallic heat shield based on superior reusability and lower life-cycle cost, despite higher development cost. However, the ablative shield scored highest on the weighted matrix due to its proven flight heritage. You must prepare your recommendation package for the program manager.',
      termHighlights: [t('Decision Authority'), t('Concurrence')],
      decisions: [
        {
          id: 'a',
          text: 'Recommend the metallic shield with full documentation of why you are overriding the matrix score, including risk assessment and updated criteria justification.',
          termIndices: [t('Decision Authority'), t('Risk'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Perfect approach. The SE Handbook specifically addresses this situation - when recommending an alternative with lower matrix score, you must provide clear explanation and may need to reevaluate criteria with decision maker concurrence.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 2 }
        },
        {
          id: 'b',
          text: 'Recommend the ablative shield since it had the highest matrix score, and note the metallic alternative as a close second.',
          termIndices: [t('Decision Matrix')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'While following the matrix score is defensible, you are not fully leveraging your engineering analysis. If you believe another alternative is better, you should recommend it with proper justification rather than defaulting to the score.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Present both alternatives as equally viable and let the program manager choose without a specific recommendation.',
          termIndices: [t('Decision Authority')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This abdicates your role as systems engineer. The SE Handbook expects you to provide clear recommendations based on your analysis. Decision authorities rely on SE analysis and recommendations, not just data presentation.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: null
    }
  ],

  debriefTemplate: {
    successNarrative: 'You successfully applied the Decision Analysis Process to navigate a complex technical decision. Your systematic approach to defining criteria, identifying alternatives, selecting appropriate evaluation methods, handling uncertainty, and presenting clear recommendations demonstrates mastery of SE decision-making principles.',
    failureNarrative: 'The decision analysis process requires systematic application of SE principles including comprehensive criteria definition, thorough alternative identification, appropriate evaluation methods, proper uncertainty handling, and clear recommendations. Review the SE Handbook guidance on decision analysis methodology.',
    successThreshold: 60,
  },
}
