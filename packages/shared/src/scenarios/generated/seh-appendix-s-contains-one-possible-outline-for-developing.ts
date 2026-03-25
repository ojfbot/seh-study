import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixSContainsOnePossibleOutlineForDeveloping: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-s-contains-one-possible-outline-for-developing',
    title: 'ConOps to Commitment',
    subtitle: 'Navigate stakeholder expectations through formal baseline approval',
    difficulty: 'advanced',
    categories: ['requirements', 'reviews', 'project-mgmt'],
    termIndices: [
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Stakeholder Expectations'),
      t('Measure of Effectiveness (MOE)'),
      t('Bidirectional Traceability'),
      t('Baseline'),
      t('Approval'),
      t('Success Criteria'),
      t('Mission'),
      t('Goal'),
      t('Requirement'),
      t('Operational Environment'),
      t('Technical Team'),
      t('Stakeholder'),
      t('Process')
    ],
    estimatedMinutes: 20,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'ConOps Development Challenge',
      narrative: 'Your crewed transport vehicle mission has gathered initial stakeholder expectations, but gaps and ambiguities remain about orbital operations, crew interfaces, and emergency scenarios. The technical team needs clear direction before proceeding to requirements definition. You must decide how to develop a comprehensive Concept of Operations.',
      termHighlights: [
        t('Concept of Operations (ConOps) (Concept Documentation)'),
        t('Stakeholder Expectations'),
        t('Technical Team')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop a structured ConOps following NASA guidelines, addressing operational environment, mission duration, crew interactions, and maintenance activities specific to crewed transport.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)'),
            t('Operational Environment'),
            t('Mission')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct approach. The handbook specifies that ConOps must address operational environment, orbit, mission duration, crew interactions, and maintenance activities for exploration missions. This systematic approach ensures all critical operational aspects are considered.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Focus the ConOps primarily on launch and docking operations since those are the most critical phases for crew safety.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Incomplete scope. While launch and docking are critical, the handbook requires ConOps for exploration missions to consider the full operational sequence including on-orbit operations, system configuration changes, and emergency procedures throughout mission duration.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Use the ConOps template from a previous cargo mission since the basic operations are similar.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Inappropriate reuse. Crewed transport operations differ significantly from cargo missions in crew interactions, life support requirements, abort scenarios, and operational complexity. The ConOps scope and purpose must match your specific mission.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Pre-Phase A',
      title: 'Formalizing Success Criteria',
      narrative: 'With the ConOps developed, you need to convert stakeholder expectations into formal statements including mission success criteria and design drivers. The crew office wants specific abort capability timelines, while mission planners focus on orbital lifetime requirements. You must establish clear Measures of Effectiveness.',
      termHighlights: [
        t('Success Criteria'),
        t('Measure of Effectiveness (MOE)'),
        t('Goal')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop MOEs that correspond to mission objectives from the stakeholder perspective, capturing both crew safety and mission accomplishment criteria with clear success thresholds.',
          termIndices: [
            t('Measure of Effectiveness (MOE)'),
            t('Success Criteria'),
            t('Goal')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent approach. MOEs must be stated from stakeholder viewpoint and represent criteria for project success. For crewed missions, this includes both safety and mission accomplishment measures that stakeholders can evaluate.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'List all technical performance parameters as success criteria since they are measurable and verifiable.',
          termIndices: [
            t('Success Criteria'),
            t('Measure of Effectiveness (MOE)')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Misaligned focus. Technical performance measures are important but MOEs should reflect stakeholder mission success criteria, not just technical metrics. Success must be defined from the stakeholder perspective of mission accomplishment.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Use generic space mission success criteria from agency standards to save development time.',
          termIndices: [
            t('Success Criteria')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Inappropriate generalization. Success criteria must be specific to your mission objectives and stakeholder expectations. Generic criteria will not capture the unique aspects of crewed transport operations and stakeholder needs.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Pre-Phase A',
      title: 'Establishing Traceability',
      narrative: 'As you document stakeholder expectations and MOEs, the program office requests clear traceability to source documents and strategic plans. You must ensure bidirectional traceability is established before moving forward. Your requirements management system needs to capture these relationships effectively.',
      termHighlights: [
        t('Bidirectional Traceability'),
        t('Requirement'),
        t('Stakeholder Expectations')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Implement bidirectional traceability linking each expectation to its source and establishing forward links for future requirements allocation using a requirements management tool.',
          termIndices: [
            t('Bidirectional Traceability'),
            t('Requirement'),
            t('Stakeholder Expectations')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Proper implementation. Bidirectional traceability ensures expectations trace back to sources and forward to derived requirements. The handbook emphasizes using requirements management tools for this critical capability.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Create a simple spreadsheet linking expectations to source documents since full traceability tools are complex and time-consuming.',
          termIndices: [
            t('Bidirectional Traceability'),
            t('Stakeholder Expectations')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Inadequate for complex missions. While spreadsheets work for simple projects, crewed transport missions require robust traceability management that spreadsheets cannot effectively maintain as the design evolves.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Document traceability during requirement reviews since early traceability establishment is premature.',
          termIndices: [
            t('Bidirectional Traceability')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Poor timing. The handbook requires traceability establishment during expectation definition, not delayed until reviews. Late traceability implementation leads to gaps and costly reconstruction of requirement relationships.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Pre-Phase A',
      title: 'Stakeholder Commitment Process',
      narrative: 'Your expectations documentation is complete with MOEs and traceability established. Now you need stakeholder commitment before baselining. The crew office, mission directorate, and safety panel all need to formally agree. You must decide how to obtain these critical commitments.',
      termHighlights: [
        t('Approval'),
        t('Stakeholder'),
        t('Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a formal concept review presenting stakeholder expectations, MOEs, and ConOps to obtain documented commitments from all stakeholders before baselining.',
          termIndices: [
            t('Approval'),
            t('Stakeholder'),
            t('Concept of Operations (ConOps) (Concept Documentation)'),
            t('Measure of Effectiveness (MOE)')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct procedure. The handbook specifies conducting concept reviews to present expectations, MOEs, and ConOps for stakeholder agreement. This formal process ensures commitment from both stakeholders and technical team.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Circulate the documentation for email approval to expedite the commitment process.',
          termIndices: [
            t('Approval'),
            t('Process')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Weak commitment process. Email approval lacks the discussion and refinement opportunities that formal reviews provide. Complex crewed missions benefit from interactive review sessions to achieve true understanding and commitment.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Proceed with baselining since stakeholder involvement in development implies their agreement.',
          termIndices: [
            t('Baseline'),
            t('Stakeholder')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Assumption without verification. The handbook requires explicit stakeholder commitments before baselining. Involvement does not equal agreement, and lack of formal commitment will create problems during later reviews.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Pre-Phase A',
      title: 'Baseline Establishment',
      narrative: 'Stakeholder commitments are secured and you are ready to establish the baseline. This represents a critical control point where any future changes will require formal approval processes. You must ensure the baseline is properly established with appropriate change control mechanisms in place.',
      termHighlights: [
        t('Baseline'),
        t('Approval'),
        t('Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Baseline the agreed stakeholder expectations, MOEs, and ConOps with formal change control requiring both stakeholder and technical team approval for modifications.',
          termIndices: [
            t('Baseline'),
            t('Approval'),
            t('Stakeholder Expectations'),
            t('Technical Team')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Proper baseline establishment. The handbook requires baselining agreed expectations with formal change control involving both stakeholders and technical team. This ensures configuration management of foundational mission elements.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Establish the baseline with technical team change authority to maintain development flexibility.',
          termIndices: [
            t('Baseline'),
            t('Technical Team')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Insufficient change control. Stakeholder expectations baseline requires stakeholder involvement in changes, not just technical team authority. This could lead to scope creep or misaligned expectations during development.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Keep the documentation as working drafts to allow easy updates as understanding improves.',
          termIndices: [
            t('Baseline')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'No configuration control. The handbook requires formal baselining after stakeholder commitment. Working drafts provide no change control and will lead to uncontrolled modifications undermining the commitment process.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully navigated the stakeholder expectations definition process, developing a comprehensive ConOps, establishing proper MOEs with bidirectional traceability, and securing formal stakeholder commitments before baseline establishment. Your systematic approach provides a solid foundation for requirements development.',
    failureNarrative: 'Your approach missed critical elements of the stakeholder expectations process. Insufficient ConOps development, weak traceability, or inadequate stakeholder commitment will create problems during requirements definition and downstream development phases.',
    successThreshold: 60,
  },
}
