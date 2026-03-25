import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh53ProductVerification: ScenarioTemplate = {
  meta: {
    id: 'seh-5-3-product-verification',
    title: 'Proving the Build',
    subtitle: 'Verify your asteroid sample return capsule meets its requirements before validation testing',
    difficulty: 'advanced',
    categories: ['verification', 'reviews', 'configuration'],
    termIndices: [
      t('Product Verification Process'),
      t('End Product'),
      t('Realized Product'),
      t('Test'),
      t('Analysis'),
      t('Baseline'),
      t('Product Integration Process'),
      t('Product Validation Process'),
      t('Verification (of a product)'),
      t('Customer'),
      t('Configuration Items (CI)'),
      t('Specification'),
      t('Technical Requirements'),
      t('Physical Configuration Audits (PCA) or configuration inspection'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase D',
      title: 'Ready for Verification',
      narrative:
        'Your asteroid sample return capsule has completed Product Integration Process activities and is now a realized end product. The heat shield, sample containment system, and parachute deployment mechanisms are all assembled and integrated. Before moving to Product Validation Process testing in simulated re-entry conditions, you must verify this end product conforms to its specifications and requirements.',
      termHighlights: [
        t('Product Integration Process'),
        t('Realized Product'),
        t('Product Verification Process'),
        t('End Product'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Execute the Product Verification Process using both test and analysis methods against the approved baseline specifications to prove conformance to requirements.',
          termIndices: [
            t('Product Verification Process'),
            t('Test'),
            t('Analysis'),
            t('Baseline'),
            t('Specification'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Product Verification Process formally demonstrates that your realized end product conforms to its design solution definition requirements. Using both test and analysis methods provides comprehensive verification coverage before validation testing.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Skip formal verification and proceed directly to validation testing since the integrated capsule will be tested under realistic conditions anyway.',
          termIndices: [t('Product Validation Process'), t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates NASA SE principles. Verification must precede validation to ensure the end product meets specifications before expensive validation testing. Without verified baselines, validation failures become costly and difficult to diagnose.',
          nextNodeId: null,
          scoreImpact: { risk: -6, schedule: 2, budget: -4 },
        },
        {
          id: 'c',
          text: 'Perform limited spot-checks on key subsystems to save time and budget before moving to validation.',
          termIndices: [t('Verification (of a product)'), t('End Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky shortcut. Partial verification may miss critical non-conformances that could cause validation test failures or mission risks. The SE Handbook emphasizes that verification must be comprehensive to establish proper configuration control.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase D',
      title: 'Verification Strategy',
      narrative:
        'Your verification plan must address both the heat shield thermal protection system and the sample containment mechanism. The heat shield requires thermal analysis against temperature requirements, while the containment system needs pressure testing. You must decide how to structure these verification activities to answer the critical question: "Was the end product realized right?"',
      termHighlights: [
        t('Verification (of a product)'),
        t('Technical Requirements'),
        t('Test'),
        t('Analysis'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Use analysis methods for thermal verification and test methods for pressure verification, ensuring each method provides appropriate evidence of conformance to specifications.',
          termIndices: [
            t('Analysis'),
            t('Test'),
            t('Specification'),
            t('Verification (of a product)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct approach. Different verification methods are appropriate for different requirements. Analysis is suitable for thermal modeling while pressure testing provides direct measurement evidence. Both methods properly verify conformance to specifications.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Rely only on analysis methods for both subsystems to reduce testing costs and schedule impacts.',
          termIndices: [t('Analysis'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While analysis can verify some requirements, pressure containment typically requires physical testing for proper verification. Analysis alone may not provide sufficient confidence for critical safety requirements like sample containment integrity.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 2 },
        },
        {
          id: 'c',
          text: 'Test everything possible regardless of cost to maximize verification confidence.',
          termIndices: [t('Test'), t('End Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inefficient and potentially destructive. Some requirements like thermal performance are better verified through analysis. Over-testing can damage hardware and waste resources without adding meaningful verification value.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -4 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase D',
      title: 'Configuration Control',
      narrative:
        'During verification testing, your team discovers the sample containment seal requires a minor design modification to meet leak rate requirements. This change affects the verified baseline configuration. You must decide how to handle this modification while maintaining proper configuration control for the verification process.',
      termHighlights: [
        t('Baseline'),
        t('Configuration Items (CI)'),
        t('Physical Configuration Audits (PCA) or configuration inspection'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Implement the design change through proper configuration management, update the baseline, and re-verify the modified configuration item.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Baseline'),
            t('Product Verification Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Without verified baselines and proper configuration controls, later modifications could be costly or cause major performance problems. The modification must be controlled and the changed CI re-verified.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Make the change informally and document it later since verification is nearly complete.',
          termIndices: [t('Configuration Items (CI)'), t('Baseline')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates configuration management principles. Informal changes without baseline updates create configuration discrepancies that can lead to major problems. The SE Handbook emphasizes that configuration control is essential during verification.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Accept the current design as-is and note the non-conformance for the customer to accept.',
          termIndices: [t('Customer'), t('Specification')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While customer acceptance of non-conformances is possible, it shifts risk and may not be acceptable for critical safety requirements like sample containment. Fixing the issue during verification is typically more cost-effective than field modifications.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase D',
      title: 'Verification Completion',
      narrative:
        'Your verification activities have confirmed that the capsule end product conforms to its specifications. All test data has been collected and analysis results documented. The configuration audit shows all items match their approved baselines. Now you must transition this verified end product to the validation team who will test it under simulated mission conditions.',
      termHighlights: [
        t('Product Validation Process'),
        t('Customer'),
        t('Physical Configuration Audits (PCA) or configuration inspection'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Deliver the verified end product with complete verification documentation to support the Product Validation Process activities.',
          termIndices: [
            t('Product Validation Process'),
            t('Realized Product'),
            t('Customer'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Product verification confirms the end product was "realized right" according to specifications. This verified baseline is now ready for validation testing to confirm it will do what the customer intended in the operational environment.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Hold the end product for additional verification testing to increase confidence before validation.',
          termIndices: [t('Test'), t('End Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Unnecessary delay. Once verification is complete and conformance to specifications is demonstrated, additional testing provides diminishing returns. The validation team needs the verified product to begin their testing.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Skip the configuration audit since testing already confirmed the product works correctly.',
          termIndices: [
            t('Physical Configuration Audits (PCA) or configuration inspection'),
            t('Configuration Items (CI)'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Configuration audits are essential to verify that the as-built product matches the approved design documentation. Functional testing alone does not confirm configuration compliance. This creates uncontrolled configuration risk.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully executed the Product Verification Process to confirm your asteroid sample return capsule conforms to its specifications. The verified baseline provides confidence that the end product was "realized right" and is ready for validation testing.',
    failureNarrative:
      'Your verification approach introduced risks that could lead to costly rework or mission failures. Proper product verification is essential to establish verified baselines before validation activities.',
    successThreshold: 60,
  },
}
