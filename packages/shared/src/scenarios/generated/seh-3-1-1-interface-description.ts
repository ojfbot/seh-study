import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh311InterfaceDescription: ScenarioTemplate = {
  meta: {
    id: 'seh-3-1-1-interface-description',
    title: 'Interface Document Authority',
    subtitle: 'Navigate conflicting requirements when multiple documents claim authority',
    difficulty: 'advanced',
    categories: ['project-mgmt', 'configuration', 'requirements'],
    termIndices: [
      t('Baseline'),
      t('Approval'),
      t('Approval (for Implementation)'),
      t('Configuration Management Process'),
      t('Decision Authority'),
      t('Program'),
      t('Contract'),
      t('Contractor'),
      t('Specification'),
      t('Technical Requirements'),
      t('Control Gate (or milestone)'),
      t('Key Decision Point'),
      t('Decision Support Package'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Critical Design Review')
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Phase C',
      title: 'Document Hierarchy Crisis',
      narrative:
        'Your Mars rover has multiple interface control documents with conflicting power requirements. The prime contractor references their baseline specification calling for 200W, while your ConOps document assumes 150W, and the latest CDR baseline shows 180W. Three different approval authorities are involved, and integration testing is scheduled for next month.',
      termHighlights: [t('Baseline'), t('Specification'), t('Concept of Operations (ConOps) (Concept Documentation)')],
      decisions: [
        {
          id: 'a',
          text: 'Establish document precedence hierarchy in the interface control document, specifying which document controls in case of conflicts and defining the approval authority for changes.',
          termIndices: [t('Approval'), t('Decision Authority'), t('Configuration Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. NASA SE practices require clear precedence definition in interface documents. This prevents conflicts and ensures everyone knows which document controls when discrepancies arise, along with who has authority to approve changes.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Use the most recent document as controlling and notify all parties via email about the change.',
          termIndices: [t('Baseline')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky approach. Without formal precedence rules, this creates confusion about which document controls future conflicts. Email notifications lack the formality needed for configuration management and may not reach all affected parties.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Let each subsystem team decide which document to follow based on their specific needs.',
          termIndices: [t('Program')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach violates basic systems engineering principles. Without clear document precedence, you will have inconsistent interfaces across subsystems, leading to integration failures and potential mission risk.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Phase C',
      title: 'Contractor Document Control',
      narrative:
        'Your prime contractor claims their internal specification takes precedence over NASA requirements for the rover robotic arm interface. They argue their contract gives them design authority for subsystem-level interfaces. Meanwhile, the science payload team needs different connector specifications than what the contractor proposes.',
      termHighlights: [t('Contract'), t('Contractor'), t('Technical Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Reference the contract terms to clarify responsibility boundaries and establish NASA as the final approval authority for all external interfaces while allowing contractor control of internal subsystem interfaces.',
          termIndices: [t('Contract'), t('Approval'), t('Decision Authority')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The interface document must clearly define responsibility boundaries between NASA and contractor authority. External interfaces affecting mission success require NASA approval authority, while internal subsystem design can remain with the contractor within specification limits.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Let the contractor maintain full control since they have design responsibility and expertise.',
          termIndices: [t('Contractor')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This abdication of systems engineering oversight could lead to interface mismatches with other mission elements. NASA retains responsibility for mission success and must maintain approval authority for interfaces that affect overall system performance.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Override all contractor specifications and impose NASA requirements across all interfaces.',
          termIndices: [t('Specification')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach ignores the contract structure and contractor expertise. Micromanaging internal subsystem interfaces wastes resources and may violate contract terms, while potentially degrading contractor-optimized designs.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Change Approval Authority',
      narrative:
        'A critical interface change request comes in two weeks before your Critical Design Review. The rover mobility subsystem needs to modify the electrical interface specification due to a late-discovered EMI issue. Multiple organizations claim they must approve this change: the prime contractor, the mobility subsystem manager, and the mission systems engineer.',
      termHighlights: [t('Critical Design Review'), t('Control Gate (or milestone)')],
      decisions: [
        {
          id: 'a',
          text: 'Define clear change approval authority in the interface document, specifying approval levels based on impact assessment and requiring decision support packages for significant changes.',
          termIndices: [t('Decision Authority'), t('Decision Support Package'), t('Approval')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Interface documents must specify change approval authority and process. This includes defining approval levels based on change impact and requiring proper documentation through decision support packages for major changes.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Require unanimous approval from all three organizations for any interface changes.',
          termIndices: [t('Approval')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This creates unnecessary bureaucracy and potential deadlock. While stakeholder input is valuable, requiring unanimous approval can paralyze decision-making, especially for time-critical changes near major reviews.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Allow whoever discovers the need for change to implement it immediately without formal approval.',
          termIndices: [t('Configuration Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates configuration management principles and could lead to uncontrolled changes that impact other subsystems. Interface changes must be coordinated and approved to maintain system integrity.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Multi-Program Interface',
      narrative:
        'Your Mars rover must interface with the orbiter communications system from a different NASA program. Each program has its own interface control documents with different approval authorities and change processes. A compatibility issue emerges that requires changes to both systems just before the Key Decision Point review.',
      termHighlights: [t('Key Decision Point'), t('Program')],
      decisions: [
        {
          id: 'a',
          text: 'Establish joint interface control document with shared approval authority between programs and coordinate change processes through both program decision authorities.',
          termIndices: [t('Decision Authority'), t('Program'), t('Configuration Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Cross-program interfaces require coordinated control documents that recognize both programs\' authorities. This ensures changes are properly coordinated and approved by all affected parties while maintaining each program\'s integrity.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Have each program control their own side of the interface independently.',
          termIndices: [t('Program')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This approach risks interface mismatches when changes are made independently. Without coordinated control, each program may optimize their interface without considering impacts on the other system.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Assign interface control to whichever program has the larger budget.',
          termIndices: [t('Decision Authority')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Budget size has no bearing on technical interface authority. This approach ignores system complexity and expertise distribution, potentially placing control with the wrong organization for making technically sound interface decisions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Phase D',
      title: 'Integration Test Conflicts',
      narrative:
        'During integration testing, you discover that three different interface documents contain conflicting test requirements. The system specification requires 1000-hour endurance testing, the contractor specification calls for 500 hours, and the test procedures document specifies 750 hours. Testing must begin next week to stay on schedule.',
      termHighlights: [t('Test'), t('Specification')],
      decisions: [
        {
          id: 'a',
          text: 'Apply the document precedence rules established in your interface control document to determine which requirement controls and document the rationale.',
          termIndices: [t('Specification'), t('Configuration Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. This is exactly why precedence rules are established in interface documents. Following the predetermined hierarchy resolves the conflict quickly and ensures consistent application of authority throughout the program.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Choose the middle value (750 hours) as a compromise between all three requirements.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Compromising without technical justification may not satisfy the actual test objectives. The precedence hierarchy should determine which requirement is controlling based on established authority, not arbitrary averaging.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Use the shortest test duration to save schedule and cost.',
          termIndices: [t('Test')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Choosing requirements based on schedule convenience rather than technical merit or established authority violates systems engineering principles. This could compromise test adequacy and mission assurance.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully established clear document precedence and approval authority structures that prevent interface conflicts and enable efficient decision-making. Your systematic approach to defining responsibility boundaries ensures smooth program execution.',
    failureNarrative: 'Poor document control and unclear approval authority led to interface conflicts, schedule delays, and potential mission risks. Establishing precedence and change authority early in the program prevents these costly coordination problems.',
    successThreshold: 60,
  },
}
