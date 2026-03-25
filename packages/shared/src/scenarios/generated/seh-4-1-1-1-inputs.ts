import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh4111Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-4-1-1-1-inputs',
    title: 'Gathering Stakeholder Inputs',
    subtitle: 'Collect and organize the foundational inputs needed to define stakeholder expectations for your CubeSat constellation.',
    difficulty: 'beginner',
    categories: ['requirements', 'project-mgmt'],
    termIndices: [
      t('Stakeholder Expectations Definition Process'),
      t('Customer'),
      t('Stakeholder'),
      t('Goal'),
      t('Objective'),
      t('Requirement'),
      t('End Product'),
      t('Enabling Products'),
      t('Product'),
      t('System'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Mission'),
      t('Technical Requirements'),
      t('Feasible')
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'Customer Expectations Arrival',
      narrative: 'As Mission Assurance Engineer for a new CubeSat constellation project, you receive an initial request from NASA Earth Science Division. They want a constellation to monitor agricultural water usage patterns. Your first task is to properly capture and organize the customer expectations that will drive the mission design.',
      termHighlights: [
        t('Customer'),
        t('Stakeholder Expectations Definition Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document the customer expectations as initial input to the Stakeholder Expectations Definition Process, ensuring all customer needs, goals, and constraints are captured systematically.',
          termIndices: [
            t('Customer'),
            t('Stakeholder Expectations Definition Process'),
            t('Goal')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Stakeholder Expectations Definition Process requires systematic capture of customer expectations as a foundational input. This ensures all customer needs are properly documented before stakeholder analysis begins.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Forward the customer request directly to the engineering team to start preliminary design work immediately.',
          termIndices: [
            t('Customer')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Customer expectations must be processed through the Stakeholder Expectations Definition Process first. Jumping to design without proper stakeholder analysis leads to missed requirements and costly redesign.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -3 }
        },
        {
          id: 'c',
          text: 'Schedule a meeting with the customer to clarify their request but wait to document anything formally until all stakeholders are identified.',
          termIndices: [
            t('Customer'),
            t('Stakeholder')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but inefficient. While stakeholder meetings are valuable, customer expectations should be documented immediately as they arrive. They form the foundation for identifying other stakeholders and their expectations.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Pre-Phase A',
      title: 'Identifying Additional Stakeholders',
      narrative: 'With customer expectations documented, you realize that Earth Science Division is not the only stakeholder. The constellation will interface with ground stations, require launch services, and need mission operations support. You need to identify other stakeholder expectations that will impact the system design.',
      termHighlights: [
        t('Stakeholder'),
        t('System')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Systematically identify all relevant stakeholders including ground operations, launch providers, and regulatory bodies, then collect their specific expectations for the constellation system.',
          termIndices: [
            t('Stakeholder'),
            t('System'),
            t('Stakeholder Expectations Definition Process')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Stakeholder Expectations Definition Process requires identifying all stakeholders beyond just the customer. Each stakeholder group has unique expectations that must be captured as inputs to avoid system design conflicts.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Focus only on the primary customer expectations since they are paying for the mission and their needs take priority over other parties.',
          termIndices: [
            t('Customer'),
            t('Mission')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Ignoring other stakeholder expectations leads to system designs that cannot be implemented or operated effectively. All relevant stakeholders must be considered as required inputs to the process.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -2 }
        },
        {
          id: 'c',
          text: 'Create a basic stakeholder list but wait until Phase A to gather their detailed expectations since requirements definition happens later.',
          termIndices: [
            t('Stakeholder'),
            t('Requirement')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but risky. While detailed requirements come later, stakeholder expectations are needed as inputs during Pre-Phase A. Waiting may result in concept designs that do not align with key stakeholder needs.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Pre-Phase A',
      title: 'Flow-Down Requirements Analysis',
      narrative: 'Your project manager informs you that this CubeSat constellation is part of a larger Earth Observation Program with established program-level requirements. These parent requirements need to be analyzed as inputs to understand what constraints and capabilities are already allocated to your mission.',
      termHighlights: [
        t('Requirement'),
        t('Product')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Analyze the program-level requirements to identify customer flow-down requirements that constrain or guide the constellation design, treating these as key inputs to stakeholder expectations definition.',
          termIndices: [
            t('Requirement'),
            t('Customer'),
            t('Stakeholder Expectations Definition Process')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Customer flow-down requirements from higher program levels are essential inputs to the Stakeholder Expectations Definition Process. They provide constraints and allocated capabilities that shape stakeholder expectations.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Set aside the program requirements for now and focus on defining fresh stakeholder expectations to avoid being constrained by legacy thinking.',
          termIndices: [
            t('Requirement'),
            t('Stakeholder')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Ignoring flow-down requirements violates the hierarchical nature of systems engineering. These requirements represent allocated capabilities and constraints that must be considered as inputs to avoid conflicts with parent systems.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -3, budget: -3 }
        },
        {
          id: 'c',
          text: 'Review the program requirements but focus primarily on the technical specifications rather than the stakeholder expectations they represent.',
          termIndices: [
            t('Requirement'),
            t('Technical Requirements')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While technical aspects are important, flow-down requirements often contain stakeholder expectations and constraints that must be understood before developing technical requirements for your system layer.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Pre-Phase A',
      title: 'Organizing End Product vs Enabling Product Expectations',
      narrative: 'As you compile stakeholder inputs, you notice expectations span both the operational CubeSat constellation itself and the supporting infrastructure needed for launch, ground operations, and data processing. You need to properly categorize these different types of product expectations before moving forward.',
      termHighlights: [
        t('End Product'),
        t('Enabling Products')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Categorize stakeholder expectations by distinguishing between end product expectations (constellation operational functions) and enabling product expectations (launch, ground systems, operations support).',
          termIndices: [
            t('End Product'),
            t('Enabling Products'),
            t('Stakeholder'),
            t('Product')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Proper categorization of expectations for end products versus enabling products is crucial input organization. This ensures stakeholder expectations are properly allocated to the right system elements during later design processes.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Focus all stakeholder expectations on the CubeSat constellation since that is the primary deliverable, treating ground systems as separate projects.',
          termIndices: [
            t('End Product'),
            t('System')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. End products and enabling products are interdependent and must be considered together as a system. Ignoring enabling product expectations leads to operational systems that cannot be effectively supported.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -2 }
        },
        {
          id: 'c',
          text: 'Document all expectations together without categorization since the specific product allocation will be determined during architecture design.',
          termIndices: [
            t('Product'),
            t('Architecture (System)')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but less efficient. While architecture design will refine product allocation, early categorization of expectations helps ensure comprehensive stakeholder consideration and smoother transition to technical requirements definition.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Pre-Phase A',
      title: 'Validating Input Completeness',
      narrative: 'Before concluding the inputs collection phase, you want to ensure you have gathered all necessary inputs for the Stakeholder Expectations Definition Process. The project is moving toward Mission Concept Review and you need confidence that your stakeholder expectations foundation is solid and feasible.',
      termHighlights: [
        t('Feasible'),
        t('Mission Concept Review')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a systematic review to verify you have captured customer expectations, other stakeholder expectations, and customer flow-down requirements as complete inputs for stakeholder expectations definition.',
          termIndices: [
            t('Customer'),
            t('Stakeholder'),
            t('Requirement'),
            t('Stakeholder Expectations Definition Process')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Systematic validation of input completeness ensures the Stakeholder Expectations Definition Process has the proper foundation. This prevents gaps that could undermine later mission concept development and review processes.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Proceed with available inputs since additional stakeholder needs can be captured during later mission phases when requirements are defined.',
          termIndices: [
            t('Mission'),
            t('Requirement')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Incomplete inputs to stakeholder expectations definition create unstable foundations for all subsequent mission development. Missing stakeholder expectations discovered later require costly concept and design rework.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -3 }
        },
        {
          id: 'c',
          text: 'Focus the review on ensuring customer expectations are feasible within budget and schedule constraints rather than input completeness.',
          termIndices: [
            t('Customer'),
            t('Feasible')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete approach. While feasibility assessment is important, it should not replace verification of input completeness. Both complete inputs and feasible expectations are needed for successful stakeholder expectations definition.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'Excellent work! You have successfully gathered and organized the key inputs needed for the Stakeholder Expectations Definition Process. Your systematic approach to capturing customer expectations, identifying all relevant stakeholders, analyzing flow-down requirements, and categorizing product types provides a solid foundation for defining stakeholder expectations.',
    failureNarrative: 'The inputs collection phase encountered significant issues that will impact downstream mission development. Incomplete stakeholder identification, missing flow-down requirements analysis, or inadequate input organization creates risks for the Mission Concept Review and subsequent design phases.',
    successThreshold: 60,
  },
}
