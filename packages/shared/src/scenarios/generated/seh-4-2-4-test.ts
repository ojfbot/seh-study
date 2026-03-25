import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh424Test: ScenarioTemplate = {
  meta: {
    id: 'seh-4-2-4-test',
    title: 'Qualification Testing Strategy',
    subtitle: 'Define environmental test philosophy for lunar gateway thermal control system',
    difficulty: 'intermediate',
    categories: ['verification', 'design', 'risk'],
    termIndices: [
      t('Test'),
      t('Engineering Unit'),
      t('Margin'),
      t('System'),
      t('Validation (of a product)'),
      t('Verification (of a product)'),
      t('Technical Performance Measures'),
      t('Environmental Impact'),
      t('Risk Assessment'),
      t('Component Facilities'),
      t('Product Validation Process'),
      t('Product Verification Process'),
      t('Technical Risk'),
      t('Fault Tolerance'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Test Philosophy Definition',
      title: 'Establishing Test Extremes',
      narrative:
        'Your thermal control system must operate in the lunar environment with temperature swings from -173°C to +127°C. The design team has proposed testing at qualification levels of -180°C to +135°C with 8°C margins on each extreme. You need to determine if these test extremes provide sufficient confidence for the mission-critical system. The program manager asks for your assessment of the proposed test philosophy.',
      termHighlights: [t('Test'), t('Margin'), t('Environmental Impact')],
      decisions: [
        {
          id: 'a',
          text: 'Accept the proposed 8°C margins as adequate since they exceed the expected operational range.',
          termIndices: [t('Margin')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'An 8°C margin is insufficient for a mission-critical lunar system. Best practices require 15-20°C margins for qualification testing to account for uncertainties in environmental predictions, manufacturing tolerances, and aging effects. Inadequate test margins increase technical risk significantly.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Recommend increasing qualification test margins to 20°C beyond operational extremes to ensure adequate fault tolerance.',
          termIndices: [t('Test'), t('Margin'), t('Fault Tolerance')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A 20°C margin provides appropriate confidence for lunar mission qualification testing. This margin accounts for environmental uncertainties, unit-to-unit variations, and component degradation over the mission life. The expanded test range demonstrates fault tolerance under worst-case scenarios.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 2 },
        },
        {
          id: 'c',
          text: 'Propose testing only to the exact operational limits to minimize test facility costs and schedule.',
          termIndices: [t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Testing only to operational limits provides no margin for uncertainties and violates qualification test principles. This approach significantly increases technical risk by failing to demonstrate performance under worst-case conditions that may occur during the mission.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Test Level Selection',
      title: 'Component vs System Testing',
      narrative:
        'The thermal control system includes heat exchangers, pumps, radiators, and control electronics. Some components will undergo individual qualification while others will be tested as integrated subsystems. You must decide the appropriate test level for the critical heat exchanger assemblies that interface multiple subsystems. The integration team needs guidance on where to focus the most rigorous environmental testing.',
      termHighlights: [t('System'), t('Component Facilities'), t('Product Integration Process')],
      decisions: [
        {
          id: 'a',
          text: 'Test heat exchangers only at component level since individual qualification is sufficient for well-understood hardware.',
          termIndices: [t('Component Facilities')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Component-only testing misses critical interface effects and system-level interactions. Heat exchangers are interface-critical components that must be validated in their system context to verify thermal coupling, fluid dynamics, and control loop performance.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Perform both component-level qualification and system-level validation testing of heat exchanger assemblies.',
          termIndices: [t('System'), t('Validation (of a product)'), t('Product Integration Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Critical interface components like heat exchangers require both component qualification and system validation testing. Component tests verify individual performance margins while system tests validate integrated operation and interface compatibility under environmental extremes.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 3 },
        },
        {
          id: 'c',
          text: 'Skip component testing and rely entirely on system-level environmental testing to reduce program cost.',
          termIndices: [t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'System-only testing cannot isolate component failure modes or provide adequate fault diagnosis capability. This approach increases technical risk by making it difficult to identify root causes if environmental testing reveals performance issues.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Test Unit Selection',
      title: 'Engineering vs Qualification Units',
      narrative:
        'Your test program budget allows for building either three engineering units with moderate fidelity or two high-fidelity qualification units with full flight traceability. The engineering units cost 40% less but use some commercial-grade components instead of space-qualified parts. You need to recommend the optimal test unit approach to balance risk, cost, and schedule for the critical thermal validation campaign.',
      termHighlights: [t('Engineering Unit'), t('Technical Performance Measures'), t('Risk Assessment')],
      decisions: [
        {
          id: 'a',
          text: 'Build three engineering units to enable more test iterations and faster design feedback cycles.',
          termIndices: [t('Engineering Unit'), t('Technical Performance Measures')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Engineering units provide valuable design feedback but cannot fully validate flight performance margins. While this approach enables more test iterations, the use of non-flight components introduces uncertainty in translating results to actual flight hardware performance.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -2 },
        },
        {
          id: 'b',
          text: 'Build two qualification units with full flight traceability to ensure test results directly validate flight hardware performance.',
          termIndices: [t('Engineering Unit'), t('Verification (of a product)'), t('Technical Performance Measures')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Qualification units with flight-representative components provide the highest confidence in test results. While fewer units limit test iterations, the full traceability ensures that environmental test data directly validates flight hardware performance and margins.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 2 },
        },
        {
          id: 'c',
          text: 'Build one qualification unit and two engineering units to balance test confidence with budget constraints.',
          termIndices: [t('Engineering Unit'), t('Risk Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A mixed approach complicates test data correlation and increases program risk. Results from engineering units cannot be directly applied to qualification hardware, making it difficult to establish clear technical performance measures and margins for flight acceptance.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Validation Method',
      title: 'End-to-End Test Campaign',
      narrative:
        'Your qualification test campaign must validate thermal system performance across all mission phases: launch vibration, on-orbit thermal cycling, and lunar surface operations. The test sequence will span 8 months and require coordination between thermal-vacuum chambers, vibration facilities, and EMC labs. You need to define how the end-to-end validation will demonstrate system adequacy for the complete mission profile.',
      termHighlights: [t('Product Validation Process'), t('System'), t('Technical Risk Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Run each environmental test separately with full system recovery between test phases to minimize facility scheduling conflicts.',
          termIndices: [t('Technical Risk Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Separate testing with recovery periods fails to validate cumulative environmental effects and stress interactions. Real missions experience sequential environmental exposures without recovery, so the test campaign must replicate this combined stress environment to properly validate system robustness.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Execute sequential environmental testing without recovery to validate cumulative stress effects on thermal system performance.',
          termIndices: [t('Product Validation Process'), t('System'), t('Verification (of a product)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Sequential testing without recovery validates the system ability to withstand cumulative environmental stresses as experienced in actual mission conditions. This approach provides the highest confidence that thermal performance will remain within specifications throughout all mission phases.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Perform abbreviated testing at reduced stress levels to accelerate the qualification schedule.',
          termIndices: [t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Abbreviated testing at reduced stress levels fails to demonstrate adequate margins and fault tolerance for mission-critical systems. This approach significantly increases technical risk by not validating performance under the full range of expected environmental conditions.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -3, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Test Philosophy Implementation',
      title: 'Validation Documentation',
      narrative:
        'Your environmental test campaign has successfully demonstrated thermal system performance with adequate margins across all mission environments. The final validation report must clearly document how the test philosophy proved system adequacy for lunar operations. The NASA review board requires evidence that your test approach provides sufficient confidence for mission success. You need to prepare the validation summary that will support the flight readiness determination.',
      termHighlights: [t('Validation (of a product)'), t('Technical Performance Measures'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Document only the pass/fail results of each test without detailed analysis of performance margins or failure modes.',
          termIndices: [t('Technical Performance Measures')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Pass/fail documentation alone is insufficient for mission-critical system validation. The review board requires detailed margin analysis, failure mode assessment, and correlation to flight predictions to establish confidence in system adequacy for lunar mission success.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Provide comprehensive validation documentation including margin analysis, failure mode assessment, and correlation to flight performance predictions.',
          termIndices: [t('Validation (of a product)'), t('Technical Performance Measures'), t('Product Validation Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Comprehensive validation documentation demonstrates that the test philosophy successfully validated system performance with quantified margins. Detailed analysis of test results, failure modes, and correlation to flight conditions provides the evidence needed for flight readiness determination.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus validation documentation on test facility capabilities rather than system performance results.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Facility capability documentation does not validate system performance adequacy. The validation report must focus on how test results demonstrate that the thermal system meets mission requirements with adequate margins, not on the capabilities of the test equipment used.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully established a comprehensive test philosophy that validates thermal system performance with adequate margins across all mission environments. Your approach balances technical rigor with program constraints while providing the confidence needed for mission success.',
    failureNarrative: 'The test philosophy contains significant gaps that increase mission risk. Inadequate margins, insufficient test levels, or poor validation methods compromise confidence in system performance for lunar operations.',
    successThreshold: 60,
  },
}
