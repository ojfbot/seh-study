import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh44DesignSolutionDefinition: ScenarioTemplate = {
  meta: {
    id: 'seh-4-4-design-solution-definition',
    title: 'Mars Rover Power System Design',
    subtitle: 'Transform requirements into competing design solutions through systematic analysis',
    difficulty: 'intermediate',
    categories: ['design', 'requirements'],
    termIndices: [
      t('Design Solution Definition Process'),
      t('Technical Requirements'),
      t('Logical Decomposition Process'),
      t('Trade Study'),
      t('Analysis of Alternatives (AoA)'),
      t('End Product'),
      t('Specification'),
      t('Model'),
      t('Validated Requirements'),
      t('Decision Analysis Process'),
      t('Decision Matrix'),
      t('Objective Function (sometimes Cost Function)'),
      t('Optimal Solution'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Requirements Translation',
      title: 'Power System Requirements Analysis',
      narrative:
        'Your team has completed the logical decomposition process for the Mars rover power subsystem. You now have validated requirements including 400W minimum power generation, 14-day dust storm survival, and -80°C to +20°C operational range. The design solution definition process begins with transforming these technical requirements into alternative design concepts. How do you proceed with generating design alternatives?',
      termHighlights: [t('Design Solution Definition Process'), t('Technical Requirements'), t('Logical Decomposition Process')],
      decisions: [
        {
          id: 'a',
          text: 'Jump directly to a solar panel solution since it worked on previous rovers.',
          termIndices: [t('End Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Skipping alternative generation violates the design solution definition process. Without exploring multiple solutions, you miss opportunities for innovation and may select a suboptimal design. The process requires generating and analyzing alternatives before selection.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 3 },
        },
        {
          id: 'b',
          text: 'Generate multiple power system alternatives including solar, nuclear, and hybrid concepts based on the technical requirements.',
          termIndices: [t('Design Solution Definition Process'), t('Technical Requirements'), t('Analysis of Alternatives (AoA)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The design solution definition process requires generating alternative solutions that address the technical requirements. By considering solar panels, radioisotope thermoelectric generators, and hybrid approaches, you create a proper foundation for trade study analysis.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Ask the customer which power system they prefer before doing any analysis.',
          termIndices: [t('Validated Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Customer preference should not drive technical design selection without proper analysis. The design solution definition process requires systematic evaluation of alternatives against technical requirements, not stakeholder opinions on specific implementations.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Alternative Development',
      title: 'Design Alternative Modeling',
      narrative:
        'You have identified three design alternatives: deployable solar arrays, radioisotope thermoelectric generator, and a hybrid solar-battery system. Each alternative needs detailed modeling to support the trade study analysis. Your team asks how to approach the modeling effort to ensure all alternatives can be fairly compared.',
      termHighlights: [t('Model'), t('Trade Study'), t('Analysis of Alternatives (AoA)')],
      decisions: [
        {
          id: 'a',
          text: 'Create detailed models for all three alternatives using the same performance parameters and environmental conditions.',
          termIndices: [t('Model'), t('Trade Study'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Fair comparison requires consistent modeling approaches across all alternatives. Using identical environmental conditions, mission profiles, and performance criteria ensures the trade study analysis will be based on objective technical merits rather than modeling inconsistencies.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Only model the most promising alternative in detail to save time.',
          termIndices: [t('Analysis of Alternatives (AoA)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates the design solution definition process by prejudging alternatives without proper analysis. Without detailed models of all options, you cannot conduct a valid trade study to identify the optimal solution. Premature downselection risks missing the best design.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Use different modeling tools for each alternative based on team expertise.',
          termIndices: [t('Model'), t('Optimal Solution')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Using different modeling tools introduces bias and inconsistency that compromises trade study validity. While leveraging team expertise is valuable, standardized modeling approaches are essential for objective comparison of alternatives in the design solution definition process.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Trade Study Execution',
      title: 'Evaluation Criteria Definition',
      narrative:
        'With models complete, you must now establish evaluation criteria for the trade study. The technical requirements specify power output, environmental survival, and mass constraints. However, other factors like cost, reliability, and technology readiness also matter. How do you structure the decision analysis process for objective alternative comparison?',
      termHighlights: [t('Trade Study'), t('Decision Analysis Process'), t('Decision Matrix')],
      decisions: [
        {
          id: 'a',
          text: 'Use only the specified technical requirements as evaluation criteria.',
          termIndices: [t('Technical Requirements'), t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Limiting evaluation to only specified technical requirements ignores other critical factors that affect design solution selection. A proper decision analysis process must consider lifecycle factors including cost, risk, schedule, and producibility to identify the truly optimal solution.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 4 },
        },
        {
          id: 'b',
          text: 'Develop a comprehensive decision matrix with weighted criteria covering technical performance, cost, risk, and programmatic factors.',
          termIndices: [t('Decision Matrix'), t('Decision Analysis Process'), t('Objective Function (sometimes Cost Function)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A comprehensive decision matrix with weighted evaluation criteria enables systematic, objective comparison of alternatives. Including technical performance, lifecycle cost, risk factors, and programmatic considerations ensures the selected design solution optimizes overall mission value.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: -2 },
        },
        {
          id: 'c',
          text: 'Let each team member rank their favorite alternative and vote.',
          termIndices: [t('Optimal Solution')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Voting is not a systematic decision analysis process. The design solution definition process requires objective, criteria-based evaluation rather than subjective preferences. Without structured analysis, you cannot demonstrate that the selected alternative is optimal.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 1, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Alternative Selection',
      title: 'Trade Study Results Analysis',
      narrative:
        'Your decision matrix analysis shows the hybrid solar-battery system scores highest overall, with excellent performance ratings and moderate cost. However, the radioisotope generator has superior environmental survivability, and the solar-only design has the lowest cost. The flight director asks for your recommendation on how to proceed with alternative selection.',
      termHighlights: [t('Optimal Solution'), t('Trade Study'), t('Decision Matrix')],
      decisions: [
        {
          id: 'a',
          text: 'Select the hybrid system immediately since it scored highest in the decision matrix.',
          termIndices: [t('Decision Matrix'), t('Optimal Solution')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While the decision matrix provides valuable guidance, selecting without sensitivity analysis or stakeholder review may miss important considerations. The design solution definition process benefits from validating the selection against alternative weighting schemes and confirming alignment with mission priorities.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Perform sensitivity analysis on the decision matrix weighting and validate results with key stakeholders before final selection.',
          termIndices: [t('Decision Analysis Process'), t('Trade Study'), t('Optimal Solution')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Sensitivity analysis tests the robustness of your solution by varying criterion weights, ensuring the selection remains optimal under different priority scenarios. Stakeholder validation confirms the chosen alternative aligns with mission objectives and constraints.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Choose the lowest cost option regardless of the decision matrix results.',
          termIndices: [t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Ignoring the systematic decision analysis contradicts the design solution definition process. Cost is important but must be balanced against performance, risk, and other factors. Single-criterion selection often leads to suboptimal solutions that fail to meet mission needs.',
          nextNodeId: null,
          scoreImpact: { risk: 7, schedule: 3, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Solution Definition',
      title: 'Design Solution Documentation',
      narrative:
        'The trade study confirms the hybrid solar-battery system as the preferred alternative. You must now fully define this design solution to enable specification development and product implementation. The systems engineer asks what deliverables are needed to complete the design solution definition process and transition to the next phase.',
      termHighlights: [t('Design Solution Definition Process'), t('Specification'), t('End Product')],
      decisions: [
        {
          id: 'a',
          text: 'Create detailed specifications, interface definitions, and verification requirements for the selected design solution.',
          termIndices: [t('Specification'), t('Design Solution Definition Process'), t('End Product')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Complete design solution definition requires comprehensive specifications that define the end product characteristics, interface requirements, and verification criteria. These specifications enable product implementation teams to build and test the system while maintaining traceability to technical requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Document only the high-level concept and let implementation teams figure out the details.',
          termIndices: [t('Specification'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incomplete solution definition creates significant risk for the implementation phase. Without detailed specifications and interface definitions, implementation teams may develop products that do not meet technical requirements or integrate properly with other system elements.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 4, budget: 3 },
        },
        {
          id: 'c',
          text: 'Start building prototypes immediately to validate the design concept.',
          termIndices: [t('End Product'), t('Validated Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Jumping to prototype development without completing the design solution definition bypasses critical specification development. While prototyping has value, it should follow complete solution definition to ensure prototypes test the intended design rather than ad hoc implementations.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully executed the design solution definition process by systematically generating alternatives, conducting objective trade studies, and fully defining the selected solution. Your methodical approach ensures the Mars rover power system design is optimized for mission success.',
    failureNarrative: 'The design solution definition process was compromised by premature decisions, inadequate analysis, or incomplete solution definition. These shortcuts create risks that may surface during implementation when changes are more costly and schedule-impacting.',
    successThreshold: 60,
  },
}
