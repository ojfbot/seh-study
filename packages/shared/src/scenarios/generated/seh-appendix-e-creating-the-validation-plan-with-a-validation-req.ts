import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixECreatingTheValidationPlanWithAValidationReq: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-e-creating-the-validation-plan-with-a-validation-req',
    title: 'Building the CubeSat Validation Plan',
    subtitle: 'Create a comprehensive validation requirements matrix for customer satisfaction',
    difficulty: 'beginner',
    categories: ['verification', 'requirements', 'project-mgmt'],
    termIndices: [
      t('Customer'),
      t('Product Validation Process'),
      t('Validation (of a product)'),
      t('Stakeholder Expectations'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Test'),
      t('Analysis'),
      t('Demonstration'),
      t('Inspection'),
      t('Process'),
      t('Goal'),
      t('Objective'),
      t('Activity')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase A/B',
      title: 'Planning Customer Validation',
      narrative: 'Your CubeSat constellation project is advancing through formulation, and the customer wants confidence that the final system will meet their operational needs. The project manager asks you to develop a validation plan that goes beyond technical verification to ensure customer satisfaction with the delivered constellation.',
      termHighlights: [
        t('Customer'),
        t('Product Validation Process'),
        t('Validation (of a product)')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Create a Validation Requirements Matrix that systematically identifies validation activities, methods, and facilities needed to demonstrate customer satisfaction.',
          termIndices: [
            t('Product Validation Process'),
            t('Customer'),
            t('Process')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. A Validation Requirements Matrix is the proper systematic approach to ensure all aspects of customer satisfaction are planned and tracked. This matrix will identify what validation activities are needed, when they occur, and how they demonstrate value to the customer.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Focus only on technical verification since validation is just an extension of the verification process.',
          termIndices: [
            t('Validation (of a product)'),
            t('Product Validation Process')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Partially acceptable but incomplete. While verification proves requirements compliance, validation specifically addresses customer satisfaction and operational effectiveness. You need both processes - they serve different but complementary purposes.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 }
        },
        {
          id: 'c',
          text: 'Wait until later phases to worry about validation since technical verification will prove the system works.',
          termIndices: [
            t('Customer'),
            t('Validation (of a product)')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Early validation planning has profound impact on design and cost in later phases. Waiting too long risks delivering a system that meets requirements but fails to satisfy the customer operationally. Validation must be planned from the beginning.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -3 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Phase A/B',
      title: 'Identifying Validation Sources',
      narrative: 'You begin developing the validation matrix and need to identify the key sources of information that will drive your validation activities. The systems engineering handbook mentions several sources to draw from when creating validation plans.',
      termHighlights: [
        t('Concept of Operations (ConOps) (Concept Documentation)'),
        t('Stakeholder Expectations'),
        t('Customer')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Draw validation requirements from ConOps, stakeholder needs documentation, requirements rationale, lessons learned, and system architecture modeling.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)'),
            t('Stakeholder Expectations'),
            t('Customer')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. These sources provide comprehensive insight into what the customer expects and how they will use the system. The ConOps describes operational scenarios, stakeholder documentation captures needs, and rationale explains why requirements exist - all critical for validation planning.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Base validation activities solely on the technical requirements document since it contains all necessary information.',
          termIndices: [
            t('Customer'),
            t('Stakeholder Expectations')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but limited. Technical requirements may not capture the full operational context or customer expectations that drive validation needs. You should also consider ConOps, stakeholder documentation, and lessons learned to ensure comprehensive validation coverage.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Copy validation approaches from similar missions without considering the specific customer needs for this constellation.',
          termIndices: [
            t('Customer'),
            t('Validation (of a product)')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Each mission has unique customer needs, operational concepts, and stakeholder expectations. Blindly copying validation approaches ignores mission-specific requirements and risks missing critical validation activities needed for customer satisfaction.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 1 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Phase A/B',
      title: 'Defining Validation Methods',
      narrative: 'As you populate the validation matrix, you need to specify the methods for each validation activity. The customer wants to evaluate the constellation\u0027s command and control interfaces to ensure operators can effectively manage the satellites during routine operations.',
      termHighlights: [
        t('Test'),
        t('Analysis'),
        t('Demonstration'),
        t('Inspection')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Plan a demonstration where customer operators use the actual command and control system to perform realistic operational scenarios.',
          termIndices: [
            t('Demonstration'),
            t('Customer'),
            t('Activity')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Demonstration is the appropriate validation method for showing operational effectiveness to the customer. Having actual operators perform realistic scenarios validates that the system meets operational expectations and builds customer confidence.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 1 }
        },
        {
          id: 'b',
          text: 'Conduct analysis to mathematically prove the interfaces will work properly based on design specifications.',
          termIndices: [
            t('Analysis'),
            t('Customer')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable for verification but insufficient for validation. Analysis can prove technical compliance, but the customer needs to see and experience the operational effectiveness. For validation, demonstration or testing with customer involvement is more appropriate.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Use inspection to visually examine the interface design documentation and declare it adequate.',
          termIndices: [
            t('Inspection'),
            t('Customer')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Inspection only verifies physical design features or documentation. For operational interface validation, the customer needs to experience actual system operation through demonstration or testing, not just review documentation.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Phase B/C',
      title: 'Timing Validation Activities',
      narrative: 'Your validation matrix is taking shape, but you need to determine when each validation activity should occur. The customer is particularly concerned about ground station compatibility and wants early confidence that their existing facilities will work with the new constellation.',
      termHighlights: [
        t('Customer'),
        t('Goal'),
        t('Objective')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Schedule early validation during Phase B to provide customer feedback on ground station compatibility before design freeze.',
          termIndices: [
            t('Customer'),
            t('Goal')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Early validation has profound impact on design and cost in later phases. Testing ground station compatibility in Phase B allows design changes if needed and builds customer confidence before committing to detailed design.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 2 }
        },
        {
          id: 'b',
          text: 'Wait until Phase D integration testing to validate ground station compatibility with the completed flight hardware.',
          termIndices: [
            t('Customer'),
            t('Test')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but risky. While Phase D testing provides the most realistic validation, discovering incompatibilities this late could require costly hardware changes or workarounds. Earlier validation with models or engineering units would be safer.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -2 }
        },
        {
          id: 'c',
          text: 'Perform all validation activities during final acceptance testing just before delivery to the customer.',
          termIndices: [
            t('Customer'),
            t('Validation (of a product)')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Waiting until final acceptance testing eliminates opportunities to address validation failures through design changes. This approach maximizes risk and cost while minimizing the customer\u0027s ability to influence the final product.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -3, budget: -4 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Phase B/C',
      title: 'Documenting Validation Results',
      narrative: 'The validation matrix is nearly complete, and you\u0027re defining how validation results will be captured and communicated. The customer wants clear evidence that validation activities actually occurred and achieved their intended objectives.',
      termHighlights: [
        t('Customer'),
        t('Objective'),
        t('Evaluation')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Define specific objective evidence requirements for each validation activity, including test reports, customer feedback forms, and demonstration recordings.',
          termIndices: [
            t('Objective'),
            t('Customer'),
            t('Evaluation')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Objective evidence demonstrates that validation activities occurred and provides traceability for customer satisfaction. Clear documentation requirements ensure validation results are properly captured and communicated to all stakeholders.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Plan to provide verbal summaries of validation results to the customer without formal documentation.',
          termIndices: [
            t('Customer'),
            t('Evaluation')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable for informal updates but insufficient for formal validation. Customer satisfaction requires objective evidence that can be reviewed and assessed. Formal documentation provides necessary traceability and supports project reviews.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: -1 }
        },
        {
          id: 'c',
          text: 'Assume that completing validation activities is sufficient evidence without documenting specific results or customer feedback.',
          termIndices: [
            t('Customer'),
            t('Objective')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Simply conducting activities without documenting results provides no evidence of customer satisfaction or validation success. Objective evidence is required to demonstrate that validation activities achieved their intended objectives.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'Your comprehensive validation matrix provides a systematic approach to ensuring customer satisfaction throughout the CubeSat constellation development. By planning validation activities early, using appropriate methods, and documenting objective evidence, you\u0027ve created a foundation for customer confidence and project success.',
    failureNarrative: 'Your validation approach has significant gaps that could lead to customer dissatisfaction despite meeting technical requirements. Missing early validation planning, inappropriate methods, or insufficient documentation could result in costly late-phase changes or customer rejection of the delivered system.',
    successThreshold: 60
  }
}
