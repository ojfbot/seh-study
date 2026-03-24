import type { ScenarioTemplate } from '../scenario-types.js'
import { termIndexByName as t } from '../glossary.js'

export const launchReadiness: ScenarioTemplate = {
  meta: {
    id: 'launch-readiness',
    title: 'Launch Readiness',
    subtitle:
      'Navigate a lunar lander from Critical Design Review through Flight Readiness Review under a fixed launch window.',
    difficulty: 'advanced',
    categories: ['reviews', 'configuration'],
    termIndices: [
      t('Critical Design Review'),
      t('Product Baseline (Phase D/E)'),
      t('Allocated Baseline (Phase C)'),
      t('Configuration Items (CI)'),
      t('Configuration Management Process'),
      t('Functional Configuration Audit (FCA)'),
      t('Physical Configuration Audits (PCA) or configuration inspection'),
      t('Production Readiness Review (PRR)'),
      t('Test Readiness Review'),
      t('Flight Readiness Review'),
      t('Standing Review Board'),
      t('Entrance Criteria'),
      t('Success Criteria'),
      t('Waiver'),
      t('Liens'),
      t('Technical Data Package'),
      t('Peer Review'),
      t('Quality Assurance'),
      t('Verification (of a product)'),
      t('Validation (of a product)'),
      t('Product Verification Process'),
      t('Product Validation Process'),
    ],
    estimatedMinutes: 25,
  },

  startNodeId: 'cdr-entrance',

  nodes: [
    // ── Node 1: CDR Entrance ──────────────────────────────────────────────
    {
      id: 'cdr-entrance',
      phase: 'Phase C',
      title: 'CDR Entrance Gate',
      narrative:
        'The Standing Review Board convenes for the Critical Design Review of the Artemis-class lunar lander. You are the mission assurance lead responsible for confirming that all entrance criteria are satisfied before the review can proceed. The allocated baseline from Phase C must be fully documented, and every configuration item needs a complete technical data package. Two subsystem teams have flagged incomplete peer reviews on their thermal control designs.',
      termHighlights: [
        t('Standing Review Board'),
        t('Critical Design Review'),
        t('Entrance Criteria'),
        t('Allocated Baseline (Phase C)'),
        t('Configuration Items (CI)'),
        t('Technical Data Package'),
        t('Peer Review'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Halt the CDR until all peer reviews are completed and the technical data packages are updated to reflect their findings.',
          termIndices: [t('Peer Review'), t('Technical Data Package'), t('Entrance Criteria')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Entrance criteria exist precisely to ensure the review body has adequate data to make informed decisions. Proceeding without completed peer reviews risks a superficial CDR that misses design flaws, which would surface later at much higher cost.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Proceed with CDR but log the incomplete peer reviews as liens to be resolved before the product baseline is established.',
          termIndices: [t('Liens'), t('Peer Review'), t('Product Baseline (Phase D/E)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but risky. Logging liens keeps the issue visible, but conducting CDR without complete peer-reviewed designs undermines the review quality. The Standing Review Board may lack sufficient information to evaluate thermal control adequacy, potentially requiring a delta-CDR later.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Proceed with CDR as scheduled and handle the thermal subsystem in a separate technical interchange meeting afterward.',
          termIndices: [t('Critical Design Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Bypassing entrance criteria without even logging liens violates the configuration management process. A TIM does not carry the formal authority of a CDR, so any thermal design decisions made there would lack proper review board endorsement.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'cdr-board-findings',
    },

    // ── Node 2: CDR Board Findings ────────────────────────────────────────
    {
      id: 'cdr-board-findings',
      phase: 'Phase C',
      title: 'CDR Board Findings',
      narrative:
        'The Critical Design Review concludes after three intense days. The Standing Review Board issues its findings: the propulsion and avionics designs meet success criteria, but the descent-stage structural analysis shows a negative margin on two load cases. The board classifies this as a significant finding. You must decide how to disposition it before the project can transition to the product baseline.',
      termHighlights: [
        t('Critical Design Review'),
        t('Standing Review Board'),
        t('Success Criteria'),
        t('Product Baseline (Phase D/E)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Require the structures team to resolve the negative margins with an updated analysis and a delta-CDR review before establishing the product baseline.',
          termIndices: [
            t('Critical Design Review'),
            t('Product Baseline (Phase D/E)'),
            t('Success Criteria'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Negative structural margins are a safety-critical finding. Requiring resolution before baselining ensures the product baseline reflects a design that actually meets its requirements. A delta-CDR focused on the structural issue is the standard mechanism.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Accept the finding as a lien against the product baseline and track resolution through the configuration management process during Phase D.',
          termIndices: [
            t('Liens'),
            t('Product Baseline (Phase D/E)'),
            t('Configuration Management Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but dangerous for a crewed vehicle. Carrying negative structural margins as a lien into fabrication means hardware may be built to an inadequate design. If the resolution requires a structural redesign, rework costs and schedule impacts in Phase D will be severe.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Request a waiver from the chief engineer, arguing that the negative margins are within the uncertainty band of the analysis tool.',
          termIndices: [t('Waiver')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Waivers are for cases where a requirement cannot be met and an alternative rationale for acceptability exists. Claiming analysis uncertainty as justification is not a valid engineering rationale — it merely admits the team does not know whether the design is adequate. This would not survive an independent review.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'config-baseline',
    },

    // ── Node 3: Establishing the Product Baseline ─────────────────────────
    {
      id: 'config-baseline',
      phase: 'Phase C/D Transition',
      title: 'Establishing the Product Baseline',
      narrative:
        'With CDR findings resolved, the project is ready to establish the product baseline and enter Phase D fabrication. The configuration management team presents the proposed baseline, which includes 847 configuration items across twelve subsystems. You notice that thirty-two CIs lack formal document identifiers in the configuration management system, and the allocated baseline traceability matrix has not been updated to reflect four CDR-driven requirement changes.',
      termHighlights: [
        t('Product Baseline (Phase D/E)'),
        t('Configuration Items (CI)'),
        t('Configuration Management Process'),
        t('Allocated Baseline (Phase C)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Hold the baseline until all 847 CIs have proper document identifiers and the traceability matrix is updated to reflect every CDR-driven change.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Configuration Management Process'),
            t('Allocated Baseline (Phase C)'),
            t('Product Baseline (Phase D/E)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A baseline with untracked configuration items is not truly a baseline — it defeats the purpose of configuration management. Similarly, an out-of-date traceability matrix means you cannot confirm that every requirement is addressed by the design. Fixing these gaps now prevents confusion and rework during fabrication.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Establish the baseline for the 815 properly identified CIs and add the remaining 32 within a two-week corrective action window.',
          termIndices: [
            t('Configuration Items (CI)'),
            t('Configuration Management Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable with caveats. This allows fabrication to start on the bulk of the vehicle, but the 32 untracked CIs create a window where changes to those items are not under formal control. If any of them are modified during those two weeks, you could end up with an inconsistent baseline.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'prr-gate',
    },

    // ── Node 4: Production Readiness Review ───────────────────────────────
    {
      id: 'prr-gate',
      phase: 'Phase D',
      title: 'Production Readiness Review',
      narrative:
        'Fabrication planning is complete and the Production Readiness Review is scheduled. The quality assurance team reports that two suppliers have not yet delivered their qualification test data for the descent engine valves and the reaction control thrusters. Without this data, the technical data packages for those components are incomplete. The launch window is eight months away and the production schedule has zero float.',
      termHighlights: [
        t('Production Readiness Review (PRR)'),
        t('Quality Assurance'),
        t('Technical Data Package'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Delay PRR by two weeks to allow suppliers to deliver qualification data, and direct the QA team to verify the data before the review.',
          termIndices: [
            t('Production Readiness Review (PRR)'),
            t('Quality Assurance'),
            t('Technical Data Package'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Production readiness means confirming that the design can be reliably manufactured and that all components meet qualification requirements. Starting production without supplier qualification data risks building hardware with components that may fail acceptance testing later — a far more costly schedule impact than a two-week delay now.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Proceed with PRR using preliminary supplier data and issue liens requiring final qualification reports before first article acceptance.',
          termIndices: [
            t('Production Readiness Review (PRR)'),
            t('Liens'),
            t('Quality Assurance'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but introduces risk. Preliminary data may be sufficient to begin long-lead production activities, but any discrepancy between preliminary and final qualification results could require hardware rework. The liens must be aggressively tracked.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Waive the qualification data requirement for both suppliers based on their heritage performance on previous programs.',
          termIndices: [t('Waiver'), t('Quality Assurance')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Heritage performance does not substitute for qualification testing on a new design. The lunar lander environments — vibration, thermal cycling, vacuum — may differ significantly from prior programs. A waiver without component-specific qualification data would be a serious quality assurance gap.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'fca-prep',
    },

    // ── Node 5: Functional Configuration Audit Preparation ────────────────
    {
      id: 'fca-prep',
      phase: 'Phase D',
      title: 'Functional Configuration Audit Preparation',
      narrative:
        'As hardware fabrication nears completion, you begin preparing for the Functional Configuration Audit. The FCA will verify that each configuration item has achieved the performance specified in its functional and allocated configuration documentation. Your verification team reports that 94% of verification events are closed, but twenty-three verification items for the guidance, navigation, and control subsystem remain open. Ten of those are tied to integrated system-level tests that cannot run until the vehicle is assembled.',
      termHighlights: [
        t('Functional Configuration Audit (FCA)'),
        t('Configuration Items (CI)'),
        t('Verification (of a product)'),
        t('Product Verification Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with FCA for all subsystems that are 100% verified, and schedule a focused FCA continuation for GNC after integrated testing completes.',
          termIndices: [
            t('Functional Configuration Audit (FCA)'),
            t('Verification (of a product)'),
            t('Product Verification Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. An incremental FCA approach is standard practice when integrated tests are legitimately sequenced after component-level verification. This allows the project to confirm functional compliance for completed subsystems while maintaining rigor for GNC. The key is that the GNC continuation is formally scheduled, not deferred indefinitely.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Delay the entire FCA until all twenty-three GNC verification items are closed, even though it means waiting for vehicle assembly.',
          termIndices: [
            t('Functional Configuration Audit (FCA)'),
            t('Verification (of a product)'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but unnecessarily delays progress. While completeness is valuable, the twelve subsystems that are fully verified can and should be audited now. Holding everything for GNC wastes the review board members\' time and compresses the schedule downstream toward the launch window.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -3, budget: -1 },
        },
        {
          id: 'c',
          text: 'Close the open GNC verification items by analysis only, using simulation results as evidence, and proceed with a single complete FCA.',
          termIndices: [
            t('Functional Configuration Audit (FCA)'),
            t('Verification (of a product)'),
            t('Waiver'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. The open items specifically require integrated system-level testing because simulation fidelity was deemed insufficient during verification planning. Substituting analysis for test without a formal waiver and rationale review undermines the entire verification process. If the simulations were adequate, the verification method would have been analysis from the start.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'pca-execution',
    },

    // ── Node 6: Physical Configuration Audit ──────────────────────────────
    {
      id: 'pca-execution',
      phase: 'Phase D',
      title: 'Physical Configuration Audit',
      narrative:
        'The Physical Configuration Audit begins on the assembled lunar lander. Inspectors compare the as-built hardware against the technical data packages and product baseline drawings. During the audit, they discover that the flight software version loaded on the primary flight computer does not match the version listed in the configuration management system. The software team explains they uploaded a patch three days ago to fix a timing bug but have not yet submitted the engineering change request.',
      termHighlights: [
        t('Physical Configuration Audits (PCA) or configuration inspection'),
        t('Technical Data Package'),
        t('Product Baseline (Phase D/E)'),
        t('Configuration Management Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Stop the PCA for the flight computer, revert to the baselined software version, and require the software team to process the change through formal configuration management before reloading.',
          termIndices: [
            t('Physical Configuration Audits (PCA) or configuration inspection'),
            t('Configuration Management Process'),
            t('Product Baseline (Phase D/E)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The entire purpose of a PCA is to confirm that the as-built product matches its documentation. An unauthorized software change — even one that fixes a real bug — must go through the configuration management process. Reverting and reprocessing ensures the baseline remains authoritative and that the change receives proper review for unintended side effects.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Pause the PCA, have the software team submit an expedited engineering change request, and resume once the configuration management system is updated to match the loaded version.',
          termIndices: [
            t('Physical Configuration Audits (PCA) or configuration inspection'),
            t('Configuration Management Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but sets a concerning precedent. While the end state is a consistent baseline, allowing the patch to remain loaded while paperwork catches up means the PCA is adapting to the hardware rather than the hardware conforming to the baseline. An expedited ECR also risks insufficient review of the timing fix.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Note the discrepancy in the PCA report but continue the audit, since the patch fixes a known bug and the ECR is just paperwork.',
          termIndices: [
            t('Physical Configuration Audits (PCA) or configuration inspection'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Dismissing configuration management as "just paperwork" fundamentally misunderstands its role. The ECR process ensures that every change is reviewed for impacts to interfaces, verification, safety, and mission assurance. Uncontrolled changes to flight software on a crewed vehicle are exactly the kind of error that configuration management exists to prevent.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'trr-readiness',
    },

    // ── Node 7: Test Readiness Review ─────────────────────────────────────
    {
      id: 'trr-readiness',
      phase: 'Phase D',
      title: 'Test Readiness Review',
      narrative:
        'The integrated vehicle is ready for environmental qualification testing, and the Test Readiness Review is called. The test team presents their test procedures, success criteria, and facility readiness. However, you notice that the test procedures reference an older version of the verification requirements document — one that predates two CDR-driven requirement changes. The test conductor assures you the actual test parameters are correct, only the document reference is stale.',
      termHighlights: [
        t('Test Readiness Review'),
        t('Success Criteria'),
        t('Verification (of a product)'),
        t('Product Verification Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Hold TRR until the test procedures are updated to reference the current verification requirements document and the test team confirms that all parameters align.',
          termIndices: [
            t('Test Readiness Review'),
            t('Verification (of a product)'),
            t('Product Verification Process'),
            t('Success Criteria'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Document traceability is not a formality — it is how you prove that the test you are running actually verifies the current requirements. If the document reference is wrong, any discrepancy between the old and new requirements could mean the test is verifying the wrong thing. Updating takes hours; retesting takes weeks.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Approve TRR with a lien requiring the test team to update the document reference before the test report is finalized.',
          termIndices: [
            t('Test Readiness Review'),
            t('Liens'),
            t('Verification (of a product)'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but risky. If the test conductor is right that only the reference is stale, the lien approach saves time. But if there is an actual parameter discrepancy hidden by the wrong reference, you will not discover it until the test report review — after the test has already run. Given that the launch window has no float, a failed test would be catastrophic for the schedule.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'env-test-anomaly',
    },

    // ── Node 8: Environmental Test Anomaly ────────────────────────────────
    {
      id: 'env-test-anomaly',
      phase: 'Phase D',
      title: 'Environmental Test Anomaly',
      narrative:
        'During thermal-vacuum qualification testing, the descent-stage propulsion system shows an unexpected pressure transient during the cold soak cycle. The anomaly is within the allowable range defined by the success criteria, but it was not predicted by the pre-test analysis. The product verification process requires that all anomalies — whether within limits or not — be dispositioned before the test can be declared complete. The launch window is now five months away.',
      termHighlights: [
        t('Success Criteria'),
        t('Product Verification Process'),
        t('Verification (of a product)'),
        t('Quality Assurance'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Convene an anomaly review board, perform root-cause analysis, and do not close the verification item until the transient is fully understood — even if it delays the schedule.',
          termIndices: [
            t('Product Verification Process'),
            t('Verification (of a product)'),
            t('Quality Assurance'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. An unpredicted behavior, even within limits, indicates that the analytical models do not fully capture the system physics. Root-cause analysis may reveal a design sensitivity that could manifest more severely in flight conditions. Understanding the anomaly is a core quality assurance responsibility and a fundamental part of the verification process.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Document the transient as an observation in the test report, note that it was within success criteria, and close the verification item.',
          termIndices: [
            t('Success Criteria'),
            t('Verification (of a product)'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. While the measurement was within limits, the product verification process explicitly requires disposition of all anomalies. Closing the item without understanding the root cause violates the verification process and leaves a potential failure mode uncharacterized. History is full of missions lost because in-spec but unexplained anomalies were dismissed.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Run one additional cold soak cycle to see if the transient repeats. If it does not recur, close the item as a one-time event.',
          termIndices: [
            t('Verification (of a product)'),
            t('Product Verification Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable as a data-gathering step but insufficient as a disposition. A single non-recurrence does not constitute root-cause understanding. The additional test cycle costs schedule time without necessarily resolving the question. If the transient does recur, you are no closer to an answer. This approach should feed into a broader anomaly investigation, not replace it.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'validation-planning',
    },

    // ── Node 9: Validation Planning ───────────────────────────────────────
    {
      id: 'validation-planning',
      phase: 'Phase D',
      title: 'Validation Planning',
      narrative:
        'With verification nearing closure, the systems engineering team turns to product validation — confirming that the lunar lander meets the stakeholders\' actual mission needs, not just the written requirements. The validation plan calls for an end-to-end mission simulation, but the simulation facility is booked for another program for the next six weeks. An alternative is to conduct a tabletop validation exercise with the operations team, supplemented by subsystem-level simulation data you already have.',
      termHighlights: [
        t('Validation (of a product)'),
        t('Product Validation Process'),
        t('Verification (of a product)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Wait for the simulation facility and conduct the full end-to-end mission simulation as the validation plan specifies.',
          termIndices: [
            t('Product Validation Process'),
            t('Validation (of a product)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The validation plan was developed with the understanding that end-to-end simulation is necessary to confirm mission-level performance. Substituting a tabletop exercise changes the fidelity of the validation evidence. With a crewed lunar lander, the validation must be as rigorous as planned. Six weeks is manageable within the remaining schedule if other activities proceed in parallel.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Conduct the tabletop validation exercise now and supplement with the end-to-end simulation when the facility becomes available — treating both as complementary validation evidence.',
          termIndices: [
            t('Validation (of a product)'),
            t('Product Validation Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable and pragmatic. The tabletop exercise provides early validation insight and may uncover issues before the simulation. However, you must ensure the end-to-end simulation still happens — the tabletop alone does not meet the validation plan requirements. This dual approach works only if schedule allows both activities to complete before FRR.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Replace the end-to-end simulation with the tabletop exercise and subsystem data, arguing that verification closure provides sufficient confidence.',
          termIndices: [t('Validation (of a product)'), t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Verification and validation are distinct processes. Verification confirms the product meets its requirements; validation confirms it meets stakeholder needs in the operational environment. Subsystem-level data and a tabletop cannot replicate the integrated mission scenario. Conflating verification with validation is a classic systems engineering error.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'frr-gate',
    },

    // ── Node 10: Flight Readiness Review ──────────────────────────────────
    {
      id: 'frr-gate',
      phase: 'Phase D/E Transition',
      title: 'Flight Readiness Review',
      narrative:
        'The Flight Readiness Review is the final gate before the lunar lander is cleared for launch. The Standing Review Board assembles. All verification items are closed. Validation is complete. Configuration audits — both functional and physical — are done. However, three open waivers remain: one on a thermal blanket material substitution, one on a software timing margin reduction, and one on a structural fastener torque specification. Each waiver has an approved risk rationale, but the chief safety officer notes that the cumulative risk of three concurrent waivers has not been assessed.',
      termHighlights: [
        t('Flight Readiness Review'),
        t('Standing Review Board'),
        t('Waiver'),
        t('Functional Configuration Audit (FCA)'),
        t('Physical Configuration Audits (PCA) or configuration inspection'),
        t('Verification (of a product)'),
        t('Validation (of a product)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Hold FRR approval until a cumulative risk assessment of all three waivers is performed and reviewed by the Standing Review Board.',
          termIndices: [
            t('Flight Readiness Review'),
            t('Waiver'),
            t('Standing Review Board'),
            t('Quality Assurance'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Individual waiver approvals assess risk in isolation. The chief safety officer is right that the combined effect of three waivers — touching thermal, software, and structural domains — could create interaction risks not captured by any single waiver rationale. A cumulative assessment is essential for an informed flight readiness decision. This is exactly what the FRR process is designed to catch.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Approve flight readiness based on the individual waiver rationales, since each was already reviewed and accepted by the appropriate authority.',
          termIndices: [t('Flight Readiness Review'), t('Waiver')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Individual approval does not address cumulative risk. For example, the software timing margin reduction might interact with the thermal blanket substitution if the thermal environment causes the flight computer to operate at a different temperature, further eroding the timing margin. The FRR board has a responsibility to assess the integrated risk posture, not just ratify individual decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Request that the project retire at least one waiver by implementing the original design requirement before launch, reducing the cumulative waiver count.',
          termIndices: [t('Waiver'), t('Flight Readiness Review'), t('Configuration Management Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable in spirit but potentially counterproductive at this stage. Reverting a waivered change this close to launch introduces its own risk — regression testing, reconfiguration, and schedule pressure. The better path is to assess cumulative risk first and then decide whether any waiver must be retired. Acting without that assessment could create more problems than it solves.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'The lunar lander has been cleared for flight. Your disciplined approach to review gates, configuration management, and verification closure ensured that every issue was properly dispositioned. The Standing Review Board commended the mission assurance team for maintaining process rigor under intense schedule pressure. The lander launches on time within its window, and the configuration baseline is clean and fully auditable.',
    failureNarrative:
      'The lunar lander program has accumulated too much unresolved risk. The Standing Review Board has declared the vehicle not ready for flight, and the launch window has been missed. Schedule pressure led to shortcuts in configuration management, verification, or review gate discipline that left critical questions unanswered. A return-to-flight effort will require months of rework and a new launch opportunity.',
    successThreshold: 0.6,
  },
}
