import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh36ProjectPhaseCFinalDesignAndFabrication: ScenarioTemplate = {
  meta: {
    id: 'seh-3-6-project-phase-c-final-design-and-fabrication',
    title: 'Critical Design Crossroads',
    subtitle: 'Navigate final design challenges for a deep space telescope mission',
    difficulty: 'advanced',
    categories: ['design', 'reviews', 'project-mgmt'],
    termIndices: [
      t('Critical Design Review'),
      t('Production Readiness Review (PRR)'),
      t('System Integration Review'),
      t('Product Baseline (Phase D/E)'),
      t('Allocated Baseline (Phase C)'),
      t('Configuration Management Process'),
      t('Trade Study'),
      t('Technical Performance Measures'),
      t('Verification (of a product)'),
      t('Analysis'),
      t('Engineering Unit'),
      t('Process'),
      t('Success Criteria'),
      t('Baseline'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase C',
      title: 'Detailed Design Conflicts',
      narrative:
        'As requirements lead for the deep space telescope, you are three months into Phase C when the optical team discovers their final mirror design exceeds mass allocations by 15%. The structural team proposes a lighter support framework, but thermal analysis shows this creates unacceptable temperature gradients. You must decide how to proceed with the Critical Design Review approaching.',
      termHighlights: [
        t('Critical Design Review'),
        t('Allocated Baseline (Phase C)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a formal trade study comparing the mass overage option, lighter framework with thermal mitigation, and alternative mirror designs, updating technical performance measures and the allocated baseline based on results.',
          termIndices: [
            t('Trade Study'),
            t('Technical Performance Measures'),
            t('Allocated Baseline (Phase C)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct approach. Phase C requires systematic trade studies to resolve design conflicts before CDR. The allocated baseline must be updated through proper configuration management to reflect validated design decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Accept the mass overage and adjust spacecraft design margins to compensate, documenting this as an acceptable risk for CDR.',
          termIndices: [t('Critical Design Review')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky but sometimes necessary. However, accepting mass overage without formal analysis may cascade into launch vehicle compatibility issues or mission performance degradation.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Postpone the CDR until the design conflict is resolved, even if this delays the overall schedule.',
          termIndices: [t('Critical Design Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'CDR delays should be avoided unless absolutely necessary. Phase C processes are designed to resolve such conflicts through systematic analysis while maintaining schedule momentum.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -4, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase C',
      title: 'Engineering Unit Testing Crisis',
      narrative:
        'Your engineering unit testing reveals that the primary mirror actuator system fails under thermal vacuum conditions that match the expected operational environment. The failure occurs in 40% of test cycles, but the design team argues this is acceptable for an engineering unit. You need to determine how this impacts your progression toward CDR and eventual fabrication.',
      termHighlights: [
        t('Engineering Unit'),
        t('Analysis'),
        t('Verification (of a product)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Treat this as a critical finding requiring root cause analysis and design modification before proceeding to flight unit fabrication, updating verification plans accordingly.',
          termIndices: [
            t('Analysis'),
            t('Verification (of a product)'),
            t('Engineering Unit'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Engineering units in Phase C must demonstrate design maturity for flight hardware. A 40% failure rate indicates fundamental design issues that must be resolved before committing to fabrication.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Document the failures as known issues and proceed with flight unit fabrication, planning to address problems during integration testing.',
          termIndices: [t('Engineering Unit')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky approach that violates Phase C principles. Engineering unit testing is specifically designed to identify and resolve such issues before expensive flight hardware fabrication begins.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: -3 },
        },
        {
          id: 'c',
          text: 'Replace the actuator system with a heritage design from a previous mission to eliminate the risk.',
          termIndices: [t('Engineering Unit')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Heritage components may not meet the specific performance requirements of your telescope design. This decision should only be made after proper analysis and trade studies.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Configuration Management Challenge',
      narrative:
        'During final design documentation, you discover that three different subsystem teams have been working from different versions of the interface control document. The propulsion team\'s thruster specifications conflict with the pointing control team\'s requirements, and the telecommunications team assumed a different power allocation. Your configuration management process has clearly broken down at a critical point.',
      termHighlights: [
        t('Configuration Management Process'),
        t('Baseline'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Immediately halt all design work, reconvene the configuration control board to establish the correct baseline, and implement stricter version control processes before resuming.',
          termIndices: [
            t('Configuration Management Process'),
            t('Baseline'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct response. Configuration management is critical in Phase C when multiple teams are finalizing detailed designs. Continuing with inconsistent baselines will create integration nightmares.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Have each team leader verify their current design against the official baseline and make necessary corrections without stopping overall progress.',
          termIndices: [t('Baseline')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Partial solution that may not catch all inconsistencies. Individual team verification lacks the systematic approach needed to ensure complete interface compatibility.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Continue with current designs and resolve conflicts during system integration, treating this as normal design evolution.',
          termIndices: [t('Configuration Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Dangerous approach that violates fundamental Phase C principles. Interface conflicts must be resolved during detailed design, not deferred to integration when fixes become exponentially more expensive.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 1, budget: -4 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'CDR Success Criteria Decision',
      narrative:
        'Your Critical Design Review is scheduled in six weeks, and you must finalize the success criteria. The project manager wants to focus on schedule and budget compliance, while the technical team insists on demonstrating complete design maturity. The customer is concerned about operational readiness. You must define what constitutes CDR success.',
      termHighlights: [
        t('Critical Design Review'),
        t('Success Criteria'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish success criteria that require demonstrated design maturity, complete documentation of the product baseline, verified interface compatibility, and validated manufacturing processes.',
          termIndices: [
            t('Success Criteria'),
            t('Product Baseline (Phase D/E)'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. CDR success criteria must ensure the design is ready for fabrication. This includes technical maturity, complete documentation, and proven manufacturing readiness as specified in the SE Handbook.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus success criteria primarily on schedule and budget metrics since those are the customer\'s main concerns for mission viability.',
          termIndices: [t('Success Criteria')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Incomplete approach. While schedule and budget are important, CDR must primarily validate technical readiness. Weak technical success criteria can lead to fabrication problems and cost overruns.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Set minimal success criteria to ensure the review passes, allowing the project to maintain momentum into fabrication.',
          termIndices: [t('Success Criteria')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Dangerous shortcut that undermines the purpose of CDR. Weak success criteria allow immature designs to proceed to expensive fabrication, virtually guaranteeing integration problems and mission risk.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase C',
      title: 'Production Readiness Assessment',
      narrative:
        'Following a successful CDR, you must now prepare for the Production Readiness Review since your telescope requires fabrication of multiple identical detector arrays. The manufacturing team reports they can meet quality standards but need specialized clean room facilities that will take four months to set up. Your supplier claims they can deliver components faster using existing facilities but with slightly relaxed contamination controls.',
      termHighlights: [
        t('Production Readiness Review (PRR)'),
        t('Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with the specialized clean room setup and delay production start to ensure compliance with contamination requirements, documenting this as necessary for mission success.',
          termIndices: [
            t('Production Readiness Review (PRR)'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct decision. PRR must verify that production processes can consistently deliver flight-quality hardware. Compromising contamination controls for detector arrays would likely result in mission-critical performance degradation.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -3, budget: -1 },
        },
        {
          id: 'b',
          text: 'Accept the supplier\'s existing facilities with relaxed contamination controls, implementing additional post-production testing to verify detector performance.',
          termIndices: [t('Production Readiness Review (PRR)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky compromise that may affect detector sensitivity. While post-production testing can catch some issues, contamination damage to detector arrays is often irreversible and difficult to detect until operational use.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Skip the PRR since you only need a small number of detector arrays and proceed directly to fabrication with existing processes.',
          termIndices: [t('Production Readiness Review (PRR)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Violates NASA requirements. PRR is mandatory when producing multiple similar systems, regardless of quantity. This review ensures production processes are mature and controlled before committing resources.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 3, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'Excellent navigation of Phase C challenges. You demonstrated proper application of systems engineering processes during final design and fabrication preparation. Your decisions balanced technical rigor with practical constraints while maintaining mission integrity.',
    failureNarrative:
      'Your approach may compromise mission success by inadequately addressing Phase C requirements. Critical design review processes and production readiness assessments exist to prevent costly problems during fabrication and integration phases.',
    successThreshold: 60,
  },
}
