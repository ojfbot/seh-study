import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh5513Outputs: ScenarioTemplate = {
  meta: {
    id: 'seh-5-5-1-3-outputs',
    title: 'Lunar Gateway Module Delivery',
    subtitle: 'Coordinate final product delivery and transition activities',
    difficulty: 'intermediate',
    categories: ['lifecycle', 'project-mgmt', 'verification'],
    termIndices: [
      t('End Product'),
      t('Product'),
      t('System'),
      t('Enabling Products'),
      t('Product Realization'),
      t('System Structure'),
      t('Test'),
      t('Transition'),
      t('Data Management'),
      t('Demonstration'),
      t('Inspection'),
      t('Model'),
      t('Deliverable Data Item'),
      t('Baseline'),
      t('Validated Requirements')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Product Delivery Planning',
      title: 'Delivery Path Decision',
      narrative:
        'Your lunar gateway life support module has completed final verification testing and is ready for delivery. The module must be packaged with appropriate documentation and transitioned either to the next integration level or directly to end users at Kennedy Space Center. The flight director asks you to determine the correct delivery path based on the current system structure.',
      termHighlights: [t('End Product'), t('System Structure'), t('Transition')],
      decisions: [
        {
          id: 'a',
          text: 'Deliver directly to end users since all testing is complete and the module is ready for launch.',
          termIndices: [t('End Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. The life support module is a component within the larger gateway system structure. It must be delivered to the next integration level where it will be integrated with other subsystems before final delivery to end users.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Deliver to the next integration level up in the system structure with appropriate documentation for integration activities.',
          termIndices: [t('System Structure'), t('Transition'), t('Product')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. As a subsystem component, the life support module must be delivered to the next integration level. This includes packaging it with draft installation manuals, configuration baselines, specifications, and test results for the integration team.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Keep the module in storage until all other gateway components are ready for simultaneous delivery.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach creates unnecessary schedule delays and storage costs. Proper product realization involves timely transition of completed end products to enable parallel integration activities across the system structure.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Documentation Package Assembly',
      title: 'Required Documentation Set',
      narrative:
        'You are preparing the documentation package for the life support module delivery. The integration team needs specific technical documents to support their activities, and you must ensure all baseline documents are included. Your documentation specialist asks which documents are required for this integration-level delivery.',
      termHighlights: [t('Deliverable Data Item'), t('Baseline'), t('Data Management')],
      decisions: [
        {
          id: 'a',
          text: 'Include only the final operation and maintenance manuals since those are what operators will eventually need.',
          termIndices: [t('Deliverable Data Item')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Final manuals are for end user delivery, not integration-level delivery. For integration activities, you need draft installation manuals, configuration baselines, specifications, stakeholder expectations, and verification test results.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Provide draft installation manuals, configuration baseline, specifications, stakeholder expectations, and test results.',
          termIndices: [t('Baseline'), t('Data Management'), t('Test')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Integration-level deliveries require draft documentation including installation procedures, configuration baselines, technical specifications, stakeholder expectations, and verification test results. This supports proper data management throughout the system structure.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Send only the test results since the integration team just needs to verify the module works properly.',
          termIndices: [t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Test results alone are insufficient for integration activities. The integration team needs installation procedures, interface specifications, configuration details, and stakeholder expectations to properly incorporate the module into the larger system.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Enabling Products Assessment',
      title: 'Support Equipment Transition',
      narrative:
        'During development, your team created specialized test equipment, handling fixtures, and integration procedures specifically for the life support module. The project manager asks whether these enabling products should be transitioned to the integration team along with the primary end product. You must determine which enabling products are needed for the next phase.',
      termHighlights: [t('Enabling Products'), t('Product Realization')],
      decisions: [
        {
          id: 'a',
          text: 'Retain all enabling products since they were developed by your team and may be needed for future modifications.',
          termIndices: [t('Enabling Products')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Retaining all enabling products prevents the integration team from having the tools they need. Some enabling products like specialized handling equipment and integration procedures must be transitioned to support the next phase.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Transition specialized integration equipment, handling fixtures, and procedures needed for the integration phase.',
          termIndices: [t('Enabling Products'), t('Product Realization'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Enabling products that support the next life cycle phase must be transitioned along with the end product. This includes integration tools, handling equipment, and procedures that the integration team needs to incorporate the module into the larger system.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Send only the procedures manual since the integration team can fabricate their own tools and equipment.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Having the integration team recreate specialized tools wastes time and budget. Proper product realization includes transitioning all enabling products that support subsequent life cycle phases.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Delivery Verification',
      title: 'Integration Readiness Confirmation',
      narrative:
        'The life support module and supporting documentation have been packaged for delivery to the integration facility. Before signing off on the delivery, you must confirm the end product is in suitable condition for integration activities. The integration team leader wants assurance that all verification activities are complete and properly documented.',
      termHighlights: [t('End Product'), t('System Structure'), t('Validated Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Perform a final inspection and demonstration to verify all requirements are met and document the results.',
          termIndices: [t('Inspection'), t('Demonstration'), t('Validated Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Before delivery, you must confirm through inspection and demonstration that all requirements are satisfied. This ensures the end product is suitable for integration and that all verification activities are properly documented for the receiving organization.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Ship immediately since all testing was completed last month and documented in the test reports.',
          termIndices: [t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Relying solely on previous test results without final verification checks risks delivering a product that may have been damaged or degraded during packaging and handling activities. Final confirmation is essential.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Request the integration team perform their own verification since they will be responsible for the module going forward.',
          termIndices: [t('System Structure')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The delivering organization is responsible for ensuring the end product meets its requirements before transition. Shifting this responsibility to the receiving organization violates proper product realization principles and introduces unnecessary risk.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Transition Documentation',
      title: 'Lessons Learned Capture',
      narrative:
        'The life support module has been successfully delivered to the integration team along with all required documentation and enabling products. As part of completing the transition process, you must document the work products from the transition activities including any lessons learned, corrective actions taken, and decisions made during the delivery process. The project manager emphasizes the importance of capturing this knowledge for future deliveries.',
      termHighlights: [t('Transition'), t('Data Management')],
      decisions: [
        {
          id: 'a',
          text: 'Create a brief email summary of the delivery and file it in the project folders.',
          termIndices: [t('Data Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A brief email is insufficient for capturing the detailed work products from transition activities. You need comprehensive documentation of procedures, decisions, assumptions, anomalies, corrective actions, and lessons learned for future reference.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 1 },
        },
        {
          id: 'b',
          text: 'Document procedures, decisions, assumptions, anomalies, corrective actions, and lessons learned from the transition.',
          termIndices: [t('Transition'), t('Data Management'), t('Product')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Complete transition documentation must capture all work products including procedures used, decisions made, assumptions, any anomalies encountered, corrective actions taken, and lessons learned. This knowledge supports continuous improvement in product realization processes.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Skip detailed documentation since the delivery was successful and focus on the next module.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Even successful deliveries generate valuable lessons learned and process improvements. Failing to document transition activities wastes institutional knowledge and prevents process optimization for future deliveries within the system structure.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully managed the transition of the life support module to the integration team with complete documentation and supporting enabling products. Your systematic approach to product delivery ensures smooth integration activities and captures valuable lessons for future deliveries.',
    failureNarrative: 'The module delivery encountered significant issues due to incomplete documentation packages, missing enabling products, or inadequate transition procedures. These gaps will likely cause integration delays and increase program risk.',
    successThreshold: 60,
  },
}
