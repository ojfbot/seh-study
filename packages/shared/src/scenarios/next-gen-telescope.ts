import type { ScenarioTemplate } from '../scenario-types.js'
import { termIndexByName as t } from '../glossary.js'

export const nextGenTelescope: ScenarioTemplate = {
  meta: {
    id: 'next-gen-telescope',
    title: 'Next-Generation IR Space Telescope',
    subtitle:
      'Mature a novel quantum dot detector from TRL 3 to TRL 6 while navigating architecture and design trade-offs.',
    difficulty: 'intermediate',
    categories: ['technology', 'design'],
    termIndices: [
      t('Technology Readiness Level'),
      t('Technology Readiness Assessment Report'),
      t('Technology Maturity Assessment'),
      t('Technology Assessment'),
      t('Technology Development Plan'),
      t('Advancement Degree of Difficulty Assessment (AD2)'),
      t('Breadboard'),
      t('Brassboard'),
      t('Engineering Unit'),
      t('Prototype'),
      t('Heritage (or legacy)'),
      t('Design Solution Definition Process'),
      t('Trade Study'),
      t('Trade Tree'),
      t('Architecture (System)'),
      t('Concurrent Engineering'),
      t('Functional Decomposition'),
      t('Logical Decomposition Process'),
      t('Model'),
      t('Emergent Behavior'),
      t('Reliability'),
      t('Producibility'),
    ],
    estimatedMinutes: 20,
  },

  nodes: [
    // ── Node 1: Initial TRL Assessment ─────────────────────────────────────
    {
      id: 'n1-trl-assessment',
      phase: 'Pre-Phase A',
      title: 'Assessing the Quantum Dot Detector',
      narrative:
        'Your team has developed a promising quantum dot infrared detector in the lab that could revolutionize deep-space imaging. The detector has shown proof-of-concept performance in a controlled bench environment, placing it around Technology Readiness Level 3. Before the project can proceed to formulation, your program manager asks you to formalize the technology posture. You need to decide how to characterize the maturity and risk of this novel detector technology.',
      termHighlights: [
        t('Technology Readiness Level'),
        t('Technology Assessment'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Commission a Technology Readiness Assessment Report that documents current TRL, critical performance parameters, and identifies all technology gaps.',
          termIndices: [
            t('Technology Readiness Assessment Report'),
            t('Technology Readiness Level'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent. A Technology Readiness Assessment Report is the standard NASA mechanism for formally documenting a technology\'s maturity level and identifying gaps. This gives your program a credible, auditable baseline that review boards will expect to see.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Ask each subsystem engineer to independently estimate the TRL and compile their answers into a summary memo.',
          termIndices: [t('Technology Readiness Level')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Informal TRL estimates from individual engineers lack the rigor and traceability that NASA expects. While the information may be directionally correct, without a formal Technology Readiness Assessment Report the project risks inconsistent maturity claims and difficulty defending them at reviews.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Skip the formal assessment since the lab results speak for themselves and move directly into building hardware.',
          termIndices: [t('Technology Readiness Level')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Bypassing a formal Technology Assessment is a serious process violation. Without documented evidence of maturity, you cannot establish a credible Technology Development Plan, and gate reviews will flag the gap. This introduces significant programmatic risk.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -1, budget: 2 },
        },
      ],
      defaultNextNodeId: 'n2-ad2-risk',
    },

    // ── Node 2: AD2 and Risk Characterization ──────────────────────────────
    {
      id: 'n2-ad2-risk',
      phase: 'Pre-Phase A',
      title: 'Gauging Development Difficulty',
      narrative:
        'The assessment confirms your detector sits at TRL 3. Management is concerned about the jump from laboratory validation to a flight-qualifiable component. They want to understand not just the current readiness but how hard it will be to advance the technology. You must recommend an approach for characterizing the degree of difficulty involved in maturing the quantum dot detector.',
      termHighlights: [
        t('Advancement Degree of Difficulty Assessment (AD2)'),
        t('Technology Maturity Assessment'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct an Advancement Degree of Difficulty Assessment (AD2) alongside the Technology Maturity Assessment to quantify both current readiness and the challenge of advancing each TRL level.',
          termIndices: [
            t('Advancement Degree of Difficulty Assessment (AD2)'),
            t('Technology Maturity Assessment'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'The AD2 is specifically designed to complement TRL by evaluating how difficult it will be to advance from one level to the next. Pairing it with a Technology Maturity Assessment gives stakeholders a complete picture: where the technology stands and how steep the climb is.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Rely solely on the TRL number and schedule a series of design reviews to monitor progress.',
          termIndices: [t('Technology Readiness Level')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'TRL alone tells you where a technology is but not how hard it will be to advance. Without an AD2, you may underestimate the resources, facilities, and breakthroughs needed to reach TRL 6. Design reviews help but cannot substitute for upfront difficulty analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'n3-dev-plan',
    },

    // ── Node 3: Technology Development Plan ────────────────────────────────
    {
      id: 'n3-dev-plan',
      phase: 'Phase A',
      title: 'Charting the Maturation Path',
      narrative:
        'Armed with the TRL and AD2 results, you now need to lay out a concrete plan for maturing the detector from TRL 3 to TRL 6. The plan must define the sequence of build-test-learn cycles, key milestones, and decision gates. Your systems engineering team is debating the right approach for structuring this roadmap.',
      termHighlights: [
        t('Technology Development Plan'),
        t('Breadboard'),
        t('Brassboard'),
        t('Engineering Unit'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Create a Technology Development Plan with a staged sequence: breadboard validation (TRL 4), brassboard demonstration in a relevant environment (TRL 5), then engineering unit qualification (TRL 6), each with explicit entry and exit criteria.',
          termIndices: [
            t('Technology Development Plan'),
            t('Breadboard'),
            t('Brassboard'),
            t('Engineering Unit'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'This is textbook technology maturation. The breadboard proves functionality, the brassboard demonstrates performance with increasing fidelity, and the engineering unit proves the design is producible and testable in a relevant environment. Explicit criteria at each gate prevent premature advancement.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Write a plan that jumps directly from the lab proof-of-concept to building an engineering unit, compressing the schedule by skipping intermediate builds.',
          termIndices: [
            t('Technology Development Plan'),
            t('Engineering Unit'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Skipping the breadboard and brassboard stages means you lose the incremental learning that catches design flaws early. Problems discovered at the engineering unit stage are far more expensive to fix. NASA experience shows that compressing maturation stages almost always leads to cost overruns and schedule slips.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: 4 },
        },
        {
          id: 'c',
          text: 'Develop a plan that builds a breadboard and then immediately proceeds to an engineering unit, folding the brassboard objectives into the EU testing.',
          termIndices: [
            t('Technology Development Plan'),
            t('Breadboard'),
            t('Engineering Unit'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Combining the brassboard and engineering unit stages can work for low-risk technologies, but the AD2 flagged the quantum dot detector as high-difficulty. Skipping the brassboard stage means you lose a critical opportunity to validate performance at medium fidelity before committing to a full engineering unit build.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 2 },
        },
      ],
      defaultNextNodeId: 'n4-architecture',
    },

    // ── Node 4: Architecture Trade ─────────────────────────────────────────
    {
      id: 'n4-architecture',
      phase: 'Phase A',
      title: 'Telescope Architecture Decisions',
      narrative:
        'With the detector maturation plan underway, your team must define the overall telescope architecture. The quantum dot detector enables a wider field of view than heritage designs, but this ripples into optics, thermal control, and data handling. Your chief engineer presents three architectural approaches and asks you to decide how to evaluate them systematically.',
      termHighlights: [
        t('Architecture (System)'),
        t('Trade Study'),
        t('Trade Tree'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Construct a trade tree to map all feasible optical-thermal-detector combinations, then conduct a formal trade study with weighted evaluation criteria covering performance, risk, cost, and schedule.',
          termIndices: [
            t('Trade Tree'),
            t('Trade Study'),
            t('Architecture (System)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'A trade tree ensures you systematically enumerate the solution space rather than anchoring on a single concept too early. Following it with a weighted trade study provides a defensible, traceable rationale for the architecture selection that review boards expect.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Let the optics lead choose the architecture based on their experience with the previous telescope program, since heritage designs reduce risk.',
          termIndices: [
            t('Heritage (or legacy)'),
            t('Architecture (System)'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Heritage is valuable for reducing risk, but the novel quantum dot detector fundamentally changes the design trade space. An architecture optimized for a conventional detector may not exploit the new technology\'s advantages or may introduce incompatibilities. Without a formal trade study, you cannot demonstrate that the chosen architecture is optimal.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Adopt a concurrent engineering approach where all subsystem teams simultaneously develop their preferred architecture and then negotiate integration later.',
          termIndices: [
            t('Concurrent Engineering'),
            t('Architecture (System)'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Concurrent engineering is powerful when applied within a defined architecture, but having subsystems independently develop competing architectures without a unifying trade study creates integration chaos. The result is subsystem-optimized designs that may be globally suboptimal or incompatible.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 3 },
        },
      ],
      defaultNextNodeId: 'n5-breadboard',
    },

    // ── Node 5: Breadboard Build ───────────────────────────────────────────
    {
      id: 'n5-breadboard',
      phase: 'Phase B',
      title: 'Breadboard Validation',
      narrative:
        'Your detector team has built the first breadboard unit. Initial testing shows the quantum dot array achieves target sensitivity but exhibits unexpected crosstalk between adjacent pixels at low temperatures. The breadboard was never intended to address thermal packaging, but the crosstalk could be a showstopper. You need to decide how to handle this emergent behavior before progressing.',
      termHighlights: [
        t('Breadboard'),
        t('Emergent Behavior'),
        t('Model'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop a physics-based model of the crosstalk mechanism, validate it against breadboard data, and use the model to define thermal isolation requirements for the brassboard design.',
          termIndices: [
            t('Model'),
            t('Emergent Behavior'),
            t('Breadboard'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Building a validated model of the emergent behavior is the right SE approach. It transforms an unknown into a quantified, predictable phenomenon you can design against. The model becomes a tool for the brassboard team to verify their thermal isolation approach before committing to hardware.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Add thermal isolation features directly to the breadboard and retest to see if the crosstalk disappears.',
          termIndices: [t('Breadboard'), t('Emergent Behavior')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Modifying the breadboard to add thermal features blurs the purpose of the breadboard stage, which is to validate basic functionality. While the fix might work, without a model you lack understanding of why it works, making it fragile to future design changes. You risk spending time and money on breadboard rework instead of advancing to a brassboard.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 2 },
        },
        {
          id: 'c',
          text: 'Accept the crosstalk as a known issue, document it, and assume the brassboard thermal design will solve it.',
          termIndices: [t('Breadboard')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Deferring an emergent behavior without understanding its root cause is a recipe for late-stage surprises. If the brassboard thermal design does not adequately address crosstalk, you will discover the problem at higher fidelity where fixes are far more expensive.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 3 },
        },
      ],
      defaultNextNodeId: 'n6-brassboard',
    },

    // ── Node 6: Brassboard Demonstration ───────────────────────────────────
    {
      id: 'n6-brassboard',
      phase: 'Phase B',
      title: 'Brassboard in a Relevant Environment',
      narrative:
        'The crosstalk model guided the brassboard design and thermal testing confirms the issue is resolved. Your brassboard detector now operates in a thermal-vacuum chamber simulating the L2 environment. Performance meets requirements, but the fabrication process had low yield — only two of five detector arrays passed acceptance testing. Your team must decide how to address producibility before moving to the engineering unit.',
      termHighlights: [
        t('Brassboard'),
        t('Producibility'),
        t('Reliability'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Initiate a producibility study that identifies yield-limiting process steps, develop process improvements, and require a minimum yield demonstration before authorizing the engineering unit build.',
          termIndices: [t('Producibility'), t('Brassboard'), t('Reliability')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Producibility is a key consideration in technology maturation. Low yield at the brassboard stage signals that the manufacturing process is not yet mature. Addressing yield before the engineering unit prevents you from building an EU that cannot be reliably replicated for flight.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Proceed to the engineering unit using the two good arrays, and plan to improve yield in parallel during EU testing.',
          termIndices: [t('Engineering Unit'), t('Brassboard')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Moving forward with the good units maintains schedule, but you are carrying significant producibility risk into the EU phase. If yield improvements stall, you may not be able to produce flight-quality detectors, which would be a programmatic crisis late in the lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 2 },
        },
      ],
      defaultNextNodeId: 'n7-design-decomposition',
    },

    // ── Node 7: Design Decomposition ───────────────────────────────────────
    {
      id: 'n7-design-decomposition',
      phase: 'Phase B',
      title: 'Decomposing the Instrument Design',
      narrative:
        'With the detector technology maturing on plan, your systems engineering team turns to the full instrument design. The telescope instrument has complex interactions between the detector, readout electronics, cryocooler, and optical bench. You need to decompose the design into manageable elements while preserving traceability to requirements. Your lead architect asks how you want to approach the decomposition.',
      termHighlights: [
        t('Design Solution Definition Process'),
        t('Functional Decomposition'),
        t('Logical Decomposition Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Follow the Design Solution Definition Process: start with functional decomposition to identify what the system must do, then apply logical decomposition to allocate functions to physical components, ensuring each allocation is traceable to requirements.',
          termIndices: [
            t('Design Solution Definition Process'),
            t('Functional Decomposition'),
            t('Logical Decomposition Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'The Design Solution Definition Process prescribes exactly this sequence. Functional decomposition ensures you understand the "what" before committing to the "how." Logical decomposition then maps functions to physical architecture elements. This maintains traceability and prevents design decisions from outrunning requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Decompose the instrument by physical subsystem boundaries (detector module, electronics box, cryocooler, optical bench) and let each team define their own internal functions.',
          termIndices: [t('Design Solution Definition Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Decomposing by physical boundaries first is tempting because it aligns with organizational structure, but it skips functional analysis. Cross-cutting functions like thermal management or electromagnetic compatibility may fall into gaps between subsystems, leading to integration issues and incomplete requirement coverage.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Use a concurrent engineering session to have all subsystem teams simultaneously decompose and integrate the design in a single intensive workshop.',
          termIndices: [
            t('Concurrent Engineering'),
            t('Design Solution Definition Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Concurrent engineering sessions are valuable for rapid iteration, but they work best after the functional and logical decomposition framework is established. Without that framework, the session risks becoming a negotiation among subsystem advocates rather than a systematic decomposition from requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'n8-eu-prototype',
    },

    // ── Node 8: Engineering Unit and Prototype ─────────────────────────────
    {
      id: 'n8-eu-prototype',
      phase: 'Phase C',
      title: 'Engineering Unit Qualification',
      narrative:
        'Your team is ready to build the engineering unit. The producibility improvements have raised yield to acceptable levels, and the instrument design decomposition is complete. However, your project scientist requests a change: adding a second detector band to exploit the quantum dot technology\'s tunability. This would significantly enhance science return but requires modifying the qualified brassboard design. You must advise the project manager on how to proceed with the engineering unit given this late enhancement request.',
      termHighlights: [
        t('Engineering Unit'),
        t('Prototype'),
        t('Technology Readiness Level'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Build the engineering unit with the current single-band design to achieve TRL 6 on schedule. Commission a separate prototype of the dual-band concept as a parallel risk-reduction activity with its own Technology Development Plan.',
          termIndices: [
            t('Engineering Unit'),
            t('Prototype'),
            t('Technology Development Plan'),
            t('Technology Readiness Level'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'This is the disciplined SE approach. The single-band detector has been matured through breadboard and brassboard stages and is ready for EU qualification. Adding an untested second band would reset the technology maturity. A separate prototype lets you explore the enhancement without jeopardizing the critical path to TRL 6.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Incorporate the dual-band capability into the engineering unit design since the quantum dot technology fundamentally supports it and the science value justifies the risk.',
          termIndices: [
            t('Engineering Unit'),
            t('Technology Readiness Level'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Adding an unmatured capability to the engineering unit undermines the entire staged maturation strategy. The dual-band configuration has not been validated at breadboard or brassboard fidelity, so integrating it into the EU effectively resets your TRL to 3 for that capability. This is the kind of scope creep that derails technology programs.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: 4 },
        },
        {
          id: 'c',
          text: 'Delay the engineering unit build by six months to first build a dual-band brassboard, then proceed with a dual-band EU.',
          termIndices: [
            t('Engineering Unit'),
            t('Brassboard'),
            t('Technology Readiness Level'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this approach respects the staged maturation process, a six-month delay to the EU pushes the critical path and may violate mission milestones. The better strategy is to keep the baselined single-band design on its current timeline while exploring the enhancement in parallel. Schedule is a resource too.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 4, budget: 3 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  startNodeId: 'n1-trl-assessment',

  debriefTemplate: {
    successNarrative:
      'Your disciplined approach to technology maturation paid off. The quantum dot detector achieved TRL 6 on schedule and within budget. By following the staged breadboard-brassboard-engineering unit sequence, conducting rigorous assessments, and resisting the temptation to skip steps or inject unmatured capabilities, you delivered a flight-qualifiable detector that opens a new era of infrared space astronomy.',
    failureNarrative:
      'The quantum dot detector program encountered significant difficulties. Shortcuts in technology maturation, insufficient risk characterization, and late-stage scope changes conspired to push the project over budget and behind schedule. Several key SE processes were bypassed, leading to surprises that could have been anticipated with more disciplined systems engineering.',
    successThreshold: 0.6,
  },
}
