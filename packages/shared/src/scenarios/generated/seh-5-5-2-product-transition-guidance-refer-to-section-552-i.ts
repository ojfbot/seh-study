import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh552ProductTransitionGuidanceReferToSection552I: ScenarioTemplate = {
  meta: {
    id: 'seh-5-5-2-product-transition-guidance-refer-to-section-552-i',
    title: 'ISS Experiment Module Handoff',
    subtitle: 'Navigate the transition of a completed science experiment to operations',
    difficulty: 'advanced',
    categories: ['lifecycle', 'project-mgmt', 'configuration'],
    termIndices: [
      t('Product Transition Process'),
      t('Transition'),
      t('Product'),
      t('End Product'),
      t('Enabling Products'),
      t('Technical Data Package'),
      t('Configuration Items (CI)'),
      t('Configuration Management Process'),
      t('Technical Data Management Process'),
      t('Deliverable Data Item'),
      t('Customer'),
      t('Operational Environment'),
      t('Technical Team'),
      t('Project'),
      t('Mission')
    ],
    estimatedMinutes: 20,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase E',
      title: 'Experiment Module Ready for Handoff',
      narrative: 'Your ISS protein crystallization experiment module has completed all verification activities and is ready for transition to the ISS operations team. The operations team is requesting all documentation, training materials, and configuration data. You must determine the complete set of products that need to be transitioned beyond just the physical hardware.',
      termHighlights: [t('Product Transition Process'), t('Product'), t('End Product')],
      decisions: [
        {
          id: 'a',
          text: 'Execute a formal Product Transition Process that includes both the end product (experiment module) and all enabling products (procedures, training materials, maintenance guides, and technical data packages).',
          termIndices: [t('Product Transition Process'), t('End Product'), t('Enabling Products'), t('Technical Data Package')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The NASA SE Handbook emphasizes that product transition must include both end products that perform operational functions and enabling products that provide life cycle support services. This comprehensive approach ensures successful handoff.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        },
        {
          id: 'b',
          text: 'Focus primarily on transitioning the physical experiment module hardware since that is the main deliverable, with documentation as a secondary priority.',
          termIndices: [t('Product'), t('Deliverable Data Item')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Incomplete approach. While the hardware is critical, operations teams need comprehensive enabling products to successfully operate and maintain the system. Missing documentation and procedures create operational risks.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 }
        },
        {
          id: 'c',
          text: 'Hand over the experiment module with basic operating instructions, assuming the operations team can figure out the details.',
          termIndices: [t('Product'), t('Customer')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Unacceptable. This violates fundamental transition principles. The receiving organization must have complete information to safely and effectively operate the system. Inadequate transition documentation creates safety and mission risks.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Phase E',
      title: 'Configuration Control Handoff',
      narrative: 'The operations team needs to understand exactly what configuration items they are receiving and how configuration control will be managed going forward. They want to know which items remain under your development team control versus what transfers to their operational configuration management. You must establish clear configuration management boundaries for the transition.',
      termHighlights: [t('Configuration Items (CI)'), t('Configuration Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Provide a complete Configuration Items list with clear designation of which items transfer to operations control and which remain under development team control, along with established change control procedures.',
          termIndices: [t('Configuration Items (CI)'), t('Configuration Management Process'), t('Technical Data Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Clear configuration management boundaries are essential for successful product transition. The operations team must understand exactly what they control and the processes for managing changes to those items.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        },
        {
          id: 'b',
          text: 'Transfer all configuration items to operations with the understanding that they can make changes as needed for operational efficiency.',
          termIndices: [t('Configuration Items (CI)'), t('Customer')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Risky approach. Some configuration items may need to remain under development team control to maintain technical integrity. Uncontrolled changes by operations could compromise system performance or safety.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Keep all configuration items under development team control to maintain technical authority over the experiment.',
          termIndices: [t('Configuration Items (CI)'), t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Unworkable approach. Operations teams need control over items they must maintain and operate. This creates an unsustainable dependency and prevents effective operational management of the system.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Phase E',
      title: 'Technical Data Package Completeness',
      narrative: 'You are finalizing the technical data package for transition to operations. The package includes schematics, test results, operating procedures, and maintenance schedules. However, the operations team has requested additional information about failure modes, troubleshooting procedures, and spare parts recommendations that were not originally planned as deliverables.',
      termHighlights: [t('Technical Data Package'), t('Technical Data Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Expand the technical data package to include the requested operational support information, ensuring the operations team has comprehensive data for effective system management throughout its operational life.',
          termIndices: [t('Technical Data Package'), t('Technical Data Management Process'), t('Operational Environment')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. A complete technical data package should support the entire operational life of the system. Including failure mode analysis, troubleshooting guides, and maintenance information enables effective operational management.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -1 }
        },
        {
          id: 'b',
          text: 'Deliver the technical data package as originally scoped and offer to provide the additional information as a separate follow-on activity if budget allows.',
          termIndices: [t('Technical Data Package'), t('Project')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Suboptimal approach. While this meets contractual obligations, it may leave gaps in operational support capability. The additional information is likely essential for safe and effective operations.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 }
        },
        {
          id: 'c',
          text: 'Deliver only the originally planned technical data package, stating that additional operational information is the responsibility of the operations team to develop.',
          termIndices: [t('Technical Data Package'), t('Customer')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Unacceptable approach. This creates knowledge gaps that could compromise operational safety and effectiveness. The development team has the technical knowledge needed for comprehensive operational support information.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 2, budget: 2 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Phase E',
      title: 'Operational Environment Integration',
      narrative: 'The ISS operations team has identified potential conflicts between your experiment module and existing ISS systems during operational integration testing. They need your technical team to support resolution of these integration issues, but your project is officially complete and the team is transitioning to other assignments. You must determine the appropriate level of post-transition support.',
      termHighlights: [t('Operational Environment'), t('Technical Team'), t('Mission')],
      decisions: [
        {
          id: 'a',
          text: 'Provide technical team support for operational integration issues as part of ensuring successful product transition, even if it extends beyond formal project completion.',
          termIndices: [t('Technical Team'), t('Operational Environment'), t('Product Transition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Successful product transition includes ensuring the product can effectively operate in its intended environment. Supporting resolution of integration issues is part of responsible transition practice.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -2 }
        },
        {
          id: 'b',
          text: 'Provide limited consultation support while encouraging the operations team to develop their own solutions to the integration issues.',
          termIndices: [t('Technical Team'), t('Customer')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Marginal approach. While this provides some support, complex integration issues may require deep technical knowledge that only the development team possesses. Limited support may not be sufficient.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 1 }
        },
        {
          id: 'c',
          text: 'Inform the operations team that your project is complete and they must resolve integration issues independently.',
          termIndices: [t('Project'), t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Unacceptable. This approach abandons responsibility for successful product transition. Integration issues could compromise mission success and potentially create safety risks that require development team expertise to resolve.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 1, budget: 2 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Phase E',
      title: 'Post-Transition Success Metrics',
      narrative: 'Six months after transitioning your experiment module to ISS operations, you need to evaluate the success of the transition process. The operations team reports smooth day-to-day operations but has encountered some unexpected maintenance requirements that were not fully documented. You want to capture lessons learned for future product transitions.',
      termHighlights: [t('Product Transition Process'), t('Mission')],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a comprehensive post-transition assessment including operational performance, documentation adequacy, and stakeholder satisfaction to identify improvements for future transitions.',
          termIndices: [t('Product Transition Process'), t('Technical Assessment Process'), t('Mission')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Post-transition assessment is a valuable practice for continuous improvement of the transition process. Understanding what worked well and what could be improved helps refine future product transitions.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: -1 }
        },
        {
          id: 'b',
          text: 'Focus primarily on documenting the maintenance issues that were encountered and provide updated documentation to the operations team.',
          termIndices: [t('Technical Data Management Process'), t('Customer')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Limited approach. While addressing the maintenance documentation gaps is important, a broader assessment would identify other potential improvements and contribute more effectively to organizational learning.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Consider the transition successful since operations are running smoothly and no major problems have occurred.',
          termIndices: [t('Product'), t('Operational Environment')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Missed opportunity. Even when transitions appear successful, there are always lessons to be learned that could improve future transitions. The maintenance issues indicate gaps that should be understood and addressed.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'You successfully navigated the complex product transition process by ensuring comprehensive handoff of both end products and enabling products, establishing clear configuration management boundaries, and providing appropriate post-transition support. Your thorough approach minimized operational risks and set up the ISS operations team for long-term success.',
    failureNarrative: 'Your transition approach left critical gaps in operational support and documentation. Incomplete product transition processes create risks for both operational safety and mission effectiveness. Future transitions should emphasize comprehensive enabling product delivery and sustained technical support.',
    successThreshold: 60,
  },
}
