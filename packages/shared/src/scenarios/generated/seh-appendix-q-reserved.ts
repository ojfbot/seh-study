import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixQReserved: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-q-reserved',
    title: 'HSI Plan Development for Earth Observation Mission',
    subtitle: 'Develop a comprehensive Human Systems Integration plan for satellite operations',
    difficulty: 'intermediate',
    categories: ['human-factors', 'project-mgmt', 'lifecycle'],
    termIndices: [
      t('Human Systems Integration'),
      t('Project'),
      t('Program'),
      t('Process'),
      t('Goal'),
      t('Objective'),
      t('Metric'),
      t('Risk'),
      t('Stakeholder'),
      t('Product'),
      t('System'),
      t('Software'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'HSI Planning Initiation',
      title: 'HSI Plan Scope Definition',
      narrative:
        'As the HSI integrator for a new Earth observation satellite project, you must develop the Human Systems Integration Plan. The project manager asks you to define the primary intent of HSI for this mission. Your definition will guide the entire HSI planning process and stakeholder engagement strategy.',
      termHighlights: [t('Human Systems Integration'), t('Project'), t('Stakeholder')],
      decisions: [
        {
          id: 'a',
          text: 'Focus HSI solely on crew training programs and operator certification requirements for mission operations.',
          termIndices: [t('Human Systems Integration')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach is too narrow. HSI encompasses much more than training - it includes integrating human elements with hardware and software throughout the system lifecycle, accounting for all human capital in life cycle costing, and accommodating user population characteristics in system design.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 2 },
        },
        {
          id: 'b',
          text: 'Define HSI intent as ensuring effective integration of human elements with hardware and software, accounting for human capital in lifecycle costing, and building systems that accommodate user population characteristics.',
          termIndices: [t('Human Systems Integration'), t('System'), t('Software')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. This comprehensive definition aligns with NPR 7123.1 requirements and captures the three core intents of HSI: effective integration of human elements, lifecycle cost consideration of human capital, and accommodation of user population characteristics.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Establish HSI as a separate parallel process independent of existing systems engineering plans and procedures.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'HSI should not duplicate existing systems engineering processes but rather integrate with them. The intent is to ensure human elements receive equal consideration alongside hardware and software elements within the established systems engineering framework.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'HSI Domain Integration',
      title: 'Cross-Domain Coordination Strategy',
      narrative:
        'The program manager emphasizes that HSI domains must be coordinated across the satellite program and integrated with stakeholder inputs. You need to define roles and responsibilities for this coordination. The success of your HSI plan depends on establishing clear accountability and communication pathways.',
      termHighlights: [t('Program'), t('Stakeholder')],
      decisions: [
        {
          id: 'a',
          text: 'Assign each HSI domain to separate teams with independent reporting structures to avoid coordination conflicts.',
          termIndices: [t('Program')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Independent teams without integration coordination defeats the purpose of HSI. The plan must address roles and responsibilities for integration ACROSS HSI domains and coordination with program teams and stakeholders.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Define integrated roles for coordinating HSI domain inputs with program teams and establish clear responsibilities for cross-domain integration.',
          termIndices: [t('Stakeholder'), t('Program')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The HSI plan must specifically address roles and responsibilities for both integration across HSI domains AND coordination of integrated HSI domain inputs with program teams and stakeholders. This ensures unified HSI implementation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Delegate all HSI coordination responsibilities to the existing systems engineering team without additional structure.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While HSI should integrate with systems engineering, it requires dedicated coordination roles. The HSI integrator or team must be specifically identified and empowered to develop and maintain the HSI plan with defined coordination responsibilities.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'HSI Metrics Development',
      title: 'Performance Measurement Strategy',
      narrative:
        'Your HSI plan must include entry and exit criteria with defined metrics for each project phase. The systems engineer asks how you will establish these metrics to validate HSI effectiveness throughout the lifecycle. Your approach will determine how HSI success is measured and verified.',
      termHighlights: [t('Metric'), t('Goal'), t('Objective')],
      decisions: [
        {
          id: 'a',
          text: 'Utilize existing systems engineering key performance measurements and adapt them for HSI validation without creating new metrics.',
          termIndices: [t('Metric'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. HSI implementation utilizes many tools and products already required by systems engineering, including key performance measurements. The intent is not to duplicate existing processes but to ensure human elements are properly considered within established measurement frameworks.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -2, budget: -2 },
        },
        {
          id: 'b',
          text: 'Create entirely new HSI-specific metrics that operate independently of existing systems engineering measurements.',
          termIndices: [t('Metric')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This duplicates existing systems engineering processes unnecessarily. HSI should leverage existing measurement tools while ensuring they adequately address human element considerations. Creating parallel measurement systems adds complexity without value.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 3, budget: 4 },
        },
        {
          id: 'c',
          text: 'Establish general HSI goals without specific measurable objectives or defined entry/exit criteria.',
          termIndices: [t('Goal'), t('Objective')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The HSI plan must include defined metrics for each phase, review, and milestone. General goals without measurable objectives and specific entry/exit criteria cannot validate HSI effectiveness or support decision-making at critical project milestones.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'HSI Risk Management',
      title: 'HSI Risk Integration Strategy',
      narrative:
        'The project faces potential risks related to operator workload, maintenance complexity, and human-system interface design. You must define strategies for identifying and resolving HSI risks as part of your plan. The program manager wants to understand how HSI risk management will integrate with overall project risk processes.',
      termHighlights: [t('Risk'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Develop a separate HSI risk register and management process that operates independently from project risk management.',
          termIndices: [t('Risk'), t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Creating separate risk management processes fragments risk visibility and decision-making. HSI risks should be integrated into existing project risk management frameworks to ensure comprehensive risk assessment and coordinated mitigation strategies.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Integrate HSI risk identification and resolution strategies within the existing project risk management framework while ensuring human-system risks receive appropriate attention.',
          termIndices: [t('Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. HSI risk strategies should integrate with existing project processes while ensuring human element risks are properly identified and resolved. This maintains unified risk management while giving human-system integration risks appropriate visibility and treatment.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Focus HSI risk management only on safety-critical human factors and defer other HSI risks to later project phases.',
          termIndices: [t('Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'HSI encompasses much more than safety-critical factors. Limiting risk focus to safety alone ignores performance, maintainability, operability, and lifecycle cost risks. Deferring HSI risks to later phases increases integration complexity and cost.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'HSI Implementation Products',
      title: 'HSI Product and Deliverable Strategy',
      narrative:
        'Your HSI plan must specify the products and deliverables that will be developed throughout the project lifecycle. The project manager asks which HSI products should be prioritized to ensure successful human-system integration. Your strategy will determine how HSI concepts are translated into tangible project deliverables.',
      termHighlights: [t('Product'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Focus primarily on developing comprehensive operator training materials and certification programs as the main HSI deliverables.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Training materials are important but represent only one aspect of HSI products. A comprehensive HSI approach requires deliverables that address system design, human-system interfaces, maintenance procedures, and lifecycle support - not just training.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Leverage existing systems engineering products like ConOps and functional allocation while ensuring they adequately address human element considerations.',
          termIndices: [t('Product'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. HSI utilizes many tools and products already required by systems engineering, including ConOps development and functional allocation across hardware, software, and human elements. This avoids duplication while ensuring human considerations are properly integrated.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Create entirely new HSI-specific documentation and deliverables that parallel existing systems engineering products.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach duplicates existing systems engineering efforts unnecessarily. The intent of HSI is not to create parallel documentation but to ensure human elements receive equal consideration within existing systems engineering products and processes.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 4, budget: 5 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'Your HSI plan successfully integrates human considerations into the established systems engineering framework. By leveraging existing processes and products while ensuring human elements receive equal attention, you have created an efficient and comprehensive approach to human systems integration.',
    failureNarrative:
      'Your HSI plan created unnecessary complexity by duplicating existing systems engineering processes or failed to provide comprehensive human element integration. Effective HSI requires working within established frameworks while ensuring human considerations are properly addressed.',
    successThreshold: 60,
  },
}
