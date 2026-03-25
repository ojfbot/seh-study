import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh55ProductTransition: ScenarioTemplate = {
  meta: {
    id: 'seh-5-5-product-transition',
    title: 'Satellite Subsystem Integration Handoff',
    subtitle: 'Navigate the product transition of a verified Earth observation satellite subsystem to system integration',
    difficulty: 'intermediate',
    categories: ['configuration', 'verification', 'project-mgmt'],
    termIndices: [
      t('Product Transition Process'),
      t('End Product'),
      t('Customer'),
      t('System Structure'),
      t('Product'),
      t('Verification (of a product)'),
      t('Configuration Items (CI)'),
      t('Technical Data Package'),
      t('System'),
      t('WBS Model'),
      t('Test'),
      t('Baseline'),
      t('Process'),
      t('Activity')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Preparation',
      title: 'Readiness Assessment',
      narrative:
        'Your team has completed development of the Advanced Thermal Imaging Subsystem (ATIS) for the Earth observation satellite. The subsystem has passed all component-level tests and verification activities. The system integration team at the next level in the system structure is requesting delivery of your end product for integration into the complete satellite system. You must determine if the subsystem is ready for product transition.',
      termHighlights: [t('Product Transition Process'), t('End Product'), t('System Structure')],
      decisions: [
        {
          id: 'a',
          text: 'Ship the hardware immediately since component testing is complete, and provide documentation later.',
          termIndices: [t('End Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Product transition requires more than just hardware delivery. The receiving customer needs complete technical data packages, verification results, and configuration documentation to properly integrate your end product. Shipping hardware without proper documentation violates the product transition process and creates integration risks.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Conduct a comprehensive review of all verification results, configuration items, and technical data packages before declaring readiness.',
          termIndices: [t('Verification (of a product)'), t('Configuration Items (CI)'), t('Technical Data Package')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The product transition process requires ensuring the product has been properly tested and verified before shipping to the next level customer. A comprehensive review of verification results, configuration status, and technical documentation ensures the receiving team has everything needed for successful integration.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait for the integration team to formally request all deliverables before beginning any transition activities.',
          termIndices: [t('Customer')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Effective product transition is proactive, not reactive. Waiting for the customer to request specific deliverables can cause schedule delays and suggests poor planning. The product transition process should be initiated based on completion of verification activities and established success criteria, not customer requests.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 3, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Documentation',
      title: 'Technical Data Package Preparation',
      narrative:
        'Your review reveals that while hardware verification is complete, several elements of the technical data package need attention. The integration team requires interface control documents, test reports, and as-built configuration data. Some test documentation exists only in draft form, and configuration baselines need final approval signatures. How do you prioritize completing the technical data package?',
      termHighlights: [t('Technical Data Package'), t('Baseline'), t('Configuration Items (CI)')],
      decisions: [
        {
          id: 'a',
          text: 'Focus only on the interface control documents since those are most critical for integration activities.',
          termIndices: [t('Technical Data Package')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While interface control documents are important, a complete technical data package includes all verification results, configuration data, and operational procedures. Delivering an incomplete package forces the integration team to work with insufficient information and increases integration risk.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Complete all documentation elements in parallel, ensuring test reports are finalized and configuration baselines are properly approved before transition.',
          termIndices: [t('Technical Data Package'), t('Baseline'), t('Test')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The product transition process requires complete and accurate technical data packages. All elements - test reports, interface documents, and approved configuration baselines - are necessary for the receiving customer to properly integrate your product into their system. Parallel completion ensures no critical information is missing.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Deliver draft documentation now and promise to provide final versions after hardware integration begins.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Draft documentation creates uncertainty and integration risks. The product transition process emphasizes delivering verified and validated products with complete, approved documentation. Integration teams need final, approved baselines to make informed decisions and avoid rework.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Coordination',
      title: 'Customer Handoff Planning',
      narrative:
        'The technical data package is nearing completion, and you need to coordinate the actual product transition with the integration team. They have requested a formal handoff meeting to review all deliverables and discuss integration procedures. The meeting will include hardware transfer, documentation review, and technical briefings. How do you structure this transition activity to ensure success?',
      termHighlights: [t('Customer'), t('Activity'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Schedule a brief meeting to transfer hardware and documents, then let the integration team contact you if they have questions.',
          termIndices: [t('Customer')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Product transition is more than just a handoff - it bridges from one level of the system to the next. A brief meeting without proper technical exchange leaves the customer without adequate understanding of your product, potentially causing integration problems and requiring additional support activities.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Organize comprehensive transition activities including hardware inspection, document walkthrough, technical briefings, and integration support planning.',
          termIndices: [t('Activity'), t('Process'), t('Product Transition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Effective product transition includes comprehensive activities that ensure the receiving customer understands the product completely. Hardware inspection verifies physical condition, document walkthroughs ensure understanding of technical data, and support planning establishes ongoing communication. This approach minimizes integration risks.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Require the integration team to demonstrate their understanding of your subsystem before releasing any hardware.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While ensuring customer understanding is important, requiring formal demonstrations before transition creates unnecessary barriers and delays. The product transition process should be collaborative, with your team providing support and clarification rather than testing the receiving customer\'s competence.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 4, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Integration Support',
      title: 'Post-Transition Activities',
      narrative:
        'The subsystem has been successfully transitioned to the integration team, but they encounter unexpected interface issues during initial integration tests. The problems appear related to thermal management protocols that worked correctly in your component-level testing. The integration team requests your support to resolve these issues. How do you respond to this post-transition situation?',
      termHighlights: [t('Product'), t('System'), t('WBS Model')],
      decisions: [
        {
          id: 'a',
          text: 'Inform them that your responsibility ended with product transition and they must resolve integration issues independently.',
          termIndices: [t('Product Transition Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Product transition is a bridge between system levels, not an endpoint of responsibility. While formal ownership transfers to the receiving customer, supporting successful integration of your product into the larger system is part of effective systems engineering. Refusing support damages relationships and project success.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: 0 },
        },
        {
          id: 'b',
          text: 'Immediately deploy your full development team to the integration facility to take over troubleshooting activities.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While support is appropriate, deploying your entire team represents inefficient resource utilization. The integration team should maintain primary responsibility for integration activities, with your team providing targeted expertise and consultation rather than taking over their work.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 1, budget: 4 },
        },
        {
          id: 'c',
          text: 'Provide technical consultation and expertise to help diagnose the interface issues while maintaining clear responsibility boundaries.',
          termIndices: [t('Product'), t('WBS Model'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Post-transition support maintains the collaborative relationship between system levels while respecting the WBS model structure. Your expertise with the subsystem can help resolve integration issues efficiently, but the integration team retains primary responsibility for their activities. This approach supports overall system success.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Lessons Learned',
      title: 'Process Improvement',
      narrative:
        'The integration issues have been resolved through collaborative troubleshooting, and the subsystem is now functioning correctly in the satellite system. The experience revealed that some thermal interface assumptions made during component-level testing did not account for system-level interactions. You need to capture lessons learned to improve future product transition processes for similar subsystems.',
      termHighlights: [t('Process'), t('Product Transition Process')],
      decisions: [
        {
          id: 'a',
          text: 'Document the specific technical issues encountered and add them to the subsystem user manual for future reference.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Documenting technical issues is valuable but addresses symptoms rather than process improvements. While acceptable, this approach misses the opportunity to enhance the product transition process itself, such as improving coordination between component and system-level testing or enhancing technical data package content.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Revise the product transition process to include enhanced coordination between component and system-level testing phases.',
          termIndices: [t('Process'), t('Product Transition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Process improvement focuses on preventing similar issues in future product transitions. Enhanced coordination between testing phases can identify interface assumptions early and ensure component-level verification better reflects system-level conditions. This systemic approach improves the product transition process for all future projects.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Recommend that all future subsystems undergo system-level testing before any product transition activities begin.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Requiring full system-level testing before product transition defeats the purpose of hierarchical system development and the WBS model structure. This approach would eliminate the benefits of parallel development and significantly increase program costs and schedule. The product transition process is designed to work with appropriate verification at each system level.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 5, budget: 4 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully managed the product transition process by ensuring proper verification, complete technical data packages, and effective customer coordination. Your systematic approach to bridging between system levels demonstrates understanding of how product transition supports overall system development.',
    failureNarrative: 'Your approach to product transition created risks and inefficiencies by not following proper process steps. Successful product transition requires comprehensive preparation, complete documentation, and collaborative customer relationships to effectively bridge between system structure levels.',
    successThreshold: 60,
  },
}
