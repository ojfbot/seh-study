import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh122SystemScope: ScenarioTemplate = {
  meta: {
    id: 'seh-1-2-2-system-scope',
    title: 'Defining the Telescope System Scope',
    subtitle: 'Navigate complex interface boundaries for a deep space observatory',
    difficulty: 'intermediate',
    categories: ['requirements', 'project-mgmt', 'design'],
    termIndices: [
      t('System'),
      t('Need'),
      t('Goal'),
      t('Mission'),
      t('Objective'),
      t('Project'),
      t('Context Diagram'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Architecture (System)'),
      t('Stakeholder'),
      t('Technical Requirements'),
      t('Project Requirements'),
      t('Enabling Products'),
      t('End Product'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Mission Context',
      title: 'Understanding the Fundamental Need',
      narrative:
        'You are leading the system scope definition for a next-generation deep space telescope mission. The stakeholders have presented a broad need statement: "Observe exoplanets in unprecedented detail to search for signs of life." Your team must now translate this need into specific goals and objectives that will define what the system must accomplish. The mission directorate wants clarity on what this project will and will not include.',
      termHighlights: [t('Need'), t('Goal'), t('Mission')],
      decisions: [
        {
          id: 'a',
          text: 'Define the goal as "Build the most powerful telescope ever constructed" without specifying performance targets.',
          termIndices: [t('Goal')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This goal statement is too vague and does not provide measurable criteria for success. Goals must allow assessment of whether the system has achieved them. A goal should elaborate on the need with specific expectations that guide system development and enable objective evaluation.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Establish the goal as "Enable detection and characterization of Earth-sized exoplanets in habitable zones of nearby star systems."',
          termIndices: [t('Goal'), t('Objective')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent. This goal directly addresses the need while being specific enough to guide system development. It elaborates on the original need statement and provides clear expectations that can be assessed. This goal will enable you to derive specific, measurable objectives for system performance.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus the goal on "Develop new telescope technologies" to emphasize innovation.',
          termIndices: [t('Goal'), t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This shifts focus from the mission need to technology development itself. While innovation may be required, the goal should address what the system needs to accomplish, not how to accomplish it. Goals should be results-oriented and relate directly to solving the identified problem.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'System Boundaries',
      title: 'Defining What Is In Scope',
      narrative:
        'With your goal established, you must now define the system boundaries. The telescope will require ground-based operations, data processing facilities, and launch services. Your system architecture team needs clarity on which elements are part of your project scope versus external enabling systems. The program manager asks you to clarify what your project will develop versus what it will interface with.',
      termHighlights: [t('System'), t('Project'), t('Enabling Products')],
      decisions: [
        {
          id: 'a',
          text: 'Include everything from telescope design through ground operations, data processing, and even astronomer training programs.',
          termIndices: [t('Project'), t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This scope is too broad and would make the project unmanageable. Projects need defined boundaries to be executable within reasonable cost and schedule constraints. Including astronomer training extends far beyond the core system needed to meet your mission objectives.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 4, budget: 5 },
        },
        {
          id: 'b',
          text: 'Define the system as the space telescope and its instruments only, treating everything else as external interfaces.',
          termIndices: [t('System'), t('End Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This scope is too narrow and may miss critical enabling products necessary for mission success. While the telescope is the end product, the system must include ground operations capabilities and data processing elements to achieve the mission goals. This could lead to interface gaps.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Include the space telescope, ground control systems, and initial data processing capabilities while interfacing with existing launch services and research networks.',
          termIndices: [t('System'), t('End Product'), t('Enabling Products')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. This balanced scope includes both the end product (telescope) and essential enabling products (ground systems, data processing) needed for mission operations. By leveraging existing launch services and research infrastructure as external interfaces, you maintain manageable project boundaries while ensuring mission completeness.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Interface Analysis',
      title: 'Mapping External Dependencies',
      narrative:
        'Your team is developing a context diagram to visualize all external systems that will interface with your telescope system. You have identified launch services, the Deep Space Network, and partner observatories as key external systems. The systems engineering team needs to understand which interfaces are most critical to mission success and require detailed interface management. How do you prioritize these external interface relationships?',
      termHighlights: [t('Context Diagram'), t('Stakeholder'), t('Architecture (System)')],
      decisions: [
        {
          id: 'a',
          text: 'Treat all external interfaces as equally important and establish formal interface control documents for each one.',
          termIndices: [t('Context Diagram'), t('Architecture (System)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While comprehensive interface documentation is valuable, not all external interfaces carry equal mission risk. Prioritizing interfaces based on criticality allows for more efficient resource allocation. Some interfaces may require only informal coordination rather than formal control documents.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Focus primarily on launch vehicle interfaces since they are needed first, deferring other external interfaces until later phases.',
          termIndices: [t('Context Diagram')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This sequential approach misses critical early dependencies. Ground operations and data processing interfaces must be designed in parallel with the spacecraft to ensure system coherence. Deferring key interfaces can lead to costly redesigns and integration problems.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 2 },
        },
        {
          id: 'c',
          text: 'Categorize external interfaces by mission criticality and establish detailed management plans for high-risk interfaces while monitoring others.',
          termIndices: [t('Context Diagram'), t('Architecture (System)'), t('Stakeholder')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Risk-based interface prioritization ensures critical dependencies receive appropriate attention while avoiding unnecessary overhead for low-risk interfaces. This supports efficient system architecture development and stakeholder coordination throughout the project lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Requirements Scope',
      title: 'Technical vs Programmatic Boundaries',
      narrative:
        'The requirements team is struggling to distinguish between technical requirements that your project must satisfy versus programmatic requirements that govern how the project is executed. Some stakeholders want environmental impact assessments included in your technical requirements, while others argue these are programmatic constraints. You need to establish clear boundaries for your requirements development activities.',
      termHighlights: [t('Technical Requirements'), t('Project Requirements'), t('Objective')],
      decisions: [
        {
          id: 'a',
          text: 'Include all stakeholder concerns as technical requirements to ensure nothing is missed during development.',
          termIndices: [t('Technical Requirements'), t('Project Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Mixing technical and programmatic requirements creates confusion and makes the system harder to design and verify. Technical requirements should focus on what the system must do, while programmatic requirements address how the project is managed. This approach would dilute focus on core system performance.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus technical requirements on system performance objectives while addressing programmatic concerns through separate project requirements.',
          termIndices: [t('Technical Requirements'), t('Project Requirements'), t('Objective')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. This separation maintains clarity between what the system must accomplish (technical requirements derived from objectives) and how the project will be managed (project requirements including environmental, safety, and other programmatic constraints). This structure supports more effective requirements management.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Let each subsystem team determine their own requirements boundaries without central coordination.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Decentralized requirements boundaries lead to gaps, overlaps, and inconsistencies across the system. System-level coordination is essential to ensure complete, coherent requirements coverage. Without central guidance, subsystem interfaces and system-level objectives may not be properly addressed.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Operations Scope',
      title: 'Concept of Operations Impact',
      narrative:
        'Your team is finalizing the concept of operations document that describes how the telescope system will be used throughout its mission life. This ConOps will significantly impact your system scope by defining operational responsibilities and support requirements. The operations team wants extensive autonomous capabilities to minimize ground intervention, but this would add significant complexity to your system design. How do you balance operational desires with system scope realities?',
      termHighlights: [t('Concept of Operations (ConOps) (Concept Documentation)'), t('Stakeholder')],
      decisions: [
        {
          id: 'a',
          text: 'Design for full autonomous operations to eliminate all ground support requirements and minimize operational costs.',
          termIndices: [t('Concept of Operations (ConOps) (Concept Documentation)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Full autonomy would require extensive artificial intelligence and fault management capabilities that may exceed current technology readiness levels and significantly increase system complexity. This could jeopardize mission success while offering uncertain benefits. A balanced approach to autonomy is more realistic.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 4, budget: 4 },
        },
        {
          id: 'b',
          text: 'Develop a ConOps that balances autonomous capabilities with ground operations support based on mission criticality and technology maturity.',
          termIndices: [t('Concept of Operations (ConOps) (Concept Documentation)'), t('Stakeholder')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. A balanced ConOps considers both stakeholder operational preferences and technical realities. By identifying which functions truly benefit from autonomy versus those that can be effectively managed from the ground, you optimize the system architecture while managing development risk and cost.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Require continuous ground control for all operations to ensure maximum oversight and safety.',
          termIndices: [t('Concept of Operations (ConOps) (Concept Documentation)')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this approach minimizes onboard system complexity, it places high demands on ground operations and may limit mission effectiveness during communication blackouts or emergencies. Some level of autonomous capability is typically necessary for deep space missions to handle time-critical events.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You have successfully defined a clear, manageable system scope that balances mission needs with project constraints. Your approach to goal definition, boundary setting, and interface management provides a solid foundation for system development while maintaining realistic expectations for what the project can deliver.',
    failureNarrative: 'Your system scope definition lacks clarity or contains unrealistic boundaries that will challenge project execution. Consider how well-defined goals, appropriate system boundaries, and balanced operational concepts contribute to successful project outcomes.',
    successThreshold: 60,
  },
}
