import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh5511Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-5-5-1-1-inputs',
    title: 'Mars Rover Transition Package',
    subtitle: 'Prepare the complete input package for transitioning your rover to launch operations',
    difficulty: 'advanced',
    categories: ['project-mgmt', 'configuration', 'verification'],
    termIndices: [
      t('Product Transition Process'),
      t('End Product'),
      t('Product Validation Process'),
      t('Technical Data Management Process'),
      t('Enabling Products'),
      t('Configuration Management Process'),
      t('Test'),
      t('Customer'),
      t('Transition'),
      t('Product Realization'),
      t('Data Management'),
      t('Specification'),
      t('Safety'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Phase D',
      title: 'Validated Product Ready',
      narrative:
        'Your Mars rover has successfully completed the Product Validation Process and is ready for transition to the launch operations team. As Mission Assurance Engineer, you must ensure all required inputs are properly prepared for the Product Transition Process. The launch operations customer is expecting a complete package that includes the validated rover, all documentation, and enabling products for safe handling and transport.',
      termHighlights: [
        t('Product Transition Process'),
        t('Product Validation Process'),
        t('End Product'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Coordinate with Technical Data Management Process to ensure the validated rover, complete documentation package, and all transition-enabling products are properly configured for handover.',
          termIndices: [
            t('Technical Data Management Process'),
            t('End Product'),
            t('Enabling Products'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook specifies that Product Transition Process inputs include the validated end product, documentation from Technical Data Management Process, and enabling products. This systematic approach ensures nothing is overlooked.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Focus primarily on the rover hardware since that is the main deliverable, and provide basic documentation as needed.',
          termIndices: [t('End Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Incomplete approach. While the rover is the primary end product, the transition process requires comprehensive documentation and enabling products. Missing elements could delay launch operations or create safety risks.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Ship the rover immediately since validation is complete, and send documentation separately to save time.',
          termIndices: [t('Product Validation Process'), t('Transition')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Unacceptable. Separating the end product from its documentation violates transition process requirements and creates significant risk. The customer needs complete information for safe handling and integration.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Phase D',
      title: 'Documentation Package Assembly',
      narrative:
        'You are reviewing the documentation requirements for the rover transition. The package must include verification and validation conformance proof, configuration control records, test reports, and safety documentation. The launch operations team specifically requested detailed handling instructions for the rover\'s radioisotope thermoelectric generator and scientific instruments.',
      termHighlights: [
        t('Technical Data Management Process'),
        t('Configuration Management Process'),
        t('Test'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Compile comprehensive documentation including verification/validation proof, configuration control records, test reports, safety tags and markings, and detailed handling procedures for hazardous components.',
          termIndices: [
            t('Technical Data Management Process'),
            t('Configuration Management Process'),
            t('Test'),
            t('Safety'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent. The SE Handbook emphasizes that documentation must include proof of verification/validation conformance, configuration control, and special safety considerations. Hazardous materials require clearly identifiable markings and handling instructions.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Provide standard test reports and basic specifications, assuming the launch team has experience with similar rovers.',
          termIndices: [t('Test'), t('Specification')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky assumption. Each product transition requires documentation specific to that product\'s unique characteristics and current state. Generic documentation may not address critical safety or handling requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus on the scientific instrument documentation since that represents the mission-critical capability.',
          termIndices: [t('End Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inadequate. While scientific instruments are important, the entire rover system requires complete documentation. Missing safety documentation for the power system or mobility components could create serious hazards.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Phase D',
      title: 'Enabling Products Assessment',
      narrative:
        'The rover requires specialized handling equipment, protective covers, environmental monitoring systems, and trained personnel for safe transport to the launch facility. Some of these enabling products were developed during rover realization, while others need to be procured specifically for the transition. The transport timeline is tight, and the launch window is fixed.',
      termHighlights: [
        t('Enabling Products'),
        t('Product Realization'),
        t('Safety'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Evaluate all enabling products for readiness, modify existing ones as needed to meet transition requirements, and procure additional products for transportation, monitoring, and personnel safety.',
          termIndices: [
            t('Enabling Products'),
            t('Safety'),
            t('Product Transition Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct approach. The SE Handbook notes that enabling products may require modification for transition and that sensitive products need special monitoring and safety equipment. Comprehensive evaluation ensures nothing is overlooked.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -2 },
        },
        {
          id: 'b',
          text: 'Use the existing development handling equipment and add minimal additional protection for transport.',
          termIndices: [t('Enabling Products')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Potentially inadequate. Development handling equipment may not satisfy all transportation and storage requirements. The handbook emphasizes that temporary accommodations often need modification for full transition requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Rely on the launch facility to provide necessary handling equipment since they are the receiving customer.',
          termIndices: [t('Customer'), t('Enabling Products')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Unacceptable assumption. The Product Transition Process requires that enabling products accompany the end product. You cannot assume the customer has appropriate equipment for your specific product\'s needs.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 0, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Phase D',
      title: 'Product Form Considerations',
      narrative:
        'You realize the rover represents a complex end product that will eventually integrate with the launch vehicle, cruise stage, and entry system. This is part of a recursive process where your rover transitions to become a component in the larger Mars mission system. The launch operations team needs to understand both the rover as a standalone product and its role in the integrated mission architecture.',
      termHighlights: [
        t('Product'),
        t('System'),
        t('Recursive'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document the rover as both a complete end product and as a component for integration into the higher-level mission system, ensuring the transition package supports both perspectives.',
          termIndices: [
            t('End Product'),
            t('System'),
            t('Recursive'),
            t('Product Transition Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent systems thinking. The SE Handbook describes how products transition from lower to higher system levels through recursive application of the transition process. Your rover is both an end product and a component.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Treat the rover as a standalone end product since the launch team requested the rover specifically.',
          termIndices: [t('End Product'), t('Customer')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Limited perspective. While the rover is indeed an end product at its level, the launch operations will need to integrate it into higher-level systems. Missing this context could complicate later integration activities.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus on the rover\'s integration requirements since that is what the launch team really needs.',
          termIndices: [t('Product'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incomplete approach. The transition process requires consideration of the product in its current form as well as its integration role. Neglecting the rover\'s standalone characteristics could create operational problems.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Phase D',
      title: 'Transition Package Validation',
      narrative:
        'Before finalizing the transition to launch operations, you conduct a final review of all inputs to the Product Transition Process. The validated rover, comprehensive documentation package, and enabling products are assembled and ready. The launch operations customer has scheduled a formal acceptance review, and you need to ensure everything meets their specified transition requirements.',
      termHighlights: [
        t('Product Transition Process'),
        t('Customer'),
        t('Data Management'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a systematic verification that all transition inputs are complete, properly documented, and ready for customer acceptance, with clear traceability to transition requirements.',
          termIndices: [
            t('Product Transition Process'),
            t('Customer'),
            t('Data Management'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect execution. The SE Handbook emphasizes that transition inputs must be verified against requirements before handover. Systematic verification ensures customer acceptance and prevents delays or rework.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Package everything that has been prepared and deliver it to meet the scheduled handover date.',
          termIndices: [t('Product Transition Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Rushed approach that could miss critical elements. While meeting schedules is important, delivering an incomplete or unverified transition package creates risk for both you and the customer.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus on the most critical items and note any deficiencies for later correction.',
          termIndices: [t('End Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Unacceptable practice. Knowingly delivering a deficient transition package violates the process requirements and creates significant risk. All inputs must be complete and verified before transition.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: -1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'Excellent work preparing the comprehensive transition package. You demonstrated thorough understanding of Product Transition Process inputs including the validated end product, complete documentation from Technical Data Management Process, and all necessary enabling products. Your systematic approach ensures safe and successful handover to the launch operations customer.',
    failureNarrative:
      'Your transition package preparation revealed gaps in understanding the complete input requirements for Product Transition Process. Missing or inadequate documentation, enabling products, or verification could jeopardize the mission timeline and create safety risks during launch operations.',
    successThreshold: 65,
  },
}
