import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh4113Outputs: ScenarioTemplate = {
  meta: {
    id: 'seh-4-1-1-3-outputs',
    title: 'CubeSat Constellation Stakeholder Outputs',
    subtitle: 'Document critical outputs from stakeholder expectations capture',
    difficulty: 'beginner',
    categories: ['requirements', 'risk', 'project-mgmt'],
    termIndices: [
      t('Stakeholder Expectations'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Enabling Products'),
      t('Measure of Effectiveness (MOE)'),
      t('Technical Requirements Definition Process'),
      t('Product Breakdown Structure'),
      t('End Product'),
      t('Goal'),
      t('Risk Assessment'),
      t('Human Systems Integration'),
      t('Requirement'),
      t('Process')
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'Validating Stakeholder Expectations',
      narrative: 'Your CubeSat constellation project has gathered input from science teams, operations centers, and ground stations. Now you need to formalize these inputs into validated outputs. The project manager asks what deliverable will capture the agreed-upon expectations for this mission.',
      termHighlights: [
        t('Stakeholder Expectations'),
        t('Goal')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Create validated stakeholder expectations document with needs, goals, objectives, constraints and assumptions clearly identified.',
          termIndices: [
            t('Stakeholder Expectations'),
            t('Goal')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Validated stakeholder expectations are a primary output that captures agreed-upon needs, goals, objectives with constraints and assumptions. This forms the foundation for all subsequent technical work.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Skip formal documentation and move directly to technical requirements since stakeholders have already provided input.',
          termIndices: [
            t('Technical Requirements Definition Process'),
            t('Requirement')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Without validated stakeholder expectations, you risk building requirements on unconfirmed assumptions. This output ensures all parties agree on what the system should achieve before defining how.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Document only the science requirements since those are the most critical for mission success.',
          termIndices: [
            t('Stakeholder Expectations')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While science requirements are important, validated stakeholder expectations must include all stakeholders - operations, ground systems, launch providers, etc. Missing stakeholders leads to surprises later.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Pre-Phase A',
      title: 'Developing Operational Concepts',
      narrative: 'With stakeholder expectations validated, you need to describe how the constellation will actually operate. The operations team wants to understand the day-to-day activities, while the science team needs to see how data flows from satellites to researchers.',
      termHighlights: [
        t('Concept of Operations (ConOps) (Concept Documentation)')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop a comprehensive Concept of Operations describing system operation during all life cycle phases from an operational perspective.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The ConOps describes how the system will be operated during life cycle phases to meet stakeholder expectations. It provides operational perspective and facilitates understanding of system goals and objectives.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Create detailed technical specifications showing satellite subsystem interfaces and protocols.',
          termIndices: [
            t('Technical Requirements Definition Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Technical specifications are not ConOps outputs. The ConOps should describe operations from the user perspective, not technical implementation details. Save technical specs for requirements definition.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Write a brief operational overview focusing only on normal operations during the primary mission phase.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but limited. The ConOps should cover all life cycle phases, including deployment, commissioning, operations, and disposal. Focusing only on normal operations misses critical operational scenarios.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Pre-Phase A',
      title: 'Identifying Support Requirements',
      narrative: 'Your constellation will need ground stations, mission operations centers, and specialized test equipment. The program manager asks you to identify what support infrastructure and products will be needed beyond the satellites themselves.',
      termHighlights: [
        t('Enabling Products'),
        t('End Product')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Define enabling product support strategies covering fabrication, test, deployment, operations sustainment, and disposal provisions.',
          termIndices: [
            t('Enabling Products'),
            t('End Product')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Enabling product support strategies identify special provisions needed for the entire product lifecycle and any enabling products that must be developed to support the end product.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus only on the satellite hardware since that is the primary deliverable for this project.',
          termIndices: [
            t('End Product')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. The end product requires enabling products for support. Ignoring ground systems, test equipment, operations centers, and disposal plans will cause major problems during implementation.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -3 },
        },
        {
          id: 'c',
          text: 'List existing NASA ground stations and operations centers that might be used.',
          termIndices: [
            t('Enabling Products')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While identifying existing assets is useful, you must also determine what new enabling products need development and what special provisions are required for your specific mission.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Pre-Phase A',
      title: 'Establishing Success Measures',
      narrative: 'The project needs clear criteria to determine mission success. Stakeholders want to know how you will measure whether the constellation meets their expectations. The risk manager emphasizes that these measures will drive design decisions and acceptance criteria.',
      termHighlights: [
        t('Measure of Effectiveness (MOE)'),
        t('Risk Assessment')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop Measures of Effectiveness based on stakeholder expectations that represent criteria critical to mission success.',
          termIndices: [
            t('Measure of Effectiveness (MOE)'),
            t('Stakeholder Expectations')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. MOEs represent expectations critical to system success. Failure to satisfy these measures will cause stakeholders to deem the system unacceptable. They must be based on validated stakeholder expectations.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Use standard satellite performance metrics like power generation, data rate, and orbital accuracy.',
          termIndices: [
            t('Measure of Effectiveness (MOE)')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but may miss the point. While technical metrics are important, MOEs must reflect what stakeholders actually care about - science data quality, coverage, availability. Standard metrics may not capture mission-specific success criteria.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until design is more mature before defining success measures since requirements may change.',
          termIndices: [
            t('Risk Assessment')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. MOEs must be established early based on stakeholder expectations to guide design decisions. Waiting creates risk of building a system that meets technical specs but fails stakeholder expectations.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Pre-Phase A',
      title: 'Human-System Integration Planning',
      narrative: 'Your constellation will require human operators for mission planning, anomaly resolution, and data analysis. The human factors engineer asks how you will define the roles and responsibilities of humans in the system to ensure safe and effective operations.',
      termHighlights: [
        t('Human Systems Integration'),
        t('Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document human/systems function allocation describing interaction of hardware/software with personnel and supporting infrastructure.',
          termIndices: [
            t('Human Systems Integration')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Human/systems function allocation describes how humans interact with the system including assembly, operations, maintenance, and logistics. This is critical for missions where human operators are essential system components.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Design for full automation to minimize human involvement and reduce operational complexity.',
          termIndices: [
            t('Human Systems Integration')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but may create other risks. While automation reduces some operational complexity, complete automation may not be feasible or desirable. Humans provide flexibility for anomaly response and mission adaptation that pure automation cannot.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 2 },
        },
        {
          id: 'c',
          text: 'Address human factors during operations phase since the satellites will be autonomous.',
          termIndices: [
            t('Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Human factors must be considered early in design. Even autonomous systems require human operators for deployment, monitoring, anomaly response, and mission planning. Deferring this analysis creates safety and operational risks.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully identified and documented the key outputs from stakeholder expectations capture. Your validated expectations, ConOps, enabling product strategies, MOEs, and human-system integration plan provide a solid foundation for technical requirements definition.',
    failureNarrative: 'Your stakeholder expectations outputs were incomplete or poorly structured. Missing or inadequate outputs at this stage will create confusion and rework during requirements definition, potentially compromising mission success.',
    successThreshold: 60,
  },
}
