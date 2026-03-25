import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh4411Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-4-4-1-1-inputs',
    title: 'Gathering Inputs for Design Solution Definition',
    subtitle: 'Collect and validate the fundamental inputs needed to begin defining design solutions',
    difficulty: 'beginner',
    categories: ['design', 'requirements'],
    termIndices: [
      t('Design Solution Definition Process'),
      t('Technical Requirements'),
      t('Derived Requirements'),
      t('Logical Decomposition Models'),
      t('Baseline'),
      t('Interface Management Process'),
      t('Product Verification Process'),
      t('Product Validation Process'),
      t('Enabling Products'),
      t('Technical Data Management Process')
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase B',
      title: 'Identifying Required Inputs',
      narrative: 'Your crewed transport vehicle project is transitioning from logical decomposition to design definition. The project manager asks you to identify what inputs are needed before your team can begin the Design Solution Definition Process. Several artifacts from upstream processes are available, but you need to determine which are fundamental inputs.',
      termHighlights: [
        t('Design Solution Definition Process'),
        t('Logical Decomposition Models')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Gather the baselined logical decomposition models, derived technical requirements, and system-specified requirements as the core inputs.',
          termIndices: [
            t('Design Solution Definition Process'),
            t('Logical Decomposition Models'),
            t('Derived Requirements'),
            t('Technical Requirements'),
            t('Baseline')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. These are the fundamental inputs identified in SEH 4.4.1.1. The baselined logical decomposition models provide the system structure, while the derived and system-specified technical requirements define what the design must accomplish.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Start with preliminary sketches and conceptual ideas from the engineering team to drive the design process.',
          termIndices: [
            t('Design Solution Definition Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. The Design Solution Definition Process requires formal inputs from upstream processes, not preliminary sketches. Without baselined requirements and logical models, any design work lacks proper foundation and traceability.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -1 }
        },
        {
          id: 'c',
          text: 'Focus only on the high-level mission requirements and skip the detailed technical requirements for now.',
          termIndices: [
            t('Technical Requirements'),
            t('Derived Requirements')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While mission requirements are important, the Design Solution Definition Process specifically requires derived technical requirements and baselined logical decomposition models to ensure comprehensive design coverage.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Phase B',
      title: 'Validating Input Quality',
      narrative: 'You have identified the required inputs, but the lead engineer questions whether they are ready for use. Some logical decomposition models appear to be draft versions, and certain derived requirements lack proper baselines. You need to ensure input quality before proceeding.',
      termHighlights: [
        t('Baseline'),
        t('Derived Requirements')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Verify that all logical decomposition models and derived requirements are properly baselined before proceeding with design definition.',
          termIndices: [
            t('Baseline'),
            t('Logical Decomposition Models'),
            t('Derived Requirements')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Design Solution Definition Process requires baselined inputs to ensure stability and traceability. Using unbaselined inputs leads to design churn and configuration control problems.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Proceed with the available inputs even if not fully baselined, since design work can always be updated later.',
          termIndices: [
            t('Baseline'),
            t('Design Solution Definition Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Starting design work with unbaselined inputs violates configuration management principles and creates significant rework risk. The inputs must be baselined to provide a stable foundation.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -3, budget: -2 }
        },
        {
          id: 'c',
          text: 'Use the draft inputs but document all assumptions and track them as risks.',
          termIndices: [
            t('Baseline'),
            t('Risk')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but suboptimal. While risk tracking is good practice, proceeding with unbaselined inputs still creates unnecessary design instability. The better approach is to ensure proper baselines first.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Phase B',
      title: 'Interface Considerations',
      narrative: 'As you prepare the inputs for design definition, the system architect reminds you that your crewed transport vehicle must interface with multiple external systems including launch vehicles, space stations, and ground support equipment. You need to determine what interface information is required.',
      termHighlights: [
        t('Interface Management Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Include interface specifications and requirements from the Interface Management Process as essential inputs to design definition.',
          termIndices: [
            t('Interface Management Process'),
            t('Technical Requirements')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Interface requirements are critical inputs to design definition. The Interface Management Process provides the necessary specifications for how your system must interact with external systems.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Handle interfaces during detailed design since they are implementation details, not fundamental inputs.',
          termIndices: [
            t('Interface Management Process'),
            t('Design Solution Definition Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Interface requirements are fundamental inputs that constrain design solutions. Ignoring interfaces until detailed design creates major integration risks and potential design incompatibilities.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -3 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Phase B',
      title: 'Supporting Process Connections',
      narrative: 'With core inputs identified, you need to consider how the Design Solution Definition Process connects to other processes. The project manager asks about planning for verification and validation activities, and how to capture the design work products.',
      termHighlights: [
        t('Product Verification Process'),
        t('Product Validation Process'),
        t('Technical Data Management Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Plan for outputs to Product Verification and Product Validation Processes, and ensure Technical Data Management Process captures all design work products.',
          termIndices: [
            t('Product Verification Process'),
            t('Product Validation Process'),
            t('Technical Data Management Process')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Design Solution Definition Process must plan for verification and validation of design solutions, and all work products must be captured through proper data management for lifecycle traceability.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Focus only on design creation now and worry about verification, validation, and data management in later phases.',
          termIndices: [
            t('Product Verification Process'),
            t('Product Validation Process'),
            t('Technical Data Management Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Planning for verification, validation, and data management must be considered during design definition. Late consideration of these processes leads to designs that are difficult to verify and validate.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -2 }
        },
        {
          id: 'c',
          text: 'Set up basic documentation but defer detailed verification and validation planning until design solutions are selected.',
          termIndices: [
            t('Technical Data Management Process'),
            t('Product Verification Process')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While basic documentation is good, deferring verification and validation considerations may lead to design solutions that are difficult to verify later. Early planning is preferred.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Phase B',
      title: 'Enabling Product Assessment',
      narrative: 'During input preparation, your team discovers that some required capabilities may need enabling products such as specialized test equipment or ground support systems. The flowchart in SEH 4.4.1.1 shows decision points about enabling product needs. You must determine how to address this.',
      termHighlights: [
        t('Enabling Products')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Assess whether enabling products exist and if lower-level products are needed, then plan accordingly for their development or acquisition.',
          termIndices: [
            t('Enabling Products'),
            t('Product')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Design Solution Definition Process includes explicit decision points for enabling products. Early identification and planning for these products prevents schedule delays and integration issues later.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Assume all necessary enabling products will be available when needed and continue with design definition.',
          termIndices: [
            t('Enabling Products')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Assuming enabling product availability without assessment creates major program risk. Many projects have failed due to unavailable or inadequate enabling products discovered too late.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -4, budget: -3 }
        },
        {
          id: 'c',
          text: 'Document potential enabling product needs but defer detailed assessment until design alternatives are defined.',
          termIndices: [
            t('Enabling Products')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but risky. While documentation is good, early assessment of enabling products is better since they may constrain design alternatives. Late discovery of enabling product needs can force design changes.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'You successfully identified and validated the fundamental inputs required for the Design Solution Definition Process. Your systematic approach to gathering baselined requirements, logical decomposition models, and interface specifications provides a solid foundation for developing design alternatives.',
    failureNarrative: 'Your approach to gathering inputs for design definition had significant gaps. Without proper baselined inputs and systematic consideration of interfaces and enabling products, the design process faces unnecessary risks and potential rework.',
    successThreshold: 60
  }
}
