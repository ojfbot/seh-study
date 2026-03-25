import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixBGlossaryAcceptableRiskTheRiskThatIsUndersto: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-b-glossary-acceptable-risk-the-risk-that-is-understo',
    title: 'Acceptable Risk Determination',
    subtitle: 'Navigate risk acceptance decisions for a crewed transport vehicle program',
    difficulty: 'intermediate',
    categories: ['risk', 'project-mgmt'],
    termIndices: [
      t('Acceptable Risk'),
      t('Risk'),
      t('Risk Assessment'),
      t('Risk Management'),
      t('Technical Risk'),
      t('Mitigation'),
      t('Decision Authority'),
      t('Designated Governing Authority'),
      t('Program'),
      t('Customer'),
      t('Approval'),
      t('Key Decision Point'),
      t('Control Gate (or milestone)'),
      t('Life Cycle Cost (LCC)'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Risk Identification',
      title: 'Micrometeoroid Shield Design Risk',
      narrative: 
        'Your crewed transport vehicle program has identified a technical risk in the micrometeoroid debris shield design. ' +
        'The current Whipple shield configuration provides 95% protection against orbital debris, falling short of the 99.5% requirement. ' +
        'Achieving full compliance would require additional shield layers, increasing vehicle mass by 800 kg and extending development by 18 months. ' +
        'The program customer and mission directorate are requesting your risk assessment and recommendation.',
      termHighlights: [t('Technical Risk'), t('Risk Assessment'), t('Program')],
      decisions: [
        {
          id: 'a',
          text: 'Recommend accepting the 95% protection level as acceptable risk without further mitigation, citing statistical safety margins.',
          termIndices: [t('Acceptable Risk'), t('Mitigation')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Unilaterally declaring this an acceptable risk without proper stakeholder concurrence violates NASA risk management principles. ' +
            'Acceptable risk requires documented agreement from the program, governing authority, mission directorate, and customer. ' +
            'A 4.5% shortfall in debris protection for crewed vehicles demands thorough stakeholder review and formal approval.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Conduct a comprehensive risk assessment including alternative mitigation strategies and present findings to all stakeholders.',
          termIndices: [t('Risk Assessment'), t('Risk Management'), t('Customer')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Effective risk management requires a thorough assessment of the technical risk, evaluation of mitigation alternatives, and stakeholder engagement. ' +
            'This approach ensures that if the risk becomes acceptable, it will be understood and agreed upon by the program, governing authority, mission directorate, and customer as required.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Immediately implement the full shield upgrade to eliminate the risk, regardless of cost and schedule impacts.',
          termIndices: [t('Life Cycle Cost (LCC)'), t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While risk elimination appears conservative, proceeding without stakeholder concurrence on the significant life cycle cost and schedule impacts violates program management principles. ' +
            'The decision authority must evaluate whether the risk mitigation benefits justify the substantial resource expenditure before implementation.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -4, budget: -5 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Stakeholder Engagement',
      title: 'Risk Assessment Review',
      narrative:
        'Your comprehensive risk assessment identifies three mitigation options: full shield upgrade, partial enhancement providing 98% protection, or operational procedures limiting flight paths through high-debris zones. ' +
        'The designated governing authority has scheduled a control gate review with the decision authority to evaluate these alternatives. ' +
        'You must prepare your recommendation for stakeholder consideration.',
      termHighlights: [t('Designated Governing Authority'), t('Decision Authority'), t('Control Gate (or milestone)')],
      decisions: [
        {
          id: 'a',
          text: 'Present only the partial enhancement option as the optimal balance of risk, cost, and schedule.',
          termIndices: [t('Risk'), t('Life Cycle Cost (LCC)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Limiting stakeholder choice to a single option prevents proper risk-informed decision making. ' +
            'The decision authority and other stakeholders require visibility into all viable alternatives to make an informed determination about acceptable risk levels. ' +
            'Presenting only one option undermines the control gate review process.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Present all three mitigation alternatives with objective analysis of risk, cost, schedule, and operational impacts for stakeholder evaluation.',
          termIndices: [t('Risk Assessment'), t('Control Gate (or milestone)'), t('Decision Authority')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Providing comprehensive analysis of all alternatives enables informed stakeholder decision-making. ' +
            'The control gate review process requires objective presentation of options so the decision authority can properly evaluate what constitutes acceptable risk for the program. ' +
            'This transparency supports the formal approval process required for acceptable risk determination.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Recommend postponing the decision until additional debris environment data can be collected over the next 12 months.',
          termIndices: [t('Key Decision Point'), t('Program')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Delaying key decision points without compelling technical justification disrupts program schedules and prevents stakeholders from making timely risk acceptance decisions. ' +
            'Current debris models provide sufficient data for risk assessment. The program cannot afford indefinite delays while awaiting perfect information.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Stakeholder Decision',
      title: 'Risk Acceptance Deliberation',
      narrative:
        'During the control gate review, the mission directorate expresses strong preference for the full shield upgrade, while the customer emphasizes cost constraints favoring operational procedures. ' +
        'The designated governing authority questions whether 98% protection with partial enhancement represents truly acceptable risk. ' +
        'The decision authority requests your professional assessment of which approach best serves the program objectives.',
      termHighlights: [t('Customer'), t('Designated Governing Authority'), t('Acceptable Risk')],
      decisions: [
        {
          id: 'a',
          text: 'Advocate strongly for the customer position, emphasizing that cost constraints must drive the acceptable risk determination.',
          termIndices: [t('Customer'), t('Acceptable Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While customer input is essential, acceptable risk determination must consider all stakeholder perspectives, not just cost constraints. ' +
            'The governing authority, mission directorate, and program all have legitimate concerns about crew safety that must be balanced against budget considerations. ' +
            'Advocating for only one stakeholder position undermines the collaborative risk acceptance process.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 2 },
        },
        {
          id: 'b',
          text: 'Recommend the partial enhancement option, noting it addresses safety concerns while maintaining reasonable cost and schedule impacts.',
          termIndices: [t('Acceptable Risk'), t('Risk Management')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The partial enhancement option demonstrates balanced risk management by significantly improving safety while avoiding extreme cost and schedule impacts. ' +
            'This recommendation helps stakeholders reach consensus on what constitutes acceptable risk by addressing the primary concerns of each party. ' +
            'When all stakeholders can agree to this approach, it becomes acceptable risk as defined by NASA standards.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'State that the decision is beyond your authority and defer entirely to the stakeholders without providing technical guidance.',
          termIndices: [t('Decision Authority'), t('Risk Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While the final decision rests with the decision authority, your role requires providing professional technical guidance to inform stakeholder deliberations. ' +
            'Avoiding your responsibility to offer expert risk assessment fails to support the decision-making process. ' +
            'Technical expertise is essential input for proper acceptable risk determination.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Formal Approval',
      title: 'Risk Acceptance Documentation',
      narrative:
        'The stakeholders have reached consensus on the partial enhancement approach, agreeing that 98% protection represents acceptable risk for the program. ' +
        'The decision authority is prepared to grant formal approval for implementation. ' +
        'You must ensure proper documentation and approval processes are followed to establish this as acceptable risk per NASA requirements.',
      termHighlights: [t('Approval'), t('Acceptable Risk'), t('Program')],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with implementation based on the verbal stakeholder agreement, documenting the decision in routine program status reports.',
          termIndices: [t('Approval'), t('Program')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Acceptable risk requires formal documented approval, not just verbal agreement. ' +
            'Routine status reports do not provide the formal approval documentation required for acceptable risk determination. ' +
            'Without proper documentation, this remains an unaccepted risk that could cause compliance issues later in the program.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Document the acceptable risk determination with formal signatures from the program, governing authority, mission directorate, and customer.',
          termIndices: [t('Acceptable Risk'), t('Designated Governing Authority'), t('Customer')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Acceptable risk requires documented agreement from all key stakeholders as defined in NASA standards. ' +
            'Formal documentation with signatures from the program, governing authority, mission directorate, and customer establishes that the risk is understood and agreed upon. ' +
            'This documentation ensures no further specific mitigating action is required, completing the acceptable risk determination process.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Request additional review by an independent safety board before finalizing the acceptable risk determination.',
          termIndices: [t('Risk'), t('Approval')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While independent review can provide value, adding unnecessary approval layers when stakeholders have already reached consensus delays program progress without clear benefit. ' +
            'The designated governing authority already provides the required technical oversight. Additional reviews should only be requested when there are unresolved technical concerns.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully navigated the acceptable risk determination process by conducting thorough stakeholder engagement and ensuring proper documentation. ' +
      'Your systematic approach to risk assessment and collaborative decision-making resulted in a technically sound and properly approved acceptable risk determination.',
    failureNarrative:
      'The acceptable risk determination process was compromised by inadequate stakeholder engagement or improper documentation procedures. ' +
      'Effective acceptable risk management requires comprehensive analysis, stakeholder consensus, and formal approval documentation per NASA standards.',
    successThreshold: 60,
  },
}
