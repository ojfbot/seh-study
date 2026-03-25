import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6121VerificationByTesting: ScenarioTemplate = {
  meta: {
    id: 'seh-6-1-2-1-verification-by-testing',
    title: 'CubeSat Solar Panel Testing Protocol',
    subtitle: 'Design and execute qualification testing for deployable solar arrays',
    difficulty: 'intermediate',
    categories: ['verification', 'requirements'],
    termIndices: [
      t('Test'),
      t('Engineering Unit'),
      t('Verification (of a product)'),
      t('Requirement'),
      t('Margin'),
      t('Product'),
      t('System'),
      t('Component Facilities'),
      t('Operational Environment'),
      t('Performance Standards'),
      t('Technical Performance Measures'),
      t('Threshold Requirements'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Test Planning',
      title: 'Qualification Test Strategy',
      narrative:
        'Your CubeSat constellation requires deployable solar panels that must survive launch vibration and operate in the space environment for three years. You need to define the qualification testing approach for the solar panel assembly. The customer requires verification that the panels meet all threshold requirements with appropriate margins. Your engineering team has built three units: a flight unit, a qualification unit, and an engineering unit.',
      termHighlights: [t('Test'), t('Verification (of a product)'), t('Threshold Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Use the flight unit for all qualification testing to ensure the actual flight hardware is verified.',
          termIndices: [t('Test'), t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Using the flight unit for destructive or extreme qualification testing risks damaging the hardware needed for the mission. Flight units should only undergo acceptance testing in normal operating ranges. Qualification testing at extreme levels should be performed on dedicated qualification units or engineering units.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Perform qualification testing on the qualification unit at extreme environmental conditions to verify margins beyond normal operating ranges.',
          termIndices: [t('Test'), t('Engineering Unit'), t('Margin'), t('Operational Environment')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Qualification testing should be performed on dedicated qualification units or engineering units at conditions more severe than the expected operational environment. This approach verifies that the product has adequate margins and can survive worst-case scenarios without risking the flight hardware.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Skip qualification testing and rely on analysis and heritage data from similar solar panel designs.',
          termIndices: [t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Analysis alone is insufficient for verification of critical hardware like solar panels. While heritage data is valuable, each new design requires physical testing to verify performance and identify potential failure modes. The customer specifically requires test verification of threshold requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Test Environment Definition',
      title: 'Environmental Test Conditions',
      narrative:
        'You are defining the environmental test conditions for the solar panel qualification testing. The panels will experience launch vibration loads and must deploy and operate in the space thermal environment. Industry standards suggest testing at levels 1.5 times the expected flight environment. Your preliminary analysis shows the flight environment includes temperatures from -80°C to +60°C and random vibration up to 14.1 Grms.',
      termHighlights: [t('Operational Environment'), t('Margin'), t('Performance Standards')],
      decisions: [
        {
          id: 'a',
          text: 'Test at exactly the flight environment levels (-80°C to +60°C, 14.1 Grms vibration) to avoid over-testing.',
          termIndices: [t('Operational Environment'), t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Testing at exactly the flight environment levels provides no margin for uncertainties or manufacturing variations. Qualification testing should exceed expected flight conditions to verify adequate design margins and ensure the product can handle worst-case scenarios.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Test at 1.5 times the flight environment levels (-120°C to +90°C, 21.2 Grms vibration) to verify design margins.',
          termIndices: [t('Test'), t('Margin'), t('Performance Standards')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Testing at 1.5 times the expected flight environment is a standard qualification approach that verifies design margins. This level of testing ensures the product can withstand conditions beyond the normal operational environment, providing confidence in system reliability and performance.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Test at 3 times the flight environment levels to maximize confidence, regardless of cost or schedule impact.',
          termIndices: [t('Test'), t('Margin')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Testing at 3 times flight levels is excessive and may cause failures that would never occur in the actual mission environment. Over-testing wastes resources and can damage otherwise acceptable hardware. The industry standard factor of 1.5 provides adequate margin verification.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 3, budget: 4 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Test Facility Selection',
      title: 'Facility Requirements',
      narrative:
        'You need to select appropriate component facilities for conducting the solar panel qualification testing. The testing requires thermal vacuum chambers for temperature cycling, vibration tables for mechanical testing, and solar simulators for electrical performance verification. Three facility options are available: an in-house lab with basic capabilities, a specialized aerospace test facility, and a university research center.',
      termHighlights: [t('Component Facilities'), t('Test'), t('Technical Performance Measures')],
      decisions: [
        {
          id: 'a',
          text: 'Use the in-house lab to save costs, even though it lacks some specialized equipment like thermal vacuum chambers.',
          termIndices: [t('Component Facilities'), t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Using inadequate facilities compromises the validity of qualification testing. Thermal vacuum testing is essential for space hardware verification. Cost savings from using inappropriate facilities will be negated by the risk of unverified performance and potential mission failures.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: -2 },
        },
        {
          id: 'b',
          text: 'Select the specialized aerospace test facility that has all required capabilities including thermal vacuum, vibration, and solar simulation.',
          termIndices: [t('Component Facilities'), t('Test'), t('Technical Performance Measures')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Selecting facilities with all required capabilities ensures comprehensive and valid qualification testing. Specialized aerospace test facilities have the proper equipment, calibrated instrumentation, and experienced personnel to conduct space hardware verification testing according to industry standards.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 2 },
        },
        {
          id: 'c',
          text: 'Split testing across multiple facilities to minimize cost, using different locations for thermal, vibration, and electrical testing.',
          termIndices: [t('Component Facilities'), t('Test')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While splitting testing can reduce costs, it introduces risks from transportation between facilities and potential inconsistencies in test procedures. It also complicates schedule coordination and data correlation. This approach is acceptable but not optimal for critical qualification testing.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Test Execution Strategy',
      title: 'Testing Sequence Planning',
      narrative:
        'Your qualification testing plan includes thermal cycling, vibration testing, and electrical performance measurements. The test sequence is critical because some tests may affect others. Vibration testing could potentially damage the panels, thermal cycling might reveal latent defects, and electrical testing measures final performance. You need to determine the optimal test sequence to maximize the value of your qualification testing.',
      termHighlights: [t('Test'), t('Product'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Start with electrical performance testing when the unit is pristine, then proceed to thermal and vibration testing.',
          termIndices: [t('Test'), t('Technical Performance Measures')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Starting with electrical testing provides baseline performance data, but this sequence does not follow the typical mission timeline where mechanical environments occur first during launch. It is acceptable but not optimal for qualification testing that should simulate the actual mission sequence.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Follow the mission timeline: vibration testing first (simulating launch), then thermal cycling (simulating space environment), with electrical performance verification throughout.',
          termIndices: [t('Test'), t('System'), t('Technical Performance Measures')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Following the mission timeline in qualification testing provides the most realistic verification of system performance. Testing vibration first simulates launch loads, thermal cycling represents the space environment, and continuous electrical monitoring verifies that performance is maintained throughout the mission sequence.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Conduct all environmental tests simultaneously to save time and better simulate the actual space environment.',
          termIndices: [t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Simultaneous environmental testing is extremely complex, expensive, and rarely provides meaningful data. Most test facilities cannot perform combined thermal-vacuum-vibration testing effectively. Sequential testing following mission timeline provides more controlled and interpretable results for qualification purposes.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 4, budget: 5 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Test Results Analysis',
      title: 'Requirement Verification',
      narrative:
        'Your qualification testing has been completed and the solar panels performed well. The electrical output exceeded the minimum power requirement by 8%, deployment time was within specification, and no mechanical failures occurred during vibration testing. However, during one thermal cycle, the panel temperature reached 2°C above the predicted maximum. You need to determine if this result satisfies the verification requirements and whether additional testing is needed.',
      termHighlights: [t('Requirement'), t('Verification (of a product)'), t('Margin')],
      decisions: [
        {
          id: 'a',
          text: 'Accept the test results as successful since the panels functioned properly and met electrical performance requirements.',
          termIndices: [t('Requirement'), t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Accepting results without addressing the temperature exceedance is inadequate for proper verification. Even though electrical performance was met, the thermal behavior exceeded predictions and could indicate a design issue or thermal model error that requires investigation and resolution.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Investigate the temperature exceedance, update thermal models, and verify that all requirements are still met with adequate margin.',
          termIndices: [t('Verification (of a product)'), t('Requirement'), t('Margin')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Proper verification requires investigation of any unexpected results, even when systems function correctly. Understanding the temperature exceedance ensures thermal models are accurate and that adequate margins exist for flight. This thorough approach provides confidence in requirement verification.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Declare testing incomplete and rebuild new qualification units for complete retesting to ensure perfect results.',
          termIndices: [t('Test'), t('Engineering Unit')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Complete retesting is excessive for a minor thermal exceedance that did not cause functional failures. This approach wastes significant resources and schedule. The appropriate response is to understand the anomaly and verify that requirements are still satisfied, not to start over completely.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 5, budget: 4 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully designed and executed a comprehensive qualification testing program that verified your solar panel requirements with appropriate margins. Your systematic approach to test planning, facility selection, and results analysis ensures mission success and stakeholder confidence.',
    failureNarrative: 'Your testing approach had significant gaps that could compromise mission assurance. Proper qualification testing requires careful planning of test conditions, appropriate facilities, and thorough analysis of results to verify all requirements with adequate margins.',
    successThreshold: 60,
  },
}
