import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh40SystemDesignProcesses: ScenarioTemplate = {
  meta: {
    id: 'seh-4-0-system-design-processes',
    title: 'Asteroid Sample Collection System Design',
    subtitle: 'Lead design solution definition for a robotic asteroid sampling system',
    difficulty: 'beginner',
    categories: ['design', 'technology', 'verification'],
    termIndices: [
      t('Design Solution Definition Process'),
      t('Trade Study'),
      t('Decision Analysis Process'),
      t('Technical Data Package'),
      t('Technology Maturity Assessment'),
      t('Technology Development Plan'),
      t('Enabling Products'),
      t('Derived Requirements'),
      t('End Product'),
      t('Product Verification Process'),
      t('Objective Function (sometimes Cost Function)'),
      t('Decision Support Package'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Phase A',
      title: 'Design Solution Definition Process Initiation',
      narrative: 'You are the lead systems engineer for an asteroid sample collection system. The logical decomposition process has identified three main sampling mechanisms: drill, scoop, and harpoon. Your team must now transform these concepts into alternative design solutions and select the best one.',
      termHighlights: [
        t('Design Solution Definition Process'),
        t('Trade Study'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Initiate the Design Solution Definition Process by conducting comprehensive trade studies for each sampling mechanism alternative, evaluating performance, cost, risk, and technology readiness.',
          termIndices: [
            t('Design Solution Definition Process'),
            t('Trade Study'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Design Solution Definition Process begins with trade studies that systematically evaluate alternative design concepts against multiple criteria. This provides the analytical foundation for informed decision-making.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Skip formal trade studies and select the drill mechanism based on heritage from previous missions to save time.',
          termIndices: [
            t('Trade Study'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but suboptimal. While heritage reduces risk, skipping trade studies means you may miss better alternatives or fail to understand why the selected approach is optimal for this specific mission context.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Develop all three mechanisms in parallel to Phase B to avoid down-selecting too early.',
          termIndices: [
            t('Design Solution Definition Process'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Developing multiple solutions in parallel violates resource constraints and delays critical design decisions. The Design Solution Definition Process requires selecting the best alternative before proceeding to detailed design.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -3, budget: -4 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'Decision Analysis and Technology Assessment',
      narrative: 'Your trade studies reveal that the drill mechanism has the highest science return but requires unproven autonomous drilling technology. The scoop mechanism is lower risk with mature technology but reduced sample quality. You need to make a data-driven selection decision.',
      termHighlights: [
        t('Decision Analysis Process'),
        t('Technology Maturity Assessment'),
        t('Objective Function (sometimes Cost Function)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Apply the Decision Analysis Process using an objective function that quantitatively weighs science value, cost, schedule, and risk, supported by Technology Maturity Assessment results.',
          termIndices: [
            t('Decision Analysis Process'),
            t('Technology Maturity Assessment'),
            t('Objective Function (sometimes Cost Function)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Decision Analysis Process provides a systematic methodology for evaluating alternatives using quantitative measures like objective functions, while Technology Maturity Assessment ensures realistic evaluation of technology risks.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Select the drill mechanism and create a Technology Development Plan to mature the autonomous drilling technology during Phase B.',
          termIndices: [
            t('Technology Development Plan'),
            t('Technology Maturity Assessment'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but risky. While a Technology Development Plan is appropriate for immature technologies, selecting without proper Decision Analysis Process may lead to cost and schedule overruns if the technology development encounters problems.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Choose the scoop mechanism by default since it has the lowest development risk and fastest implementation.',
          termIndices: [
            t('Decision Analysis Process'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Selecting based solely on risk avoidance without systematic analysis violates the Decision Analysis Process. This approach may compromise mission science objectives and stakeholder value.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Phase A',
      title: 'Design Solution Documentation',
      narrative: 'The decision analysis selected the drill mechanism with a parallel technology development effort. Your team must now fully describe the design solution and document it appropriately for the Phase A review and transition to Phase B.',
      termHighlights: [
        t('Technical Data Package'),
        t('Derived Requirements'),
        t('End Product'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Create a comprehensive Technical Data Package that documents the drill mechanism design, derived requirements, interface definitions, and technology development plan with appropriate detail for Phase A.',
          termIndices: [
            t('Technical Data Package'),
            t('Derived Requirements'),
            t('Technology Development Plan'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Technical Data Package is the primary output of Design Solution Definition Process, evolving from conceptual models in Phase A to detailed implementation documentation in later phases.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Document only the high-level concept and defer detailed design documentation until Phase B to avoid premature design freeze.',
          termIndices: [
            t('Technical Data Package'),
            t('End Product'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While avoiding premature design freeze is good, insufficient documentation in Phase A creates risk for Phase B cost and schedule estimates and makes meaningful technical reviews difficult.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Develop complete engineering drawings and specifications now to accelerate Phase B development.',
          termIndices: [
            t('Technical Data Package'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Developing complete engineering details in Phase A is premature and wastes resources. The Technical Data Package should match the phase maturity level with conceptual designs appropriate for Phase A.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Phase A',
      title: 'Enabling Products Identification',
      narrative: 'As you prepare for the Phase A review, you realize the drill mechanism will require specialized test equipment for thermal-vacuum testing and a custom handling fixture for integration. These supporting products need to be identified and planned now.',
      termHighlights: [
        t('Enabling Products'),
        t('End Product'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Systematically identify all required enabling products including test equipment, handling fixtures, and ground support equipment, then initiate acquisition planning with realistic lead times.',
          termIndices: [
            t('Enabling Products'),
            t('End Product'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Enabling products are critical life cycle support items that must be identified early. Since end products and enabling products are interdependent, early identification prevents schedule delays and cost overruns.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Plan to use existing test facilities and adapt them as needed when the hardware is ready for testing in Phase C.',
          termIndices: [
            t('Enabling Products'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but risky. While using existing facilities saves money, specialized hardware often requires custom enabling products. Late identification can create critical path schedule delays during integration and test phases.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus only on the end product design and address support equipment requirements during Phase B detailed design.',
          termIndices: [
            t('End Product'),
            t('Enabling Products'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Deferring enabling products identification violates systems engineering principles. The interdependence between end products and enabling products requires early, systematic identification to ensure life cycle success.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Phase A',
      title: 'Design Solution Verification Planning',
      narrative: 'Before the Phase A review, you must demonstrate that your design solution meets requirements and is ready for Phase B development. The review board will expect evidence that the drill mechanism concept can satisfy the mission objectives.',
      termHighlights: [
        t('Product Verification Process'),
        t('Decision Support Package'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct peer reviews to verify the design solution against requirements and prepare a Decision Support Package documenting the verification approach for the phase review.',
          termIndices: [
            t('Product Verification Process'),
            t('Decision Support Package'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Design solution verification through peer reviews ensures requirements compliance, while the Decision Support Package provides review boards with comprehensive technical justification for proceeding to Phase B.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Perform analysis and simulation to show the drill mechanism meets performance requirements and document results in the technical data package.',
          termIndices: [
            t('Technical Data Package'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While analysis and simulation are important, formal verification through peer review and Decision Support Package preparation provides more rigorous validation for phase transition.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Build and test a prototype drill mechanism to prove the concept works before the Phase A review.',
          termIndices: [
            t('Product Verification Process'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Building prototypes in Phase A is premature and expensive. The Product Verification Process at this phase focuses on design solution verification, not end product verification which occurs in later phases.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -3, budget: -4 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully applied the Design Solution Definition Process, conducting thorough trade studies, using decision analysis to select the optimal design, and properly documenting and verifying the solution. Your systematic approach positioned the project for successful Phase B development.',
    failureNarrative: 'Your approach to design solution definition lacked systematic rigor. Skipping trade studies, avoiding decision analysis, or improperly handling enabling products created risks that will impact later development phases. The Design Solution Definition Process requires disciplined application of proven methodologies.',
    successThreshold: 60,
  },
}
