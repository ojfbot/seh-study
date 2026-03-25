import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh38ProjectPhaseEOperationsAndSustainment: ScenarioTemplate = {
  meta: {
    id: 'seh-3-8-project-phase-e-operations-and-sustainment',
    title: 'Sample Return Operations Crisis',
    subtitle: 'Navigate mission operations challenges during asteroid sample collection',
    difficulty: 'intermediate',
    categories: ['lifecycle', 'project-mgmt', 'risk'],
    termIndices: [
      t('Mission'),
      t('Anomaly'),
      t('Operations Concept'),
      t('Software'),
      t('Maintainability'),
      t('Evaluation'),
      t('Process'),
      t('System'),
      t('Configuration Management Process'),
      t('Risk Assessment'),
      t('Technical Risk Management Process'),
      t('Continuous Risk Management'),
      t('Objective'),
      t('Product'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Mission Operations',
      title: 'Unexpected Asteroid Composition',
      narrative:
        'Your asteroid sample return spacecraft has reached the target asteroid and begun surface analysis. Initial spectroscopic data reveals the asteroid surface composition differs significantly from Earth-based observations, requiring modifications to your planned sampling approach. The original operations concept assumed a rocky surface, but telemetry indicates a highly fragmented regolith layer that could jam the sampling mechanism. You need to determine how to proceed with the mission objectives.',
      termHighlights: [t('Mission'), t('Operations Concept'), t('Objective')],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with the original sampling sequence as planned, since the mission requirements were based on the best available data.',
          termIndices: [t('Mission'), t('Operations Concept')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Proceeding without adapting to new conditions risks mission failure. Phase E operations must be flexible enough to accommodate unexpected discoveries. The operations concept should guide decisions, but safety and mission success take priority over rigid adherence to original plans.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Initiate an emergency return to Earth without collecting samples to preserve the spacecraft.',
          termIndices: [t('Mission'), t('Objective')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Abandoning the primary mission objectives without attempting adaptation is premature. Phase E operations often require real-time problem solving and process modifications. Systems engineering during operations involves finding solutions that meet mission needs within acceptable risk levels.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -5, budget: -3 },
        },
        {
          id: 'c',
          text: 'Convene the mission operations team to evaluate alternative sampling approaches and modify procedures based on actual surface conditions.',
          termIndices: [t('Evaluation'), t('Process'), t('Mission')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Phase E operations require ongoing evaluation and process adaptation when conditions differ from expectations. This collaborative approach leverages systems engineering expertise to modify operational procedures while maintaining mission objectives and managing technical risk appropriately.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Software Updates',
      title: 'In-Flight Software Modification',
      narrative:
        'Based on the team evaluation, you need to upload new software to the spacecraft that will allow the sampling arm to operate in a more gentle mode suitable for loose regolith collection. The software modification has been developed and tested on Earth, but uploading it requires taking the sampling system offline for 4 hours during a critical orbital window. Mission planners are concerned about the schedule impact and want your recommendation on proceeding.',
      termHighlights: [t('Software'), t('System'), t('Technical Risk Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Upload the software immediately to minimize mission risk, regardless of the orbital timing.',
          termIndices: [t('Software'), t('Technical Risk Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Rushing software uploads without proper timing considerations increases technical risk. Phase E software development must balance urgency with operational constraints. Proper risk management requires considering orbital mechanics and communication windows for successful upload completion.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Wait for the next optimal communication window in 72 hours to ensure reliable software upload with full ground station coverage.',
          termIndices: [t('Software'), t('Technical Risk Management Process'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Phase E software development requires careful coordination with operational constraints. Waiting for optimal conditions reduces the risk of upload failure and ensures proper system functionality. This demonstrates effective technical risk management during operations.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Cancel the software update and attempt sample collection with existing capabilities to avoid any technical risk.',
          termIndices: [t('Software'), t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Avoiding all technical risk by canceling necessary modifications could compromise mission success. Phase E operations require balancing risk against mission objectives. The software update addresses a real operational need identified through evaluation of actual conditions.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Anomaly Resolution',
      title: 'Sample Container Mechanism Fault',
      narrative:
        'After successfully uploading the new software and beginning sample collection, an anomaly occurs with the sample container sealing mechanism. Telemetry indicates the primary seal actuator is drawing excessive current and may be binding. You have a backup sealing system, but using it would require deviating from certified procedures. The spacecraft is in a limited communication window, and you must decide quickly how to address this fault.',
      termHighlights: [t('Anomaly'), t('Process'), t('Configuration Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Immediately activate the backup sealing system without ground consultation since time is critical.',
          termIndices: [t('Anomaly'), t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Operating outside certified procedures without proper authorization violates configuration management principles. Even during anomaly resolution in Phase E, changes to operational processes require proper evaluation and approval when possible.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Document the anomaly and wait for the next communication pass to get ground approval for backup system activation.',
          termIndices: [t('Anomaly'), t('Configuration Management Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While following configuration management processes is important, excessive delays during critical operations can jeopardize mission success. Phase E operations sometimes require rapid decision-making within established authority frameworks.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 3, budget: 0 },
        },
        {
          id: 'c',
          text: 'Execute the pre-approved contingency procedure for sealing system failures, which includes backup system activation.',
          termIndices: [t('Process'), t('Configuration Management Process'), t('Anomaly')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Following pre-established contingency procedures balances the need for rapid anomaly resolution with proper configuration management. Phase E operations planning should include approved procedures for anticipated failure modes to enable quick, authorized responses.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Mission Extension Planning',
      title: 'Extended Operations Opportunity',
      narrative:
        'Sample collection is now complete and secure. The spacecraft systems are performing better than expected, with 18 months of consumables remaining beyond the planned return trajectory window. Mission scientists have identified an opportunity to visit a second, smaller asteroid en route to Earth that would provide valuable comparative data. However, this would require significant modifications to the flight software and extend the mission by 14 months. You need to evaluate this mission extension proposal.',
      termHighlights: [t('Mission'), t('Evaluation'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Approve the mission extension immediately since the spacecraft is healthy and the scientific opportunity is valuable.',
          termIndices: [t('Mission'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Mission extensions require thorough evaluation beyond just system health. You must assess technical risks, budget impacts, operational complexity, and stakeholder acceptance. Phase E decisions affect long-term mission sustainability and resource allocation.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 4 },
        },
        {
          id: 'b',
          text: 'Reject the extension to focus resources on ensuring successful return of the primary samples.',
          termIndices: [t('Mission'), t('Objective')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While protecting the primary mission is important, rejecting opportunities without proper evaluation may waste available system capabilities. Phase E operations should balance risk management with maximizing mission value when conditions permit.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: -2 },
        },
        {
          id: 'c',
          text: 'Conduct a comprehensive evaluation including technical feasibility, risk assessment, budget analysis, and stakeholder review.',
          termIndices: [t('Evaluation'), t('Risk Assessment'), t('Technical Risk Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Mission extension decisions during Phase E require comprehensive evaluation of all factors. This systematic approach ensures that mission evolution decisions are well-informed and consider technical, programmatic, and stakeholder perspectives appropriately.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Sustainment Operations',
      title: 'Long-Term Operations Planning',
      narrative:
        'The mission extension has been approved following your comprehensive evaluation. You now need to establish sustainment operations for the extended mission phase, including maintenance of ground systems, continued software development capabilities, and operational team retention. The extended operations will require different staffing and support levels than the primary mission. You must develop a sustainment plan that ensures mission success while optimizing resource utilization.',
      termHighlights: [t('Maintainability'), t('Process'), t('Product')],
      decisions: [
        {
          id: 'a',
          text: 'Maintain the same full operational team and support level as the primary mission to ensure no capability gaps.',
          termIndices: [t('Maintainability'), t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Maintaining full primary mission staffing during extended operations is typically inefficient and unsustainable. Phase E sustainment should optimize resources based on actual operational needs rather than peak mission requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 5 },
        },
        {
          id: 'b',
          text: 'Reduce operations to minimal staffing with no development capability to minimize costs.',
          termIndices: [t('Maintainability'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Excessive reduction in capabilities may compromise mission success during extended operations. The scenario mentions that software development may continue well into Phase E, so eliminating development capability could prevent necessary adaptations.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: -3 },
        },
        {
          id: 'c',
          text: 'Develop a tailored sustainment plan that maintains critical capabilities while reducing non-essential functions based on extended mission requirements.',
          termIndices: [t('Process'), t('Maintainability'), t('Evaluation')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Effective Phase E sustainment requires balancing capability maintenance with resource optimization. This approach ensures mission success while recognizing that extended operations may have different requirements than primary mission phases.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully navigated the complexities of Phase E operations, demonstrating effective mission adaptation, risk management, and sustainment planning. Your decisions balanced mission objectives with operational realities while maintaining proper systems engineering processes throughout.',
    failureNarrative: 'Your Phase E operations decisions created significant risks to mission success. Effective operations and sustainment require balancing adaptability with systematic evaluation, proper risk management, and resource optimization while maintaining mission objectives.',
    successThreshold: 60,
  },
}
