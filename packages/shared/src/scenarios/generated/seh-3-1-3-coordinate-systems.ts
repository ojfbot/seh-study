import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh313CoordinateSystems: ScenarioTemplate = {
  meta: {
    id: 'seh-3-1-3-coordinate-systems',
    title: 'Coordinate System Interface Definition',
    subtitle: 'Define reference frames for docking interface requirements',
    difficulty: 'intermediate',
    categories: ['requirements', 'design'],
    termIndices: [
      t('Requirement'),
      t('Interface Management Process'),
      t('System'),
      t('Engineering Unit'),
      t('Requirements Allocation Sheet'),
      t('Technical Requirements'),
      t('Technical Requirements Definition Process'),
      t('Specification'),
      t('System Definition Review'),
      t('Critical Design Review'),
      t('Product Form'),
      t('Mission'),
    ],
    estimatedMinutes: 15,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Coordinate System Definition',
      title: 'Docking Port Reference Frame',
      narrative:
        'You are defining interface requirements for the resupply vehicle\'s docking system with the space station. ' +
        'The docking mechanism requires precise coordinate system definitions to ensure proper alignment tolerances. ' +
        'Your team must establish the primary reference frame for all mechanical interface requirements on both sides of the docking plane.',
      termHighlights: [t('Requirement'), t('Interface Management Process'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Use the vehicle\'s center of mass as the origin with axes aligned to the vehicle\'s principal inertial axes.',
          termIndices: [t('Requirement'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Using the vehicle center of mass as the coordinate origin makes interface requirements unnecessarily complex. ' +
            'Docking interfaces require local coordinate systems centered at the physical interface plane itself. ' +
            'This approach would require constant coordinate transformations and introduce potential errors in critical alignment requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Define a local coordinate system with origin at the docking interface centerline, Z-axis normal to the interface plane.',
          termIndices: [t('Interface Management Process'), t('Technical Requirements Definition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Interface coordinate systems should be centered at the physical interface with intuitive axis definitions. ' +
            'The Z-axis normal to the docking plane provides a clear reference for approach and contact requirements. ' +
            'This local system simplifies tolerance specifications and makes verification more straightforward during system integration.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Reference all requirements to the International Space Station\'s coordinate system to maintain consistency.',
          termIndices: [t('System'), t('Requirement')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While consistency is important, using only the station\'s coordinate system creates complexity for vehicle-side requirements. ' +
            'Interface definitions need coordinate systems on both sides of the interface plane. ' +
            'This approach is acceptable but not optimal since it makes vehicle design and testing more difficult by requiring constant coordinate transformations.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Measurement Units',
      title: 'Engineering Units and Tolerances',
      narrative:
        'With the coordinate system defined, you must specify the measurement units and tolerances for all interface parameters. ' +
        'The docking mechanism has structural loads, electrical connections, and fluid transfer lines with different precision requirements. ' +
        'Your specification must clearly define units and acceptable tolerances for each interface element to support both design and verification activities.',
      termHighlights: [t('Engineering Unit'), t('Specification'), t('Technical Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Use SI units throughout with millimeter precision for all mechanical tolerances regardless of criticality.',
          termIndices: [t('Engineering Unit'), t('Specification')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While SI units provide consistency, applying millimeter precision uniformly is not optimal. ' +
            'Different interface elements have varying criticality levels requiring different tolerance specifications. ' +
            'Structural bolt patterns may need tighter tolerances than cable routing guides. This approach is acceptable but may drive unnecessary manufacturing costs.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 2 },
        },
        {
          id: 'b',
          text: 'Define measurement units and tolerances based on functional criticality with conversion tables between SI and Imperial systems.',
          termIndices: [t('Technical Requirements Definition Process'), t('Requirements Allocation Sheet')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Tailoring precision requirements to functional criticality optimizes both performance and cost. ' +
            'Critical alignment features get tighter tolerances while non-critical elements allow broader ranges. ' +
            'Providing conversion tables supports international collaboration and reduces errors during manufacturing and verification phases.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Allow each subsystem team to choose their preferred units and tolerances based on heritage hardware.',
          termIndices: [t('System'), t('Interface Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Allowing inconsistent units and tolerances across subsystems creates integration risks and verification complexity. ' +
            'Interface requirements must be consistent to ensure proper fit and function during assembly. ' +
            'This approach would lead to coordination errors, especially during critical integration activities at the system level.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Interface Documentation',
      title: 'Requirements Allocation',
      narrative:
        'You need to document how coordinate system definitions and measurement requirements are allocated across the interface. ' +
        'The docking system spans multiple subsystems including structures, guidance navigation and control, and electrical power. ' +
        'Your allocation must clearly specify which side of the interface is responsible for each coordinate system requirement during different mission phases.',
      termHighlights: [t('Requirements Allocation Sheet'), t('Technical Requirements'), t('Interface Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Create separate coordinate system definitions for each subsystem team to maintain their design autonomy.',
          termIndices: [t('System'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Separate coordinate systems for each subsystem creates integration complexity and potential misalignment at interfaces. ' +
            'Interface requirements must use consistent coordinate systems across all subsystems to ensure proper integration. ' +
            'This approach would likely result in costly rework during system integration and testing phases.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 4, budget: 3 },
        },
        {
          id: 'b',
          text: 'Develop a requirements allocation sheet mapping coordinate system responsibility by mission phase and interface element.',
          termIndices: [t('Requirements Allocation Sheet'), t('Technical Requirements Definition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A requirements allocation sheet provides clear traceability between coordinate system definitions and responsible organizations. ' +
            'Mapping responsibility by mission phase ensures proper handoffs during approach, docking, and separation operations. ' +
            'This systematic approach prevents gaps in interface definition and supports effective verification planning.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Assign all coordinate system requirements to the space station side since it is the target vehicle.',
          termIndices: [t('Interface Management Process'), t('Requirement')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this provides clear responsibility assignment, it may not be optimal for all interface elements. ' +
            'Some coordinate system requirements are better allocated to the active vehicle for controllability. ' +
            'This approach is acceptable but may complicate verification activities when the responsible system cannot directly control the measured parameter.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Design Review',
      title: 'Critical Design Review Preparation',
      narrative:
        'Your coordinate system and interface requirements documentation is being prepared for the upcoming Critical Design Review. ' +
        'The review board will evaluate whether your interface definitions are mature enough to support final design and manufacturing. ' +
        'You must ensure that all coordinate system requirements can be verified using available test equipment and procedures.',
      termHighlights: [t('Critical Design Review'), t('Product Form'), t('System Definition Review')],
      decisions: [
        {
          id: 'a',
          text: 'Present only the mathematical coordinate system definitions since detailed verification procedures are not needed until later.',
          termIndices: [t('Critical Design Review'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Critical Design Reviews require demonstration that requirements can be verified with available methods and equipment. ' +
            'Presenting only mathematical definitions without verification approaches indicates insufficient design maturity. ' +
            'The review board needs confidence that interface requirements can be validated during integration and test phases.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 3, budget: 1 },
        },
        {
          id: 'b',
          text: 'Include verification methods, test equipment specifications, and measurement procedures for each coordinate system requirement.',
          termIndices: [t('Critical Design Review'), t('Technical Requirements Definition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A mature Critical Design Review package demonstrates not only what requirements exist but how they will be verified. ' +
            'Including test equipment specifications and measurement procedures shows that the design is ready for implementation. ' +
            'This comprehensive approach gives the review board confidence in the technical approach and schedule feasibility.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus the presentation on heritage coordinate systems from previous missions to demonstrate low risk.',
          termIndices: [t('Product Form'), t('Mission')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While heritage approaches reduce technical risk, the review board needs to see how coordinate systems apply to this specific mission. ' +
            'Each mission has unique interface requirements that may differ from previous designs. ' +
            'This approach is acceptable for demonstrating low risk but may not fully address the specific interface requirements of the current system.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Requirements Validation',
      title: 'Interface Requirements Review',
      narrative:
        'Following the design review, your interface coordinate system requirements are being validated against mission objectives. ' +
        'The systems engineering team has identified potential conflicts between structural load requirements and electrical connector positioning. ' +
        'You must resolve these interface requirement conflicts while maintaining compliance with both vehicle and station interface control documents.',
      termHighlights: [t('System'), t('Technical Requirements'), t('Interface Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Modify the coordinate system definitions to eliminate the conflicts even if it requires changes to other subsystem interfaces.',
          termIndices: [t('Technical Requirements Definition Process'), t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While resolving conflicts is important, changing coordinate system definitions after design review can cascade through multiple subsystems. ' +
            'This approach may solve the immediate problem but could create new interface issues elsewhere. ' +
            'The impact on schedule and cost could be significant if other teams must redesign their interfaces to accommodate the coordinate system changes.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 3, budget: 2 },
        },
        {
          id: 'b',
          text: 'Convene an interface control working group to develop coordinate system modifications that minimize impacts across all affected subsystems.',
          termIndices: [t('Interface Management Process'), t('Requirements Allocation Sheet')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Interface conflicts require systematic resolution involving all affected parties. ' +
            'A working group approach ensures that coordinate system changes are evaluated for system-wide impacts before implementation. ' +
            'This collaborative method typically produces solutions that balance technical requirements with schedule and cost constraints across the entire system.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Accept the interface conflicts as acceptable risk since both requirements are within their individual tolerance bands.',
          termIndices: [t('Requirement'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Interface conflicts cannot be accepted as acceptable risk even if individual requirements are within tolerance. ' +
            'Conflicting requirements at interfaces often manifest as integration problems during assembly or operational issues during mission execution. ' +
            'This approach avoids immediate schedule impact but creates significant risk of costly problems during later integration phases.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully defined comprehensive coordinate systems and interface requirements for the docking mechanism. Your systematic approach to coordinate system definition, measurement units, and requirements allocation provides a solid foundation for system integration. The interface documentation will support effective verification and reduce integration risks.',
    failureNarrative: 'Your coordinate system definitions had significant gaps that could lead to integration problems and verification difficulties. Interface requirements need systematic definition of reference frames, appropriate measurement precision, and clear allocation of responsibilities. Consider how coordinate system choices impact manufacturing, integration, and operational phases.',
    successThreshold: 60,
  },
}
