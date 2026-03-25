import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh22ReferenceDocuments: ScenarioTemplate = {
  meta: {
    id: 'seh-2-2-reference-documents',
    title: 'Document Dependencies Dilemma',
    subtitle: 'Navigate conflicting reference documents for your asteroid sample return mission',
    difficulty: 'advanced',
    categories: ['requirements', 'project-mgmt', 'configuration'],
    termIndices: [
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Requirement'),
      t('Technical Requirements'),
      t('Model'),
      t('System'),
      t('Traceability'),
      t('Configuration Management Process'),
      t('Process'),
      t('Goal'),
      t('Objective'),
      t('Need'),
      t('Mission'),
      t('Project'),
      t('Specification'),
      t('Test'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'Conflicting Standards',
      narrative:
        'Your asteroid sample return mission references three different NASA standards for thermal protection systems, each with different testing requirements. The science team also wants to use a European Space Agency contamination control standard that conflicts with NASA-STD-6016. You need to establish which documents will govern your project requirements.',
      termHighlights: [t('Requirement'), t('Technical Requirements'), t('Test')],
      decisions: [
        {
          id: 'a',
          text: 'Create a Reference Documents section in your ConOps that lists all applicable documents with precedence order and identifies conflicts for early resolution.',
          termIndices: [
            t('Concept of Operations (ConOps) (Concept Documentation)'),
            t('Requirement'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Reference Documents section should identify all applicable standards and resolve conflicts early. This prevents downstream requirements conflicts and ensures clear traceability from standards to project requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Use whichever standard is most recent for each subsystem and defer conflict resolution until detailed design.',
          termIndices: [t('System'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky approach. Deferring conflict resolution creates technical debt and may force expensive design changes later. The most recent standard may not be the most appropriate for your mission context.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Ignore the conflicting standards and write your own requirements based on engineering judgment.',
          termIndices: [t('Requirement'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Unacceptable. Ignoring established standards eliminates valuable heritage knowledge and may violate mandatory compliance requirements. Your project needs clear traceability to approved reference documents.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 0, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Pre-Phase A',
      title: 'Model Validation Framework',
      narrative:
        'Your mission relies on complex trajectory models from JPL and contamination models from Johnson Space Center. The Reference Documents section must specify which models are authoritative and how they will be validated. The propulsion team wants to use their own in-house models that haven\'t been formally validated.',
      termHighlights: [t('Model'), t('Mission'), t('Test')],
      decisions: [
        {
          id: 'a',
          text: 'List all models in your reference documents with version control, validation requirements, and clear ownership for each model.',
          termIndices: [
            t('Model'),
            t('Configuration Management Process'),
            t('Traceability'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Models are critical reference documents that need version control and validation requirements. Clear ownership prevents conflicts and ensures model updates are properly managed throughout the project lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 1 },
        },
        {
          id: 'b',
          text: 'Allow each team to use their preferred models and reconcile differences during integration testing.',
          termIndices: [t('Model'), t('Test'), t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This creates unnecessary integration risk. Different models may have incompatible assumptions or interfaces. Better to establish model authority early and require validation of any alternative models.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Use only heritage models that have been previously flight-proven to minimize validation effort.',
          termIndices: [t('Model'), t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This constrains your mission design unnecessarily. Heritage models may not be appropriate for your unique mission requirements. The Reference Documents section should support innovation while ensuring proper validation.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase A',
      title: 'Requirements Traceability Crisis',
      narrative:
        'During your Mission Concept Review preparation, you discover that your requirements trace to twelve different source documents, some of which contradict each other. The review board will expect clear traceability from mission needs through all reference documents to your technical requirements.',
      termHighlights: [
        t('Traceability'),
        t('Technical Requirements'),
        t('Need'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish a traceability matrix that maps each requirement to its source document and identifies where multiple sources create conflicts requiring resolution.',
          termIndices: [
            t('Traceability'),
            t('Requirement'),
            t('Technical Requirements'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect solution. A traceability matrix provides visibility into requirement sources and conflicts. This enables systematic conflict resolution and demonstrates to reviewers that you have controlled requirements derivation.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Focus on the three most important reference documents and minimize references to others to reduce complexity.',
          termIndices: [t('Technical Requirements'), t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This may miss important requirements from other documents. While complexity reduction is valuable, artificially limiting reference documents may create compliance gaps or missing requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Combine all reference requirements into a single master specification to eliminate traceability complexity.',
          termIndices: [t('Specification'), t('Requirement'), t('Traceability')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This destroys valuable traceability to source documents and makes it difficult to track when reference documents are updated. You lose the ability to assess impact of changes to source standards.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase A',
      title: 'Process Documentation Challenge',
      narrative:
        'Your Reference Documents section includes fifteen different process documents covering everything from contamination control to software development. The project manager questions whether all these processes are necessary and suggests using a simplified approach to reduce oversight burden.',
      termHighlights: [t('Process'), t('Project'), t('Configuration Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Justify each process document by tracing it to specific mission risks or requirements, and establish a configuration management process for all reference documents.',
          termIndices: [
            t('Process'),
            t('Configuration Management Process'),
            t('Mission'),
            t('Requirement'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Each process should be justified by mission needs and risks. Configuration management of reference documents ensures everyone works to the same baseline and changes are controlled.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 1 },
        },
        {
          id: 'b',
          text: 'Use only mandatory NASA processes and eliminate all voluntary standards to streamline documentation.',
          termIndices: [t('Process'), t('Project')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This may eliminate valuable best practices that could prevent problems. Voluntary standards often contain mission-critical guidance that supplements mandatory requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Let each subsystem team choose their own processes to maximize flexibility and innovation.',
          termIndices: [t('Process'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This creates process chaos and makes system integration extremely difficult. Different processes may have incompatible outputs or conflicting requirements for interfaces between subsystems.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase B',
      title: 'Reference Document Evolution',
      narrative:
        'Six months into preliminary design, NASA updates two key standards referenced in your ConOps, and your international partner wants to substitute an ISO standard for a NASA standard. You must decide how to manage these changes while maintaining requirements stability.',
      termHighlights: [
        t('Concept of Operations (ConOps) (Concept Documentation)'),
        t('Requirement'),
        t('Goal'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Assess the impact of each document change on your requirements baseline and implement a formal change control process for reference document updates.',
          termIndices: [
            t('Requirement'),
            t('Configuration Management Process'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct approach. Reference document changes can significantly impact requirements and design. A formal change control process ensures impacts are assessed and approved before implementation.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Freeze your current reference document baseline and ignore all updates until after Critical Design Review.',
          termIndices: [t('Specification'), t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This may cause you to miss important safety or performance improvements in updated standards. However, it does provide design stability. Better to assess each update individually.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Automatically adopt all new versions to ensure you are always using the latest standards.',
          termIndices: [t('Technical Requirements'), t('Goal')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This creates constant churn in your requirements baseline and may introduce new requirements that conflict with your design. Automatic adoption without impact assessment is uncontrolled.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully established a comprehensive Reference Documents framework that provides clear guidance while maintaining flexibility. Your systematic approach to document management, traceability, and change control sets up the project for success.',
    failureNarrative:
      'Poor reference document management has created requirements chaos and integration risks. Document conflicts and lack of traceability will plague the project throughout its lifecycle, requiring expensive rework and delays.',
    successThreshold: 60,
  },
}
