import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6113Outputs: ScenarioTemplate = {
  meta: {
    id: 'seh-6-1-1-3-outputs',
    title: 'Planning Deliverables Review',
    subtitle: 'Define technical planning outputs for sounding rocket mission',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'requirements', 'lifecycle'],
    termIndices: [
      t('Technical Planning Process'),
      t('Work Breakdown Structure (WBS)'),
      t('Systems Engineering Management Plan (SEMP)'),
      t('Technical Data Management Process'),
      t('Requirements Management Process'),
      t('Technical Cost Estimate'),
      t('Baseline'),
      t('Product'),
      t('Process'),
      t('Evaluation'),
      t('Bidirectional Traceability'),
      t('Data Management'),
      t('Technical Assessment Process'),
      t('Technical Measures')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Planning Documentation',
      title: 'SEMP Development Priority',
      narrative:
        'As HSI Lead for the sounding rocket mission, you are reviewing the technical planning process outputs. The project manager needs the Systems Engineering Management Plan baseline completed first to support upcoming design reviews. Your team has developed a preliminary technical planning strategy and cost estimates, but resources are limited. You must prioritize which planning outputs to deliver first.',
      termHighlights: [t('Technical Planning Process'), t('Systems Engineering Management Plan (SEMP)'), t('Baseline')],
      decisions: [
        {
          id: 'a',
          text: 'Deliver the detailed cost estimates and resource allocation sheets first since budget approval drives all subsequent activities.',
          termIndices: [t('Technical Cost Estimate')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While cost estimates are important, the SEMP provides the foundational technical planning strategy that guides how resources will be used. Cost estimates are more accurate when based on a complete SEMP baseline that defines the technical approach and work breakdown structure.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Complete the SEMP baseline first as it provides the technical planning framework that all other outputs depend upon.',
          termIndices: [t('Systems Engineering Management Plan (SEMP)'), t('Baseline'), t('Technical Planning Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SEMP serves as the foundation for all technical planning activities. It establishes the technical strategy, processes, and structure that guide development of cost estimates, work packages, and other planning outputs. Completing the SEMP baseline first ensures consistency across all subsequent deliverables.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus on generating technical work directives and task orders to get the technical teams started immediately.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Creating work directives without a complete SEMP baseline risks misdirected effort and rework. Technical teams need clear guidance from the established technical planning strategy before beginning detailed work. This approach could lead to significant schedule and budget impacts.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Work Breakdown Structure',
      title: 'WBS Structure Decision',
      narrative:
        'With the SEMP baseline in development, you need to define the Work Breakdown Structure for the sounding rocket mission. The WBS will drive cost estimation and resource allocation across all technical processes. Your team debates whether to organize the WBS by mission phases, by subsystems, or by technical disciplines. This decision will impact how technical data and progress measures are tracked.',
      termHighlights: [t('Work Breakdown Structure (WBS)'), t('Technical Data Management Process'), t('Technical Measures')],
      decisions: [
        {
          id: 'a',
          text: 'Organize the WBS by mission lifecycle phases to align with standard project management practices.',
          termIndices: [t('Work Breakdown Structure (WBS)'), t('Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Phase-based organization provides good project visibility but may complicate technical integration activities that span multiple phases. For a sounding rocket mission with strong subsystem interdependencies, this approach could make requirements traceability and technical assessment more difficult.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Structure the WBS by major subsystems to support integrated technical management and clear accountability.',
          termIndices: [t('Work Breakdown Structure (WBS)'), t('Technical Assessment Process'), t('Evaluation')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A subsystem-based WBS aligns well with technical processes and supports clear technical assessment and evaluation. This structure facilitates requirements management, technical data organization, and performance measurement while maintaining clear lines of accountability for each major system element.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Create a hybrid WBS mixing different organizational schemes to capture all project aspects.',
          termIndices: [t('Work Breakdown Structure (WBS)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Hybrid WBS structures often create confusion in responsibility assignment and complicate data management. Mixed organizational schemes make it difficult to maintain bidirectional traceability and can lead to gaps or overlaps in technical planning coverage.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Requirements Traceability',
      title: 'Technical Data Package Scope',
      narrative:
        'The requirements management process is generating significant technical data that must be captured and managed. Your team needs to define what technical work products from the planning process should be included in the formal technical data package. The Requirements Management Process demands bidirectional traceability, but comprehensive documentation requires substantial resources. You must balance thoroughness with practical constraints.',
      termHighlights: [t('Requirements Management Process'), t('Technical Data Management Process'), t('Bidirectional Traceability')],
      decisions: [
        {
          id: 'a',
          text: 'Include all technical planning work products to ensure complete traceability and documentation.',
          termIndices: [t('Technical Data Management Process'), t('Traceability')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While comprehensive documentation supports traceability, including all work products can overwhelm the data management process and increase costs. Focus should be on products that directly support technical decision-making and requirements verification rather than administrative completeness.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 3 },
        },
        {
          id: 'b',
          text: 'Focus on technical work products that support requirements traceability and technical assessment activities.',
          termIndices: [t('Bidirectional Traceability'), t('Technical Assessment Process'), t('Data Management')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The technical data package should prioritize products that enable bidirectional traceability and support ongoing technical assessment. This includes requirements allocation matrices, technical measures definitions, and verification planning documents that directly contribute to mission success.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Limit the technical data package to only externally required deliverables to minimize overhead.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Focusing only on external deliverables neglects internal technical needs for requirements management and process evaluation. This approach could compromise the ability to maintain proper traceability and conduct effective technical assessments throughout the mission lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Process Measures',
      title: 'Technical Progress Metrics',
      narrative:
        'Your technical planning outputs must include process measures for assessing technical progress and process effectiveness. The Technical Assessment Process requires specific metrics to evaluate how well the technical effort is performing. You need to define which measures will provide meaningful insight into both technical progress and process performance without creating excessive reporting burden.',
      termHighlights: [t('Technical Assessment Process'), t('Technical Measures'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Implement comprehensive metrics covering all technical processes to ensure complete visibility.',
          termIndices: [t('Technical Measures'), t('Evaluation')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Comprehensive metrics provide good visibility but can overwhelm teams with reporting requirements. For a sounding rocket mission, focus should be on key technical and process measures that directly indicate mission readiness and technical effectiveness rather than measuring everything.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Select key technical performance measures and process effectiveness indicators that align with mission-critical functions.',
          termIndices: [t('Technical Measures'), t('Technical Assessment Process'), t('Evaluation')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Effective technical measures focus on mission-critical parameters and process indicators that provide early warning of technical risks or process breakdowns. This balanced approach supports the Technical Assessment Process while maintaining manageable reporting overhead.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Use only standard project management metrics since they are already established and well-understood.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Standard project metrics alone do not capture the technical progress and process effectiveness needed for systems engineering assessment. Technical measures must address design maturity, verification progress, and technical risk trends specific to the mission requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Resource Planning',
      title: 'Cost Estimate Validation',
      narrative:
        'Your technical planning process has generated cost estimates and resource needs for the sounding rocket mission. The project manager questions whether the estimates adequately account for human systems integration activities and technical data management overhead. Before finalizing the technical planning outputs, you must validate that your cost estimates reflect the true scope of technical work required.',
      termHighlights: [t('Technical Cost Estimate'), t('Technical Planning Process'), t('Product')],
      decisions: [
        {
          id: 'a',
          text: 'Defend the current estimates as adequate since they follow standard cost estimation methodologies.',
          termIndices: [t('Technical Cost Estimate')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Standard methodologies may not fully capture the unique aspects of HSI work and technical data management for this mission. Cost estimates should reflect the actual work products and processes defined in the technical planning strategy rather than relying solely on historical analogies.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 4 },
        },
        {
          id: 'b',
          text: 'Review the cost estimates against the detailed work products and processes defined in the SEMP to identify any gaps.',
          termIndices: [t('Technical Cost Estimate'), t('Systems Engineering Management Plan (SEMP)'), t('Product')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Cost estimates should align with the specific work products and processes defined in your technical planning strategy. Reviewing estimates against the SEMP ensures that all technical activities, including HSI and data management tasks, are properly resourced.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Add a standard percentage contingency to cover any overlooked activities without detailed analysis.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While contingency is important, adding percentage-based reserves without understanding specific gaps does not address potential systematic underestimation. A detailed review of technical planning outputs against actual work requirements provides better cost accuracy.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully established comprehensive technical planning outputs that provide a solid foundation for the sounding rocket mission. Your systematic approach to SEMP development, WBS structure, and technical data management ensures effective coordination across all technical processes.',
    failureNarrative:
      'The technical planning outputs lack sufficient integration and may not adequately support the mission\'s technical management needs. Consider how the various planning products work together to enable effective requirements management and technical assessment throughout the mission lifecycle.',
    successThreshold: 60,
  },
}
