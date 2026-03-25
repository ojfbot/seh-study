import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh682DecisionAnalysisGuidance: ScenarioTemplate = {
  meta: {
    id: 'seh-6-8-2-decision-analysis-guidance',
    title: 'CubeSat Constellation Power System Decision',
    subtitle: 'Apply decision analysis methodology to resolve critical power architecture trade-offs',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'design'],
    termIndices: [
      t('Decision Analysis Process'),
      t('Analysis of Alternatives (AoA)'),
      t('Trade Study'),
      t('Decision Matrix'),
      t('Decision Support Package'),
      t('Decision Tree'),
      t('Objective Function (sometimes Cost Function)'),
      t('Cost-Benefit Analysis'),
      t('Cost-Effectiveness Analysis'),
      t('Measure of Effectiveness (MOE)'),
      t('Measure of Performance (MOP)'),
      t('Technical Cost Estimate'),
      t('Risk Assessment'),
      t('Utility'),
      t('Optimal Solution')
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Problem Definition',
      title: 'Power System Architecture Challenge',
      narrative:
        'Your CubeSat constellation project faces a critical decision regarding power system architecture. Three competing designs have emerged: solar-only with battery backup, hybrid solar-nuclear, and advanced solar with supercapacitors. The program manager requests a formal decision analysis to evaluate these alternatives against mission objectives including cost, reliability, and performance. You must establish the decision framework.',
      termHighlights: [t('Decision Analysis Process'), t('Analysis of Alternatives (AoA)')],
      decisions: [
        {
          id: 'a',
          text: 'Start by defining clear objectives, criteria, and alternatives in a structured decision support package.',
          termIndices: [t('Decision Support Package'), t('Objective Function (sometimes Cost Function)')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The decision analysis process begins with clearly defining the problem scope, objectives, evaluation criteria, and available alternatives. A well-structured decision support package ensures all stakeholders understand what is being evaluated and how success will be measured.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Immediately begin calculating costs for each power system option to identify the cheapest solution.',
          termIndices: [t('Technical Cost Estimate')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Premature. While cost is important, jumping directly to cost calculations without establishing evaluation criteria and objectives leads to suboptimal decisions. A proper decision analysis process considers multiple factors beyond just initial cost, including performance, risk, and lifecycle considerations.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: -2 }
        },
        {
          id: 'c',
          text: 'Survey the team to get their gut feelings about which power system they prefer.',
          termIndices: [t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Inadequate. While team input is valuable, professional decision analysis requires systematic evaluation using quantitative methods. Relying on intuition alone for critical technical decisions introduces unnecessary risk and may miss important considerations that formal analysis would reveal.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },

    {
      id: 'node-2',
      phase: 'Criteria Development',
      title: 'Establishing Evaluation Metrics',
      narrative:
        'You have defined three power system alternatives and need to establish evaluation criteria. The stakeholders have identified key concerns: system reliability over 5-year mission life, total lifecycle cost, power output capability, and technical risk. You must determine how to structure these criteria for quantitative analysis. The systems engineering team is waiting for your methodology.',
      termHighlights: [t('Measure of Effectiveness (MOE)'), t('Measure of Performance (MOP)')],
      decisions: [
        {
          id: 'a',
          text: 'Create a decision matrix with weighted criteria, defining both measures of effectiveness and measures of performance.',
          termIndices: [t('Decision Matrix'), t('Measure of Effectiveness (MOE)'), t('Measure of Performance (MOP)')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent. A decision matrix with properly weighted criteria provides a structured framework for evaluation. MOEs measure how well alternatives achieve mission objectives, while MOPs provide quantitative metrics for comparison. This systematic approach enables objective trade-off analysis.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Use a simple ranking system where each team member ranks the alternatives from 1 to 3.',
          termIndices: [t('Utility')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Partially acceptable but suboptimal. Simple ranking lacks the rigor needed for complex technical decisions. While it captures preferences, it does not provide the quantitative analysis needed to justify decisions to stakeholders or support detailed trade studies.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Focus only on cost since budget constraints are the primary driver for this project.',
          termIndices: [t('Cost-Effectiveness Analysis')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Inadequate. Single-criterion decision making ignores other critical factors like reliability, performance, and technical risk. For space systems, the lowest-cost solution may result in mission failure. Comprehensive decision analysis must consider all relevant criteria.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },

    {
      id: 'node-3',
      phase: 'Analysis Execution',
      title: 'Conducting the Trade Study',
      narrative:
        'Your decision matrix is established with weighted criteria for cost, reliability, performance, and risk. Now you must execute the formal trade study analysis. The solar-only option scores highest on cost but lowest on reliability. The hybrid option provides best performance but highest technical risk. The supercapacitor option offers moderate scores across all criteria. You need to determine the optimal solution.',
      termHighlights: [t('Trade Study'), t('Optimal Solution')],
      decisions: [
        {
          id: 'a',
          text: 'Calculate weighted scores for each alternative and perform sensitivity analysis on key assumptions.',
          termIndices: [t('Trade Study'), t('Cost-Effectiveness Analysis'), t('Optimal Solution')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Calculating weighted scores provides quantitative comparison, while sensitivity analysis tests the robustness of conclusions against variations in assumptions. This thorough approach ensures the optimal solution is truly optimal under the given constraints and uncertainties.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Select the supercapacitor option since it has moderate scores in all categories.',
          termIndices: [t('Decision Matrix')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but not optimal. While the moderate-scoring option appears balanced, proper decision analysis requires calculating actual weighted scores to determine the mathematically optimal choice. The weights assigned to different criteria may favor a different alternative.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 1 }
        },
        {
          id: 'c',
          text: 'Choose the solar-only option because cost is always the most important factor.',
          termIndices: [t('Cost-Benefit Analysis')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Automatically prioritizing cost over all other factors contradicts the weighted criteria you established. For space systems, reliability and performance failures can result in total mission loss, making lowest cost a poor decision criterion without considering other factors.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: -2 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },

    {
      id: 'node-4',
      phase: 'Risk Assessment',
      title: 'Incorporating Risk Analysis',
      narrative:
        'Your weighted analysis favors the hybrid solar-nuclear option, but the risk assessment reveals significant technical and programmatic uncertainties. The nuclear component requires new technology development, and regulatory approval timelines are uncertain. The supercapacitor option scores second but has more mature technology. You must decide how to incorporate risk into your final recommendation.',
      termHighlights: [t('Risk Assessment'), t('Decision Tree')],
      decisions: [
        {
          id: 'a',
          text: 'Create a decision tree that models the probability and impact of key risk events for each alternative.',
          termIndices: [t('Decision Tree'), t('Risk Assessment'), t('Utility')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent. Decision trees explicitly model uncertainty and risk, allowing you to calculate expected utility for each alternative. This quantitative approach to risk ensures your recommendation accounts for both the potential benefits and the probability of adverse outcomes.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Document the risks but stick with the highest-scoring technical solution regardless.',
          termIndices: [t('Risk Assessment')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Marginally acceptable but risky. While documenting risks is important, ignoring their impact on decision-making defeats the purpose of risk assessment. High technical performance means nothing if the solution cannot be delivered within schedule and budget constraints.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 }
        },
        {
          id: 'c',
          text: 'Automatically eliminate any option with significant technical risk to be safe.',
          termIndices: [t('Risk Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Risk avoidance without quantitative analysis can eliminate potentially optimal solutions. All space systems involve risk - the goal is to understand and manage it, not eliminate it entirely. Proper decision analysis weighs risk against potential benefits.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 2 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },

    {
      id: 'node-5',
      phase: 'Decision Documentation',
      title: 'Final Recommendation Package',
      narrative:
        'Your decision tree analysis shows that when risk probabilities are factored in, the supercapacitor option provides the highest expected utility despite scoring second in the initial matrix. The analysis is complete, but you must present your findings to the program review board. They will expect a comprehensive decision support package that justifies your methodology and recommendation.',
      termHighlights: [t('Decision Support Package'), t('Trade Study Report')],
      decisions: [
        {
          id: 'a',
          text: 'Prepare a complete decision support package documenting methodology, analysis results, and rationale for recommendation.',
          termIndices: [t('Decision Support Package'), t('Trade Study Report'), t('Analysis of Alternatives (AoA)')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Perfect. A comprehensive decision support package provides transparency into your analysis process and enables stakeholders to understand and validate your conclusions. This documentation also supports future design reviews and serves as a reference for similar decisions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Simply recommend the supercapacitor option with a brief summary of why it scored highest.',
          termIndices: [t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but insufficient. While your recommendation may be correct, the lack of detailed documentation makes it difficult for stakeholders to validate your analysis or apply lessons learned to future decisions. Professional decision analysis requires thorough documentation.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Present all three options as equally viable and let the program manager choose.',
          termIndices: [t('Optimal Solution')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. After conducting thorough decision analysis, failing to provide a clear recommendation wastes the analytical effort and abdicates your responsibility as a systems engineer. Your role is to provide decision-makers with analyzed recommendations, not just options.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 }
        }
      ],
      defaultNextNodeId: null
    }
  ],

  debriefTemplate: {
    successNarrative: 'Excellent application of decision analysis methodology. You systematically defined objectives, established evaluation criteria, conducted quantitative analysis, incorporated risk assessment, and documented your findings. This structured approach ensures optimal decisions that can withstand stakeholder scrutiny.',
    failureNarrative: 'Your decision process lacked the rigor required for critical technical decisions. Effective decision analysis requires systematic methodology, quantitative evaluation, risk assessment, and comprehensive documentation to ensure optimal outcomes and stakeholder confidence.',
    successThreshold: 60
  }
}
