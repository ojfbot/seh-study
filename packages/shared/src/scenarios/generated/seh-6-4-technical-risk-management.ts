import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh64TechnicalRiskManagement: ScenarioTemplate = {
  meta: {
    id: 'seh-6-4-technical-risk-management',
    title: 'Sensor Array Risk Assessment',
    subtitle: 'Manage technical risks for a critical Earth observation satellite sensor subsystem',
    difficulty: 'intermediate',
    categories: ['risk', 'project-mgmt'],
    termIndices: [
      t('Technical Risk Management Process'),
      t('Technical Risk'),
      t('Risk'),
      t('Risk Assessment'),
      t('Risk Management'),
      t('Mitigation'),
      t('Analysis'),
      t('Evaluation'),
      t('Safety'),
      t('Program'),
      t('Project'),
      t('Technical Performance Measures'),
      t('Continuous Risk Management'),
      t('Activity'),
      t('Approval')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Risk Identification',
      title: 'Sensor Manufacturing Concern',
      narrative:
        'During the sensor array development program, your manufacturing contractor reports potential contamination issues in their clean room facility. The primary multispectral sensor could have reduced sensitivity if contamination occurred during the coating process. You need to identify the technical risks and their potential consequences across the mission domains.',
      termHighlights: [t('Technical Risk'), t('Risk'), t('Program')],
      decisions: [
        {
          id: 'a',
          text: 'Document this as a low-priority manufacturing quality issue and continue with planned production schedule.',
          termIndices: [t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Sensor sensitivity is critical to mission success. Contamination during coating could create cascading technical risks affecting safety, technical performance, cost, and schedule domains. A thorough risk assessment is required before making schedule decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Apply the technical risk management process to identify risk scenarios across safety, technical, cost, and schedule domains.',
          termIndices: [t('Technical Risk Management Process'), t('Risk Assessment'), t('Safety')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The technical risk management process examines potential performance shortfalls across all mission execution domains. This structured approach will help you identify scenarios, assess likelihoods, and evaluate consequences systematically.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Immediately halt production and order complete sensor redesign to eliminate any contamination risk.',
          termIndices: [t('Mitigation')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Halting production before conducting proper risk assessment is an overreaction that guarantees schedule delays and cost increases. Risk management requires evaluating likelihood and consequences before selecting mitigation strategies.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -4, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Scenario Development',
      title: 'Risk Scenario Analysis',
      narrative:
        'Your risk assessment team has developed three potential scenarios: minor sensitivity degradation requiring ground calibration adjustments, moderate degradation requiring on-orbit calibration procedures, and severe degradation rendering the sensor unusable. You need to evaluate the likelihood and consequences of each scenario to inform your risk management approach.',
      termHighlights: [t('Risk Assessment'), t('Analysis'), t('Evaluation')],
      decisions: [
        {
          id: 'a',
          text: 'Focus only on the worst-case scenario since it has the highest consequences for mission success.',
          termIndices: [t('Analysis')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Effective risk management considers all scenarios with their respective likelihoods and consequences. Focusing solely on worst-case scenarios ignores the risk triplet approach of scenario-likelihood-consequence analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Develop risk triplets for each scenario, quantifying likelihood and consequences across technical performance measures.',
          termIndices: [t('Risk Assessment'), t('Technical Performance Measures'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Risk is characterized by three components: scenarios, their likelihoods, and their consequences. By developing risk triplets for each scenario and evaluating them against technical performance measures, you create a comprehensive risk profile.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Assign equal probability to all three scenarios and prepare identical mitigation plans for each.',
          termIndices: [t('Mitigation')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Risk scenarios typically have different likelihoods based on manufacturing data and historical experience. Equal probability assignments ignore available evidence and lead to inefficient mitigation resource allocation.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Risk Evaluation',
      title: 'Consequence Assessment',
      narrative:
        'Your analysis indicates the minor degradation scenario has 60% likelihood with low mission impact, moderate degradation has 30% likelihood with significant operational constraints, and severe degradation has 10% likelihood but would require mission redesign. The project manager requests your recommendation for proceeding with the current sensor design versus implementing design changes.',
      termHighlights: [t('Risk Management'), t('Project'), t('Evaluation')],
      decisions: [
        {
          id: 'a',
          text: 'Recommend accepting the risk since the severe scenario has only 10% likelihood.',
          termIndices: [t('Risk Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Low likelihood does not automatically justify risk acceptance, especially when consequences include mission redesign. Risk management decisions must consider both likelihood and consequence severity in the context of program objectives.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Present the complete risk profile to stakeholders with mitigation options and cost-benefit analysis for informed decision-making.',
          termIndices: [t('Risk Management'), t('Evaluation'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Risk management supports informed decision-making by providing stakeholders with complete risk profiles, mitigation alternatives, and their associated costs and benefits. This enables appropriate risk-informed decisions based on program priorities.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Implement mitigation for all scenarios regardless of cost to minimize any risk of mission failure.',
          termIndices: [t('Mitigation')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Over-mitigation can be as problematic as under-mitigation, consuming resources that could address higher-priority risks. Effective risk management balances risk reduction with program constraints through systematic evaluation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -3, budget: -4 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Risk Monitoring',
      title: 'Implementation Oversight',
      narrative:
        'The stakeholders approved targeted mitigation for the moderate degradation scenario while accepting the residual risk for other scenarios. Three months later, manufacturing reports implementing improved clean room protocols and enhanced quality controls. You need to determine how to monitor the effectiveness of these risk mitigation measures.',
      termHighlights: [t('Continuous Risk Management'), t('Mitigation'), t('Activity')],
      decisions: [
        {
          id: 'a',
          text: 'Schedule quarterly risk reviews to reassess scenarios and update risk profiles based on manufacturing performance data.',
          termIndices: [t('Continuous Risk Management'), t('Risk Assessment'), t('Activity')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Continuous risk management involves ongoing monitoring and reassessment as new information becomes available. Regular reviews allow you to retire old risks, identify new ones, and adjust mitigation strategies based on implementation progress.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Consider the risk closed since mitigation measures have been implemented by the contractor.',
          termIndices: [t('Risk Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Risk closure requires verification that mitigation measures are effective, not just implemented. Manufacturing improvements must be validated through testing and quality data before risks can be retired from active management.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until sensor testing begins to evaluate whether the manufacturing improvements were successful.',
          termIndices: [t('Evaluation')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Waiting until final testing delays risk evaluation and limits response options if problems persist. Continuous risk management requires proactive monitoring throughout the implementation phase to enable timely course corrections.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Risk Closure',
      title: 'Final Risk Assessment',
      narrative:
        'Six months of manufacturing data shows the clean room improvements reduced contamination incidents by 85%. Preliminary sensor testing indicates performance within specification limits. Your quarterly risk review must determine the status of the original contamination risk and any new risks that may have emerged during the mitigation implementation.',
      termHighlights: [t('Risk Assessment'), t('Technical Performance Measures'), t('Approval')],
      decisions: [
        {
          id: 'a',
          text: 'Close the contamination risk and remove it from active risk management since performance tests passed.',
          termIndices: [t('Risk Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Preliminary testing alone is insufficient for risk closure. Complete verification through full qualification testing is needed to confirm the risk has been effectively mitigated across all operational conditions.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Downgrade the risk level based on manufacturing improvements while maintaining monitoring until full sensor qualification is complete.',
          termIndices: [t('Continuous Risk Management'), t('Technical Performance Measures')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The manufacturing improvements and preliminary test results justify reducing the risk level, but continued monitoring through qualification ensures the mitigation remains effective. This balanced approach maintains appropriate risk oversight without over-managing resolved issues.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Increase risk monitoring frequency due to the complexity of the manufacturing changes implemented.',
          termIndices: [t('Continuous Risk Management'), t('Activity')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The positive manufacturing data and test results do not warrant increased monitoring. Effective risk management scales monitoring intensity based on risk level - successful mitigation should reduce, not increase, oversight requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully applied the technical risk management process to identify, assess, and mitigate sensor contamination risks across multiple mission domains. Your systematic approach to risk triplet development and continuous monitoring enabled informed decision-making while maintaining appropriate oversight throughout the implementation phase.',
    failureNarrative:
      'Your risk management approach missed key opportunities to systematically assess technical risks or implement appropriate monitoring strategies. Effective technical risk management requires structured evaluation of scenarios, likelihoods, and consequences across all mission execution domains.',
    successThreshold: 60,
  },
}
