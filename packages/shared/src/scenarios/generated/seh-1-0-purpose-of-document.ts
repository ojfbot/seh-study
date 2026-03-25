import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh10PurposeOfDocument: ScenarioTemplate = {
  meta: {
    id: 'seh-1-0-purpose-of-document',
    title: 'Integration Plan Foundation',
    subtitle: 'Define the purpose and scope for your asteroid sample return mission integration plan',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'verification', 'lifecycle'],
    termIndices: [
      t('Product'),
      t('System'),
      t('Customer'),
      t('Stakeholder'),
      t('Goal'),
      t('Product Integration Process'),
      t('Baseline'),
      t('Traceability'),
      t('Activity'),
      t('Technical Requirements'),
      t('Verification (of a product)'),
      t('Product Verification Process'),
    ],
    estimatedMinutes: 15,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Document Purpose Definition',
      title: 'Establishing Integration Plan Intent',
      narrative:
        'Your asteroid sample return mission has reached the point where individual subsystems need to be integrated into the complete spacecraft system. The project manager asks you to draft the opening section of the Integration Plan document that clearly states its purpose. You need to articulate what this document will accomplish and why it exists as a separate plan from other project documentation.',
      termHighlights: [t('Product Integration Process'), t('System'), t('Product')],
      decisions: [
        {
          id: 'a',
          text: 'State that the purpose is to provide detailed test procedures for each subsystem before they are delivered to the project.',
          termIndices: [t('Product Verification Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This confuses integration planning with verification planning. The integration plan focuses on how components and subsystems will be physically and functionally combined, not on testing individual subsystems in isolation. Detailed test procedures belong in the verification plan.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Define the purpose as creating a plan for integrating components and subsystems prior to verification activities.',
          termIndices: [t('Product Integration Process'), t('System'), t('Verification (of a product)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The integration plan specifically addresses how individual products will be combined into larger assemblies and ultimately the complete system, establishing the foundation for subsequent verification activities. This clearly distinguishes integration from other project activities.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Explain that the document serves as a general project management tool for tracking all mission milestones.',
          termIndices: [t('Activity')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This is too broad and generic. An integration plan has a specific technical focus on combining system elements, not general project management. Milestone tracking belongs in the overall project plan, not the integration plan.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Stakeholder Context',
      title: 'Identifying Document Audience',
      narrative:
        'You need to clarify who will use this integration plan and what they need to understand from it. The document will be referenced by multiple teams throughout the integration phase. Your technical lead emphasizes that the purpose statement should address how this plan serves different stakeholders in the project.',
      termHighlights: [t('Stakeholder'), t('Customer'), t('Goal')],
      decisions: [
        {
          id: 'a',
          text: 'Focus the purpose on serving NASA headquarters management who need high-level project status updates.',
          termIndices: [t('Stakeholder')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This is too narrow and targets the wrong audience. Integration plans are working documents for technical teams, test engineers, and facility operators who need detailed guidance for actual integration activities, not executive status reports.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'State that the plan serves integration teams, test engineers, and facility operators who need clear guidance for combining system elements.',
          termIndices: [t('Stakeholder'), t('Product Integration Process'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent. This identifies the primary stakeholders who will actually execute the integration activities. These technical teams need specific guidance on procedures, sequences, and responsibilities for combining components into larger system assemblies.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Indicate that the document primarily serves external contractors who are building individual components.',
          termIndices: [t('Customer'), t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While contractors may reference the integration plan, they are not the primary audience. The plan mainly serves internal teams who will perform the actual integration work, not the suppliers of individual components.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Integration Scope Definition',
      title: 'Clarifying Integration Boundaries',
      narrative:
        'The purpose statement needs to clearly establish what aspects of system development this integration plan covers versus what other plans address. Your systems engineer points out that integration sits between component development and system verification in the overall process flow. You must define these boundaries precisely.',
      termHighlights: [t('Product Integration Process'), t('Baseline'), t('Verification (of a product)')],
      decisions: [
        {
          id: 'a',
          text: 'Define integration as everything from initial component design through final mission operations.',
          termIndices: [t('Product'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This scope is far too broad. Integration is a specific phase that occurs after components are developed and before comprehensive system verification. It does not include design activities or operational phases.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Specify that integration covers the physical and functional combination of developed components into system assemblies, preparing them for verification.',
          termIndices: [t('Product Integration Process'), t('System'), t('Verification (of a product)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect. This clearly defines integration as the bridge between component development and system verification. It encompasses both physical assembly and functional integration while establishing clear boundaries with adjacent processes.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'State that integration only addresses software components since hardware integration is covered by manufacturing plans.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This artificially separates software and hardware integration, which must be coordinated together in modern spacecraft systems. Integration plans must address both domains and their interactions.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Traceability Requirements',
      title: 'Linking to Project Objectives',
      narrative:
        'Your purpose statement needs to establish how the integration plan connects to overall project goals and requirements. The configuration manager emphasizes that this document must maintain clear traceability to higher-level project baselines. You need to articulate this connection in the purpose section.',
      termHighlights: [t('Traceability'), t('Baseline'), t('Technical Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'State that the integration plan operates independently to give integration teams maximum flexibility without constraint from other project documentation.',
          termIndices: [t('Activity')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach would create dangerous disconnects between integration activities and project requirements. Integration must maintain traceability to technical requirements and project baselines to ensure system objectives are met.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Explain that the plan maintains bidirectional traceability to technical requirements and supports achievement of project goals through systematic integration.',
          termIndices: [t('Traceability'), t('Technical Requirements'), t('Goal')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent. This establishes the critical link between integration activities and project objectives. Bidirectional traceability ensures that integration steps directly support requirements satisfaction and that changes can be properly assessed.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Indicate that traceability will be established later during the verification phase when test results are available.',
          termIndices: [t('Baseline'), t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Waiting until verification to establish traceability is too late. Integration activities must be planned with clear connections to requirements from the start to ensure the right system is being built.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Document Refinement',
      title: 'Finalizing Purpose Statement',
      narrative:
        'You have drafted a comprehensive purpose statement that addresses integration process scope, stakeholder needs, and traceability requirements. The project manager reviews your draft and asks you to ensure the statement clearly distinguishes this integration plan from other project documents. You need to make the final refinements to establish this document\'s unique role.',
      termHighlights: [t('Product Integration Process'), t('Product Verification Process'), t('Baseline')],
      decisions: [
        {
          id: 'a',
          text: 'Add language stating that this plan replaces and supersedes all other technical planning documents for the mission.',
          termIndices: [t('Baseline')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This creates dangerous conflicts with other essential project documents. The integration plan complements verification plans, design documents, and project baselines rather than replacing them. Each document serves distinct purposes.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Clarify that this integration plan works in coordination with verification plans, design baselines, and project schedules to achieve systematic product integration.',
          termIndices: [t('Product Integration Process'), t('Product Verification Process'), t('Baseline')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect. This establishes the integration plan as part of a coordinated set of project documents, each serving specific purposes while working together toward successful mission completion. This coordination is essential for complex aerospace systems.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Specify that integration planning will be revisited and potentially restructured based on results from each integration step.',
          termIndices: [t('Activity')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While some plan refinement is normal, suggesting major restructuring undermines confidence in the planning process. The purpose statement should convey a well-thought-out approach that provides stable guidance to integration teams.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You have successfully established a clear purpose for the integration plan that defines its scope, identifies key stakeholders, and maintains proper traceability to project requirements. Your document will provide essential guidance for systematic product integration while coordinating effectively with other project plans.',
    failureNarrative: 'Your purpose statement lacks clarity about the integration plan\'s specific role in the project lifecycle. Without clear scope definition and stakeholder identification, integration teams may struggle to execute their activities effectively, potentially leading to schedule delays and increased project risk.',
    successThreshold: 60,
  },
}
