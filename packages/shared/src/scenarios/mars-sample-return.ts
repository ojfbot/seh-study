import type { ScenarioTemplate } from '../scenario-types.js'
import { termIndexByName as t } from '../glossary.js'

export const marsSampleReturn: ScenarioTemplate = {
  meta: {
    id: 'mars-sample-return',
    title: 'Mars Sample Return',
    subtitle:
      'Lead systems engineering for a Mars Sample Return mission from Pre-Phase A concept through Preliminary Design Review.',
    difficulty: 'beginner',
    categories: ['lifecycle', 'requirements'],
    termIndices: [
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Stakeholder Expectations'),
      t('Stakeholder Expectations Definition Process'),
      t('Mission Concept Review'),
      t('Technical Requirements Definition Process'),
      t('Technical Requirements'),
      t('Derived Requirements'),
      t('Architecture (System)'),
      t('Trade Study'),
      t('Trade Study Report'),
      t('Technology Readiness Level'),
      t('Technology Readiness Assessment Report'),
      t('Risk'),
      t('Risk Assessment'),
      t('Continuous Risk Management'),
      t('System Requirements Review'),
      t('Interface Management Process'),
      t('Allocated Baseline (Phase C)'),
      t('Preliminary Design Review'),
      t('Functional Baseline (Phase B)'),
      t('Requirements Allocation Sheet'),
      t('Bidirectional Traceability'),
      t('Analysis of Alternatives (AoA)'),
      t('Formulation Phase'),
    ],
    estimatedMinutes: 25,
  },

  startNodeId: 'node-01',

  nodes: [
    // ── Node 1: Pre-Phase A — Stakeholder Expectations ──────────────────────
    {
      id: 'node-01',
      phase: 'Pre-Phase A',
      title: 'The Mission Brief',
      narrative:
        'You arrive at JPL on a Monday morning to find a memo on your desk: you have been appointed lead systems engineer for a Mars Sample Return mission. The Science Mission Directorate wants cached Martian regolith returned to Earth for astrobiology analysis. Before anything else, you need to understand what the stakeholders actually expect from this mission.',
      termHighlights: [
        t('Stakeholder Expectations'),
        t('Stakeholder Expectations Definition Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a Stakeholder Expectations Definition Process to formally capture needs from SMD, planetary protection, and the Mars Exploration Program.',
          termIndices: [
            t('Stakeholder Expectations'),
            t('Stakeholder Expectations Definition Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Stakeholder Expectations Definition Process is the proper first step in Pre-Phase A. It ensures every key stakeholder need is formally identified and documented before any concept work begins, preventing costly rework later.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Send an informal email to the science team asking what samples they want and start sketching a mission concept.',
          termIndices: [t('Stakeholder Expectations')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but risky. While gathering science requirements is important, an informal approach misses non-science stakeholders like planetary protection and the launch vehicle program. A formal Stakeholder Expectations Definition Process captures all needs systematically.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Jump straight into defining the system architecture based on heritage Mars mission designs.',
          termIndices: [t('Architecture (System)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Designing architecture before understanding stakeholder expectations violates the systems engineering process. You risk building a system that does not meet actual needs. Stakeholder expectations must be captured first.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-02',
    },

    // ── Node 2: Pre-Phase A — ConOps ────────────────────────────────────────
    {
      id: 'node-02',
      phase: 'Pre-Phase A',
      title: 'Drafting the Concept of Operations',
      narrative:
        'With stakeholder expectations documented, your team needs to describe how the mission will actually work from launch through sample return. The project manager asks you to prepare a document that tells the operational story of the mission in plain language so that every stakeholder can understand it.',
      termHighlights: [
        t('Concept of Operations (ConOps) (Concept Documentation)'),
        t('Formulation Phase'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop a Concept of Operations (ConOps) document that describes the full mission timeline, operational phases, and user interactions in stakeholder-friendly language.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)'),
            t('Formulation Phase'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The ConOps is the right artifact for Pre-Phase A. It describes the mission from the user and operator perspective, covering all operational phases without diving into implementation details. It bridges stakeholder expectations and technical requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Write a detailed System Requirements Document specifying every subsystem interface.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Detailed system requirements come later, after the concept has been validated. In Pre-Phase A, you need a ConOps to establish the operational concept. Jumping to detailed requirements skips critical conceptual validation.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Create a high-level mission summary presentation for the next review board.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but insufficient. A presentation is useful for communication, but it is not a ConOps. The ConOps is a formal document that describes operational scenarios, constraints, and stakeholder roles. It serves as a baseline for downstream requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-03',
    },

    // ── Node 3: Pre-Phase A — Analysis of Alternatives ──────────────────────
    {
      id: 'node-03',
      phase: 'Pre-Phase A',
      title: 'Evaluating Mission Architectures',
      narrative:
        'Your ConOps outlines three possible mission architectures: a single-launch direct return, a two-launch rendezvous in Mars orbit, and a three-launch approach with a dedicated Earth Return Orbiter. The program office wants a rigorous comparison before investing further. You need to decide how to evaluate these alternatives.',
      termHighlights: [
        t('Analysis of Alternatives (AoA)'),
        t('Architecture (System)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a formal Analysis of Alternatives (AoA) that evaluates each architecture against mission objectives, cost, risk, and schedule using defined criteria.',
          termIndices: [
            t('Analysis of Alternatives (AoA)'),
            t('Architecture (System)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. An Analysis of Alternatives is the standard systems engineering approach for comparing candidate architectures. It uses explicit evaluation criteria tied to stakeholder needs and produces a defensible recommendation for the decision authority.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Pick the two-launch architecture because it mirrors the current Mars Sample Return reference design.',
          termIndices: [t('Architecture (System)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but not rigorous. Heritage designs are a reasonable starting point, but selecting an architecture without a formal AoA means you cannot demonstrate that alternatives were fairly evaluated. Reviewers at MCR will ask for this analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Defer the architecture decision until Phase B when more data is available.',
          termIndices: [t('Formulation Phase')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Deferring the architecture selection past Pre-Phase A leaves the project without a focused concept for Mission Concept Review. The AoA should happen now so that a preferred architecture can be baselined entering Phase A.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -3, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-04',
    },

    // ── Node 4: Pre-Phase A — Mission Concept Review ────────────────────────
    {
      id: 'node-04',
      phase: 'Pre-Phase A',
      title: 'Preparing for Mission Concept Review',
      narrative:
        'The AoA recommends the two-launch orbital rendezvous architecture. Now you must prepare for Mission Concept Review, the gate that determines whether the project advances into Phase A formulation. The review board will evaluate the feasibility of your concept and the adequacy of your early planning.',
      termHighlights: [
        t('Mission Concept Review'),
        t('Formulation Phase'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Assemble an MCR data package including the ConOps, AoA results, preliminary risk list, and a technology assessment showing TRL levels for key elements.',
          termIndices: [
            t('Mission Concept Review'),
            t('Technology Readiness Level'),
            t('Risk'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. MCR evaluates whether the concept is feasible and worth formulating. Presenting the ConOps, AoA, risk list, and TRL assessment gives the review board the evidence they need to make an informed go/no-go decision for Phase A entry.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Present only the AoA results and request Phase A funding based on the architecture recommendation.',
          termIndices: [
            t('Mission Concept Review'),
            t('Analysis of Alternatives (AoA)'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but incomplete. The AoA is important, but MCR also expects a ConOps, preliminary risk assessment, and technology maturity evaluation. Presenting only the AoA may leave the board with unanswered questions about feasibility.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Skip MCR since the AoA already validated the architecture and go directly into Phase A work.',
          termIndices: [t('Mission Concept Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Mission Concept Review is a mandatory lifecycle gate in the NASA project lifecycle. Skipping it violates NPR 7123.1 and removes the independent assessment that protects against premature commitment of resources.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-05',
    },

    // ── Node 5: Phase A — Technical Requirements ────────────────────────────
    {
      id: 'node-05',
      phase: 'Phase A',
      title: 'From Expectations to Requirements',
      narrative:
        'You pass MCR and enter Phase A. Your first task is to translate the documented stakeholder expectations into formal technical requirements that the engineering team can design against. The science team insists on 500 grams of cached samples, while planetary protection demands a break-the-chain containment protocol.',
      termHighlights: [
        t('Technical Requirements Definition Process'),
        t('Technical Requirements'),
        t('Stakeholder Expectations'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Execute the Technical Requirements Definition Process, transforming each stakeholder expectation into verifiable technical requirements with rationale and traceability.',
          termIndices: [
            t('Technical Requirements Definition Process'),
            t('Technical Requirements'),
            t('Stakeholder Expectations'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Technical Requirements Definition Process systematically converts stakeholder expectations into well-formed technical requirements that are measurable, verifiable, and traceable. This ensures nothing is lost or misinterpreted in translation.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Copy the stakeholder expectation statements directly into the requirements document and label them as system requirements.',
          termIndices: [
            t('Stakeholder Expectations'),
            t('Technical Requirements'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Stakeholder expectations are expressed in stakeholder language and are often ambiguous or unmeasurable. They must be transformed through the Technical Requirements Definition Process into precise, verifiable technical requirements. Copying them verbatim produces unverifiable requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Have the science team write the technical requirements since they understand the sample needs best.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but problematic. While science input is essential, technical requirements must be authored by systems engineers who understand verification methods, interface constraints, and design implications. Scientists should contribute to validation, not write requirements alone.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-06',
    },

    // ── Node 6: Phase A — Trade Studies and TRL ─────────────────────────────
    {
      id: 'node-06',
      phase: 'Phase A',
      title: 'Critical Technology Decisions',
      narrative:
        'Your requirements call for autonomous Mars orbit rendezvous and a hermetically sealed sample container. Both technologies are cutting-edge. The project needs to understand the maturity of these technologies and compare design options before committing to an approach.',
      termHighlights: [
        t('Trade Study'),
        t('Trade Study Report'),
        t('Technology Readiness Level'),
        t('Technology Readiness Assessment Report'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Commission trade studies for both technologies, evaluate candidates against requirements, and produce a Technology Readiness Assessment Report documenting TRL levels for each option.',
          termIndices: [
            t('Trade Study'),
            t('Trade Study Report'),
            t('Technology Readiness Level'),
            t('Technology Readiness Assessment Report'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Trade studies compare design options against defined criteria, while the TRA Report documents the maturity of each technology. Together they give decision-makers the information needed to select approaches and plan any required technology maturation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Select the most heritage-compatible technology for each and document the rationale in an email to the project manager.',
          termIndices: [t('Technology Readiness Level')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but insufficient. Heritage preference is a valid factor, but a formal trade study evaluates multiple criteria including performance, risk, cost, and schedule. An email is not a Trade Study Report and will not survive review scrutiny.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Assume both technologies will mature by Phase C and focus engineering effort on other subsystems.',
          termIndices: [t('Technology Readiness Level'), t('Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Assuming technology maturation without assessment is a major risk. NASA requires TRL 6 by PDR for critical technologies. Deferring this assessment can lead to showstopper discoveries late in formulation when changes are far more expensive.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-07',
    },

    // ── Node 7: Phase A — Risk Assessment ───────────────────────────────────
    {
      id: 'node-07',
      phase: 'Phase A',
      title: 'Identifying Mission Risks',
      narrative:
        'Trade studies reveal that the autonomous rendezvous sensor is at TRL 4 and the sample container seal is at TRL 5. Your deputy flags concerns about planetary protection certification timelines. You need a disciplined approach to managing these and other risks throughout formulation.',
      termHighlights: [
        t('Risk'),
        t('Risk Assessment'),
        t('Continuous Risk Management'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish a Continuous Risk Management process: identify risks, assess likelihood and consequence, plan mitigations, track them in a risk register, and review monthly.',
          termIndices: [
            t('Risk'),
            t('Risk Assessment'),
            t('Continuous Risk Management'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Continuous Risk Management is the NASA standard approach. It treats risk as an ongoing activity, not a one-time assessment. Regular identification, assessment, mitigation planning, and tracking ensure risks are managed proactively throughout the lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Perform a one-time risk assessment and include the results in the SRR data package.',
          termIndices: [t('Risk Assessment'), t('Risk')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but insufficient. A single risk assessment captures a snapshot, but risks evolve as the design matures. Without continuous management, new risks go untracked and mitigations are not monitored. NASA expects ongoing risk management, not a one-shot effort.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Add extra schedule margin to absorb any risks that materialize and focus engineering on design work.',
          termIndices: [t('Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Schedule margin is a valid mitigation for some risks, but it is not a substitute for risk management. Without identifying and assessing risks, you cannot size margin appropriately. Unidentified risks can affect performance, cost, and safety — not just schedule.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-08',
    },

    // ── Node 8: Phase A — System Requirements Review ────────────────────────
    {
      id: 'node-08',
      phase: 'Phase A',
      title: 'System Requirements Review Gate',
      narrative:
        'Phase A is nearing its end. You have a complete set of system-level requirements, an updated risk register, and trade study results for key technologies. The next lifecycle gate is System Requirements Review, which determines readiness to enter Phase B and begin preliminary design.',
      termHighlights: [
        t('System Requirements Review'),
        t('Bidirectional Traceability'),
        t('Technical Requirements'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Prepare an SRR data package demonstrating bidirectional traceability from stakeholder expectations through system requirements, along with the risk register and trade study reports.',
          termIndices: [
            t('System Requirements Review'),
            t('Bidirectional Traceability'),
            t('Technical Requirements'),
            t('Trade Study Report'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. SRR evaluates whether the system requirements are complete, consistent, and traceable to stakeholder expectations. Bidirectional traceability proves that every requirement derives from a need and every need is addressed by a requirement. The risk register and trade reports complete the picture.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Submit the requirements document alone since the review is about requirements, not risk or trades.',
          termIndices: [
            t('System Requirements Review'),
            t('Technical Requirements'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but incomplete. While requirements are the primary focus, SRR also evaluates whether risks are understood and whether technology choices support the requirements. The review board expects a holistic view, not just a requirements list.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Delay SRR by three months to refine subsystem-level requirements and interface specifications.',
          termIndices: [t('System Requirements Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. SRR is a system-level review. Subsystem requirements and detailed interfaces are developed in Phase B. Delaying SRR to achieve Phase B fidelity confuses lifecycle gate expectations and wastes formulation schedule.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -4, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-09',
    },

    // ── Node 9: Phase B — Derived Requirements and Interfaces ───────────────
    {
      id: 'node-09',
      phase: 'Phase B',
      title: 'Allocating and Deriving Requirements',
      narrative:
        'You pass SRR and enter Phase B preliminary design. The system requirements must now be allocated to subsystems, and new derived requirements will emerge from design decisions. The Sample Retrieval Lander team and the Earth Return Orbiter team both need clear interface definitions to design in parallel.',
      termHighlights: [
        t('Derived Requirements'),
        t('Requirements Allocation Sheet'),
        t('Interface Management Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Create Requirements Allocation Sheets mapping each system requirement to subsystems, derive new requirements from design choices, and establish an Interface Management Process between the lander and orbiter teams.',
          termIndices: [
            t('Derived Requirements'),
            t('Requirements Allocation Sheet'),
            t('Interface Management Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Requirements allocation ensures every system requirement has a responsible subsystem. Derived requirements capture new needs arising from design decisions. The Interface Management Process formally controls the agreements between parallel development teams, preventing integration surprises.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Let each subsystem team derive their own requirements independently and reconcile interfaces at integration.',
          termIndices: [t('Derived Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Independent derivation without allocation sheets and interface management leads to gaps, overlaps, and incompatible interfaces. Integration-time discovery of mismatches is one of the most expensive failure modes in systems engineering.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -3, budget: -3 },
        },
        {
          id: 'c',
          text: 'Allocate requirements to subsystems using a spreadsheet and schedule weekly coordination meetings for interface issues.',
          termIndices: [
            t('Requirements Allocation Sheet'),
            t('Interface Management Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but informal. A spreadsheet can serve as a basic allocation tool, and meetings help coordination. However, without a formal Interface Management Process with controlled interface documents, agreements may be lost or misunderstood as complexity grows.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-10',
    },

    // ── Node 10: Phase B — Preliminary Design Review ────────────────────────
    {
      id: 'node-10',
      phase: 'Phase B',
      title: 'Preliminary Design Review',
      narrative:
        'Months of Phase B work culminate in the Preliminary Design Review. Your team has a preliminary design for both the lander and orbiter, updated risk mitigations, and a functional baseline. PDR will determine whether the project is ready to proceed into detailed design in Phase C. The review board is assembling.',
      termHighlights: [
        t('Preliminary Design Review'),
        t('Functional Baseline (Phase B)'),
        t('Allocated Baseline (Phase C)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Present the functional baseline showing the preliminary design satisfies all allocated requirements, with updated TRA reports, risk mitigations, and interface control documents.',
          termIndices: [
            t('Preliminary Design Review'),
            t('Functional Baseline (Phase B)'),
            t('Technology Readiness Assessment Report'),
            t('Continuous Risk Management'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. PDR establishes the functional baseline — the approved preliminary design that meets system and subsystem requirements. Demonstrating requirement satisfaction, technology readiness, managed risks, and controlled interfaces gives the review board confidence to authorize Phase C.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Focus the PDR presentation on the elegant design solution and defer the requirements traceability matrix to a follow-up review.',
          termIndices: [
            t('Preliminary Design Review'),
            t('Bidirectional Traceability'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but risky. An elegant design is important, but PDR is fundamentally about demonstrating that the design meets requirements. Without a traceability matrix, the review board cannot verify completeness. They will likely issue a Request for Action requiring the matrix before Phase C entry.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Present the allocated baseline showing how the detailed design will be manufactured.',
          termIndices: [
            t('Allocated Baseline (Phase C)'),
            t('Preliminary Design Review'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. The allocated baseline is the output of Phase C detailed design, not Phase B preliminary design. PDR establishes the functional baseline. Presenting manufacturing-level detail at PDR confuses lifecycle phases and suggests the team does not understand the review objectives.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'Congratulations. Your disciplined systems engineering approach guided the Mars Sample Return mission through formulation successfully. You captured stakeholder expectations, built a solid ConOps, conducted rigorous trade studies, managed risks continuously, and established proper baselines at each lifecycle gate. The review board has approved Phase C entry with high confidence.',
    failureNarrative:
      'The Mars Sample Return mission has encountered significant difficulties during formulation. Gaps in stakeholder engagement, incomplete trade studies, or inadequate risk management have left the review board concerned about project readiness. Consider revisiting the NASA systems engineering processes to understand how each step builds the foundation for the next.',
    successThreshold: 0.6,
  },
}
