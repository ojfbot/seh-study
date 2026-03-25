import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh26HumanSystemsIntegrationHsiInTheSeProcess: ScenarioTemplate = {
  meta: {
    id: 'seh-2-6-human-systems-integration-hsi-in-the-se-process',
    title: 'The Human Element Crisis',
    subtitle: 'Navigate HSI challenges that threaten your Earth observation mission',
    difficulty: 'advanced',
    categories: ['human-factors', 'lifecycle', 'reviews'],
    termIndices: [
      t('Human Systems Integration'),
      t('Human-Centered Design'),
      t('Human Factors Engineering'),
      t('System Requirements Review'),
      t('Preliminary Design Review'),
      t('Critical Design Review'),
      t('System Integration Review'),
      t('Operational Readiness Review'),
      t('Systems Approach'),
      t('System'),
      t('Requirement'),
      t('Mission'),
      t('Verification (of a product)'),
      t('Validation (of a product)'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase A',
      title: 'Missing HSI Foundation',
      narrative:
        'Six months into your Earth observation satellite project, the flight operations team discovers the ground control interface requires simultaneous monitoring of 47 displays by a single operator during critical maneuvers. The original system requirements never considered human performance limitations or cognitive workload. Your System Requirements Review is in two weeks and stakeholders are demanding answers.',
      termHighlights: [
        t('Human Systems Integration'),
        t('System Requirements Review'),
        t('Systems Approach'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Immediately implement Human Systems Integration as a core element of your systems engineering process, treating it equally with hardware and software considerations as required by NPR 7123.1.',
          termIndices: [
            t('Human Systems Integration'),
            t('Systems Approach'),
            t('System'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. NPR 7123.1 explicitly states that systems engineering must equally address hardware, software, and human systems integration as three key elements. HSI is not optional but fundamental to the systems approach.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Add human factors as a design constraint to be addressed later in Phase C when the interface designs are more mature.',
          termIndices: [t('Human Factors Engineering')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Poor timing. The life-cycle cost impact chart shows that design decisions made early have 500-1000× greater impact than changes made later. Deferring HSI to Phase C will result in expensive redesign.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: -3 },
        },
        {
          id: 'c',
          text: 'Focus on completing the technical requirements first, then conduct a separate human factors study after SRR approval.',
          termIndices: [t('System Requirements Review'), t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates the fundamental systems engineering principle that human, hardware, and software elements must be integrated from the start. Separating human considerations from system requirements leads to suboptimal total system performance.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase B',
      title: 'HSI Requirements Integration',
      narrative:
        'You have successfully passed SRR with HSI integrated into your systems approach. Now during preliminary design, your human factors engineer identifies that the spacecraft command interface violates established cognitive workload limits and will require extensive operator training. The flight software team argues that changing their interface architecture will delay Preliminary Design Review by three months.',
      termHighlights: [
        t('Human-Centered Design'),
        t('Preliminary Design Review'),
        t('Human Factors Engineering'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Apply Human-Centered Design principles to redesign the interface architecture, ensuring human performance requirements drive the technical solution rather than constraining it.',
          termIndices: [
            t('Human-Centered Design'),
            t('Human Factors Engineering'),
            t('Requirement'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Human-Centered Design ensures that human capabilities and limitations are primary design drivers. The short-term schedule impact prevents much larger operational costs and risks throughout the mission life cycle.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Keep the current software architecture but develop enhanced training programs and operational procedures to compensate for the interface complexity.',
          termIndices: [t('Human Factors Engineering')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Suboptimal approach. While training can help, designing around human limitations is more effective than trying to train humans to overcome poor design. This increases operational risk and life-cycle costs.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -2 },
        },
        {
          id: 'c',
          text: 'Proceed with the current design to maintain schedule, and plan to add automation in a future software update to reduce operator workload.',
          termIndices: [t('Preliminary Design Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach ignores HSI principles and defers critical design decisions. Future automation additions are expensive and may not integrate well with the original design. Mission safety and performance suffer.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Integration Verification Challenge',
      narrative:
        'Your Critical Design Review approaches and the integrated human-system design is complete. However, your verification team realizes they have no established methods to verify that the human-system interfaces meet their performance requirements. Traditional hardware and software verification approaches do not address human performance validation.',
      termHighlights: [
        t('Critical Design Review'),
        t('Verification (of a product)'),
        t('Validation (of a product)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop comprehensive human-in-the-loop verification procedures that validate both individual human-system interfaces and integrated system performance with human operators.',
          termIndices: [
            t('Verification (of a product)'),
            t('Validation (of a product)'),
            t('Human Systems Integration'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. HSI requires verification methods that address human performance as part of total system performance. Human-in-the-loop testing validates that the integrated system meets mission requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Use simulation-based testing for human interface verification while relying on analysis and inspection for human factors requirements.',
          termIndices: [t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Partially adequate but misses critical validation aspects. Simulation helps but cannot fully replicate the stress and complexity of actual operations. Some human performance requirements need empirical validation.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Verify human interfaces through documentation review and defer human performance testing until operational readiness since operators will need training anyway.',
          termIndices: [t('Critical Design Review'), t('Operational Readiness Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inadequate verification approach. Deferring human performance validation until ORR means design problems cannot be corrected without major rework. This violates the systems engineering principle of early verification.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 2, budget: -4 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase D',
      title: 'System Integration Reality Check',
      narrative:
        'During System Integration Review preparation, your first integrated system tests reveal that while each subsystem meets its individual requirements, the combined human-hardware-software system creates unexpected emergent behaviors. Operators report information overload during fault scenarios that were not apparent in individual subsystem testing.',
      termHighlights: [
        t('System Integration Review'),
        t('Human Systems Integration'),
        t('System'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Treat this as validation of the HSI approach - adjust the integrated system design to address emergent human performance issues before declaring integration complete.',
          termIndices: [
            t('Human Systems Integration'),
            t('System Integration Review'),
            t('System'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. HSI recognizes that human-system integration creates emergent behaviors that cannot be predicted from individual component performance. Addressing these issues validates the total system design.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Document the issues as operational constraints to be managed through enhanced procedures and continue with integration since individual components meet requirements.',
          termIndices: [t('System Integration Review')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Inadequate response. While components meet individual requirements, the system must perform as an integrated whole. Documented constraints increase operational risk and reduce mission effectiveness.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Proceed with integration as planned since rework would delay launch - the operators will adapt to the system during operations.',
          termIndices: [t('System Integration Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This abandons the systems engineering principle that the system must be designed for human capabilities, not force humans to adapt to poor design. This approach risks mission failure and operator safety.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase E',
      title: 'Operational Readiness Assessment',
      narrative:
        'Your Operational Readiness Review is approaching and you must demonstrate that the complete human-system integration meets mission requirements. Flight operators have completed training on the integrated system and initial operational scenarios are being tested. The question is whether your HSI implementation truly enables optimal total system performance.',
      termHighlights: [
        t('Operational Readiness Review'),
        t('Human Systems Integration'),
        t('Mission'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct comprehensive mission scenario validation with flight operators to verify that the human-hardware-software system achieves mission objectives within acceptable risk levels.',
          termIndices: [
            t('Operational Readiness Review'),
            t('Human Systems Integration'),
            t('Mission'),
            t('Validation (of a product)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. ORR must validate that the complete system, including human elements, is operationally ready to meet mission requirements. This demonstrates successful HSI implementation throughout the SE process.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Verify operator training completion and system functionality separately, then declare operational readiness based on individual element compliance.',
          termIndices: [t('Operational Readiness Review'), t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Insufficient integration focus. ORR should validate total system performance, not just individual element compliance. This misses potential integration issues that could affect mission success.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus ORR on hardware and software readiness since human training can continue after launch and operators will improve with experience.',
          termIndices: [t('Operational Readiness Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This fundamentally misunderstands HSI and ORR requirements. Human readiness is equally critical to mission success as hardware and software readiness. Post-launch learning cannot substitute for proper integration validation.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully implemented Human Systems Integration as a core element of your systems engineering process, treating human considerations equally with hardware and software throughout all phases. Your mission achieved optimal total system performance by designing around human capabilities rather than forcing adaptation to poor design.',
    failureNarrative:
      'Your mission suffered from inadequate Human Systems Integration, treating human factors as an afterthought rather than a core system element. This resulted in operational difficulties, increased training costs, and suboptimal mission performance that could have been prevented with proper HSI implementation.',
    successThreshold: 60,
  },
}
