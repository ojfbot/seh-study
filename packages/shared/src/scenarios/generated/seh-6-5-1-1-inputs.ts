import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6511Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-6-5-1-1-inputs',
    title: 'Configuration Management Input Assessment',
    subtitle: 'Evaluate and organize critical inputs for telescope configuration control',
    difficulty: 'intermediate',
    categories: ['configuration', 'requirements', 'project-mgmt'],
    termIndices: [
      t('Technical Planning Process'),
      t('Baseline'),
      t('Configuration Items (CI)'),
      t('Product'),
      t('Program'),
      t('Project'),
      t('Model'),
      t('Process'),
      t('Requirement'),
      t('Deliverable Data Item'),
      t('Life Cycle Cost (LCC)'),
      t('Need')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Planning Review',
      title: 'Configuration Management Plan Assessment',
      narrative:
        'Your deep space telescope project has just completed preliminary design and you are preparing to establish formal configuration management. You receive a draft CM plan from the Technical Planning Process team, but it appears incomplete. The plan lacks clear identification of which items will be placed under configuration control and contains outdated baseline references. Your project manager asks you to assess what key inputs are missing before the next milestone review.',
      termHighlights: [t('Technical Planning Process'), t('Configuration Items (CI)'), t('Baseline')],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with the current plan since any CM plan is better than none, and refine it during implementation.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Starting configuration management with an incomplete plan creates significant risk. Without properly designated configuration items and current baseline references, you cannot effectively control changes. This approach will lead to costly rework and schedule delays.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 3 },
        },
        {
          id: 'b',
          text: 'Request the Technical Planning Process team to provide designated configuration items list and updated baseline documentation before proceeding.',
          termIndices: [t('Technical Planning Process'), t('Configuration Items (CI)'), t('Baseline')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The CM plan requires a clear list of designated configuration items and current baseline references to be effective. These are fundamental inputs from the Technical Planning Process that must be established before implementing configuration control.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Develop your own list of configuration items based on your engineering judgment and update the baselines independently.',
          termIndices: [t('Configuration Items (CI)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Configuration item designation and baseline management must follow established processes and involve proper stakeholder coordination. Independent development bypasses required technical planning activities and creates inconsistencies across the program.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Change Proposal Analysis',
      title: 'Engineering Change Request Evaluation',
      narrative:
        'Three engineering change proposals have been submitted for your telescope project: one requesting a mirror coating specification change, another proposing a new pointing algorithm, and a third suggesting component substitution due to vendor issues. Each proposal affects different baseline documents and configuration items. You need to determine which inputs are required to properly evaluate these change requests before they go to the approval process.',
      termHighlights: [t('Baseline'), t('Configuration Items (CI)'), t('Requirement')],
      decisions: [
        {
          id: 'a',
          text: 'Evaluate each proposal independently based solely on the technical merits described in the change request documentation.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Change evaluation requires access to the current baseline documents, requirements specifications, and interface documentation to assess full impact. Evaluating proposals in isolation without these key inputs leads to incomplete analysis and poor decision making.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: 2 },
        },
        {
          id: 'b',
          text: 'Gather the affected baseline documents, requirements specifications, and interface documentation before analyzing the technical and programmatic impacts.',
          termIndices: [t('Baseline'), t('Requirement'), t('Deliverable Data Item')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Proper change evaluation requires access to current baseline documents, requirements, and interface specifications as key inputs. These documents provide the context needed to assess technical feasibility, interface compatibility, and full system impact.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Forward the proposals directly to the approval authority since they came from qualified engineering sources.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Change proposals must be properly analyzed against current baselines and requirements before approval. Bypassing this analysis step violates configuration management process requirements and can result in approved changes that create system-level conflicts.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 4, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Baseline Update Coordination',
      title: 'Approved Change Implementation',
      narrative:
        'The mirror coating specification change has been approved through the formal review process. You now need to update the affected baseline documents and models. The approved change affects the primary mirror specification, thermal analysis models, and optical performance requirements. Your task is to identify what inputs you need to properly implement this approved baseline change across all affected documentation.',
      termHighlights: [t('Baseline'), t('Model'), t('Requirement')],
      decisions: [
        {
          id: 'a',
          text: 'Update only the primary mirror specification since that was the focus of the original change proposal.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Approved baseline changes must be implemented across all affected documents and models to maintain consistency. Partial implementation creates configuration discrepancies that will cause problems during verification and validation activities.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Use the approved change authorization and current baseline documents to systematically update all affected specifications, models, and requirements.',
          termIndices: [t('Baseline'), t('Model'), t('Requirement')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Approved baseline changes serve as authorization to update all affected documents and models. Using the current baseline documents as reference ensures proper traceability and maintains configuration consistency across the entire system.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Wait for engineering to provide updated models before making any documentation changes to ensure accuracy.',
          termIndices: [t('Model')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Approved changes should be implemented promptly using a coordinated approach. Waiting for one group delays the entire update process and creates a period where baseline documents are inconsistent with the approved configuration.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 3, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Documentation Integration',
      title: 'Requirements and Interface Validation',
      narrative:
        'As you implement the approved mirror coating change, you discover potential conflicts with interface requirements documented in three different specifications. The new coating affects thermal emissivity, which impacts the thermal control system design documented in a separate baseline. You need to determine what additional inputs are required to resolve these interface conflicts and ensure all expectation documents remain consistent.',
      termHighlights: [t('Requirement'), t('Baseline'), t('Deliverable Data Item')],
      decisions: [
        {
          id: 'a',
          text: 'Document the conflicts as known issues and plan to resolve them in the next design iteration cycle.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Interface conflicts discovered during baseline updates must be resolved immediately to maintain configuration integrity. Deferring resolution creates inconsistent documentation and can lead to design errors that are costly to fix later in the life cycle.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 4, budget: 4 },
        },
        {
          id: 'b',
          text: 'Gather all related interface documents and requirements specifications to perform a comprehensive impact analysis before finalizing any baseline changes.',
          termIndices: [t('Requirement'), t('Baseline'), t('Deliverable Data Item')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Interface conflicts require access to all related requirements and interface documentation as inputs for comprehensive analysis. This ensures that baseline changes maintain consistency across all affected specifications and deliverable data items.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Modify the thermal control requirements to accommodate the new coating without formal change approval since it is a minor adjustment.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Requirements changes must follow the formal change process regardless of perceived magnitude. Making unauthorized requirement modifications bypasses configuration control and creates untracked changes that compromise baseline integrity.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 2, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Process Validation',
      title: 'Configuration Control Readiness',
      narrative:
        'Your configuration management implementation is nearly complete, but the project review board wants confirmation that you have properly identified all required inputs for ongoing configuration control. They specifically ask you to verify that your process can handle future change proposals throughout the remaining project life cycle. You need to demonstrate that the essential inputs for configuration management are properly established and accessible.',
      termHighlights: [t('Process'), t('Life Cycle Cost (LCC)'), t('Project')],
      decisions: [
        {
          id: 'a',
          text: 'Confirm that the current CM plan covers immediate needs and commit to updating inputs as future requirements become clear.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Configuration management requires comprehensive input identification upfront to be effective throughout the project life cycle. A reactive approach to gathering inputs creates gaps that compromise change control effectiveness and increases life cycle costs.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 3 },
        },
        {
          id: 'b',
          text: 'Verify that all five key input categories are established: CM plan from Technical Planning Process, change proposal procedures, current baseline documentation, change approval processes, and designated configuration item lists.',
          termIndices: [t('Technical Planning Process'), t('Baseline'), t('Configuration Items (CI)'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Comprehensive configuration management requires all five input categories to be properly established from the start. This ensures effective change control throughout the project life cycle and minimizes long-term costs and risks.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -2 },
        },
        {
          id: 'c',
          text: 'Focus verification on the technical documentation inputs since those are the most complex and time-consuming to establish.',
          termIndices: [t('Deliverable Data Item')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While technical documentation is important, effective configuration management requires all input categories to be properly established. Focusing on only one category leaves gaps in change control processes that will create problems later.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully established comprehensive configuration management inputs by ensuring all five key categories were properly identified and accessible. Your systematic approach to gathering Technical Planning Process outputs, baseline documentation, change procedures, and configuration item lists provides a solid foundation for effective change control throughout the project life cycle.',
    failureNarrative: 'Your configuration management implementation has significant gaps that will compromise change control effectiveness. Missing or incomplete inputs such as designated configuration items, current baselines, or proper change procedures create risks that will increase costs and schedule delays as the project progresses.',
    successThreshold: 60,
  },
}
