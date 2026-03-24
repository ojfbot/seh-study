import type { ScenarioTemplate } from '../scenario-types.js'
import { termIndexByName as t } from '../glossary.js'

export const requirementsTangle: ScenarioTemplate = {
  meta: {
    id: 'requirements-tangle',
    title: 'The Requirements Tangle',
    subtitle:
      'Untangle conflicting stakeholder requirements for a new Earth observation satellite',
    difficulty: 'beginner',
    categories: ['requirements', 'human-factors'],
    termIndices: [
      t('Stakeholder'),
      t('Stakeholder Expectations'),
      t('Stakeholder Expectations Definition Process'),
      t('Relevant Stakeholder'),
      t('Other Interested Parties (Stakeholders)'),
      t('Requirement'),
      t('Requirements Management Process'),
      t('Technical Requirements'),
      t('Technical Requirements Definition Process'),
      t('Derived Requirements'),
      t('Bidirectional Traceability'),
      t('Validated Requirements'),
      t('Requirements Allocation Sheet'),
      t('Specification'),
      t('Need'),
      t('Goal'),
      t('Objective'),
      t('Human-Centered Design'),
      t('Human Factors Engineering'),
      t('Human Systems Integration'),
      t('Concurrence'),
    ],
    estimatedMinutes: 15,
  },

  startNodeId: 'node-1',

  nodes: [
    // ── Node 1: Identify Stakeholders ──────────────────────────────────────
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'Who Has a Voice?',
      narrative:
        'You have just been named SE lead for EarthView-7, a next-generation Earth observation satellite. ' +
        'Three groups immediately schedule meetings with you: the science team wants maximum spectral resolution, ' +
        'the operations team wants a simple ground interface, and the budget office insists on reusing a legacy bus. ' +
        'Before diving into their wish lists, you need to determine who qualifies as a relevant stakeholder.',
      termHighlights: [t('Stakeholder'), t('Relevant Stakeholder')],
      decisions: [
        {
          id: 'a',
          text: 'Run a formal Stakeholder Expectations Definition Process to identify all relevant stakeholders and capture their expectations before any design work begins.',
          termIndices: [
            t('Stakeholder Expectations Definition Process'),
            t('Relevant Stakeholder'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. NASA SE Handbook calls for a structured Stakeholder Expectations Definition Process early in Pre-Phase A. ' +
            'This ensures you capture needs from all relevant stakeholders, not just the loudest voices, before committing to design decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Let each group send you their top-ten requirements by email so you can start building a spec immediately.',
          termIndices: [t('Stakeholder'), t('Requirement')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky shortcut. Jumping straight to requirements without formally identifying stakeholders means you may miss ' +
            'other interested parties such as safety, environmental compliance, or end-user communities. You also lose the chance ' +
            'to distinguish needs from wants early on.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Start with the science team since they define the mission payload, and loop in others later.',
          termIndices: [t('Stakeholder')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach neglects the principle that all relevant stakeholders must be identified up front. ' +
            'Operations and budget constraints discovered later will force costly rework. The SE Handbook treats stakeholder ' +
            'identification as a prerequisite, not an afterthought.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    // ── Node 2: Capture Expectations ───────────────────────────────────────
    {
      id: 'node-2',
      phase: 'Pre-Phase A',
      title: 'Expectations vs. Requirements',
      narrative:
        'The science team tells you they need sub-meter spatial resolution and 12 spectral bands. ' +
        'The operations team says the ground segment must be operable by a two-person crew. ' +
        'The budget office hands you a cost ceiling. You realize these are stakeholder expectations, not yet formal requirements. ' +
        'You must decide how to capture and organize them.',
      termHighlights: [
        t('Stakeholder Expectations'),
        t('Need'),
        t('Goal'),
        t('Objective'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document each expectation, trace it back to mission needs, goals, and objectives, and flag conflicts for resolution before writing any requirement.',
          termIndices: [
            t('Stakeholder Expectations'),
            t('Need'),
            t('Goal'),
            t('Objective'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Exactly right. The SE Handbook distinguishes between needs (the problem), goals (desired outcomes), and objectives ' +
            '(measurable targets). Mapping expectations to this hierarchy reveals conflicts early and provides rationale for every future requirement.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Convert each expectation directly into a shall-statement requirement and add it to the specification.',
          termIndices: [t('Requirement'), t('Specification')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Converting raw expectations directly into requirements skips the critical analysis step. ' +
            'Sub-meter resolution and a legacy bus may be fundamentally incompatible. Without tracing expectations back to needs, ' +
            'you will embed contradictions into your specification that surface during design.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    // ── Node 3: Resolve Conflicts ──────────────────────────────────────────
    {
      id: 'node-3',
      phase: 'Phase A',
      title: 'The Resolution Meeting',
      narrative:
        'Your conflict analysis reveals a major clash: the science team\'s resolution requirement demands a large aperture telescope ' +
        'that won\'t fit on the legacy bus the budget office wants to reuse. The operations team adds that the ' +
        'legacy ground system can\'t handle the data rate a 12-band imager would produce. ' +
        'You convene a concurrence meeting to find a path forward.',
      termHighlights: [
        t('Concurrence'),
        t('Other Interested Parties (Stakeholders)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Facilitate a concurrence process where all parties negotiate trade-offs, document agreements, and sign off on a reconciled set of expectations.',
          termIndices: [
            t('Concurrence'),
            t('Stakeholder Expectations'),
            t('Other Interested Parties (Stakeholders)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Concurrence is the SE Handbook mechanism for achieving formal agreement among stakeholders. ' +
            'By getting documented sign-off on trade-offs now, you prevent scope creep and finger-pointing later. ' +
            'All parties understand what was traded and why.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Escalate the conflict to the program manager and let them decide which stakeholder wins.',
          termIndices: [t('Stakeholder')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Escalation may be necessary eventually, but jumping to it skips the concurrence process. ' +
            'A program manager decision without structured negotiation often leaves stakeholders feeling overruled ' +
            'rather than heard, leading to workarounds and shadow requirements later.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Quietly reduce the spectral bands to 8 and hope the science team won\'t notice until CDR.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Hiding trade-offs from stakeholders is a serious SE process failure. This violates the principle of ' +
            'transparency and concurrence. When the science team discovers the change at CDR, the project will face ' +
            'a costly redesign or a mission that fails to meet its scientific objectives.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    // ── Node 4: Define Technical Requirements ──────────────────────────────
    {
      id: 'node-4',
      phase: 'Phase A',
      title: 'From Expectations to Technicals',
      narrative:
        'With concurrence achieved, the reconciled expectations must now become formal technical requirements. ' +
        'The agreed compromise is 8 spectral bands at 2-meter resolution on a modified legacy bus. ' +
        'You need to translate these into verifiable shall-statements and organize them in a way that supports ' +
        'the rest of the SE lifecycle.',
      termHighlights: [
        t('Technical Requirements'),
        t('Technical Requirements Definition Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Apply the Technical Requirements Definition Process: write verifiable shall-statements, assign each a unique ID, and ensure every requirement traces to a stakeholder expectation.',
          termIndices: [
            t('Technical Requirements Definition Process'),
            t('Technical Requirements'),
            t('Bidirectional Traceability'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'The Technical Requirements Definition Process transforms agreed expectations into verifiable, traceable requirements. ' +
            'Each shall-statement gets a unique ID so it can be traced upward to expectations and downward to design elements. ' +
            'This bidirectional traceability is foundational to the entire SE approach.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Write a high-level requirements document in prose form and send it to the design team to interpret.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Prose requirements are ambiguous and unverifiable. "The satellite should have good resolution" is not ' +
            'a technical requirement. Without shall-statements and unique IDs, the design team will interpret requirements ' +
            'differently, verification will be impossible, and traceability will be lost.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    // ── Node 5: Derive and Allocate ────────────────────────────────────────
    {
      id: 'node-5',
      phase: 'Phase B',
      title: 'Deriving the Details',
      narrative:
        'The top-level requirement "The instrument shall capture 8 spectral bands at 2-meter GSD" needs to be decomposed. ' +
        'The optical engineer asks what detector specifications to target. The thermal engineer needs to know power dissipation limits. ' +
        'You must derive lower-level requirements and allocate them to subsystems using a requirements allocation sheet.',
      termHighlights: [
        t('Derived Requirements'),
        t('Requirements Allocation Sheet'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Derive subsystem requirements from the top-level technical requirements and record allocations in a Requirements Allocation Sheet, maintaining traceability to the parent requirement.',
          termIndices: [
            t('Derived Requirements'),
            t('Requirements Allocation Sheet'),
            t('Bidirectional Traceability'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Derived requirements flow logically from parent requirements and capture design decisions at each level. ' +
            'The Requirements Allocation Sheet documents which subsystem owns each derived requirement. ' +
            'Maintaining bidirectional traceability means you can always explain why a subsystem requirement exists and ' +
            'which top-level requirement it satisfies.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Let each subsystem lead define their own requirements based on their engineering judgment.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Subsystem engineers have valuable expertise, but requirements defined in isolation lose traceability ' +
            'to the mission level. Without a formal allocation process, gaps and overlaps emerge at integration. ' +
            'Two subsystems may make contradictory assumptions about power or mass budgets.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Copy the top-level requirements verbatim to each subsystem and let them figure out what applies.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Passing undecomposed requirements to subsystems defeats the purpose of requirements flow-down. ' +
            'A subsystem engineer cannot verify "8 spectral bands at 2-meter GSD" at the detector level. ' +
            'Requirements must be derived and allocated so each team has verifiable, appropriately scoped work.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-6',
    },

    // ── Node 6: Human Factors ──────────────────────────────────────────────
    {
      id: 'node-6',
      phase: 'Phase B',
      title: 'The Operator Problem',
      narrative:
        'During a design review, the operations team raises a concern: the ground control interface for the new ' +
        'instrument mode switching is overly complex. A two-person crew cannot safely manage 8 spectral band configurations, ' +
        'thermal constraints, and data downlink windows simultaneously. ' +
        'You recognize this as a human factors issue that must be addressed in the requirements.',
      termHighlights: [
        t('Human-Centered Design'),
        t('Human Factors Engineering'),
        t('Human Systems Integration'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Add Human Systems Integration requirements that address operator workload, apply Human-Centered Design principles to the ground interface, and derive Human Factors Engineering requirements for display layout and automation.',
          termIndices: [
            t('Human Systems Integration'),
            t('Human-Centered Design'),
            t('Human Factors Engineering'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Human Systems Integration ensures the system accounts for human capabilities and limitations. ' +
            'Human-Centered Design puts operator needs at the center of interface design. ' +
            'Human Factors Engineering translates those needs into specific, verifiable requirements for displays, ' +
            'controls, and automation that a two-person crew can realistically manage.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Tell the operations team to hire a third operator if two cannot handle the workload.',
          termIndices: [t('Stakeholder')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Dismissing a valid human factors concern by adding staff ignores the root cause. ' +
            'The SE Handbook emphasizes that human factors requirements must be engineered into the system, ' +
            'not patched with headcount. Additional operators also increase lifecycle cost, contradicting the budget constraint.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -2 },
        },
        {
          id: 'c',
          text: 'Automate all instrument mode switching so operators only monitor, deferring the automation requirements to the software team.',
          termIndices: [
            t('Derived Requirements'),
            t('Human Factors Engineering'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Automation can reduce workload, but deferring the requirements without formal Human Systems Integration analysis ' +
            'is risky. Full automation introduces new failure modes and the operators still need human-centered monitoring displays. ' +
            'The right approach starts with HSI analysis, then derives automation requirements with traceability.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-7',
    },

    // ── Node 7: Requirements Management ────────────────────────────────────
    {
      id: 'node-7',
      phase: 'Phase C',
      title: 'Change Storm',
      narrative:
        'Midway through detailed design, the science team discovers that a competing mission will launch with 10 spectral bands. ' +
        'They request adding two more bands to EarthView-7. Meanwhile, a thermal analysis shows the detector runs hotter than expected, ' +
        'creating a derived requirement for additional radiator area. You have multiple requirement changes hitting simultaneously ' +
        'and need a disciplined process to manage them.',
      termHighlights: [
        t('Requirements Management Process'),
        t('Bidirectional Traceability'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Invoke the Requirements Management Process: log each change request, perform impact analysis using bidirectional traceability, route through the change control board, and update the allocation sheet.',
          termIndices: [
            t('Requirements Management Process'),
            t('Bidirectional Traceability'),
            t('Requirements Allocation Sheet'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'The Requirements Management Process exists precisely for this situation. Each change is logged, its impact ' +
            'traced through the requirements hierarchy using bidirectional traceability, and the change control board decides ' +
            'based on full cost-schedule-risk visibility. The allocation sheet is updated to maintain consistency.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Accept the science team\'s band addition since it improves competitiveness, and handle the thermal issue as a separate engineering problem.',
          termIndices: [t('Requirement'), t('Derived Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Adding bands without impact analysis ignores cascading effects on mass, power, data rate, ground segment, ' +
            'and thermal design. Treating the thermal issue separately means you miss the interaction: more bands generate ' +
            'more heat, compounding the radiator problem. The Requirements Management Process catches these interactions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: -2 },
        },
        {
          id: 'c',
          text: 'Freeze all requirements and reject both changes to protect the schedule.',
          termIndices: [t('Requirements Management Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'A blanket freeze sounds disciplined but is actually rigid. The thermal finding is a real engineering discovery ' +
            'that must be addressed, and the science change deserves proper evaluation. The Requirements Management Process ' +
            'provides a controlled way to assess changes rather than an all-or-nothing freeze.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-8',
    },

    // ── Node 8: Validate Requirements ──────────────────────────────────────
    {
      id: 'node-8',
      phase: 'Phase C',
      title: 'Closing the Loop',
      narrative:
        'As EarthView-7 approaches its Critical Design Review, you must demonstrate that the requirements set is complete, ' +
        'consistent, and will actually satisfy the stakeholder expectations you captured at the beginning. ' +
        'The review board wants evidence that requirements have been validated, that every requirement traces to a need, ' +
        'and that the specification is ready for build.',
      termHighlights: [
        t('Validated Requirements'),
        t('Specification'),
        t('Bidirectional Traceability'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Present the validated requirements set with full bidirectional traceability from stakeholder expectations through technical and derived requirements to the specification, showing that every need is addressed and every requirement is justified.',
          termIndices: [
            t('Validated Requirements'),
            t('Bidirectional Traceability'),
            t('Specification'),
            t('Stakeholder Expectations'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Validated requirements are confirmed to accurately reflect stakeholder needs and be achievable within constraints. ' +
            'Full bidirectional traceability lets the review board walk from any stakeholder expectation down to the spec ' +
            'and from any spec item back up to the need it satisfies. This is the gold standard for CDR readiness.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Show the specification document and a requirements count summary, asserting completeness based on the number of requirements written.',
          termIndices: [t('Specification'), t('Requirement')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'A count of requirements does not demonstrate completeness or correctness. Without validation against ' +
            'stakeholder expectations and traceability evidence, the review board cannot confirm that the spec actually ' +
            'addresses the mission needs. Quantity is not a proxy for quality in requirements engineering.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Skip the traceability exercise since the design clearly works, and focus the review on the hardware maturity instead.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Skipping validation and traceability at CDR is a process failure. "The design clearly works" is an assumption, ' +
            'not evidence. The SE Handbook requires validated requirements with demonstrated traceability precisely because ' +
            'intuition fails on complex systems. Hardware maturity matters, but it must be built to validated requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'Through disciplined stakeholder engagement, structured requirements definition, and rigorous traceability, ' +
      'you successfully navigated the conflicting demands on EarthView-7. The science team, operations crew, and budget office ' +
      'all have confidence in a requirements set that balances capability with feasibility. The satellite proceeds to build ' +
      'with a solid engineering foundation.',
    failureNarrative:
      'The conflicting stakeholder demands on EarthView-7 were never properly reconciled. Requirements gaps and contradictions ' +
      'have accumulated through the lifecycle, and the Critical Design Review reveals fundamental mismatches between what was ' +
      'promised and what can be built. The project faces a costly descope or schedule slip. Reviewing the SE Handbook chapters ' +
      'on stakeholder expectations and requirements management would strengthen your approach.',
    successThreshold: 0.6,
  },
}
