import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh671ProcessDescriptionFigure671ProvidesATypical: ScenarioTemplate = {
  meta: {
    id: 'seh-6-7-1-process-description-figure-67-1-provides-a-typical',
    title: 'Technical Assessment Process Implementation',
    subtitle: 'Execute systematic technical assessment for an ISS experiment program',
    difficulty: 'intermediate',
    categories: ['reviews', 'project-mgmt', 'risk'],
    termIndices: [
      t('Technical Assessment Process'),
      t('Technical Measures'),
      t('Process'),
      t('Program'),
      t('Project'),
      t('Analysis'),
      t('Decision Analysis Process'),
      t('Risk Management'),
      t('Product Validation Process'),
      t('Interface Management Process'),
      t('Measure of Effectiveness (MOE)'),
      t('Measure of Performance (MOP)'),
      t('Technical Performance Measures'),
      t('Risk Assessment'),
      t('Product'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Strategy Preparation',
      title: 'Establishing Assessment Framework',
      narrative:
        'You are implementing the Technical Assessment Process for a new ISS protein crystal growth experiment program. Your team needs to establish a systematic approach for conducting periodic technical assessments at key life cycle points. The program manager has requested your strategy for tracking technical progress against the six assessment criteria including alignment with Agency goals, management approach adequacy, and technical approach effectiveness.',
      termHighlights: [t('Technical Assessment Process'), t('Program'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Focus assessment strategy solely on cost and schedule metrics since those are easiest to quantify.',
          termIndices: [t('Technical Measures')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The Technical Assessment Process requires evaluation across all six criteria, not just cost and schedule. Limiting assessment to easily quantifiable metrics ignores critical technical and programmatic health indicators. A comprehensive process must address alignment with Agency goals, management approach, technical approach, cost/schedule estimates, funding strategy, and risk management.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Develop an integrated assessment framework addressing all six criteria with defined technical measures, reporting requirements, and review checkpoints.',
          termIndices: [t('Technical Assessment Process'), t('Technical Measures'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Technical Assessment Process requires a comprehensive framework covering all assessment criteria. By establishing technical measures (MOEs, MOPs, TPMs), reporting requirements, and review checkpoints, you create a systematic approach for periodic assessment of technical and programmatic health throughout the life cycle.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until the first major milestone to determine what assessment approach is needed.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The Technical Assessment Process must be established early in the program to provide meaningful periodic assessments. Waiting until a major milestone eliminates the opportunity for early detection of issues and proactive management. Assessment strategy preparation is a foundational activity that enables effective technical progress monitoring.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 3, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Technical Progress Assessment',
      title: 'Measuring Work Productivity',
      narrative:
        'Your assessment framework is now active and the first quarterly review is approaching. Technical plans indicate the experiment hardware should be at 60% design completion, but your technical measures show concerning variances. The protein crystallization chamber design is behind schedule, and interface specifications with the ISS utilities are incomplete. You need to assess technical work productivity against established plans.',
      termHighlights: [t('Technical Measures'), t('Technical Performance Measures'), t('Analysis')],
      decisions: [
        {
          id: 'a',
          text: 'Report that technical progress is acceptable since some deliverables are complete, even though key interfaces are undefined.',
          termIndices: [t('Technical Assessment Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incomplete interface specifications represent a significant technical risk that cannot be masked by other completed deliverables. The Technical Assessment Process requires honest evaluation of progress against plans. Incomplete interfaces with ISS utilities could cascade into major integration issues later in the program.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Conduct systematic analysis comparing actual technical progress against planned milestones using established technical measures.',
          termIndices: [t('Analysis'), t('Technical Measures'), t('Technical Performance Measures')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Systematic analysis using established technical measures provides objective assessment of work productivity. By comparing actual progress against planned milestones, you identify specific areas of concern like the interface management issues. This data-driven approach supports accurate technical assessment and enables proactive corrective actions.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Request additional funding to accelerate development without analyzing the root causes of delays.',
          termIndices: [t('Program')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Adding resources without understanding the root causes of technical delays is ineffective management. The Technical Assessment Process emphasizes measuring progress against plans to identify specific issues. Interface specification problems may require technical solutions, not just additional funding.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 4 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Product Quality Assessment',
      title: 'Validating Against Requirements',
      narrative:
        'The experiment hardware prototypes have been delivered for evaluation. Your technical assessment must now focus on product quality by measuring progress against stakeholder requirements. Initial testing shows the protein crystallization chambers meet temperature control specifications, but vibration isolation performance falls short of ISS integration requirements. The Product Validation Process data indicates potential issues with experiment effectiveness.',
      termHighlights: [t('Product Validation Process'), t('Product'), t('Technical Assessment Process')],
      decisions: [
        {
          id: 'a',
          text: 'Accept the current design since temperature control meets specifications, overlooking the vibration isolation deficiency.',
          termIndices: [t('Product Validation Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The Product Validation Process requires validation against all stakeholder requirements, not just selected specifications. Vibration isolation deficiency could compromise experiment results and violate ISS integration requirements. Technical assessment must address all aspects of product quality to ensure mission success.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Immediately redesign the entire vibration isolation system without analyzing the specific performance gaps.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Complete redesign without specific analysis is an overreaction that wastes resources and time. Technical assessment should identify the specific performance gaps and evaluate targeted solutions. A measured approach based on validation data is more effective than wholesale redesign.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 4, budget: 5 },
        },
        {
          id: 'c',
          text: 'Conduct detailed analysis of validation results to quantify performance gaps and develop targeted corrective actions.',
          termIndices: [t('Product Validation Process'), t('Analysis'), t('Technical Assessment Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Technical assessment of product quality requires thorough analysis of validation results against all requirements. By quantifying the vibration isolation performance gaps, you can develop targeted corrective actions that address specific deficiencies. This systematic approach ensures product quality while managing cost and schedule impacts.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Technical Review Execution',
      title: 'Conducting Progress Reviews',
      narrative:
        'Your corrective actions for the vibration isolation system are underway, and it is time to conduct the formal quarterly technical review. You must execute both horizontal progress assessment across all technical areas and vertical assessment of management effectiveness. The Decision Analysis Process requires clear recommendations based on your technical assessment findings. Stakeholders expect comprehensive review of technical health and programmatic status.',
      termHighlights: [t('Decision Analysis Process'), t('Technical Assessment Process'), t('Risk Assessment')],
      decisions: [
        {
          id: 'a',
          text: 'Present only positive findings to maintain stakeholder confidence and avoid program scrutiny.',
          termIndices: [t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The Decision Analysis Process depends on accurate, complete information to support sound decision-making. Presenting only positive findings compromises the integrity of the technical assessment and prevents stakeholders from making informed decisions. Technical reviews must provide balanced assessment of both progress and challenges.',
          nextNodeId: null,
          scoreImpact: { risk: 7, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Conduct comprehensive horizontal and vertical technical review presenting objective findings, recommendations, and risk assessment.',
          termIndices: [t('Technical Assessment Process'), t('Decision Analysis Process'), t('Risk Assessment')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Comprehensive technical reviews provide the objective assessment needed for effective decision analysis. By presenting both horizontal progress across technical areas and vertical management assessment, you enable stakeholders to understand program health. Including risk assessment and clear recommendations supports informed decision-making.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus the review entirely on technical details without addressing programmatic health or management approach.',
          termIndices: [t('Technical Assessment Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The Technical Assessment Process encompasses both technical and programmatic aspects including management approach adequacy. Focusing only on technical details ignores critical assessment criteria such as alignment with Agency goals, funding strategy, and risk management effectiveness. Comprehensive assessment requires broader perspective.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Results Integration',
      title: 'Capturing Assessment Outcomes',
      narrative:
        'Your technical review has identified several key findings: the vibration isolation corrective actions are progressing well, interface management with ISS systems needs improvement, and overall program risk has increased due to schedule pressures. You must now capture these work products from technical assessment activities and ensure proper integration with other technical management processes. The findings need to support ongoing Risk Management and Interface Management Process activities.',
      termHighlights: [t('Risk Management'), t('Interface Management Process'), t('Technical Assessment Process')],
      decisions: [
        {
          id: 'a',
          text: 'File the assessment results in the project database without distributing to other technical management processes.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The Technical Assessment Process is designed to provide inputs to other technical management processes. Simply filing results without distribution prevents integration with Risk Management and Interface Management Process activities. Technical assessment findings should actively support ongoing technical management across all processes.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Distribute assessment findings only to senior management while excluding working-level engineers from other processes.',
          termIndices: [t('Technical Assessment Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Technical assessment results need to reach both management and working-level practitioners in other technical processes. Excluding engineers from Risk Management and Interface Management Process activities prevents effective integration of assessment findings into ongoing technical work. Comprehensive distribution ensures process integration.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 3, budget: 0 },
        },
        {
          id: 'c',
          text: 'Systematically distribute assessment findings to Risk Management and Interface Management Process teams with specific recommendations for integration.',
          termIndices: [t('Technical Assessment Process'), t('Risk Management'), t('Interface Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Technical Assessment Process is most effective when findings are systematically integrated with other technical management processes. By distributing specific recommendations to Risk Management and Interface Management Process teams, you ensure that assessment results actively support ongoing technical activities and decision-making throughout the program.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully implemented the Technical Assessment Process by establishing comprehensive assessment framework, conducting systematic technical progress evaluation, and integrating findings with other technical management processes. Your approach demonstrates proper understanding of the six assessment criteria and the importance of objective, data-driven technical assessment for program health monitoring.',
    failureNarrative:
      'Your implementation of the Technical Assessment Process had significant gaps in systematic evaluation and process integration. Effective technical assessment requires comprehensive framework addressing all six criteria, objective analysis of technical progress against plans, and proper integration with Risk Management and other technical processes to support informed decision-making.',
    successThreshold: 60,
  },
}
