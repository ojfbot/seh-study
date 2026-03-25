import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh5311Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-5-3-1-1-inputs',
    title: 'Defining Product Realization Inputs',
    subtitle: 'Specify the essential inputs for satellite subsystem realization',
    difficulty: 'intermediate',
    categories: ['verification', 'requirements', 'design'],
    termIndices: [
      t('Product Realization'),
      t('Product'),
      t('Analysis'),
      t('Test'),
      t('Demonstration'),
      t('Inspection'),
      t('Verification (of a product)'),
      t('Requirement'),
      t('System'),
      t('Software'),
      t('Specification'),
      t('Technical Requirements'),
      t('Process'),
      t('Activity'),
      t('Margin')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Planning',
      title: 'Requirements Input Definition',
      narrative: 'Your Earth observation satellite team is entering the product realization phase for the thermal control subsystem. The project manager asks you to identify the primary inputs needed to begin verification activities. The subsystem must maintain instrument temperatures within ±2°C during orbital operations. You need to determine what foundational inputs are required before any verification methods can be selected.',
      termHighlights: [t('Product Realization'), t('Verification (of a product)'), t('Requirement')],
      decisions: [
        {
          id: 'a',
          text: 'Begin with test procedures and hardware prototypes since hands-on verification is most reliable.',
          termIndices: [t('Test'), t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Starting with test procedures before establishing requirements and specifications puts the cart before the horse. Product realization inputs must begin with clear technical requirements and system specifications that define what needs to be verified, not how to verify it.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Start with detailed technical requirements and system specifications that define performance criteria.',
          termIndices: [t('Technical Requirements'), t('Specification'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Technical requirements and specifications are the fundamental inputs to product realization. These documents define what the product must achieve, establishing the baseline against which all verification activities will be measured. Without clear requirements, no meaningful verification can occur.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Focus on budget allocation and schedule constraints as the primary inputs.',
          termIndices: [t('Process'), t('Activity')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'While budget and schedule are important project constraints, they are not the primary technical inputs for product realization. The process must start with technical requirements that define what needs to be realized, then determine the activities needed to meet those requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 2 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Method Selection',
      title: 'Verification Method Inputs',
      narrative: 'With requirements established, you must now identify what additional inputs are needed to select appropriate verification methods. The thermal control subsystem has both hardware components and embedded software. Your team needs to determine which verification methods—analysis, test, demonstration, or inspection—are suitable for different aspects of the subsystem.',
      termHighlights: [t('Analysis'), t('Test'), t('Demonstration'), t('Inspection')],
      decisions: [
        {
          id: 'a',
          text: 'Use only physical testing since it provides the most realistic verification of actual product performance.',
          termIndices: [t('Test'), t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Relying solely on test methods ignores the reality that some requirements are better verified through analysis, demonstration, or inspection. Different verification methods serve different purposes, and product realization requires understanding which methods apply to which requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 4 }
        },
        {
          id: 'b',
          text: 'Analyze each requirement to determine whether analysis, test, demonstration, or inspection is most appropriate.',
          termIndices: [t('Analysis'), t('Test'), t('Demonstration'), t('Inspection')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Each verification method has specific applications—analysis for mathematical modeling, test for detailed performance data, demonstration for operational capability, and inspection for physical characteristics. The input to method selection is a systematic analysis of each requirement to determine the most suitable verification approach.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Choose demonstration for all requirements since it shows actual operational capability.',
          termIndices: [t('Demonstration'), t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Demonstration is appropriate for showing operational capability but cannot provide the detailed performance data needed for many requirements. Some requirements are better verified through analysis (mathematical proof), test (detailed measurement), or inspection (visual confirmation).',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 2 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Software Considerations',
      title: 'Software Verification Inputs',
      narrative: 'The thermal control subsystem includes embedded software for temperature monitoring and heater control. Your verification plan must address both the software components and their integration with hardware. You need to identify the specific inputs required to verify software requirements effectively within the overall product realization process.',
      termHighlights: [t('Software'), t('System'), t('Verification (of a product)')],
      decisions: [
        {
          id: 'a',
          text: 'Treat software the same as hardware and use identical verification approaches for both.',
          termIndices: [t('Software'), t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Software requires different verification approaches than hardware. While hardware can be verified through physical inspection and environmental testing, software verification relies more heavily on analysis of code structure, demonstration of logical functions, and test of input-output relationships.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Identify software-specific inputs including code specifications, interface definitions, and algorithm requirements.',
          termIndices: [t('Software'), t('Technical Requirements'), t('Specification')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Software verification requires specific inputs including detailed code specifications, interface control documents, algorithm requirements, and data flow definitions. These inputs enable appropriate verification methods such as code analysis, unit testing, and integration demonstration.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Skip formal software verification since it will be tested during system-level integration.',
          termIndices: [t('Software'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'System-level integration testing alone is insufficient for software verification. Software faults discovered late in integration are expensive and time-consuming to fix. Product realization requires systematic software verification at appropriate levels using software-specific verification methods.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 4, budget: 3 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Risk Assessment',
      title: 'Margin and Risk Inputs',
      narrative: 'As you finalize the product realization inputs, the chief engineer reminds you to consider margins and risk factors. The thermal subsystem operates in the harsh space environment with limited maintenance options. You must determine what margin-related inputs are essential for the verification program to account for uncertainties and ensure mission success.',
      termHighlights: [t('Margin'), t('Product Realization'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Include design margins in requirements but verify only to nominal performance levels to reduce testing costs.',
          termIndices: [t('Margin'), t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Verifying only to nominal levels defeats the purpose of design margins. If margins are included in requirements to account for uncertainties, the verification program must confirm that the product can perform within those margins under expected operating conditions.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: -2 }
        },
        {
          id: 'b',
          text: 'Add 50% margin to all requirements regardless of specific risk factors.',
          termIndices: [t('Margin'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Arbitrary margin allocation without risk assessment can lead to over-design and unnecessary cost. Margins should be allocated based on specific risk assessments and uncertainty analyses for each requirement, not applied uniformly across all parameters.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 2, budget: 4 }
        },
        {
          id: 'c',
          text: 'Define margin requirements based on risk assessment and include verification of margin adequacy in the verification program.',
          termIndices: [t('Margin'), t('Verification (of a product)'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Margins should be allocated based on systematic risk assessment, and the verification program must confirm that the product meets requirements including those margins. This ensures the realized product can handle uncertainties and operating conditions identified during risk analysis.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 1 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Integration',
      title: 'Process Integration Inputs',
      narrative: 'Your thermal subsystem must integrate with other satellite systems including power, attitude control, and payload instruments. You need to identify the cross-system inputs required for product realization when your subsystem is part of a larger integrated system. The systems engineer asks what additional inputs are needed beyond your subsystem-specific requirements.',
      termHighlights: [t('System'), t('Process'), t('Product')],
      decisions: [
        {
          id: 'a',
          text: 'Focus only on thermal subsystem requirements since other teams handle their own system interfaces.',
          termIndices: [t('System'), t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'System integration requires coordination of interface requirements and verification approaches across subsystems. Ignoring system-level inputs can result in subsystems that meet individual requirements but fail to work together effectively in the integrated system.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: 2 }
        },
        {
          id: 'b',
          text: 'Include interface control documents, system-level requirements, and cross-system verification procedures.',
          termIndices: [t('System'), t('Technical Requirements'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Product realization in a complex system requires inputs that address interfaces and system-level integration. Interface control documents define how subsystems interact, system-level requirements establish performance criteria for the integrated system, and cross-system verification procedures ensure compatible verification approaches.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Wait for system integration phase to address cross-system requirements and interfaces.',
          termIndices: [t('System'), t('Activity')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Deferring system-level considerations until integration phase creates significant risk of incompatible subsystems and rework. Product realization inputs must include system-level requirements and interface definitions from the beginning to ensure proper subsystem development.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 4, budget: 3 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'You successfully identified the essential inputs for product realization, establishing a solid foundation for verification activities. Your systematic approach to requirements, verification methods, software considerations, margins, and system integration ensures the thermal control subsystem will be properly realized.',
    failureNarrative: 'Your approach to product realization inputs was incomplete, missing critical elements needed for effective verification. Proper product realization requires comprehensive inputs including detailed requirements, appropriate verification methods, and system-level considerations.',
    successThreshold: 60
  }
}
