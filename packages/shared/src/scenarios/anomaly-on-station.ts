import type { ScenarioTemplate } from '../scenario-types.js'
import { termIndexByName as t } from '../glossary.js'

export const anomalyOnStation: ScenarioTemplate = {
  meta: {
    id: 'anomaly-on-station',
    title: 'Anomaly on Station',
    subtitle:
      'Respond to a thermal control system anomaly aboard the International Space Station',
    difficulty: 'intermediate',
    categories: ['risk', 'verification'],
    termIndices: [
      t('Anomaly'),
      t('Detection'),
      t('Diagnosis'),
      t('Fault Identification'),
      t('Fault Isolation'),
      t('Fault Management'),
      t('Fault Tolerance'),
      t('Mitigation'),
      t('Recovery'),
      t('Health Assessment'),
      t('Health Monitoring'),
      t('Risk Assessment'),
      t('Continuous Risk Management'),
      t('System Safety Engineering'),
      t('Discrepancy'),
      t('Nonconforming product'),
      t('Prognosis'),
      t('Surveillance'),
      t('Technical Risk'),
      t('Technical Risk Management Process'),
    ],
    estimatedMinutes: 15,
  },

  startNodeId: 'node-1',

  nodes: [
    // ── Node 1: Detection ──────────────────────────────────────────────────
    {
      id: 'node-1',
      phase: 'Detection',
      title: 'Temperature Spike Alert',
      narrative:
        'Mission Control alerts you to an unexpected temperature spike on the External Thermal Control System (ETCS) Loop A. ' +
        'Telemetry from health monitoring sensors shows the coolant outlet temperature has risen 12 degrees Celsius above nominal in under ten minutes. ' +
        'The anomaly was flagged automatically by the onboard detection subsystem, but no crew alarms have triggered yet. ' +
        'As the lead systems engineer on console, you must decide how to begin your response.',
      termHighlights: [t('Anomaly'), t('Detection'), t('Health Monitoring')],
      decisions: [
        {
          id: 'a',
          text: 'Immediately declare a spacecraft emergency and wake the crew for evacuation preparation.',
          termIndices: [t('Anomaly')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Declaring a spacecraft emergency before performing any health assessment is premature. ' +
            'Proper anomaly response begins with understanding the scope and severity of the discrepancy. ' +
            'An unnecessary emergency declaration disrupts crew rest cycles and wastes critical resources.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Pull up the full ETCS telemetry suite and perform a systematic health assessment of Loop A parameters.',
          termIndices: [t('Detection'), t('Health Assessment'), t('Health Monitoring')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The first step after anomaly detection is a thorough health assessment. ' +
            'By reviewing all related telemetry — pump speeds, valve positions, radiator panel angles, and secondary loop temperatures — ' +
            'you establish the scope of the discrepancy before escalating. This is the foundation of effective fault management.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Log the anomaly for the next shift handover and continue monitoring passively.',
          termIndices: [t('Surveillance')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A 12-degree temperature rise in ten minutes is well outside normal thermal drift and demands immediate attention. ' +
            'Passive surveillance alone is insufficient when active detection systems have flagged an anomaly. ' +
            'Delaying response risks cascading thermal failures on sensitive avionics.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    // ── Node 2: Diagnosis ──────────────────────────────────────────────────
    {
      id: 'node-2',
      phase: 'Diagnosis',
      title: 'Narrowing the Cause',
      narrative:
        'Your health assessment reveals that Loop A pump pressure is nominal but the flow control valve is reporting an intermediate position — ' +
        'neither fully open nor fully closed. The ammonia coolant flow rate has dropped by 30 percent. ' +
        'You need to perform a diagnosis to determine whether this is a valve mechanical failure, a sensor discrepancy, or a software command error. ' +
        'The flight director asks for your recommended diagnostic approach.',
      termHighlights: [t('Diagnosis'), t('Discrepancy'), t('Health Assessment')],
      decisions: [
        {
          id: 'a',
          text: 'Command the valve to cycle fully open and fully closed while monitoring position telemetry and flow rate response.',
          termIndices: [t('Diagnosis'), t('Fault Identification')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Commanding a valve cycle is a standard diagnostic technique that tests both the mechanical actuator and the position sensor. ' +
            'If the valve responds correctly to commands but telemetry still shows the intermediate position, you have identified a sensor discrepancy. ' +
            'If the valve fails to move, you have evidence of a mechanical fault. This systematic approach supports accurate fault identification.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Switch to Loop B immediately and troubleshoot Loop A offline during the next maintenance window.',
          termIndices: [t('Fault Tolerance')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Switching to the redundant loop leverages fault tolerance and does restore thermal control, but it skips diagnosis entirely. ' +
            'Without understanding the root cause, you cannot assess whether the same failure mode could affect Loop B. ' +
            'This is acceptable as a protective measure but should not replace diagnosis.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Ask the crew to perform an EVA inspection of the external valve assembly.',
          termIndices: [t('Diagnosis')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'An EVA is a high-risk, resource-intensive activity that requires days of planning. ' +
            'Requesting one before exhausting telemetry-based diagnostic options violates the principle of minimum-risk diagnosis. ' +
            'Always use remote diagnostic tools before committing to physical inspection.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    // ── Node 3: Fault Isolation ────────────────────────────────────────────
    {
      id: 'node-3',
      phase: 'Fault Isolation',
      title: 'Isolating the Failure',
      narrative:
        'The valve cycle test reveals that the valve responds to open commands but stalls at 68 percent when commanded to close. ' +
        'Telemetry confirms the position sensor is accurate — this is a genuine mechanical restriction, not a sensor discrepancy. ' +
        'You now need to isolate the fault to prevent further degradation while preserving as much thermal control capability as possible. ' +
        'Two subsystem engineers are standing by for your isolation strategy.',
      termHighlights: [t('Fault Isolation'), t('Fault Identification')],
      decisions: [
        {
          id: 'a',
          text: 'Command the valve to its full-open position and lock it there, then modulate cooling via radiator panel positioning.',
          termIndices: [t('Fault Isolation'), t('Fault Management')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Locking the valve in its known-good full-open state isolates the fault — it prevents further mechanical damage from ' +
            'repeated cycling against the restriction. Using radiator panel angle to modulate heat rejection is an established workaround ' +
            'that maintains Loop A in a degraded but functional state. This is textbook fault isolation paired with graceful degradation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Continue cycling the valve repeatedly to try to clear the obstruction.',
          termIndices: [t('Fault Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Repeated cycling against a mechanical restriction risks catastrophic valve failure — you could lose the valve entirely, ' +
            'which would force a complete loop shutdown. Effective fault isolation means stopping the failure from propagating, ' +
            'not forcing a damaged component to operate normally.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Shut down Loop A entirely and transfer all thermal loads to Loop B.',
          termIndices: [t('Fault Tolerance'), t('Fault Isolation')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'A full Loop A shutdown does isolate the fault, but it is overly conservative. ' +
            'The valve still functions in the open direction, meaning Loop A can provide cooling with radiator-based modulation. ' +
            'Shutting down an entire loop when a workaround exists reduces your fault tolerance margin — ' +
            'if Loop B develops an unrelated problem, you have no backup.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    // ── Node 4: Risk Assessment ────────────────────────────────────────────
    {
      id: 'node-4',
      phase: 'Risk Assessment',
      title: 'Evaluating Mission Risk',
      narrative:
        'With the valve locked open and radiator panels compensating, Loop A is stable but operating outside its designed control envelope. ' +
        'The flight director convenes a risk assessment meeting. You must present your evaluation of the technical risk ' +
        'to ongoing station operations and recommend whether the current configuration is safe for the next 72-hour planning horizon. ' +
        'The crew has a critical microgravity experiment scheduled in 36 hours that generates significant thermal load.',
      termHighlights: [t('Risk Assessment'), t('Technical Risk'), t('Prognosis')],
      decisions: [
        {
          id: 'a',
          text: 'Present a quantitative risk assessment showing Loop A can handle baseline loads but recommend deferring the high-thermal experiment until the valve is repaired.',
          termIndices: [
            t('Risk Assessment'),
            t('Technical Risk'),
            t('Technical Risk Management Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A rigorous technical risk assessment weighs the probability of further degradation against the consequence of thermal overload. ' +
            'Loop A in its degraded state can handle routine loads, but the additional thermal output from the experiment creates an unacceptable risk margin. ' +
            'Recommending deferral demonstrates sound application of the technical risk management process — you accept manageable risk while mitigating the unacceptable.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Report that the workaround is holding and recommend proceeding with all planned activities on the normal schedule.',
          termIndices: [t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Declaring the workaround sufficient without a formal risk assessment ignores that the system is operating in a degraded mode. ' +
            'The valve restriction could worsen under increased thermal load. A systems engineer must quantify technical risk rather than ' +
            'offering subjective assurance. Proceeding without analysis violates continuous risk management principles.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Recommend switching entirely to Loop B and proceeding with all activities, keeping Loop A in cold standby.',
          termIndices: [t('Risk Assessment'), t('Fault Tolerance')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This approach is conservative and safe for the near term, but it sacrifices fault tolerance for schedule compliance. ' +
            'Running single-loop with no backup for 72 hours during a high-thermal experiment introduces a different technical risk. ' +
            'A better assessment would identify which activities can proceed under degraded dual-loop operation.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    // ── Node 5: Mitigation Planning ────────────────────────────────────────
    {
      id: 'node-5',
      phase: 'Mitigation',
      title: 'Developing the Repair Plan',
      narrative:
        'The flight director accepts your risk assessment and defers the experiment. Now you must develop a mitigation plan ' +
        'for the valve restriction. The ISS program office wants options ranging from on-orbit repair to waiting for a resupply vehicle ' +
        'carrying a replacement valve. Your mitigation strategy will shape the next two weeks of station operations. ' +
        'Engineering analysis suggests debris in the valve seat is the most probable root cause.',
      termHighlights: [t('Mitigation'), t('Continuous Risk Management')],
      decisions: [
        {
          id: 'a',
          text: 'Propose a phased mitigation: first attempt a commanded flush sequence to clear debris, then plan an EVA valve replacement as a backup if flushing fails.',
          termIndices: [t('Mitigation'), t('Continuous Risk Management')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A phased mitigation plan embodies continuous risk management — you address the most likely cause with the lowest-risk intervention first, ' +
            'then have a pre-planned escalation path. The flush procedure can be attempted from the ground without crew involvement, preserving the EVA option ' +
            'for cases where remote mitigation is insufficient. This balances risk reduction with resource conservation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Skip remote attempts and schedule an immediate EVA to replace the valve with an on-orbit spare.',
          termIndices: [t('Mitigation')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'An EVA replacement would definitively fix the problem, but EVAs carry inherent safety risk and require extensive crew preparation time. ' +
            'Jumping directly to the most invasive mitigation without attempting lower-risk options first is not aligned with sound systems engineering practice. ' +
            'The flush sequence has a reasonable probability of success and should be tried first.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -2 },
        },
        {
          id: 'c',
          text: 'Recommend waiting for the next scheduled resupply vehicle to deliver a new valve assembly, operating on the workaround indefinitely.',
          termIndices: [t('Continuous Risk Management'), t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Operating in a degraded configuration for weeks or months while waiting for resupply exposes the station to sustained technical risk. ' +
            'Continuous risk management requires active mitigation, not passive acceptance. If Loop B were to fail during this extended period, ' +
            'the station would have no thermal control redundancy. Delaying action is not a mitigation strategy.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-6',
    },

    // ── Node 6: Verification of Mitigation ─────────────────────────────────
    {
      id: 'node-6',
      phase: 'Verification',
      title: 'Executing and Verifying the Flush',
      narrative:
        'The flush sequence is approved and executed. Ammonia is routed at elevated pressure through Loop A in a controlled burst pattern ' +
        'designed to dislodge particulate debris from the valve seat. After three flush cycles, telemetry shows the valve now closes to 15 percent — ' +
        'a major improvement from the 68-percent stall point, but still not achieving full closure. ' +
        'You must determine whether this partial recovery meets the system safety engineering requirements for return to normal operations.',
      termHighlights: [
        t('Recovery'),
        t('System Safety Engineering'),
        t('Nonconforming product'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Classify the valve as a nonconforming product with a documented use-as-is disposition, imposing operational limits on maximum thermal load until full replacement.',
          termIndices: [
            t('Nonconforming product'),
            t('System Safety Engineering'),
            t('Surveillance'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The valve does not meet its original specification (full closure) so it is a nonconforming product. ' +
            'Documenting a use-as-is disposition with operational constraints is a recognized systems engineering approach that honestly characterizes ' +
            'the hardware state while enabling continued safe operation. This supports system safety engineering by maintaining traceability ' +
            'and imposing surveillance requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Declare the flush fully successful and return Loop A to unrestricted normal operations.',
          termIndices: [t('Recovery')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The valve still cannot achieve full closure — declaring unrestricted success misrepresents the system state. ' +
            'A 15-percent residual gap means reduced flow modulation authority, which matters during peak thermal loading. ' +
            'System safety engineering demands honest assessment of as-recovered performance against specifications.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Declare the flush a failure and immediately proceed to EVA valve replacement.',
          termIndices: [t('Recovery'), t('Mitigation')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'The flush achieved significant improvement — the valve went from 68-percent stall to 15-percent, restoring most control authority. ' +
            'Calling this a failure and jumping to EVA disregards the partial recovery. While EVA replacement is still the long-term plan, ' +
            'the current state is safe for continued operation with documented limitations.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-7',
    },

    // ── Node 7: Prognosis & Surveillance ───────────────────────────────────
    {
      id: 'node-7',
      phase: 'Prognosis',
      title: 'Long-Term Outlook',
      narrative:
        'With the valve operating under documented constraints, the program office asks you to develop a prognosis for Loop A ' +
        'and a surveillance plan to detect any further degradation. Historical data from similar valve restrictions on other ISS loops ' +
        'suggests that debris-related obstructions can recur. You must balance the cost of enhanced monitoring against the risk ' +
        'of missing early warning signs of a secondary failure.',
      termHighlights: [t('Prognosis'), t('Surveillance'), t('Continuous Risk Management')],
      decisions: [
        {
          id: 'a',
          text: 'Implement an enhanced surveillance plan with tightened telemetry limits on valve position and flow rate, plus weekly trend analysis reported to the risk board.',
          termIndices: [
            t('Surveillance'),
            t('Prognosis'),
            t('Continuous Risk Management'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Enhanced surveillance with tightened limits ensures early detection of recurrence. ' +
            'Weekly trend analysis feeds directly into the continuous risk management process, allowing the team to update the prognosis ' +
            'as new data arrives. This approach treats the valve as a known risk item requiring active tracking — ' +
            'exactly what continuous risk management demands.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Keep the standard telemetry monitoring in place — the existing detection system caught the original anomaly, so it should catch a recurrence.',
          termIndices: [t('Detection'), t('Surveillance')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'The original detection caught a 12-degree temperature spike — by that point the valve was already significantly degraded. ' +
            'Standard limits are designed for nominal hardware. A component with a known defect requires tighter surveillance thresholds ' +
            'to catch degradation earlier. Relying on the same limits that allowed the initial problem to progress is inadequate.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Shut down Loop A entirely until the replacement valve arrives to eliminate all risk of recurrence.',
          termIndices: [t('Fault Tolerance'), t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Shutting down a partially functional loop eliminates one risk but creates another — single-loop operations for an extended period. ' +
            'The prognosis indicates Loop A is usable with constraints. Proper continuous risk management accepts managed risk with enhanced monitoring ' +
            'rather than eliminating one risk by accepting a worse one.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-8',
    },

    // ── Node 8: Recovery & Closeout ────────────────────────────────────────
    {
      id: 'node-8',
      phase: 'Recovery',
      title: 'Mission Recovery and Closeout',
      narrative:
        'Three weeks later, a resupply vehicle delivers the replacement valve. The EVA crew installs it successfully, and post-installation ' +
        'testing confirms full valve authority restored on Loop A. You must now close out the anomaly investigation and capture lessons learned. ' +
        'The program office wants your recommendation on how to update fault management procedures based on this experience. ' +
        'Your final decision will shape how the station handles similar thermal anomalies in the future.',
      termHighlights: [t('Recovery'), t('Fault Management'), t('System Safety Engineering')],
      decisions: [
        {
          id: 'a',
          text: 'Write a formal anomaly closeout report with updated fault management procedures, including a new flush-before-EVA decision tree and revised telemetry limits for all ETCS valves.',
          termIndices: [
            t('Recovery'),
            t('Fault Management'),
            t('System Safety Engineering'),
            t('Technical Risk Management Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Formal closeout with updated procedures ensures the lessons from this anomaly improve future fault management. ' +
            'The flush-before-EVA decision tree codifies the phased mitigation approach as institutional knowledge. ' +
            'Revising telemetry limits across all ETCS valves — not just the failed one — demonstrates systems-level thinking ' +
            'and strengthens the overall technical risk management process.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Close the anomaly report with a note that the valve was replaced and operations are nominal. No procedure updates needed — this was a one-off event.',
          termIndices: [t('Recovery')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Treating this as a one-off event wastes the operational knowledge gained during three weeks of anomaly response. ' +
            'System safety engineering requires that anomaly investigations drive procedural improvements. ' +
            'Without updated fault management procedures, the next thermal anomaly will require the same ad-hoc decision-making.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Recommend replacing all ETCS valves station-wide as a precautionary measure during the next maintenance period.',
          termIndices: [t('Fault Management'), t('Mitigation')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Wholesale valve replacement addresses the hardware concern but is an extremely expensive and schedule-intensive response. ' +
            'Without evidence that other valves show similar degradation trends, blanket replacement is not justified by the risk data. ' +
            'A better approach is to update surveillance and fault management procedures so degradation is caught early on any valve.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'Outstanding work, Flight. Your systematic approach — from initial health assessment through diagnosis, fault isolation, ' +
      'risk-informed decision-making, phased mitigation, and formal closeout — exemplifies disciplined systems engineering. ' +
      'The crew remained safe, station operations continued with minimal disruption, and the program now has improved procedures ' +
      'for future thermal anomalies. You demonstrated that effective anomaly response is not about reacting fastest, ' +
      'but about making each decision with the right information at the right time.',
    failureNarrative:
      'The anomaly was eventually resolved, but several decisions along the way increased risk to the crew and station. ' +
      'Review the feedback at each decision point — effective anomaly response requires systematic diagnosis before action, ' +
      'honest risk assessment before proceeding, and formal documentation before closeout. ' +
      'Each phase of the response builds on the previous one; shortcuts in early phases compound into larger problems later.',
    successThreshold: 0.6,
  },
}
