import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh7134ValidationByDemonstration: ScenarioTemplate = {
  meta: {
    id: 'seh-7-1-3-4-validation-by-demonstration',
    title: 'Crew Escape System Validation Demonstration',
    subtitle: 'Demonstrate crew escape capabilities through integrated system testing',
    difficulty: 'intermediate',
    categories: ['verification', 'reviews', 'human-factors'],
    termIndices: [
      t('Demonstration'),
      t('Product Validation Process'),
      t('System Integration Review'),
      t('Critical Design Review'),
      t('Flight Readiness Review'),
      t('Human Systems Integration'),
      t('Human-Centered Design'),
      t('System'),
      t('Test'),
      t('Validation (of a product)'),
      t('Verification (of a product)'),
      t('Automated'),
      t('Detection'),
      t('Test Readiness Review'),
      t('Success Criteria')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Planning',
      title: 'Demonstration Scope Definition',
      narrative: 'You are preparing the validation demonstration for the crew escape system of your crewed transport vehicle. The system includes launch escape motors, crew cabin pressurization, and automated seat positioning. Stakeholders want to see the integrated system perform under realistic abort scenarios. You need to determine the appropriate demonstration approach that will validate stakeholder expectations while maintaining safety.',
      termHighlights: [t('Demonstration'), t('Product Validation Process'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a full-scale demonstration using live crew members in an actual abort scenario with operational escape motors.',
          termIndices: [t('Demonstration'), t('Human Systems Integration')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'A live abort demonstration with crew would create unacceptable safety risks during validation. Demonstrations should show capability without endangering personnel. Alternative methods like qualified test personnel in controlled scenarios or high-fidelity simulations are more appropriate for validating life-critical systems.',
          nextNodeId: null,
          scoreImpact: { risk: 8, schedule: 0, budget: 2 }
        },
        {
          id: 'b',
          text: 'Use qualified test personnel in a high-fidelity ground demonstration with inert escape motors and full crew cabin simulation.',
          termIndices: [t('Demonstration'), t('Human-Centered Design'), t('Success Criteria')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Using qualified test personnel in controlled ground demonstrations allows validation of crew escape capabilities while maintaining safety. The demonstration can show integrated system performance including human-system interfaces, automated sequences, and crew procedures without the risks of live escape motor firing.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Rely solely on computer simulations and analytical models to validate the escape system performance.',
          termIndices: [t('Validation (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Computer simulations alone cannot constitute a demonstration. Validation by demonstration specifically requires showing actual system operation, even if under controlled conditions. Simulations support analysis but cannot replace the physical demonstration needed to validate human-system integration aspects.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Test Setup',
      title: 'Demonstration Configuration',
      narrative: 'Your ground demonstration requires configuring the test setup to validate key stakeholder expectations. The crew cabin mock-up needs to represent actual flight conditions including lighting, communications, and emergency equipment accessibility. You must decide how to configure the automated systems to demonstrate both nominal and off-nominal escape sequences during the validation event.',
      termHighlights: [t('Test'), t('Automated'), t('Human Systems Integration')],
      decisions: [
        {
          id: 'a',
          text: 'Configure only nominal escape sequences to ensure a clean demonstration without complications.',
          termIndices: [t('Demonstration')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Demonstrating only nominal sequences fails to validate system robustness under realistic conditions. Stakeholder expectations include system performance during off-nominal scenarios. A comprehensive demonstration should show both standard operations and the system\'s ability to handle contingencies.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Include both nominal sequences and selected off-nominal scenarios with automated failure detection and response.',
          termIndices: [t('Automated'), t('Detection'), t('Human Systems Integration')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Including both nominal and off-nominal scenarios demonstrates system capability across expected operating conditions. The automated detection and response features are critical validation points for stakeholders. This approach shows the integrated system can handle real-world contingencies while maintaining crew safety.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 1 }
        },
        {
          id: 'c',
          text: 'Focus the demonstration entirely on off-nominal failure modes to stress-test the system limits.',
          termIndices: [t('Test')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'While testing failure modes is important, a validation demonstration should show the full operational envelope. Focusing only on failures may not adequately validate normal operating procedures and human-system interfaces that stakeholders expect to see working correctly.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 1, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Review Preparation',
      title: 'Demonstration Readiness Assessment',
      narrative: 'Before conducting the demonstration, you need to complete a readiness assessment to ensure all elements are properly integrated and configured. The test personnel have completed their training, the mock-up systems are functioning, and measurement systems are calibrated. However, you discover that the crew cabin communication system has an intermittent audio dropout issue that affects crew coordination during emergency procedures.',
      termHighlights: [t('Test Readiness Review'), t('System Integration Review'), t('Human Systems Integration')],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with the demonstration as scheduled, noting the communication issue as a known limitation.',
          termIndices: [t('Demonstration')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Proceeding with a known communication system issue compromises the validation demonstration. Communication is critical for crew coordination during escape procedures. Conducting the demonstration with known deficiencies may invalidate results and fail to properly validate stakeholder expectations for integrated system performance.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Delay the demonstration until the communication system is fully operational and re-verify system integration.',
          termIndices: [t('System Integration Review'), t('Test Readiness Review')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. A validation demonstration requires all integrated systems to function properly to provide meaningful results. Fixing the communication issue and re-verifying system integration ensures the demonstration will accurately validate the crew escape system capabilities as stakeholders expect them to operate.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 3, budget: 1 }
        },
        {
          id: 'c',
          text: 'Replace the communication system demonstration with hand signals and written procedures.',
          termIndices: [t('Human Systems Integration')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'While this maintains the demonstration schedule, it changes the system configuration being validated. Stakeholder expectations likely include normal communication protocols. Using alternate communication methods may not fully validate the integrated system as it will operate in flight.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Execution',
      title: 'Demonstration Performance',
      narrative: 'The validation demonstration is now underway with qualified test personnel executing escape procedures in the integrated mock-up system. All automated sequences are functioning correctly, and the test crew is following established procedures. You are observing the demonstration to evaluate whether it successfully shows that the integrated system meets stakeholder expectations for crew escape capability.',
      termHighlights: [t('Demonstration'), t('Success Criteria'), t('Validation (of a product)')],
      decisions: [
        {
          id: 'a',
          text: 'Focus only on whether each individual subsystem performs its designed function during the demonstration.',
          termIndices: [t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This approach focuses on verification rather than validation. While individual subsystem performance is important, validation by demonstration must show that the integrated system achieves stakeholder expectations for overall crew escape capability, including human-system interfaces and operational effectiveness.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        },
        {
          id: 'b',
          text: 'Evaluate how well the integrated system demonstrates the capability to achieve safe crew escape under the scenarios presented.',
          termIndices: [t('Validation (of a product)'), t('Success Criteria'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Validation by demonstration must show that the system achieves stakeholder expectations for crew safety and escape capability. This requires evaluating the integrated system performance rather than individual components, focusing on whether the demonstration proves the system can accomplish its intended mission.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Document any deviations from perfect performance as demonstration failures requiring system redesign.',
          termIndices: [t('Success Criteria')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Minor deviations or imperfections do not necessarily constitute demonstration failures. Success criteria should be based on whether the system achieves stakeholder expectations for operational capability, not perfect execution. Reasonable operational variations may be acceptable if they do not compromise mission success.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 2, budget: 3 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Assessment',
      title: 'Demonstration Results Evaluation',
      narrative: 'The demonstration has been completed successfully, with the integrated crew escape system performing all required functions. The test personnel executed both nominal and off-nominal procedures effectively, and all automated systems responded appropriately to commanded sequences. You now need to assess whether this demonstration provides sufficient validation evidence to support the upcoming Flight Readiness Review.',
      termHighlights: [t('Flight Readiness Review'), t('Validation (of a product)'), t('Demonstration')],
      decisions: [
        {
          id: 'a',
          text: 'Conclude that one successful demonstration provides complete validation evidence for the Flight Readiness Review.',
          termIndices: [t('Demonstration'), t('Flight Readiness Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'A single demonstration, while valuable, typically cannot provide complete validation evidence for complex systems. Flight Readiness Reviews require comprehensive validation including multiple demonstrations, analyses, and tests across various conditions. Additional validation evidence strengthens confidence in system readiness.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: 0 }
        },
        {
          id: 'b',
          text: 'Recommend additional demonstrations under different environmental conditions to strengthen validation evidence.',
          termIndices: [t('Demonstration'), t('Validation (of a product)')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Comprehensive validation typically requires demonstrations under various conditions to show system capability across the expected operational envelope. Additional demonstrations in different environments or scenarios provide stronger evidence that stakeholder expectations for system performance will be met.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 }
        },
        {
          id: 'c',
          text: 'Declare the validation complete and immediately proceed to operational use without further demonstration.',
          termIndices: [t('Validation (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Proceeding directly to operational use after a single demonstration skips critical validation steps and review processes. The Flight Readiness Review process exists to ensure all validation evidence is complete before committing to operational missions, especially for crew safety systems.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -3, budget: -1 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'You successfully planned and executed a validation demonstration that showed integrated crew escape system capability while maintaining appropriate safety margins. Your systematic approach to demonstration planning, readiness assessment, and results evaluation provides strong evidence for stakeholder validation.',
    failureNarrative: 'The demonstration approach had significant gaps in validation methodology or safety considerations. Effective validation by demonstration requires careful planning to show integrated system capability while managing risks and providing credible evidence of stakeholder expectation fulfillment.',
    successThreshold: 60,
  },
}
