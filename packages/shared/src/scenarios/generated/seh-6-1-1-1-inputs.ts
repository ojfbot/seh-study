import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6111Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-6-1-1-1-inputs',
    title: 'Technical Planning Input Integration',
    subtitle: 'Coordinate diverse input sources for lunar gateway module planning',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'lifecycle', 'requirements'],
    termIndices: [
      t('Technical Planning Process'),
      t('Project Plan'),
      t('Programmatic Requirements'),
      t('Project Requirements'),
      t('Technical Requirements'),
      t('Configuration Management Process'),
      t('Data Management'),
      t('Baseline'),
      t('Decision Analysis Process'),
      t('Technical Assessment Process'),
      t('Technical Risk Management Process'),
      t('Systems Engineering Management Plan (SEMP)'),
      t('Process'),
      t('Product'),
      t('Program'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Initial Planning Setup',
      title: 'Gathering Project Requirements',
      narrative:
        'You are beginning technical planning for the lunar gateway habitat module. The project manager has provided the initial project plan with top-level requirements and budget constraints. However, you need to identify all required inputs to establish a comprehensive technical planning framework. Multiple stakeholders are requesting immediate schedules, but you must ensure proper input collection first.',
      termHighlights: [t('Technical Planning Process'), t('Project Plan'), t('Project Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Start with the project plan requirements and resource constraints, then systematically collect inputs from other technical processes.',
          termIndices: [t('Project Plan'), t('Project Requirements'), t('Programmatic Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The project plan provides foundational requirements and constraints that frame the technical effort. Starting with these programmatic requirements ensures your technical planning aligns with overall project objectives before incorporating inputs from other technical processes.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'b',
          text: 'Begin creating technical schedules immediately using available information to meet stakeholder demands.',
          termIndices: [t('Technical Planning Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Premature planning without proper inputs leads to incomplete technical plans. The technical planning process requires comprehensive input collection including agreements, policies, and prior baselines before generating accurate schedules and cost estimates.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -3, budget: -2 },
        },
        {
          id: 'c',
          text: 'Wait for all technical processes to complete their outputs before starting any planning activities.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Complete dependency waiting is unnecessarily restrictive. Technical planning should begin with available foundational inputs like project requirements while incorporating outputs from other processes as they become available throughout the lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -4, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Baseline Integration',
      title: 'Prior Phase Documentation Review',
      narrative:
        'You have the project requirements and constraints established. Now you must integrate prior phase technical plans and baselines from the previous gateway module development effort. The configuration management process has provided several baseline versions, but some documentation conflicts exist. You need to determine the appropriate approach for incorporating this historical technical data.',
      termHighlights: [t('Baseline'), t('Configuration Management Process'), t('Data Management')],
      decisions: [
        {
          id: 'a',
          text: 'Select the most recent baseline regardless of approval status to ensure latest information is used.',
          termIndices: [t('Baseline')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Using unapproved baselines introduces uncontrolled changes into technical planning. Proper baseline management requires using formally approved and controlled documents to ensure technical planning builds on verified foundations.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Use the latest baselined technical plans from the configuration management process and identify any gaps.',
          termIndices: [t('Configuration Management Process'), t('Baseline'), t('Data Management')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Configuration management provides controlled baselines that serve as reliable foundations for technical planning. Using the latest approved baseline ensures consistency while gap identification allows for proper planning updates in the current phase.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Ignore prior phase documentation and start fresh to avoid any legacy issues.',
          termIndices: [t('Technical Planning Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Ignoring prior phase baselines wastes valuable technical heritage and increases development risk. Technical planning should leverage approved prior work while updating for current phase requirements and lessons learned.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Policy Integration',
      title: 'Standards and Process Compliance',
      narrative:
        'With baseline documentation integrated, you must now incorporate applicable policies, procedures, standards, and organizational processes into the technical planning. The gateway program has specific NASA standards, international partner agreements, and safety requirements that must be reflected in your technical approach. Multiple documents contain overlapping and sometimes conflicting guidance.',
      termHighlights: [t('Program'), t('Technical Requirements'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Focus only on NASA internal policies to simplify compliance and avoid international coordination complexity.',
          termIndices: [t('Program')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Gateway is an international program requiring compliance with partner agreements and standards. Ignoring international requirements creates technical and programmatic risks that could jeopardize mission success and partnership relationships.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Create a comprehensive compliance matrix mapping all applicable policies, standards, and agreements to technical requirements.',
          termIndices: [t('Technical Requirements'), t('Program'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A compliance matrix ensures all applicable policies, procedures, standards, and organizational processes are systematically addressed in the technical approach. This provides traceability and ensures the technical planning satisfies both internal and external requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Apply policies and standards selectively based on their perceived importance to reduce planning complexity.',
          termIndices: [t('Technical Planning Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Selective compliance creates gaps that can lead to technical failures, safety issues, or program violations. All applicable policies, procedures, and standards must be systematically addressed in technical planning to ensure comprehensive compliance.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Cross-Process Integration',
      title: 'Technical Assessment Feedback',
      narrative:
        'During your planning activities, the technical assessment process has identified several risks and the technical risk management process has flagged potential replanning needs. Additionally, the decision analysis process has recommended alternative approaches for certain subsystems. You must determine how to incorporate these cross-cutting inputs into your evolving technical plans.',
      termHighlights: [t('Technical Assessment Process'), t('Technical Risk Management Process'), t('Decision Analysis Process')],
      decisions: [
        {
          id: 'a',
          text: 'Complete the initial technical planning first, then address assessment and risk management inputs in a separate revision cycle.',
          termIndices: [t('Technical Planning Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this approach ensures plan completion, it misses the opportunity for early integration of critical risk and assessment inputs. Technical planning should iteratively incorporate feedback from other technical processes to avoid major replanning efforts.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Immediately incorporate assessment findings and risk management recommendations into current planning activities.',
          termIndices: [t('Technical Assessment Process'), t('Technical Risk Management Process'), t('Decision Analysis Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Continuous integration of inputs from technical assessment, risk management, and decision analysis processes ensures technical planning remains current and addresses identified issues early. This iterative approach reflects the interconnected nature of technical management processes.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus only on decision analysis recommendations since they provide specific alternative approaches.',
          termIndices: [t('Decision Analysis Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Focusing on only one process input ignores critical risk management and assessment findings that could impact technical success. All technical process outputs should be systematically considered in technical planning for comprehensive integration.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'SEMP Development',
      title: 'Technical Plan Documentation',
      narrative:
        'With all inputs integrated, you must now prepare the Systems Engineering Management Plan and other technical plans. The SEMP must reflect the comprehensive input integration you have conducted and provide clear technical work directives for the project teams. Multiple stakeholders need different levels of technical detail for their specific responsibilities.',
      termHighlights: [t('Systems Engineering Management Plan (SEMP)'), t('Technical Planning Process'), t('Product')],
      decisions: [
        {
          id: 'a',
          text: 'Create a single comprehensive SEMP document containing all technical planning details for every stakeholder.',
          termIndices: [t('Systems Engineering Management Plan (SEMP)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While comprehensive, a single massive document may be difficult for stakeholders to navigate and maintain. Technical planning should produce appropriately tailored plans that serve different stakeholder needs while maintaining traceability to the master SEMP.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Develop a hierarchical SEMP with supporting detailed technical plans tailored to specific process and team needs.',
          termIndices: [t('Systems Engineering Management Plan (SEMP)'), t('Technical Planning Process'), t('Product')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A hierarchical approach with a master SEMP and supporting detailed plans provides appropriate information to different stakeholders while maintaining overall integration. This structure supports effective technical work directives and captures all planning work products appropriately.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Produce separate independent plans for each technical process without an integrating SEMP.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Independent plans without integration lose the systematic coordination that technical planning provides. The SEMP serves as the integrating document that ensures all technical processes work coherently toward common objectives.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully integrated diverse inputs into comprehensive technical planning for the lunar gateway module. Your systematic approach to collecting project requirements, incorporating baseline documentation, ensuring compliance with applicable policies and standards, integrating cross-process feedback, and developing hierarchical technical plans demonstrates proper technical planning process execution.',
    failureNarrative:
      'Your technical planning approach missed critical input integration opportunities. Effective technical planning requires systematic collection and incorporation of inputs from project management, other technical processes, and organizational requirements to ensure comprehensive and executable technical plans.',
    successThreshold: 60,
  },
}
