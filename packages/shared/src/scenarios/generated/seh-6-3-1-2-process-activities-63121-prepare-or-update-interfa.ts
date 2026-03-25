import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6312ProcessActivities63121PrepareOrUpdateInterfa: ScenarioTemplate = {
  meta: {
    id: 'seh-6-3-1-2-process-activities-63121-prepare-or-update-interfa',
    title: 'Establishing Interface Management for ISS Science Module',
    subtitle: 'Set up interface control procedures between NASA and contractor teams',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'configuration'],
    termIndices: [
      t('Interface Management Process'),
      t('Contractor'),
      t('Process'),
      t('Product'),
      t('Project'),
      t('Technical Team'),
      t('System Structure'),
      t('Analysis'),
      t('Contract'),
      t('End Product'),
      t('Requirement'),
      t('System'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Planning',
      title: 'Interface Management Strategy Development',
      narrative:
        'As Configuration Manager for the new ISS science experiment module, you must establish interface management procedures between NASA and three contractor teams. The project involves complex physical and data interfaces between the module, ISS power systems, and ground control networks. Your first step is developing the overall interface management strategy.',
      termHighlights: [t('Interface Management Process'), t('Contractor'), t('Project')],
      decisions: [
        {
          id: 'a',
          text: 'Create a comprehensive interface management plan that defines responsibilities, control processes, and change procedures for all internal and external interfaces.',
          termIndices: [t('Interface Management Process'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A comprehensive interface management plan establishes the foundation for controlling product development across multiple parties. This plan defines who manages what interfaces, how changes are controlled, and what processes will maintain compliance between interfacing products.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Focus only on external interfaces between contractors since internal NASA interfaces are handled by existing procedures.',
          termIndices: [t('Contractor')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incomplete approach. Interface management must address both internal and external interfaces comprehensively. Neglecting internal interfaces can lead to integration problems and technical risks, especially when multiple technical teams are involved in the system structure.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Delegate interface management planning to each contractor team to handle their own interfaces independently.',
          termIndices: [t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach lacks central coordination and control. Interface management requires unified oversight to ensure compatibility between all interfacing systems and products. Independent contractor management leads to inconsistent practices and integration failures.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Analysis',
      title: 'Interface Identification and Documentation',
      narrative:
        'You are now analyzing the Concept of Operations to identify all interfaces that need documentation and control. The analysis reveals power interfaces, data communication links, physical mounting connections, and human operator interfaces. You must determine the best approach to capture and document these interfaces systematically.',
      termHighlights: [t('Analysis'), t('System Structure'), t('Requirement')],
      decisions: [
        {
          id: 'a',
          text: 'Document only the most critical interfaces to save time and focus resources on high-risk areas.',
          termIndices: [t('Analysis')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Selective documentation creates gaps that can cause integration failures. All interfaces must be identified and documented systematically. Missing even seemingly minor interfaces can lead to costly rework during system integration.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -3, budget: -2 },
        },
        {
          id: 'b',
          text: 'Perform comprehensive analysis to identify all interfaces, documenting origin, destination, stimuli, and special characteristics for each interface.',
          termIndices: [t('Analysis'), t('System Structure'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Comprehensive interface analysis establishes the complete picture of system interconnections. Documenting origin, destination, stimuli, and special characteristics creates the foundation for effective interface control throughout the project lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Wait until the system architecture is fully defined before documenting interfaces to avoid rework.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Interface identification should begin early and evolve with the system architecture. Waiting for full architecture definition delays critical interface decisions and creates schedule risk when changes are more expensive to implement.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -4, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Team Formation',
      title: 'Interface Working Group Establishment',
      narrative:
        'With interfaces identified, you need to establish communication and control mechanisms. The project involves NASA technical teams, three contractor organizations, and ISS operations personnel. You must decide how to structure the Interface Working Group to ensure effective coordination.',
      termHighlights: [t('Technical Team'), t('Contract'), t('Contractor')],
      decisions: [
        {
          id: 'a',
          text: 'Create separate working groups for each contractor to streamline their individual processes and reduce meeting overhead.',
          termIndices: [t('Contractor')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Separate working groups create silos and prevent cross-interface coordination. Interface management requires integrated communication between all interfacing parties to ensure system-wide compatibility and resolve conflicts effectively.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Form a single Interface Working Group with appropriate technical membership from all interfacing parties including NASA, contractors, and operations personnel.',
          termIndices: [t('Technical Team'), t('Contract'), t('Contractor')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A unified Interface Working Group with multidisciplinary representation ensures effective communication between all parties. This structure enables comprehensive interface planning, scheduling, and execution while maintaining system-level perspective.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Handle interface coordination through existing contract review meetings to avoid creating new organizational structures.',
          termIndices: [t('Contract')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Contract review meetings focus on programmatic issues, not technical interface details. Interface management requires dedicated technical expertise and focused attention that general contract meetings cannot provide effectively.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Training',
      title: 'Team Training and Capability Development',
      narrative:
        'Your interface management procedures are documented, but the technical teams need training on the new processes. Some team members are experienced with NASA standards while others are new to aerospace interface management. You must determine the appropriate training approach.',
      termHighlights: [t('Technical Team'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Provide comprehensive interface management training to all technical team members covering procedures, tools, and responsibilities.',
          termIndices: [t('Technical Team'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent decision. Comprehensive training ensures all team members understand their interface management responsibilities and can execute the established processes effectively. This investment prevents costly errors and improves coordination quality.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 2 },
        },
        {
          id: 'b',
          text: 'Train only the Interface Working Group leads and let them cascade training to their teams as needed.',
          termIndices: [t('Technical Team')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This approach risks inconsistent training quality and coverage gaps. While it saves initial resources, incomplete training can lead to interface management errors that cost more than comprehensive upfront training.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Skip formal training since experienced team members can learn the procedures through documentation review.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Documentation alone is insufficient for complex interface management processes. Without proper training, even experienced team members may misinterpret procedures or miss critical steps, leading to interface control failures.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Implementation',
      title: 'Process Execution and Work Product Capture',
      narrative:
        'Your interface management system is operational, and the first interface change requests are being processed. The Interface Working Group has identified several interface anomalies that require corrective action. You must ensure proper documentation and work product capture throughout the process.',
      termHighlights: [t('Process'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Focus on resolving interface issues quickly without extensive documentation to maintain project schedule.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Poor approach. Interface management work products including decisions rationale, assumptions, and corrective actions must be documented for future reference and lessons learned. Inadequate documentation leads to repeated problems and knowledge loss.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Document all interface decisions, rationale, assumptions, corrective actions, and lessons learned while maintaining efficient problem resolution.',
          termIndices: [t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Comprehensive work product capture ensures interface management decisions are traceable and lessons learned are preserved. This documentation supports future similar projects and provides accountability for interface control decisions.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Delegate documentation responsibilities to administrative support to free technical teams for problem-solving activities.',
          termIndices: [t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Administrative support cannot capture technical rationale and assumptions effectively. Interface management documentation requires technical expertise to ensure accuracy and completeness of decision records and technical justifications.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully established a comprehensive interface management framework for the ISS science module project. Your systematic approach to planning, team formation, training, and documentation ensures effective coordination between NASA and contractor teams throughout the project lifecycle.',
    failureNarrative:
      'Your interface management approach had significant gaps that could lead to integration problems and cost overruns. Effective interface management requires comprehensive planning, unified team coordination, proper training, and thorough documentation of all decisions and actions.',
    successThreshold: 60,
  },
}
