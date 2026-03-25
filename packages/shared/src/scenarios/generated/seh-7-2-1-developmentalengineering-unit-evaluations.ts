import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh721DevelopmentalengineeringUnitEvaluations: ScenarioTemplate = {
  meta: {
    id: 'seh-7-2-1-developmentalengineering-unit-evaluations',
    title: 'Engineering Unit Testing Strategy',
    subtitle: 'Design developmental testing approach for deep space telescope components',
    difficulty: 'advanced',
    categories: ['verification', 'design', 'technology'],
    termIndices: [
      t('Engineering Unit'),
      t('Breadboard'),
      t('Brassboard'),
      t('Test'),
      t('Analysis'),
      t('System'),
      t('Demonstration'),
      t('Verification (of a product)'),
      t('Validation (of a product)'),
      t('Heritage (or legacy)'),
      t('Technology Readiness Level'),
      t('Concurrent Engineering'),
      t('Automated'),
      t('Configuration Items (CI)'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Phase C',
      title: 'Engineering Unit Testing Strategy',
      narrative:
        'Your deep space telescope project has completed preliminary design review and entered Phase C development. The primary mirror actuation system requires extensive testing before flight hardware fabrication. You must define the developmental testing strategy using engineering units to validate the integrated system performance before formal verification activities. Three testing approaches are being debated by your team.',
      termHighlights: [t('Engineering Unit'), t('Test'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Develop a comprehensive engineering unit test plan that includes breadboard functional testing, brassboard form-fit-function validation, and system-level integration testing with flight-like interfaces.',
          termIndices: [
            t('Engineering Unit'),
            t('Breadboard'),
            t('Brassboard'),
            t('Test'),
            t('System'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. This follows NASA SE best practices for developmental testing by using multiple fidelity levels. Breadboards prove basic functionality, brassboards validate form-fit-function, and system-level testing verifies integrated performance before committing to flight hardware.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -2 },
        },
        {
          id: 'b',
          text: 'Skip engineering unit testing and proceed directly to flight hardware verification since the design is based on heritage components with proven technology readiness levels.',
          termIndices: [
            t('Engineering Unit'),
            t('Heritage (or legacy)'),
            t('Technology Readiness Level'),
            t('Verification (of a product)'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Dangerous assumption. Even heritage components require engineering unit testing when integrated into new system architectures. The deep space environment and telescope precision requirements create new integration challenges that must be validated before flight hardware commitment.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Perform limited breadboard testing only for the highest risk components and rely on analysis and simulation for system-level validation.',
          termIndices: [
            t('Breadboard'),
            t('Test'),
            t('Analysis'),
            t('System'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Partially acceptable but risky for advanced missions. While breadboard testing addresses component risks, system-level integration issues often emerge only during integrated testing. Analysis alone may miss emergent behaviors in the complex telescope system.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Phase C',
      title: 'Configuration Management for Engineering Units',
      narrative:
        'Your engineering unit testing program is approved, but the team raises concerns about configuration control. The engineering units will evolve rapidly as design issues are discovered and resolved. You need to establish how these developmental units will be managed as configuration items while maintaining the flexibility needed for effective testing and iteration.',
      termHighlights: [
        t('Configuration Items (CI)'),
        t('Engineering Unit'),
        t('Configuration Management Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish engineering units as controlled configuration items with formal change control processes identical to flight hardware to ensure complete traceability.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Engineering Unit'),
            t('Configuration Management Process'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Too rigid for developmental testing. Engineering units need configuration awareness but excessive formal control inhibits the rapid iteration essential for effective developmental testing. This approach would slow testing and increase costs unnecessarily.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -2 },
        },
        {
          id: 'b',
          text: 'Track engineering unit configurations informally through test logs and documentation without formal configuration item designation since they are temporary developmental tools.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Engineering Unit'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable for simple tests but risky for complex systems. Informal tracking may lose critical configuration details that affect test validity and traceability to flight design. Test results could become difficult to interpret or reproduce.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Implement lightweight configuration control that formally tracks major design changes and interface definitions while allowing rapid iteration for internal component modifications during testing.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Engineering Unit'),
            t('Configuration Management Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Optimal balance for developmental testing. This approach maintains essential traceability for test validity while preserving the flexibility needed for effective engineering unit testing. It ensures test results can be properly interpreted and applied to flight design.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Test Automation Strategy',
      narrative:
        'The engineering unit testing will involve thousands of test cycles for the telescope pointing and stability systems. Manual testing would consume excessive time and introduce human error risks. Your team proposes developing automated test procedures to improve efficiency and repeatability. However, automation development requires additional upfront investment and technical risk.',
      termHighlights: [
        t('Automated'),
        t('Test'),
        t('Engineering Unit'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop fully automated test procedures for all engineering unit testing to maximize efficiency and eliminate human error, accepting the upfront development cost and schedule impact.',
          termIndices: [
            t('Automated'),
            t('Test'),
            t('Engineering Unit'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Potentially over-automated for developmental testing. While automation brings benefits, full automation of exploratory engineering unit testing may reduce the flexibility to adapt test procedures as issues are discovered. Some manual oversight remains valuable.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -2 },
        },
        {
          id: 'b',
          text: 'Implement selective automation for repetitive test sequences while maintaining manual control for exploratory testing and anomaly investigation procedures.',
          termIndices: [
            t('Automated'),
            t('Test'),
            t('Engineering Unit'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent strategy. This balanced approach automates routine repetitive tests for efficiency while preserving human insight for exploratory testing. It optimizes the benefits of automation while maintaining flexibility essential for developmental testing.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Conduct all engineering unit testing manually to avoid automation development risks and maintain maximum flexibility for test procedure modifications.',
          termIndices: [
            t('Test'),
            t('Engineering Unit'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inefficient for advanced telescope systems. Manual testing of thousands of pointing cycles introduces significant human error risks and schedule delays. The complexity and precision requirements of deep space telescopes necessitate some level of test automation.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Integration with Formal Verification',
      narrative:
        'Your engineering unit testing program is generating valuable performance data and identifying several design improvements. Now you must decide how these developmental test results will interface with the formal verification and validation processes that will follow. The question is how to leverage engineering unit findings while maintaining clear boundaries between developmental and formal testing.',
      termHighlights: [
        t('Verification (of a product)'),
        t('Validation (of a product)'),
        t('Engineering Unit'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Use engineering unit test results as preliminary verification data to reduce formal testing requirements, since the engineering units demonstrate adequate performance margins.',
          termIndices: [
            t('Engineering Unit'),
            t('Verification (of a product)'),
            t('Test'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Violates verification principles. Engineering units cannot substitute for formal verification of flight hardware. While engineering unit data provides valuable insights, formal verification must still be performed on actual flight hardware with proper test procedures and documentation.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Completely separate developmental and formal testing programs to avoid any contamination of verification results, treating engineering unit findings as purely informational.',
          termIndices: [
            t('Engineering Unit'),
            t('Verification (of a product)'),
            t('Test'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Overly conservative approach that wastes valuable data. While engineering unit results cannot replace formal verification, they provide important insights for optimizing verification test procedures and identifying potential issues in advance.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Document engineering unit test results and lessons learned to inform formal verification test procedure development while maintaining clear separation between developmental and formal testing phases.',
          termIndices: [
            t('Engineering Unit'),
            t('Verification (of a product)'),
            t('Test'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Optimal approach that maximizes value while maintaining verification integrity. Engineering unit findings inform and improve formal verification procedures without compromising the independence required for flight hardware verification. This follows NASA SE best practices.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Phase C',
      title: 'Test Results Documentation',
      narrative:
        'Six months of engineering unit testing has produced extensive performance data, identified three significant design improvements, and validated the overall system architecture. Your team must now decide how to document and preserve these findings for future program phases. The documentation approach will affect how effectively this knowledge transfers to flight hardware development and operations teams.',
      termHighlights: [
        t('Engineering Unit'),
        t('Test'),
        t('Data Management'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Create comprehensive test reports documenting all procedures, results, and lessons learned with clear traceability to design requirements and recommendations for flight hardware development.',
          termIndices: [
            t('Engineering Unit'),
            t('Test'),
            t('Data Management'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent documentation strategy. Comprehensive documentation with clear traceability ensures engineering unit findings are effectively transferred to subsequent program phases. This preserves valuable knowledge and prevents re-learning the same lessons during flight hardware development.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Document only the final test results and design recommendations since detailed test procedures are not relevant for flight hardware development teams.',
          termIndices: [
            t('Engineering Unit'),
            t('Test'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Loses valuable procedural knowledge. While final results are important, the test procedures and intermediate findings often contain insights crucial for flight hardware testing and operations. Limited documentation may force later teams to repeat developmental work.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Archive all raw test data electronically but skip formal report generation since the engineering team can provide verbal briefings as needed.',
          termIndices: [
            t('Engineering Unit'),
            t('Test'),
            t('Data Management'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Poor knowledge preservation strategy. Raw data without analysis and context has limited value for future teams. Verbal briefings are not reliable for knowledge transfer over multi-year programs. This approach risks losing critical engineering insights.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'Your systematic approach to engineering unit testing has successfully validated the telescope system architecture while identifying key design improvements. The comprehensive testing strategy, balanced automation approach, and thorough documentation will significantly reduce risks in subsequent development phases.',
    failureNarrative:
      'The engineering unit testing program faced challenges due to inadequate planning and documentation. Missing critical test phases or poor knowledge preservation may force costly re-work during flight hardware development and increase program risks.',
    successThreshold: 60,
  },
}
