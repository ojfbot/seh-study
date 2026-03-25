import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh32SystemStructure: ScenarioTemplate = {
  meta: {
    id: 'seh-3-2-system-structure',
    title: 'Mars Rover System Integration Challenge',
    subtitle: 'Coordinate multiple subsystem teams to establish the technical system structure',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'design', 'configuration'],
    termIndices: [
      t('System Structure'),
      t('Product Breakdown Structure'),
      t('Work Breakdown Structure (WBS)'),
      t('End Product'),
      t('Enabling Products'),
      t('Product Integration Process'),
      t('Baseline'),
      t('Concurrent Engineering'),
      t('Technical Team'),
      t('Interface Management Process'),
      t('Configuration Items (CI)'),
      t('Technical Data Package'),
      t('Quality Assurance'),
      t('Customer')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'System Structure Planning',
      title: 'Defining the Technical Architecture',
      narrative:
        'As the lead systems engineer for the Mars rover project, you must establish how the technical portion will be developed and integrated. The project has five major subsystem teams: mobility, power, communications, science instruments, and thermal control. Each team has developed their own product breakdown structure, but they need to be unified into a coherent system structure. The customer requires clear traceability between the specification tree and the resulting end products.',
      termHighlights: [t('System Structure'), t('Product Breakdown Structure'), t('End Product')],
      decisions: [
        {
          id: 'a',
          text: 'Allow each subsystem team to maintain their individual product structures and coordinate through weekly status meetings.',
          termIndices: [t('Product Breakdown Structure')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Independent subsystem structures without unified integration create interface gaps and make traceability impossible. The system structure must provide a coherent framework that shows how all technical products relate to the overall mission objectives and customer requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Establish a layered product-based WBS model that integrates all subsystem products into a unified system structure with clear interfaces.',
          termIndices: [t('Work Breakdown Structure (WBS)'), t('System Structure'), t('Product Integration Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A layered product-based WBS model provides the foundation for effective system structure. This approach ensures all end products and enabling products are properly integrated, interfaces are managed, and traceability is maintained from requirements through implementation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus only on the end products that will be delivered to the customer and defer enabling product integration until later phases.',
          termIndices: [t('End Product'), t('Enabling Products'), t('Customer')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Enabling products like test equipment, ground support systems, and documentation are essential for system success and must be planned from the beginning. Deferring their integration creates technical debt and risks mission-critical support capabilities.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Configuration Management',
      title: 'Establishing Technical Baselines',
      narrative:
        'With the system structure framework established, you need to define how the technical baselines will be managed across all subsystems. The mobility team wants to baseline their drive system independently, while the power team insists their battery configuration items must be frozen before any other subsystem can proceed. You must establish a configuration management approach that supports concurrent engineering while maintaining technical integrity.',
      termHighlights: [t('Baseline'), t('Configuration Items (CI)'), t('Concurrent Engineering')],
      decisions: [
        {
          id: 'a',
          text: 'Implement a staged baseline approach where critical interface configuration items are established first, followed by subsystem-specific baselines.',
          termIndices: [t('Baseline'), t('Configuration Items (CI)'), t('Interface Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. By establishing interface baselines first, you enable concurrent engineering while preventing configuration conflicts. This staged approach allows subsystem teams to work in parallel once their interface obligations are locked down.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Allow each subsystem to baseline independently and resolve conflicts through change control boards later.',
          termIndices: [t('Configuration Items (CI)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this approach supports team autonomy, it creates significant integration risk. Independent baselines often result in incompatible interface assumptions that are expensive to resolve later. A more coordinated baseline strategy would reduce downstream integration issues.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 2 },
        },
        {
          id: 'c',
          text: 'Require all subsystems to wait until the power team completes their baseline since electrical interfaces are fundamental.',
          termIndices: [t('Baseline'), t('Concurrent Engineering')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This serial approach eliminates the benefits of concurrent engineering and creates unnecessary schedule delays. While electrical interfaces are important, a well-designed system structure allows parallel development through proper interface management and staged baseline establishment.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 4, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Technical Integration',
      title: 'Coordinating Diverse Technical Teams',
      narrative:
        'The system structure is now defined, but you must establish how the diverse technical teams will coordinate their efforts. The science team operates from JPL, mechanical teams are at Glenn Research Center, and the prime contractor is in Colorado. Each organization has different processes, tools, and deliverable formats. You need to define technical integration processes that accommodate this distributed environment while maintaining product quality.',
      termHighlights: [t('Technical Team'), t('Product Integration Process'), t('Quality Assurance')],
      decisions: [
        {
          id: 'a',
          text: 'Standardize all teams on identical processes, tools, and deliverable formats regardless of organizational differences.',
          termIndices: [t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Forcing identical processes across diverse organizations ignores legitimate differences in capabilities, heritage systems, and regulatory requirements. This approach often reduces efficiency and creates compliance burdens that add cost without improving integration.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 2, budget: 3 },
        },
        {
          id: 'b',
          text: 'Define common technical data package standards and interface protocols while allowing organizational flexibility in internal processes.',
          termIndices: [t('Technical Data Package'), t('Product Integration Process'), t('Interface Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. This balanced approach maintains integration effectiveness while respecting organizational strengths. Common data standards ensure compatibility, while process flexibility allows teams to leverage their heritage capabilities and maintain efficiency.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Let each organization use their own processes and resolve integration issues through intensive review cycles.',
          termIndices: [t('Quality Assurance')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this preserves organizational autonomy, it places the integration burden on review processes rather than preventing problems through good structure. This approach typically results in late discovery of incompatibilities and expensive rework cycles.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Specification Management',
      title: 'Linking Requirements to Products',
      narrative:
        'Your technical teams are now coordinated, but the customer has raised concerns about traceability between the specification tree and the actual products being developed. The science requirements flow through multiple levels of specifications, and the mechanical design specifications have evolved significantly from the original system requirements. You must establish clear relationships between specifications and products to maintain customer confidence and technical integrity.',
      termHighlights: [t('Technical Data Package'), t('Baseline'), t('Customer')],
      decisions: [
        {
          id: 'a',
          text: 'Create a comprehensive traceability matrix that maps every specification requirement to specific product elements and verification methods.',
          termIndices: [t('Technical Data Package'), t('Quality Assurance')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent. A comprehensive traceability matrix provides the visibility needed to maintain specification-product relationships throughout development. This approach supports both customer confidence and effective change management as the design evolves.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Document the current specification-product relationships and update them quarterly during formal baseline reviews.',
          termIndices: [t('Baseline')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Quarterly updates may be too infrequent for active development phases where specifications and products evolve rapidly. While this provides some traceability, more frequent updates would better support real-time decision making and prevent specification drift.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus on delivering functional products that meet performance requirements and address specification traceability during final verification.',
          termIndices: [t('Customer')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Deferring traceability until final verification creates significant risk of discovering requirement gaps or misunderstandings too late for efficient correction. The specification tree must be actively maintained throughout development to ensure customer requirements are met.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Implementation Oversight',
      title: 'Managing System Boundaries',
      narrative:
        'As development progresses, scope creep has become an issue. The science team wants to add a new spectrometer capability, the thermal team has identified additional radiator requirements, and the mobility team discovered the need for enhanced traction control software. Each addition affects multiple subsystems and their interfaces. You must manage these changes while maintaining the integrity of the established system structure.',
      termHighlights: [t('System Structure'), t('Interface Management Process'), t('Technical Team')],
      decisions: [
        {
          id: 'a',
          text: 'Evaluate each proposed change through the established system structure framework, assessing impacts on all affected products and interfaces.',
          termIndices: [t('System Structure'), t('Interface Management Process'), t('Product Integration Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Using the established system structure as the evaluation framework ensures that all change impacts are properly assessed. This systematic approach maintains system integrity while allowing beneficial improvements when they can be properly integrated.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Approve changes that improve individual subsystem performance and defer integration impact assessment until system-level testing.',
          termIndices: [t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Approving changes without integration impact assessment violates the principles of system structure management. Individual subsystem improvements can create system-level problems if interfaces and dependencies are not properly evaluated first.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 2, budget: 3 },
        },
        {
          id: 'c',
          text: 'Freeze all changes to protect the current system structure and focus on delivering the baseline products as specified.',
          termIndices: [t('System Structure'), t('Baseline')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While protecting system structure integrity is important, completely freezing changes may prevent beneficial improvements and necessary corrections. A better approach evaluates changes systematically rather than prohibiting them entirely.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully established and maintained an effective system structure that coordinated diverse technical teams while preserving traceability and managing scope. Your systematic approach to product integration and baseline management enabled concurrent engineering and delivered customer value.',
    failureNarrative: 'The system structure became fragmented due to inadequate integration planning and poor change control. Multiple subsystem conflicts emerged, traceability was lost, and the customer lost confidence in the technical approach.',
    successThreshold: 60,
  },
}
