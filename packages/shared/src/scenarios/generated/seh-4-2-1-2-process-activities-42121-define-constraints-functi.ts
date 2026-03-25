import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh4212ProcessActivities42121DefineConstraintsFuncti: ScenarioTemplate = {
  meta: {
    id: 'seh-4-2-1-2-process-activities-42121-define-constraints-functi',
    title: 'Defining the Design Boundary',
    subtitle: 'Establish constraints and functional expectations for CubeSat constellation',
    difficulty: 'advanced',
    categories: ['requirements', 'design'],
    termIndices: [
      t('Technical Requirements Definition Process'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Requirement'),
      t('Technical Requirements'),
      t('Derived Requirements'),
      t('System'),
      t('Functional Analysis'),
      t('Goal'),
      t('Objective'),
      t('Need'),
      t('Stakeholder Expectations'),
      t('Bidirectional Traceability'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase A',
      title: 'Identifying Design Constraints',
      narrative:
        'As Mission Assurance Engineer for the new CubeSat constellation, you must establish the design boundary. The program office hands you a list of constraints: must use existing ground stations, launch on rideshare missions only, and maintain formation flying capability. Some team members want to treat these as negotiable requirements during trade studies.',
      termHighlights: [t('Technical Requirements Definition Process'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Classify these as non-negotiable design constraints that establish the boundary and cannot be changed through trade studies, then identify additional constraints from mission classification and institutional requirements.',
          termIndices: [t('Technical Requirements Definition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. SEH 4.2.1.2.1 specifies that constraints typically cannot be changed based on trade-off analyses and help establish the design boundary. These define the problem scope and limit solution space.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Document them as high-priority technical requirements that can be traded against performance if necessary during design optimization.',
          termIndices: [t('Technical Requirements'), t('Requirement')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Incorrect approach. True constraints define the design boundary and are not subject to trade studies. Treating constraints as tradeable requirements will lead to infeasible designs and rework.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Defer constraint identification until after functional requirements are defined to avoid limiting creative design solutions.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates the SE process. Constraints must be identified first to establish the design boundary. Without this boundary, functional analysis will explore infeasible solution spaces.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'Defining External Interfaces',
      narrative:
        'You need to establish interfaces with existing ground stations, launch vehicle integration systems, and mission control software. The payload team suggests defining these interfaces later during detailed design. The systems integration team wants to lock down every interface detail now before any subsystem work begins.',
      termHighlights: [t('System'), t('Technical Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Identify external and enabling systems with which the constellation will interact, then establish physical and functional interface requirements at the appropriate level of detail for current phase.',
          termIndices: [t('System'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. SEH 4.2.1.2.1 requires identifying external systems and establishing interface requirements early to define the design boundary, but at appropriate detail for the current phase.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Document high-level interface concepts now but defer detailed interface requirements until subsystem designs mature to avoid premature specification.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky approach. While premature detail is problematic, interface identification is required to establish the design boundary. Missing interfaces will cause integration problems later.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Define complete detailed interface specifications for all external systems to avoid any integration issues during implementation.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This creates excessive early commitment and violates progressive elaboration principles. Overly detailed interface specs at this phase will require costly changes as designs evolve.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase A',
      title: 'Functional Expectations from ConOps',
      narrative:
        'The ConOps describes three operational modes: science data collection, formation maintenance, and emergency safe mode. Each mode has different functional behaviors and use cases. You must transform these operational concepts into functional expectations that will drive requirements development.',
      termHighlights: [t('Concept of Operations (ConOps) (Concept Documentation)'), t('Functional Analysis')],
      decisions: [
        {
          id: 'a',
          text: 'Define functional and behavioral expectations for each operational mode described in the ConOps, ensuring coverage of all anticipated use cases and operational scenarios.',
          termIndices: [t('Concept of Operations (ConOps) (Concept Documentation)'), t('Functional Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. SEH 4.2.1.2.1 requires defining functional and behavioral expectations based on the range of anticipated uses identified in the ConOps. This establishes what functions need to be performed.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus primarily on the science data collection mode since that is the primary mission, and address other modes as secondary requirements.',
          termIndices: [t('Concept of Operations (ConOps) (Concept Documentation)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Incomplete approach. All operational modes in the ConOps represent system functions that must be captured as expectations. Ignoring formation maintenance and safe mode will create requirements gaps.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Extract specific technical parameters from the ConOps and convert them directly into performance requirements without intermediate functional analysis.',
          termIndices: [t('Functional Analysis')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This skips essential functional analysis. The ConOps describes operations, not requirements. You must first establish functional expectations, then derive performance requirements through proper decomposition.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase A',
      title: 'From Expectations to Requirements',
      narrative:
        'You have established constraints, interfaces, and functional expectations. The mission director says "The constellation shall provide global coverage every 2 hours." The payload team wants "maximum resolution imaging capability." The operations team needs "autonomous fault detection." You must convert these stakeholder expectations into proper technical requirements.',
      termHighlights: [t('Stakeholder Expectations'), t('Technical Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Transform stakeholder expectations into quantitative technical requirements by defining specific performance criteria, verification methods, and measurable acceptance criteria for each function.',
          termIndices: [t('Stakeholder Expectations'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. SEH 4.2.1.2.2 requires transforming expectations into requirements with quantitative performance measures. Each function needs specific, measurable criteria to guide design.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Document the stakeholder statements as requirements and let the design team interpret what "maximum resolution" and "autonomous detection" mean during implementation.',
          termIndices: [t('Stakeholder Expectations')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Poor requirements practice. Vague statements like "maximum resolution" are not verifiable requirements. This pushes critical decisions to implementers and creates verification challenges.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Focus on capturing all stakeholder expectations first, then worry about quantifying them during detailed design when more information is available.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This delays essential requirements definition work. Without quantitative requirements, architecture decisions will be made without proper criteria, leading to designs that may not meet stakeholder needs.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase A',
      title: 'Requirements Traceability',
      narrative:
        'You now have a set of technical requirements derived from stakeholder expectations. The verification team asks how each requirement traces back to mission objectives. The design team wants to know which stakeholder expectation drives each requirement. You must establish proper traceability relationships.',
      termHighlights: [t('Bidirectional Traceability'), t('Derived Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Establish bidirectional traceability links between mission objectives, stakeholder expectations, and technical requirements, including rationale for each derived requirement.',
          termIndices: [t('Bidirectional Traceability'), t('Derived Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Proper traceability ensures every requirement has justification and enables impact analysis when changes occur. This is essential for requirements management and verification planning.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Create a requirements database with parent-child relationships but defer detailed traceability documentation until requirements baseline.',
          termIndices: [t('Derived Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Inadequate approach. Traceability should be established as requirements are developed, not afterward. Missing traceability makes it difficult to assess requirement validity and manage changes.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Assume the design team understands which requirements come from which expectations and focus on getting requirements written quickly.',
          termIndices: [t('Bidirectional Traceability')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This ignores fundamental requirements management practice. Without traceability, you cannot validate requirements against stakeholder needs or assess change impacts effectively.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully established the design boundary by identifying constraints, external interfaces, and functional expectations from the ConOps. Your systematic approach to the Technical Requirements Definition Process created a solid foundation for the CubeSat constellation design.',
    failureNarrative: 'Your approach to defining constraints and functional expectations introduced significant risk to the project. Proper boundary definition and requirements traceability are essential for successful system development.',
    successThreshold: 60,
  },
}
