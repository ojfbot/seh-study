import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh5413Outputs: ScenarioTemplate = {
  meta: {
    id: 'seh-5-4-1-3-outputs',
    title: 'Validation Outputs Documentation',
    subtitle: 'Document validation results for asteroid sample containment system delivery',
    difficulty: 'beginner',
    categories: ['verification', 'project-mgmt', 'configuration'],
    termIndices: [
      t('Product Validation Process'),
      t('End Product'),
      t('Customer'),
      t('Transition'),
      t('Stakeholder Expectations'),
      t('Success Criteria'),
      t('Objective'),
      t('Anomaly'),
      t('Process'),
      t('Activity'),
      t('Technical Data Package'),
      t('Configuration Management Process'),
      t('Nonconforming product'),
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase D',
      title: 'Validation Testing Complete',
      narrative:
        'Your asteroid sample containment system has completed all validation testing activities. The system successfully demonstrated proper sealing under vacuum conditions and contamination prevention protocols. As HSI Lead, you need to prepare the validation outputs to document that the system meets stakeholder expectations and is ready for delivery.',
      termHighlights: [
        t('Product Validation Process'),
        t('Stakeholder Expectations'),
        t('End Product'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Compile a complete validation package including the validated end product, test results, validation report with conformance evidence, and all supporting work products like procedures and certifications.',
          termIndices: [
            t('End Product'),
            t('Product Validation Process'),
            t('Success Criteria'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A complete validation output package includes all four key deliverables: the validated end product ready for transition, raw test results, a formal validation report, and supporting work products. This provides comprehensive evidence of conformance.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Simply declare the system validated since testing was successful and prepare for immediate customer delivery.',
          termIndices: [
            t('Customer'),
            t('Transition'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Validation requires formal documentation beyond just successful testing. Without proper validation outputs including reports and evidence packages, there is no objective proof that stakeholder expectations were met.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Document only the test results and validation report, leaving the work products for later compilation.',
          termIndices: [
            t('Process'),
            t('Activity'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but incomplete. While test results and validation reports are essential, work products like procedures and certifications are equally important validation outputs. Incomplete documentation may cause issues during transition.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase D',
      title: 'Anomaly Discovery',
      narrative:
        'While reviewing the validation test data, you discover that one seal leaked slightly during a thermal cycling test, though it remained within acceptable limits. This anomaly was corrected during testing but needs proper documentation. Your validation report must address this nonconformance appropriately.',
      termHighlights: [
        t('Anomaly'),
        t('Nonconforming product'),
        t('Success Criteria'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document the anomaly in the validation report with detailed description, root cause analysis, corrective actions taken, and evidence that the fix resolves the issue while maintaining stakeholder requirements compliance.',
          termIndices: [
            t('Anomaly'),
            t('Stakeholder Expectations'),
            t('Objective'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The validation report must include comprehensive documentation of all anomalies, nonconformances, and corrective actions. This transparency provides objective evidence that issues were properly addressed and resolved.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Omit the anomaly from the validation report since it was corrected and the system now meets requirements.',
          termIndices: [
            t('Nonconforming product'),
            t('Success Criteria'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Hiding anomalies violates validation documentation requirements. All nonconformances must be documented regardless of whether they were corrected, to provide complete objective evidence of the validation process.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Mention the anomaly briefly in the report but focus primarily on the successful corrective action without detailed analysis.',
          termIndices: [
            t('Process'),
            t('Success Criteria'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but insufficient. While mentioning the anomaly is better than omitting it, validation reports require detailed documentation including root cause analysis and evidence of resolution to meet success criteria.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase D',
      title: 'Configuration Management Integration',
      narrative:
        'The validated containment system configuration differs slightly from the original design due to the seal modification. Before declaring validation complete, you must ensure all configuration changes are properly documented and integrated into the technical data package for customer delivery.',
      termHighlights: [
        t('Configuration Management Process'),
        t('Technical Data Package'),
        t('Customer'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Update all configuration documentation through the formal Configuration Management Process, ensuring the Technical Data Package reflects the validated end product configuration before customer transition.',
          termIndices: [
            t('Configuration Management Process'),
            t('Technical Data Package'),
            t('End Product'),
            t('Transition'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Configuration management is critical to validation outputs. The technical data package must accurately reflect the validated end product configuration to ensure the customer receives proper documentation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Note the configuration changes informally and include them as addendums to the existing documentation.',
          termIndices: [
            t('Configuration Management Process'),
            t('Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but risky. Informal configuration documentation can lead to confusion during product transition. Proper configuration management processes ensure all changes are formally controlled and traceable.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Proceed with customer delivery using the original configuration documentation since the changes were minor.',
          termIndices: [
            t('Customer'),
            t('Transition'),
            t('Technical Data Package'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Delivering a product with outdated configuration documentation violates validation requirements and could cause serious problems during customer operations. All configuration changes must be properly documented.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase D',
      title: 'Validation Completion Review',
      narrative:
        'Your validation documentation is complete and ready for final review before customer delivery. The project manager asks you to confirm that all validation process success criteria have been met and no outstanding issues remain. This is your final checkpoint before declaring validation complete.',
      termHighlights: [
        t('Success Criteria'),
        t('Process'),
        t('Objective'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Verify that objective evidence exists for all validation activities, all issues and corrective actions are documented and resolved, and success criteria are fully satisfied before declaring validation complete.',
          termIndices: [
            t('Success Criteria'),
            t('Objective'),
            t('Activity'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The validation process should not be considered complete until all success criteria are met, including objective evidence documentation and resolution of all issues. This ensures stakeholder expectations are fully satisfied.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Declare validation complete since testing was successful and documentation exists, even though some minor procedural items remain open.',
          termIndices: [
            t('Process'),
            t('Success Criteria'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Validation cannot be declared complete with open issues remaining. All actions must be resolved and success criteria fully met to ensure proper product transition and stakeholder satisfaction.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Request additional time to resolve the remaining procedural items before making the final validation determination.',
          termIndices: [
            t('Success Criteria'),
            t('Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but impacts schedule. While ensuring complete resolution is important, well-managed validation processes should identify and address all issues during execution rather than at the final review.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully managed all key validation outputs including the validated end product, comprehensive documentation, and proper configuration control. Your systematic approach ensured objective evidence of conformance and proper resolution of all issues.',
    failureNarrative:
      'Your validation outputs were incomplete or improperly documented, creating risks for product transition and customer satisfaction. Better attention to validation documentation requirements and success criteria would improve outcomes.',
    successThreshold: 60,
  },
}
