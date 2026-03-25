import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6713Outputs: ScenarioTemplate = {
  meta: {
    id: 'seh-6-7-1-3-outputs',
    title: 'Technical Assessment Results',
    subtitle: 'Analyze and document technical assessment outputs for decision-making',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'risk'],
    termIndices: [
      t('Technical Assessment Process'),
      t('Decision Analysis Process'),
      t('Analysis'),
      t('Variance'),
      t('Technical Performance Measures'),
      t('Risk Assessment'),
      t('Measure of Performance (MOP)'),
      t('Metric'),
      t('Process'),
      t('Activity'),
      t('Approval'),
      t('Decision Support Package'),
      t('Technical Risk'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Data Collection',
      title: 'Assessment Results Compilation',
      narrative:
        'Your technical assessment process has generated significant data on propulsion system performance measures. The collected metrics show a 15% variance from expected thrust efficiency and several technical performance measures are trending below threshold values. As the systems engineer, you must determine how to organize these results for the upcoming decision analysis process.',
      termHighlights: [t('Technical Assessment Process'), t('Technical Performance Measures'), t('Variance')],
      decisions: [
        {
          id: 'a',
          text: 'Create a comprehensive analysis report documenting all findings with trend analysis and variance explanations for decision-makers.',
          termIndices: [t('Analysis'), t('Variance'), t('Decision Analysis Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The technical assessment process outputs require systematic documentation of results, findings, and variance analysis. This comprehensive approach provides decision-makers with the collective data needed to understand trends and determine if corrective action is necessary.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Immediately escalate the variance to management without detailed analysis since the numbers are concerning.',
          termIndices: [t('Variance')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Escalating without proper analysis violates the technical assessment process. Raw data without context, trend analysis, or recommendations provides insufficient information for effective decision analysis. Management needs comprehensive results to understand the implications.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus only on the metrics that meet expectations and defer reporting on variance until next assessment cycle.',
          termIndices: [t('Metric'), t('Variance')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Selective reporting undermines the technical assessment process integrity. All results, including negative variances, must be documented to provide complete visibility. Deferring critical findings prevents timely corrective action and decision analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Trend Analysis',
      title: 'Performance Trend Evaluation',
      narrative:
        'Your analysis reveals that the propulsion efficiency variance has been developing over three assessment cycles, showing a consistent downward trend. The technical performance measures indicate potential component degradation that could impact mission success. You need to determine the appropriate findings to document for the decision analysis process.',
      termHighlights: [t('Technical Performance Measures'), t('Analysis'), t('Decision Analysis Process')],
      decisions: [
        {
          id: 'a',
          text: 'Document the trend as a normal variation that will likely self-correct without intervention.',
          termIndices: [t('Variance')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A consistent three-cycle downward trend in critical performance measures cannot be dismissed as normal variation. This finding requires detailed analysis and likely corrective action. Minimizing the trend prevents proper risk assessment and decision analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Identify the trend as a significant finding requiring investigation and potential corrective action in your assessment results.',
          termIndices: [t('Technical Assessment Process'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A consistent performance degradation trend over multiple cycles represents a significant finding that must be clearly documented. This analysis provides decision-makers with the information needed to determine whether corrective action is necessary through the decision analysis process.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Recommend immediate system shutdown since the trend indicates imminent failure.',
          termIndices: [t('Risk Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Recommending immediate shutdown without proper risk assessment exceeds the scope of technical assessment outputs. While the trend is concerning, the assessment process should document findings and let the decision analysis process determine appropriate corrective actions.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Recommendations Development',
      title: 'Corrective Action Recommendations',
      narrative:
        'Based on your assessment results and findings, you must develop recommendations for the decision analysis process. The performance degradation trend suggests three possible courses of action: component replacement, operational parameter adjustment, or enhanced monitoring protocols. Your recommendations will directly feed into the decision-making process.',
      termHighlights: [t('Decision Analysis Process'), t('Technical Assessment Process')],
      decisions: [
        {
          id: 'a',
          text: 'Provide a single recommendation based on your preferred solution to simplify the decision process.',
          termIndices: [t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Providing only one recommendation limits the decision analysis process effectiveness. Decision-makers need multiple alternatives with analysis of their implications to make informed choices. The technical assessment should present options, not make the decision.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Present multiple corrective action alternatives with analysis of their technical, cost, and schedule implications.',
          termIndices: [t('Decision Analysis Process'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Effective technical assessment outputs provide decision-makers with analyzed alternatives and their implications. This approach enables the decision analysis process to evaluate options against decision-maker priorities and make informed choices about corrective actions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'State that no recommendations can be made until additional testing is completed.',
          termIndices: [t('Technical Assessment Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While additional data might be valuable, the technical assessment process should provide recommendations based on available information. Deferring all recommendations prevents timely decision analysis and may allow performance degradation to continue unchecked.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Documentation Standards',
      title: 'Assessment Results Documentation',
      narrative:
        'You are finalizing the documentation format for your assessment results, findings, and recommendations. The decision analysis process requires clear traceability between measured data, identified variances, and recommended actions. Your documentation approach will determine how effectively the results feed into subsequent decision-making activities.',
      termHighlights: [t('Process'), t('Activity'), t('Decision Analysis Process')],
      decisions: [
        {
          id: 'a',
          text: 'Create a brief summary focusing only on the most critical issues to avoid overwhelming decision-makers.',
          termIndices: [t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A brief summary may omit important context and supporting data needed for thorough decision analysis. Comprehensive documentation of assessment results ensures decision-makers have complete information to understand variances and evaluate alternatives effectively.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Document all raw data in detail without interpretation to let decision-makers draw their own conclusions.',
          termIndices: [t('Analysis')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Raw data without analysis and interpretation fails to provide the value-added outputs expected from the technical assessment process. Decision-makers need processed information, trend analysis, and expert interpretation to support effective decision analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Structure documentation with clear sections for results, variance analysis, trends, findings, and actionable recommendations.',
          termIndices: [t('Technical Assessment Process'), t('Analysis'), t('Variance')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Well-structured documentation enables effective decision analysis by clearly presenting assessment results, explaining variances, identifying trends, and providing actionable recommendations. This format supports systematic evaluation of alternatives and informed decision-making.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Decision Support',
      title: 'Feeding the Decision Process',
      narrative:
        'Your comprehensive assessment results are ready for the decision analysis process. The documentation includes variance explanations, trend analysis, and alternative recommendations. The flight director requests clarification on how these outputs will support upcoming critical decisions about the propulsion system. You must explain the connection between your assessment process outputs and decision analysis.',
      termHighlights: [t('Decision Analysis Process'), t('Technical Assessment Process')],
      decisions: [
        {
          id: 'a',
          text: 'Explain that your assessment results provide the factual foundation for evaluating alternatives and making informed decisions.',
          termIndices: [t('Technical Assessment Process'), t('Decision Analysis Process'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Technical assessment process outputs serve as the critical input to decision analysis by providing objective data, variance analysis, and expert findings. This information enables decision-makers to evaluate alternatives against their priorities and knowledge state to determine optimal corrective actions.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'State that your assessment results are final recommendations that should be implemented without further analysis.',
          termIndices: [t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Assessment results are inputs to decision analysis, not final decisions. The decision analysis process must evaluate alternatives against decision-maker priorities and organizational constraints. Technical assessment provides data and recommendations, but decision authority remains with designated decision-makers.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Indicate that the assessment results are purely informational and decision-makers must determine their own course of action.',
          termIndices: [t('Technical Assessment Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While decision authority rests with decision-makers, technical assessment outputs should provide more than raw information. Expert analysis, variance explanations, and actionable recommendations are essential outputs that add value to the decision analysis process.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully demonstrated understanding of technical assessment process outputs and their role in decision analysis. Your systematic approach to documenting results, analyzing variances, and providing actionable recommendations creates the foundation for informed decision-making.',
    failureNarrative:
      'Your approach to assessment outputs missed key principles of the technical assessment process. Effective outputs require comprehensive documentation, variance analysis, and clear recommendations that properly feed into the decision analysis process for optimal results.',
    successThreshold: 60,
  },
}
