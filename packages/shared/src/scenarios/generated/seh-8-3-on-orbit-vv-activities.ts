import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh83OnOrbitVvActivities: ScenarioTemplate = {
  meta: {
    id: 'seh-8-3-on-orbit-vv-activities',
    title: 'On-Orbit Validation Challenge',
    subtitle: 'Complete verification activities for your Earth observation satellite after launch',
    difficulty: 'intermediate',
    categories: ['verification', 'lifecycle'],
    termIndices: [
      t('Product Validation Process'),
      t('Product Verification Process'),
      t('Validation (of a product)'),
      t('Verification (of a product)'),
      t('Test'),
      t('Demonstration'),
      t('Analysis'),
      t('Inspection'),
      t('System'),
      t('Requirement'),
      t('Baseline'),
      t('Technical Requirements'),
      t('Performance Standards'),
      t('System Acceptance Review'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Initial Checkout',
      title: 'First On-Orbit Validation Activities',
      narrative:
        'Your Earth observation satellite has successfully deployed and is now in stable orbit. Ground verification activities confirmed all subsystems functioned during launch, but several technical requirements can only be validated in the operational environment. You must prioritize which on-orbit validation activities to execute first during the critical commissioning phase.',
      termHighlights: [t('Validation (of a product)'), t('Technical Requirements'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Begin with science instrument calibration using star field observations to validate imaging performance requirements.',
          termIndices: [t('Validation (of a product)'), t('Requirement'), t('Performance Standards')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Star field calibration is a fundamental on-orbit validation activity that cannot be performed on the ground. This validates critical imaging performance requirements in the actual operational environment and provides essential baseline data for all subsequent science operations.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Start with extended attitude control system demonstrations to validate pointing accuracy specifications.',
          termIndices: [t('Demonstration'), t('Verification (of a product)'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but not optimal. While attitude control validation is important, it should follow basic instrument checkout. Extended attitude maneuvers consume fuel and risk thermal disturbances before primary mission capabilities are validated.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Focus on communications system testing with ground stations to verify data downlink rates.',
          termIndices: [t('Test'), t('Verification (of a product)'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Communications verification is critical but was already completed during early orbit operations. Prioritizing this over mission-specific validation activities delays the primary objectives and does not address requirements that can only be validated on-orbit.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 3, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Validation Method Selection',
      title: 'Choosing Validation Approaches',
      narrative:
        'Initial instrument calibration is complete and shows nominal performance. Now you must validate the satellite\'s ability to meet its Earth observation requirements under various operational conditions. Multiple validation methods are available, but mission time and resources are limited. You need to select the most effective approach for validating end-to-end system performance.',
      termHighlights: [t('Validation (of a product)'), t('Product Validation Process'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Conduct demonstration observations of known ground targets with pre-characterized spectral signatures.',
          termIndices: [t('Demonstration'), t('Validation (of a product)'), t('Product Validation Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Demonstration using known targets provides objective validation of end-to-end system performance in the operational environment. This approach validates requirements against established baseline measurements and confirms the system meets its intended purpose.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Perform analytical validation by comparing on-orbit telemetry with pre-flight system models.',
          termIndices: [t('Analysis'), t('Validation (of a product)'), t('Baseline')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but limited. While analytical comparison with models provides useful verification, it cannot fully validate operational performance in the real environment. Models may not capture all on-orbit conditions and their effects on system behavior.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Use inspection methods by reviewing detailed subsystem telemetry for anomalies or deviations.',
          termIndices: [t('Inspection'), t('Verification (of a product)'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inspection alone cannot validate system performance requirements. This approach only verifies that components are functioning as designed, not that the integrated system meets its operational requirements in the intended environment.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Performance Assessment',
      title: 'Validating Mission Requirements',
      narrative:
        'Demonstration observations have been completed and initial results look promising. However, some performance metrics are showing slight deviations from expected values based on the original baseline. You must determine whether these differences indicate a requirement validation failure or acceptable performance within specifications. The mission success criteria depend on your assessment.',
      termHighlights: [t('Validated Requirements'), t('Baseline'), t('Performance Standards')],
      decisions: [
        {
          id: 'a',
          text: 'Compare actual performance against the established requirement thresholds to determine compliance status.',
          termIndices: [t('Validated Requirements'), t('Requirement'), t('Performance Standards')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Requirements validation must be based on objective comparison against specified thresholds, not idealized models. If performance meets the established requirements, the system is validated regardless of minor deviations from pre-flight predictions.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Immediately flag the deviations as validation failures requiring corrective action.',
          termIndices: [t('Product Validation Process'), t('Technical Requirements'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Premature assessment. Validation failures should only be declared when actual performance fails to meet specified requirements. Deviations from predictions may be acceptable if requirements are still met. Unnecessary corrective actions waste time and resources.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 4, budget: 3 },
        },
        {
          id: 'c',
          text: 'Request updated analysis models from the design team to better match observed performance.',
          termIndices: [t('Analysis'), t('Baseline'), t('Validation (of a product)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but secondary priority. Model updates may be useful for future missions, but validation should be based on meeting requirements, not matching models. This approach delays the validation process without adding value to current mission success.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Validation Completion',
      title: 'Final Validation Documentation',
      narrative:
        'Performance assessment confirms that all critical requirements have been validated within specifications. The satellite is ready to begin operational science missions. You must now complete the validation documentation and prepare for the system acceptance review. Proper documentation is essential for mission approval and future reference.',
      termHighlights: [t('System Acceptance Review'), t('Product Validation Process'), t('Validated Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Document all validation results with traceability to specific requirements and evidence of compliance.',
          termIndices: [t('Validated Requirements'), t('System Acceptance Review'), t('Product Validation Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Complete validation documentation with requirement traceability provides the evidence needed for system acceptance review. This documentation demonstrates that the system has been validated in its operational environment and is ready for mission operations.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Create a summary report highlighting successful validation activities without detailed requirement mapping.',
          termIndices: [t('System Acceptance Review'), t('Performance Standards'), t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but incomplete. While a summary is useful, the system acceptance review requires detailed evidence of requirement compliance. Without traceability, validation claims cannot be verified and mission approval may be delayed.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Submit raw telemetry data to the review board without analysis or interpretation.',
          termIndices: [t('Test'), t('System Acceptance Review'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Raw data alone does not constitute validation evidence. The system acceptance review requires analyzed results that demonstrate compliance with requirements. Unprocessed telemetry cannot support acceptance decisions and may result in mission approval denial.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 4, budget: 1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'Excellent work completing the on-orbit validation activities. Your systematic approach to validating requirements in the operational environment ensures mission success and provides the evidence needed for system acceptance.',
    failureNarrative: 'The validation process encountered significant issues that could impact mission approval. Review the proper sequence of validation activities and the importance of objective requirement compliance assessment.',
    successThreshold: 60,
  },
}
