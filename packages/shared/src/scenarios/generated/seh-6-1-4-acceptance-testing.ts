import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh614AcceptanceTesting: ScenarioTemplate = {
  meta: {
    id: 'seh-6-1-4-acceptance-testing',
    title: 'Final Flight Acceptance',
    subtitle: 'Execute acceptance testing to prove your ISS experiment is flight-ready',
    difficulty: 'advanced',
    categories: ['verification', 'reviews'],
    termIndices: [
      t('Test'),
      t('Analysis'),
      t('Demonstration'),
      t('Inspection'),
      t('System'),
      t('As-Deployed Baseline'),
      t('Realized Product'),
      t('Detection'),
      t('Prognosis'),
      t('Flight Readiness Review'),
      t('Product Baseline (Phase D/E)'),
      t('Configuration Items (CI)'),
    ],
    estimatedMinutes: 20,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Phase E',
      title: 'Flight Hardware Arrives',
      narrative:
        'Your ISS protein crystal growth experiment has completed manufacturing and integration. The flight unit sits before you in the clean room, identical in design to the qualification unit that passed all verification tests. Now you must prove this specific flight hardware has the same design, good workmanship, and performs its identified functions properly. The Flight Readiness Review is in three weeks.',
      termHighlights: [t('Test'), t('Flight Readiness Review'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Develop a comprehensive acceptance test plan combining test, analysis, demonstration, and inspection methods to verify design conformity, workmanship quality, and functional performance of the flight unit.',
          termIndices: [t('Test'), t('Analysis'), t('Demonstration'), t('Inspection')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook requires acceptance testing to use the full spectrum of verification methods - tests for detailed performance data, analysis for calculated validation, demonstrations for capability confirmation, and inspections for physical design verification. This comprehensive approach ensures flight readiness.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Run only the critical functional tests since the design was already verified on the qualification unit - acceptance testing should be minimal to save time and cost.',
          termIndices: [t('Test')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky approach. While the qualification unit proved the design works, acceptance testing must verify this specific flight unit has the same design and good workmanship. Minimal testing may miss manufacturing defects or assembly errors that could cause mission failure.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 2 },
        },
        {
          id: 'c',
          text: 'Repeat all qualification tests on the flight unit to be absolutely certain it will work in space.',
          termIndices: [t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Excessive and potentially harmful. Full qualification testing could damage the flight unit through repeated thermal cycling and vibration exposure. Acceptance testing should be less invasive while still proving conformity and performance - the design was already qualified.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -4, budget: -4 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Phase E',
      title: 'Workmanship Assessment Strategy',
      narrative:
        'Your acceptance test plan needs to address workmanship verification for the flight hardware. The critical protein sample containment system uses custom machined components, while the temperature control system relies on precise electronic assemblies. You must determine how to verify that manufacturing and assembly quality meets flight standards without damaging the hardware.',
      termHighlights: [t('Inspection'), t('Detection'), t('Realized Product')],
      decisions: [
        {
          id: 'a',
          text: 'Use visual inspection for mechanical components, electrical continuity tests for harnesses, and non-destructive detection methods for internal assemblies to verify workmanship without compromising flight hardware.',
          termIndices: [t('Inspection'), t('Detection'), t('Test')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Acceptance testing must verify workmanship through non-destructive methods that prove quality without compromising the flight unit. Visual inspection confirms physical features, continuity tests verify electrical integrity, and detection methods reveal internal defects safely.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Focus only on external visual inspection since internal components were already verified during manufacturing quality control processes.',
          termIndices: [t('Inspection')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Incomplete verification. While manufacturing QC is important, acceptance testing must independently verify workmanship of the final integrated product. Internal defects from integration processes might not be caught by external inspection alone.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Disassemble key components for detailed workmanship inspection, then reassemble with witnessed procedures to ensure flight configuration.',
          termIndices: [t('Inspection'), t('Configuration Items (CI)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Unacceptable risk to flight hardware. Disassembly and reassembly introduces contamination risks and potential damage to flight components. Acceptance testing should verify workmanship through non-invasive methods that maintain hardware integrity.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Phase E',
      title: 'Functional Performance Validation',
      narrative:
        'The workmanship verification is complete and passed. Now you must prove the flight unit performs its identified functions properly. The experiment must maintain precise temperature control, execute automated sample processing sequences, and communicate telemetry to the ISS systems. However, you cannot run a full experiment cycle since that would consume the flight samples.',
      termHighlights: [t('Demonstration'), t('Analysis'), t('Prognosis')],
      decisions: [
        {
          id: 'a',
          text: 'Use demonstration with substitute samples to show operational capability, combined with analysis of sensor data to validate performance parameters against requirements.',
          termIndices: [t('Demonstration'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect strategy. Demonstration proves the system can achieve its specified functions using non-flight samples, while analysis of the resulting data validates that performance meets requirements. This approach preserves flight samples while proving functional capability.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Run detailed tests of all subsystems individually, then use analysis to predict integrated system performance based on component-level data.',
          termIndices: [t('Test'), t('Analysis')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Component testing is valuable but insufficient. Acceptance testing should verify the integrated system performs its identified functions, not just predict performance from component data. Emergent behaviors from system integration might be missed.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Install prognostic monitoring systems to track system health during ground operations and predict flight performance capability.',
          termIndices: [t('Prognosis')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While prognosis is valuable for operational health monitoring, it cannot replace acceptance testing that proves current functional performance. You need to demonstrate actual capability now, not just predict future performance.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Phase E',
      title: 'Design Conformity Evidence',
      narrative:
        'The functional demonstrations and performance analysis are complete and successful. Your final acceptance testing challenge is proving this flight unit has the same design as the qualified unit. The manufacturing team reports three minor engineering changes were incorporated during production, all approved through the change control process. You must verify these changes are properly implemented and documented.',
      termHighlights: [t('As-Deployed Baseline'), t('Configuration Items (CI)')],
      decisions: [
        {
          id: 'a',
          text: 'Verify the as-deployed baseline documentation reflects all approved changes, inspect physical implementation of changes on the flight unit, and confirm configuration item identification matches the controlled baseline.',
          termIndices: [t('As-Deployed Baseline'), t('Configuration Items (CI)'), t('Inspection')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent completion of acceptance testing. You have verified design conformity by confirming the physical flight unit matches the controlled baseline documentation, including all approved changes. This proves the flight unit truly has the same design as the qualified version.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Accept the manufacturing team\'s certification that changes were properly implemented since they have formal change control procedures.',
          termIndices: [t('Configuration Items (CI)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Insufficient verification independence. While change control procedures are important, acceptance testing requires independent verification that changes were correctly implemented on this specific flight unit. Trust but verify is the proper approach.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Request that all engineering changes be backed out and the original qualified design be restored to eliminate any risk of design differences.',
          termIndices: [t('Realized Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Counterproductive approach. Approved engineering changes were likely incorporated to fix issues or improve performance. Backing them out could introduce the original problems and would require re-verification. The proper approach is to verify the changes were correctly implemented.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Phase E',
      title: 'Acceptance Testing Complete',
      narrative:
        'Your comprehensive acceptance testing program has successfully demonstrated that the flight unit has the same design as the qualified unit, exhibits good workmanship, and performs all identified functions properly. The test reports are being finalized for the Flight Readiness Review. However, one test result shows a minor performance parameter at the lower edge of its acceptance range, though still within specification.',
      termHighlights: [t('Flight Readiness Review'), t('Realized Product')],
      decisions: [
        {
          id: 'a',
          text: 'Document the parameter as acceptable since it meets specification, include trend analysis in the acceptance report, and recommend continued monitoring during flight operations.',
          termIndices: [t('Analysis'), t('Flight Readiness Review')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Proper completion of acceptance testing. You have verified the flight unit meets all requirements while noting areas for operational attention. This realized product is ready for flight with appropriate documentation and monitoring recommendations.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Investigate the root cause of the lower performance and rerun acceptance testing after making adjustments to bring the parameter to nominal values.',
          termIndices: [t('Test')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Conservative but potentially unnecessary. Since the parameter meets specification, additional investigation and testing may delay flight readiness without improving safety or performance. Document the condition and proceed unless there are other risk indicators.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Recommend flight unit replacement since optimal performance is critical for ISS operations and the lower parameter value indicates potential degradation.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Excessive response to a compliant test result. Replacing flight hardware based on performance within specification would set an impossible standard and cause unnecessary delays. Acceptance testing verifies specification compliance, not optimization.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -5, budget: -5 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'You successfully executed a comprehensive acceptance testing program that proved your ISS experiment flight unit has the same design as the qualified unit, exhibits good workmanship, and performs all required functions. Your systematic use of test, analysis, demonstration, and inspection methods provided the evidence needed for flight readiness approval.',
    failureNarrative:
      'Your acceptance testing approach had significant gaps that could compromise mission success. Acceptance testing must comprehensively verify design conformity, workmanship quality, and functional performance using appropriate verification methods without damaging the flight hardware.',
    successThreshold: 60,
  },
}
