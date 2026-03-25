import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6412Activities64121PrepareAStrategyToConductTec: ScenarioTemplate = {
  meta: {
    id: 'seh-6-4-1-2-activities-64121-prepare-a-strategy-to-conduct-tec',
    title: 'Technical Risk Strategy Development',
    subtitle: 'Develop a comprehensive strategy for technical risk management on an asteroid sample return mission',
    difficulty: 'intermediate',
    categories: ['risk', 'project-mgmt'],
    termIndices: [
      t('Technical Risk Management Process'),
      t('Technical Risk'),
      t('Risk Management'),
      t('Technical Planning Process'),
      t('Risk Assessment'),
      t('Continuous Risk Management'),
      t('Stakeholder'),
      t('Mitigation'),
      t('Program'),
      t('Project'),
      t('Baseline'),
      t('Implementation Phase'),
      t('Process'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Strategy Planning',
      title: 'Establishing Risk Management Framework',
      narrative:
        'As the Integration & Test Lead for the asteroid sample return mission, you must prepare a strategy to conduct technical risk management. Your team is entering the Implementation Phase and needs a clear framework for identifying and managing technical risks. The Program Manager asks you to define how the existing program risk management plan will be implemented for your technical activities.',
      termHighlights: [t('Technical Risk Management Process'), t('Implementation Phase'), t('Program')],
      decisions: [
        {
          id: 'a',
          text: 'Document how the Technical Planning Process will integrate with the program risk management plan and identify technical-specific risk categories.',
          termIndices: [t('Technical Planning Process'), t('Risk Management'), t('Technical Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The strategy must clearly document how technical risk management will implement the broader program risk management plan while addressing technical-specific concerns. This ensures alignment while capturing unique technical risk sources not covered in the general program plan.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Create an entirely new risk management system independent of the existing program plan to focus solely on technical issues.',
          termIndices: [t('Process'), t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Creating an independent system would duplicate efforts and create confusion. The strategy should implement the existing program risk management plan while addressing technical-specific needs, not replace it entirely.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -2 },
        },
        {
          id: 'c',
          text: 'Simply adopt the existing program risk management plan without modification since it covers all project areas.',
          termIndices: [t('Risk Management'), t('Project')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The existing program plan may not capture all technical risk sources and categories specific to your activities. The strategy must identify additional technical risk areas and tailor the approach to technical team needs.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Risk Identification',
      title: 'Defining Technical Risk Categories',
      narrative:
        'You need to identify technical risk sources and categories not captured in the general program plan. Your asteroid sample return mission involves complex sample containment systems, autonomous drilling operations, and precision landing sequences. The technical team must understand what specific technical risks to watch for beyond standard program risks.',
      termHighlights: [t('Technical Risk'), t('Risk Assessment')],
      decisions: [
        {
          id: 'a',
          text: 'Focus only on heritage risks from previous missions since new technology risks are too unpredictable to plan for.',
          termIndices: [t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Limiting focus to only heritage risks ignores the novel technical challenges of asteroid sample return. The strategy must address both known heritage risks and emerging risks from new technologies and mission-specific technical requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Identify mission-specific technical risk categories including sample containment integrity, drilling system reliability, and autonomous navigation precision.',
          termIndices: [t('Technical Risk'), t('Risk Assessment')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The strategy must identify specific technical risk categories relevant to your mission that may not be captured in the general program plan. Sample containment, drilling systems, and autonomous operations present unique technical risks requiring specialized management approaches.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until technical risks actually occur before defining categories, since premature categorization may miss unexpected issues.',
          termIndices: [t('Technical Risk Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Reactive risk management contradicts the proactive approach required by the Technical Risk Management Process. The strategy must proactively identify potential risk categories before they manifest as actual problems.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Trigger Definition',
      title: 'Establishing Risk Action Triggers',
      narrative:
        'Your strategy must define what will trigger risk management actions. During integration and test activities, you need clear criteria for when technical risks require escalation, mitigation actions, or stakeholder notification. The team needs objective thresholds to avoid both over-reacting to minor issues and under-reacting to serious problems.',
      termHighlights: [t('Mitigation'), t('Stakeholder')],
      decisions: [
        {
          id: 'a',
          text: 'Base all trigger decisions on subjective engineering judgment without predetermined criteria to maintain flexibility.',
          termIndices: [t('Technical Risk Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Relying solely on subjective judgment without predetermined criteria creates inconsistency and may lead to delayed responses. The strategy needs objective triggers while allowing for engineering judgment in implementation.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Define quantitative triggers based on technical performance measures, test failure rates, and schedule impacts with clear escalation paths.',
          termIndices: [t('Mitigation'), t('Stakeholder'), t('Technical Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The strategy should establish clear, measurable triggers for risk actions. Quantitative criteria based on technical performance, coupled with defined escalation and communication paths, ensure consistent and timely risk management responses.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Set extremely conservative triggers that escalate every minor deviation to avoid missing any potential risks.',
          termIndices: [t('Risk Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Overly conservative triggers will overwhelm stakeholders with false alarms and waste resources on minor issues. The strategy must balance thoroughness with practicality to maintain credibility and focus on significant risks.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Communication Planning',
      title: 'Stakeholder Communication Strategy',
      narrative:
        'The final component of your technical risk management strategy involves defining how risk activities and findings will be communicated to internal technical teams and external stakeholders. Your asteroid sample return mission involves NASA centers, international partners, and contractor teams who all need appropriate risk information.',
      termHighlights: [t('Stakeholder'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Establish differentiated communication protocols with technical details for internal teams and summary reports for external stakeholders.',
          termIndices: [t('Stakeholder'), t('Technical Risk Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The communication strategy should tailor information to stakeholder needs - detailed technical data for internal teams who can act on it, and appropriate summaries for external stakeholders who need awareness but not operational details.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Send identical detailed technical reports to all stakeholders to ensure complete transparency and information sharing.',
          termIndices: [t('Stakeholder')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Identical detailed reports to all stakeholders can overwhelm external partners with unnecessary technical detail while failing to highlight key information they need. Communication should be tailored to stakeholder roles and needs.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Minimize communication about technical risks to avoid creating unnecessary concern among stakeholders.',
          termIndices: [t('Continuous Risk Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Minimizing risk communication contradicts the transparency required for effective Continuous Risk Management. Stakeholders need appropriate risk information to make informed decisions and provide necessary support.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Implementation',
      title: 'Strategy Documentation and Approval',
      narrative:
        'You have developed your technical risk management strategy including implementation approach, risk categories, action triggers, and communication protocols. The strategy document is ready for review and approval. You must now ensure it integrates properly with existing program processes and can be effectively implemented by your technical team.',
      termHighlights: [t('Baseline'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Submit the strategy for approval and immediately begin implementation while waiting for formal approval to save time.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Implementing before formal approval risks working with unapproved processes that may require changes. The strategy should be approved and baselined before implementation to ensure stability and stakeholder buy-in.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Coordinate with program management for approval, establish the strategy as a controlled baseline, and plan systematic rollout to technical teams.',
          termIndices: [t('Baseline'), t('Risk Management'), t('Program')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The strategy should be formally approved and established as a controlled baseline before implementation. Systematic rollout ensures technical teams understand their roles and the new processes integrate smoothly with existing program management.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Keep the strategy as an informal working document to maintain flexibility and avoid bureaucratic approval processes.',
          termIndices: [t('Technical Risk Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Informal documentation undermines the Technical Risk Management Process effectiveness and lacks the authority needed for consistent implementation across all technical teams and stakeholder organizations.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You have successfully developed a comprehensive technical risk management strategy that implements the program risk management plan while addressing mission-specific technical risks. Your approach establishes clear processes, triggers, and communication protocols that will enable proactive risk management throughout the Implementation Phase.',
    failureNarrative:
      'Your technical risk management strategy lacks the systematic approach needed for effective risk management. Key gaps in process integration, risk identification, or stakeholder communication could lead to missed risks and inadequate responses during critical mission phases.',
    successThreshold: 60,
  },
}
