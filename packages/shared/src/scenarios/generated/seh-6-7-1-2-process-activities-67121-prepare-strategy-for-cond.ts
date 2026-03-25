import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6712ProcessActivities67121PrepareStrategyForCond: ScenarioTemplate = {
  meta: {
    id: 'seh-6-7-1-2-process-activities-67121-prepare-strategy-for-cond',
    title: 'Technical Assessment Strategy Crisis',
    subtitle: 'Develop a comprehensive strategy for conducting technical assessments on your asteroid sample return mission',
    difficulty: 'advanced',
    categories: ['project-mgmt', 'reviews', 'risk'],
    termIndices: [
      t('Technical Assessment Process'),
      t('Technical Measures'),
      t('Decision Analysis Process'),
      t('Metric'),
      t('Variance'),
      t('Risk Management'),
      t('Critical Design Review'),
      t('Analysis'),
      t('Goal'),
      t('Process'),
      t('Activity'),
      t('Program'),
      t('Project')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase A',
      title: 'Defining Your Technical Assessment Strategy',
      narrative: 'As Risk Manager for the asteroid sample return mission, you must establish a comprehensive Technical Assessment Process strategy. The project manager needs visibility into technical progress to exercise proper management control. The engineering team is asking what technical measures should be tracked and how often assessments should occur. Your strategy will determine how effectively the project can identify and respond to technical issues.',
      termHighlights: [t('Technical Assessment Process'), t('Technical Measures')],
      decisions: [
        {
          id: 'a',
          text: 'Develop a formal strategy that defines agreed-upon technical measures, consistent reporting formats across all project levels, historical data maintenance, and quantitative risk integration with color-coded alert zones.',
          termIndices: [t('Technical Measures'), t('Risk Management'), t('Metric')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent approach. This follows NASA SE Handbook best practices for technical assessment strategy, incorporating all key principles: well-defined measures, consistent formats, historical tracking, and risk-informed decision making with visual status indicators.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Focus primarily on cost and schedule metrics since those are what management cares about most, with technical performance as a secondary consideration.',
          termIndices: [t('Technical Measures'), t('Variance')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Incomplete strategy. While cost and schedule are important, the SE Handbook emphasizes that technical measures are equally critical for early problem detection. Technical performance often drives cost and schedule variances, so it should be a primary focus.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Keep the strategy simple with basic milestone tracking and let each subsystem team decide their own assessment approach based on what works for them.',
          termIndices: [t('Process'), t('Activity')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This approach lacks the systematic rigor required for complex missions. Without standardized measures and consistent reporting, you cannot effectively aggregate data up the project hierarchy or identify cross-cutting issues. This violates fundamental SE assessment principles.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Phase B',
      title: 'Establishing the Assessment Feedback Loop',
      narrative: 'Your technical planning documents are in place, and now you must implement the continuous feedback loop of planning, status reporting, assessing, and decision-making. The project is entering Preliminary Design Review preparations, and you need to establish how this feedback loop will operate throughout the project hierarchy. The sample collection mechanism team just reported some concerning performance trends.',
      termHighlights: [t('Decision Analysis Process'), t('Analysis')],
      decisions: [
        {
          id: 'a',
          text: 'Implement a continuous feedback loop where planning data and assessments flow up the hierarchy with appropriate aggregation, while decisions flow down, with regular analytical assessment converting status reports into actionable trend information.',
          termIndices: [t('Decision Analysis Process'), t('Analysis'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct implementation of the SE Handbook feedback loop model. This ensures proper information flow both up and down the project hierarchy, with analytical assessment providing the critical conversion from raw status data to actionable intelligence for decision makers.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Set up monthly reports from each subsystem team directly to the project manager, bypassing intermediate levels to ensure nothing gets lost in translation.',
          termIndices: [t('Program'), t('Project')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'This creates information overload at the top and eliminates the benefits of hierarchical aggregation. The SE Handbook emphasizes appropriate aggregation at each level to provide the right level of detail to each management tier.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Focus assessment activities only on major milestones like PDR and CDR since continuous monitoring is too resource-intensive for the budget.',
          termIndices: [t('Critical Design Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This violates the fundamental principle of continuous assessment. Waiting until major reviews to assess technical progress means problems are discovered too late for cost-effective corrective action. The SE Handbook requires regular, periodic tracking.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -2 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Managing Technical Measure Variances',
      narrative: 'During detailed design, your assessment process has identified several concerning variances from expected technical performance. The sample container sealing mechanism is showing degraded performance in thermal vacuum testing, and the navigation system accuracy is trending below requirements. These variances need immediate attention, but you must decide how to integrate this information into the Decision Analysis Process.',
      termHighlights: [t('Variance'), t('Goal')],
      decisions: [
        {
          id: 'a',
          text: 'Document the variances with quantitative risk measures, analyze trends to predict future outcomes, and feed this assessment into the Decision Analysis Process for potential corrective action while maintaining color-coded status indicators.',
          termIndices: [t('Variance'), t('Risk Management'), t('Decision Analysis Process'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Perfect execution of the SE Handbook approach. You are properly converting status data into analytical assessments, supporting decisions with quantitative risk information, and maintaining the visual management system that enables quick status understanding.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Report the variances to management and wait for their direction on how to proceed, since technical assessment should remain separate from decision-making.',
          termIndices: [t('Variance'), t('Technical Assessment Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'This misses the integrated nature of the technical assessment and decision analysis processes. The SE Handbook emphasizes that assessment results should feed directly into decision analysis, not operate in isolation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Adjust the technical measures to make the variances look less severe, since the overall project is still meeting its major milestones.',
          termIndices: [t('Technical Measures'), t('Metric')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This is fundamentally dishonest and dangerous. Manipulating metrics to hide problems violates the core purpose of technical assessment, which is to provide accurate visibility into project health for proper management control.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: -3, budget: -3 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Phase D',
      title: 'Optimizing Assessment Frequency and Scope',
      narrative: 'As the project moves into implementation, you must refine your technical assessment strategy based on lessons learned. Some technical measures are changing rapidly and need more frequent monitoring, while others have stabilized. The project manager is asking for your recommendation on assessment frequency and which measures deserve the most attention during the critical assembly and test phase.',
      termHighlights: [t('Activity'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Implement risk-based assessment frequency where stable measures are tracked monthly but rapidly changing or high-concern areas are monitored more frequently, with key reviews providing intensive scrutiny for early problem detection.',
          termIndices: [t('Risk Management'), t('Activity'), t('Metric'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent adaptive strategy. The SE Handbook recommends this flexible approach where assessment frequency matches the rate of change and level of concern, with formal reviews serving as intensive checkpoints for comprehensive evaluation.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 2 }
        },
        {
          id: 'b',
          text: 'Maintain the same monthly assessment schedule for all measures to ensure consistency and avoid missing any potential issues.',
          termIndices: [t('Process'), t('Technical Measures')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'While consistent, this approach is not optimally efficient. The SE Handbook suggests that some measures should be tracked more often when there is rapid change or cause for concern, allowing for more focused resource allocation.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Reduce assessment frequency overall to focus resources on actual implementation work rather than monitoring, since the design is now mature.',
          termIndices: [t('Technical Assessment Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This violates the principle of continuous assessment throughout the project lifecycle. Implementation phases often reveal new technical challenges that require vigilant monitoring. Reducing assessment rigor during critical phases is counterproductive.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -1 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'You successfully implemented a comprehensive technical assessment strategy that follows NASA SE Handbook best practices. Your systematic approach to defining technical measures, establishing feedback loops, managing variances, and adapting assessment frequency will provide the project visibility needed for effective technical management throughout the mission lifecycle.',
    failureNarrative: 'Your technical assessment approach missed key principles from the SE Handbook. Without proper technical measures, systematic feedback loops, and risk-informed decision integration, the project lacks the visibility needed to detect and respond to technical issues before they become critical problems.',
    successThreshold: 60
  }
}
