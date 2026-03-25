import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh23ExampleOfUsingTheSeEngine: ScenarioTemplate = {
  meta: {
    id: 'seh-2-3-example-of-using-the-se-engine',
    title: 'SE Engine Through the Phases',
    subtitle: 'Navigate the recursive application of systems engineering processes across mission phases',
    difficulty: 'advanced',
    categories: ['lifecycle', 'requirements', 'design'],
    termIndices: [
      t('Systems Engineering (SE) Engine'),
      t('Recursive'),
      t('Iterative'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Baseline'),
      t('Product Verification Process'),
      t('Product Validation Process'),
      t('Feasible'),
      t('End Product'),
      t('System'),
      t('Process'),
      t('Transition'),
      t('Risk'),
      t('Mission'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'Initial Concepts Development',
      narrative:
        'You are leading Pre-Phase A for a Mars sample return mission. The SE engine is being used to develop initial concepts and establish system functional boundaries. Your team has developed three competing mission architectures, but stakeholders are pressuring you to select one quickly to meet schedule. You need to determine how to properly use the SE engine at this early stage.',
      termHighlights: [t('Systems Engineering (SE) Engine'), t('Feasible'), t('Concept of Operations (ConOps) (Concept Documentation)')],
      decisions: [
        {
          id: 'a',
          text: 'Apply the SE engine recursively to develop ConOps for each architecture, model and simulate key scenarios, and verify concepts meet high-level requirements before down-selecting.',
          termIndices: [t('Systems Engineering (SE) Engine'), t('Recursive'), t('Concept of Operations (ConOps) (Concept Documentation)'), t('Product Verification Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook emphasizes that Pre-Phase A must use the SE engine to verify and validate concepts through iterative modeling and simulation. This methodical approach ensures feasibility before committing to a baseline.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Select the architecture with the highest heritage content to minimize risk and move directly to Phase A requirements development.',
          termIndices: [t('Heritage (or legacy)'), t('Risk')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This bypasses the systematic concept validation that the SE engine provides. While heritage reduces some risks, you may miss critical operational scenarios or requirement conflicts that proper ConOps development would reveal.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus on the most technically challenging architecture since Mars missions require breakthrough capabilities.',
          termIndices: [t('System'), t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This ignores the SE engine principle of developing concepts to the level necessary to ensure feasibility. Without systematic evaluation of all architectures, you risk committing to an infeasible solution.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'Requirements and ConOps Development',
      narrative:
        'In Phase A, you are using the SE engine to mature the Pre-Phase A concepts into baseline system requirements. Your team has identified several high-risk areas including entry-descent-landing and sample containment. The program manager wants to defer detailed analysis of these areas until Phase B to save money. You must decide how to properly apply the SE engine during Phase A.',
      termHighlights: [t('Baseline'), t('System'), t('Risk')],
      decisions: [
        {
          id: 'a',
          text: 'Continue recursive application of the SE engine, simulating high-risk areas to validate concepts and identify verification tools needed for later phases.',
          termIndices: [t('Systems Engineering (SE) Engine'), t('Recursive'), t('Product Validation Process'), t('Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook specifically states that Phase A should simulate key high-risk areas to ensure concepts are sound and identify needed verification and validation tools for subsequent phases.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Develop baseline requirements for all subsystems but defer risk analysis to Phase B when designs are more mature.',
          termIndices: [t('Baseline'), t('Technical Risk Management Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This approach misses the Phase A opportunity to validate high-risk concepts early. The SE engine should be applied recursively to identify and address risks when changes are still affordable.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus only on heritage systems and defer analysis of new technologies until hardware development begins.',
          termIndices: [t('Heritage (or legacy)'), t('Technology Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates the SE engine principle of iterative concept validation. Phase A must address feasibility of all critical technologies, especially new ones that pose the highest risk to mission success.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase B',
      title: 'Design Maturation and Verification Planning',
      narrative:
        'During Phase B, the SE engine is being applied recursively to mature requirements and designs throughout the product tree. Your verification planning reveals that some critical interfaces cannot be fully tested until system integration. The project is under schedule pressure, and there is temptation to defer some verification activities to Phase D. You need to determine the proper Phase B application of the SE engine.',
      termHighlights: [t('Product'), t('Product Verification Process'), t('Iterative')],
      decisions: [
        {
          id: 'a',
          text: 'Apply the SE engine to all product tree levels, perform thorough verification and validation of concepts, and ensure designs meet requirements before Phase C.',
          termIndices: [t('Systems Engineering (SE) Engine'), t('Recursive'), t('Product'), t('Product Verification Process'), t('Product Validation Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook emphasizes that Phase B must recursively apply the SE engine to mature requirements and designs for all products, with verification and validation to ensure design feasibility.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Focus SE engine application on high-risk subsystems only, deferring lower-risk items to save schedule and budget.',
          termIndices: [t('Systems Engineering (SE) Engine'), t('Risk'), t('Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This selective approach misses the systematic nature of the SE engine. All products in the tree need recursive attention during Phase B to prevent integration surprises later.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Complete design work quickly and move verification activities to Phase D when hardware is available for testing.',
          termIndices: [t('Product Verification Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This fundamentally misapplies the SE engine. Phase B verification and validation of concepts is essential to prevent costly rework during implementation phases.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Final Design and Fabrication Start',
      narrative:
        'Phase C is using the left side of the SE engine to finalize requirements updates and designs to the lowest product tree level. Some subsystem teams report that their detailed designs reveal conflicts with system-level requirements established in earlier phases. Manufacturing wants to start building components immediately to meet schedule. You must decide how to properly apply the SE engine in this critical transition phase.',
      termHighlights: [t('End Product'), t('Process'), t('Product')],
      decisions: [
        {
          id: 'a',
          text: 'Use the SE engine left side to resolve requirement conflicts, finalize ConOps validation, and complete detailed designs before authorizing fabrication.',
          termIndices: [t('Systems Engineering (SE) Engine'), t('Process'), t('Concept of Operations (ConOps) (Concept Documentation)'), t('Product Validation Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook specifies that Phase C uses the left side of the SE engine to finalize requirements, validate ConOps, and complete designs to the lowest level before fabrication begins.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Start fabrication of components with mature designs while continuing to resolve requirement conflicts in parallel.',
          termIndices: [t('Product'), t('Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This approach creates risk of building to incorrect specifications. The SE engine requires finalizing designs before fabrication to prevent costly hardware rework.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Proceed with fabrication using current designs and resolve conflicts during integration testing.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates the SE engine principle of completing left-side activities before moving to implementation. Deferring requirement resolution to integration will cause major schedule and cost impacts.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase D',
      title: 'Implementation and Integration',
      narrative:
        'Phase D is using the right side of the SE engine for final implementation, integration, verification, and validation. Initial subsystem testing reveals performance margins are tighter than expected, and some verification procedures need modification. The mission operations team is requesting changes to ground software interfaces. You must determine how to properly apply the SE engine during this critical implementation phase.',
      termHighlights: [t('Product Integration Process'), t('Transition')],
      decisions: [
        {
          id: 'a',
          text: 'Apply the SE engine right side recursively for implementation, integration, and verification, with controlled changes managed through formal processes.',
          termIndices: [t('Systems Engineering (SE) Engine'), t('Recursive'), t('Product Integration Process'), t('Product Verification Process'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook emphasizes Phase D recursive use of the right side of the SE engine for implementation, integration, verification, and validation, with final transition to the user.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Focus on hardware integration and defer software interface changes until operational testing.',
          termIndices: [t('Product Integration Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This approach creates integration risk by not addressing all system elements simultaneously. The SE engine should be applied comprehensively to all products during Phase D.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Accelerate integration testing and make necessary design changes during operations to save schedule.',
          termIndices: [t('Product Integration Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach abandons the systematic SE engine approach when it is most critical. Phase D must complete verification and validation before transition to operations.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully demonstrated understanding of how the SE engine is applied recursively across mission phases, from initial concept development through final implementation and transition. Your systematic approach ensured proper validation at each phase gate.',
    failureNarrative: 'Your approach missed key principles of SE engine application across phases. Remember that the SE engine must be applied recursively and systematically, with proper verification and validation at each phase before proceeding to the next level of development.',
    successThreshold: 60,
  },
}
