import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh331SystemEndItemA: ScenarioTemplate = {
  meta: {
    id: 'seh-3-3-1-system-end-item-a',
    title: 'The Mobility Subsystem Challenge',
    subtitle: 'Define verification context for your Mars rover\'s critical mobility end item',
    difficulty: 'advanced',
    categories: ['verification', 'design', 'reviews'],
    termIndices: [
      t('Analysis'),
      t('System'),
      t('Preliminary Design Review'),
      t('Allocated Baseline (Phase C)'),
      t('Verification (of a product)'),
      t('Test'),
      t('Demonstration'),
      t('Inspection'),
      t('Product Verification Process'),
      t('Technical Requirements'),
      t('Fault Tolerance'),
      t('Reliability'),
      t('Configuration Items (CI)'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase C',
      title: 'Defining the Mobility End Item',
      narrative:
        'As Requirements Lead for the Mars rover, you must describe the mobility subsystem as System End Item A in your V&V plan. The mobility subsystem includes six wheels, suspension, motors, and navigation sensors. Your team needs context to understand what verification activities will prove this critical subsystem meets requirements.',
      termHighlights: [t('System'), t('Verification (of a product)')],
      decisions: [
        {
          id: 'a',
          text: 'Document the mobility subsystem architecture, key functions, interfaces, and performance requirements to provide complete V&V context.',
          termIndices: [t('System'), t('Technical Requirements'), t('Product Verification Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Section 3.3.1 requires detailed end item description so V&V activities have proper context. Architecture, functions, interfaces, and performance requirements provide the foundation for verification planning.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Simply list the mobility subsystem components since the verification team can figure out the details later.',
          termIndices: [t('System'), t('Configuration Items (CI)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Insufficient context. Just listing components without describing their functions, interfaces, and requirements leaves the V&V team unable to plan appropriate verification activities. This leads to verification gaps.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Reference existing design documents instead of describing the mobility subsystem in the V&V plan.',
          termIndices: [t('System'), t('Allocated Baseline (Phase C)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Poor practice. The V&V plan must contain sufficient end item description for verification context. External references create dependencies and may become outdated, compromising verification planning.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase C',
      title: 'Critical Performance Context',
      narrative:
        'The mobility subsystem must traverse rocky terrain, survive temperature extremes from -80°C to +20°C, and operate for 90 sols minimum. You need to explain how these performance requirements drive verification approaches. The verification team will use this context to select appropriate analysis, test, demonstration, and inspection methods.',
      termHighlights: [t('Analysis'), t('Test'), t('Demonstration'), t('Inspection')],
      decisions: [
        {
          id: 'a',
          text: 'Describe the operational environment, performance thresholds, and failure modes to guide verification method selection.',
          termIndices: [t('Analysis'), t('Test'), t('Reliability'), t('Fault Tolerance')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Environmental conditions, performance thresholds, and failure modes directly influence which verification methods are most appropriate. This context enables the verification team to make informed decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus only on nominal performance requirements since extreme conditions are handled by other subsystems.',
          termIndices: [t('System'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Incomplete approach. The mobility subsystem must be verified across all operational conditions. Ignoring extreme environments creates verification gaps that could lead to mission failure.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'State that all verification will be done by analysis since physical testing is too expensive.',
          termIndices: [t('Analysis'), t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inappropriate constraint. Verification method selection must be based on technical merit and risk, not just cost. Critical mobility functions require appropriate test and demonstration verification.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 0, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Interface Dependencies',
      narrative:
        'The mobility subsystem interfaces with power, thermal, communications, and navigation subsystems. These interfaces affect verification planning because some tests require integrated operation. You must explain these dependencies so the verification team understands when individual subsystem verification is sufficient versus when integrated testing is required.',
      termHighlights: [t('System'), t('Product Verification Process')],
      decisions: [
        {
          id: 'a',
          text: 'Map interface dependencies and specify which verification activities require stand-alone testing versus integrated system operation.',
          termIndices: [t('System'), t('Product Verification Process'), t('Test')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Interface dependencies directly impact verification sequencing and resource planning. Clear mapping enables efficient verification planning and avoids costly rework.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Note that interfaces exist but let the verification team work out the details during test planning.',
          termIndices: [t('System'), t('Test')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Insufficient guidance. Interface dependencies are critical for verification planning. Leaving these details undefined forces late-stage replanning and potential schedule impacts.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Assume all mobility verification can be done independently since it\'s a separate subsystem.',
          termIndices: [t('System'), t('Product Verification Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Dangerous assumption. Complex systems have interface dependencies that require integrated verification. This approach risks missing critical failure modes that only appear during integrated operation.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Verification Method Context',
      narrative:
        'Your V&V plan will define four verification methods: analysis, test, demonstration, and inspection. For the mobility subsystem description, you need to provide enough technical context so readers understand why certain verification approaches will be selected. The Preliminary Design Review is approaching, and the review board will evaluate your verification strategy.',
      termHighlights: [t('Analysis'), t('Preliminary Design Review')],
      decisions: [
        {
          id: 'a',
          text: 'Provide subsystem complexity, criticality, and heritage information to justify verification method selection rationale.',
          termIndices: [t('Analysis'), t('Preliminary Design Review'), t('Product Verification Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Complexity, criticality, and heritage directly influence verification method appropriateness. This context supports the verification strategy and helps reviewers understand the technical rationale.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'State that verification methods will be defined in section 4.2.1 so no context is needed here.',
          termIndices: [t('Analysis'), t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Missing the point. Section 3.3.1 provides context FOR the verification methods defined in 4.2.1. Readers need subsystem understanding before they can evaluate verification approaches.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Copy verification requirements from other rover programs since mobility subsystems are similar.',
          termIndices: [t('System'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Inappropriate reuse. Each system has unique requirements, environments, and constraints. Copying verification approaches without proper context analysis leads to inadequate or excessive verification.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase C',
      title: 'V&V Context Integration',
      narrative:
        'You\'re finalizing the mobility subsystem description in section 3.3.1. The description must provide sufficient context for all downstream V&V activities without duplicating information that belongs in other sections. Your goal is enabling the verification team to understand what they\'re verifying and why specific approaches make sense.',
      termHighlights: [t('Product Verification Process'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Create a concise but complete subsystem description that enables informed verification planning without duplicating requirements or detailed design information.',
          termIndices: [t('Product Verification Process'), t('System'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Section 3.3.1 provides the "what and why" context that makes verification activities understandable. This enables effective V&V planning while maintaining appropriate document structure.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Include detailed requirements and specifications to ensure nothing is missed in verification planning.',
          termIndices: [t('Technical Requirements'), t('Product Verification Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Document bloat. Detailed requirements belong in specifications, not V&V context sections. This creates maintenance burden and document conflicts when requirements change.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Keep the description minimal since verification details are covered elsewhere in the plan.',
          termIndices: [t('System'), t('Product Verification Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Insufficient context. Without adequate subsystem description, verification activities become disconnected from system purpose. This leads to verification gaps and poor resource allocation.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully provided comprehensive context for the mobility subsystem that enables effective verification planning. Your description balances completeness with appropriate document structure, supporting informed V&V decisions.',
    failureNarrative: 'Your subsystem description lacks sufficient context for effective verification planning. The V&V team will struggle to understand system purpose and select appropriate verification methods, creating project risk.',
    successThreshold: 60,
  },
}
