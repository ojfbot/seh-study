import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh33ProjectPrePhaseAConceptStudies: ScenarioTemplate = {
  meta: {
    id: 'seh-3-3-project-pre-phase-a-concept-studies',
    title: 'Asteroid Sample Return Mission Concepts',
    subtitle: 'Generate and evaluate mission concepts for a new asteroid sample return program',
    difficulty: 'intermediate',
    categories: ['lifecycle', 'requirements', 'project-mgmt'],
    termIndices: [
      t('Mission'),
      t('Customer'),
      t('Stakeholder'),
      t('Goal'),
      t('Objective'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
      t('Feasible'),
      t('Technology Development Plan'),
      t('Mission Concept Review'),
      t('Baseline'),
      t('Success Criteria'),
      t('Analysis of Alternatives (AoA)'),
      t('Trade Study'),
      t('Descope'),
      t('Evaluation')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Stakeholder Identification',
      title: 'Defining the Mission Stakeholders',
      narrative: 'You are leading the Pre-Phase A concept studies for a new asteroid sample return mission. The Planetary Science Division has provided initial high-level requirements for collecting samples from a near-Earth asteroid and returning them to Earth. Your first task is to identify the key stakeholders who will influence mission design and operations. The project success depends on understanding all relevant parties and their expectations.',
      termHighlights: [t('Mission'), t('Customer'), t('Stakeholder')],
      decisions: [
        {
          id: 'a',
          text: 'Focus solely on NASA Planetary Science Division as the primary customer since they are funding the mission.',
          termIndices: [t('Customer')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This approach is too narrow and misses critical stakeholders. While the Planetary Science Division is the primary customer, successful concept studies must identify all relevant stakeholders including international partners, science communities, launch providers, and mission operations teams. Missing stakeholders early leads to requirements gaps later.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Conduct a comprehensive stakeholder analysis including science communities, international partners, launch services, and mission operations teams.',
          termIndices: [t('Stakeholder'), t('Customer')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Pre-Phase A requires identifying all relevant stakeholders who will influence requirements, operations, or success criteria. This includes the primary customer, science users, operational teams, international collaborators, and enabling service providers. A complete stakeholder analysis ensures no critical perspectives are missed during concept development.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Defer stakeholder identification until Phase A when requirements become more detailed.',
          termIndices: [t('Stakeholder')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Stakeholder identification must occur in Pre-Phase A to properly capture needs, goals, and objectives early in concept development. Waiting until Phase A means mission concepts may not address stakeholder expectations, leading to costly redesigns. Early stakeholder engagement is fundamental to successful concept studies.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: 2 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Mission Concept Development',
      title: 'Generating Mission Concepts',
      narrative: 'With stakeholders identified, you must now develop multiple mission concepts that address their needs and expectations. The team has brainstormed several approaches: a fast flyby with minimal sample collection, a rendezvous mission with extended surface operations, and a hybrid approach with orbital reconnaissance followed by targeted sampling. You need to establish goals and objectives for evaluating these concepts.',
      termHighlights: [t('Goal'), t('Objective'), t('Analysis of Alternatives (AoA)')],
      decisions: [
        {
          id: 'a',
          text: 'Define broad qualitative goals only, keeping objectives flexible until technology assessments are complete.',
          termIndices: [t('Goal'), t('Objective')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'While goals can be qualitative, objectives must be specific and measurable to enable effective concept evaluation. Without clear objectives, the analysis of alternatives cannot properly assess which concepts best meet mission requirements. Objectives provide the quantitative basis for trade studies and feasibility assessments.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Establish specific, measurable goals and objectives that enable quantitative evaluation of each mission concept alternative.',
          termIndices: [t('Goal'), t('Objective'), t('Analysis of Alternatives (AoA)')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Pre-Phase A requires establishing clear goals and measurable objectives to guide concept evaluation. Goals elaborate on stakeholder needs while objectives provide specific, quantifiable targets. This foundation enables rigorous analysis of alternatives and supports data-driven concept selection for the Mission Concept Review.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Focus only on the most ambitious concept to maximize scientific return without considering alternatives.',
          termIndices: [t('Analysis of Alternatives (AoA)')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Pre-Phase A explicitly requires developing and analyzing multiple alternatives to find feasible concepts within constraints. Focusing on a single ambitious concept ignores cost, schedule, and technical feasibility considerations. The purpose is to produce a broad spectrum of ideas, not to optimize one approach.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 1, budget: 4 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Feasibility Assessment',
      title: 'Evaluating Concept Feasibility',
      narrative: 'Your team has developed three distinct mission concepts with defined objectives. Now you must assess their feasibility within technical, cost, and schedule constraints. The rendezvous concept offers the highest science return but requires significant technology development. The flyby concept uses proven technology but provides limited sample quantity. You need to determine which concepts are feasible for further development.',
      termHighlights: [t('Feasible'), t('Trade Study'), t('Technology Development Plan')],
      decisions: [
        {
          id: 'a',
          text: 'Eliminate any concept requiring new technology development to minimize technical risk.',
          termIndices: [t('Feasible'), t('Technology Development Plan')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This approach is overly conservative and may eliminate concepts that could be feasible with appropriate technology development planning. Pre-Phase A should assess technology needs and maturation strategies, not automatically reject concepts requiring development. A Technology Development Plan can address technical risks while maintaining mission capability.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 }
        },
        {
          id: 'b',
          text: 'Conduct thorough trade studies comparing all concepts against objectives, including technology assessment and development planning.',
          termIndices: [t('Feasible'), t('Trade Study'), t('Technology Development Plan')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Pre-Phase A requires systematic trade studies to evaluate all concepts against established objectives. This includes assessing technology needs, development timelines, and maturation strategies. Feasible concepts are those that credibly fall within technical, cost, and schedule constraints, potentially including those requiring planned technology development.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Select the concept with the lowest cost estimate regardless of science objectives.',
          termIndices: [t('Feasible')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Cost is only one constraint in feasibility assessment. Concepts must be evaluated against all stakeholder objectives, not just cost minimization. A feasible concept must meet technical requirements and science goals while remaining within cost and schedule constraints. Optimizing only for cost may result in a mission that fails to meet stakeholder needs.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: -2 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Operations Concept Development',
      title: 'Defining Mission Operations',
      narrative: 'With feasible concepts identified, you must develop preliminary operations concepts for each viable alternative. This includes defining how the spacecraft will execute the mission, how ground systems will support operations, and how science data will be collected and returned. The operations concept must demonstrate clear understanding of how mission outcomes will cost-effectively satisfy objectives.',
      termHighlights: [t('Concept of Operations (ConOps) (Concept Documentation)'), t('Evaluation')],
      decisions: [
        {
          id: 'a',
          text: 'Develop detailed operational procedures for all mission phases including contingency operations.',
          termIndices: [t('Concept of Operations (ConOps) (Concept Documentation)')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Detailed operational procedures are developed in later phases. Pre-Phase A concept of operations should be high-level, focusing on demonstrating feasibility and cost-effectiveness rather than detailed procedures. The emphasis is on establishing that the operational approach is sound, not on detailed implementation.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Create high-level operations concepts that demonstrate how each mission concept will achieve objectives cost-effectively.',
          termIndices: [t('Concept of Operations (ConOps) (Concept Documentation)'), t('Evaluation')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Pre-Phase A operations concepts should be high-level descriptions that exhibit clear understanding of how mission outcomes will cost-effectively satisfy objectives. This includes basic operational flows, key mission phases, and data handling approaches sufficient to demonstrate feasibility without excessive detail.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Defer operations concept development until mission design is finalized in Phase A.',
          termIndices: [t('Concept of Operations (ConOps) (Concept Documentation)')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Operations concepts must be developed in Pre-Phase A to support concept evaluation and feasibility assessment. Without understanding operational approaches, you cannot properly assess cost, schedule, or technical feasibility. Operations concepts are required products for the Mission Concept Review.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Descope Planning',
      title: 'Preparing for Resource Constraints',
      narrative: 'As you prepare for the Mission Concept Review, you must develop descope options for your preferred concepts. These define what the system can accomplish if resources are not available for the full mission scope. Your team is debating whether to focus on instrument reduction, mission duration cuts, or alternative technology approaches as primary descope strategies.',
      termHighlights: [t('Descope'), t('Mission Concept Review')],
      decisions: [
        {
          id: 'a',
          text: 'Develop comprehensive descope options covering instruments, mission profile, and technology alternatives with corresponding performance impacts.',
          termIndices: [t('Descope'), t('Mission Concept Review')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Pre-Phase A requires developing preliminary descope options that address various constraint scenarios. This includes fewer instruments, less ambitious mission profiles, reduced objectives, or alternative technologies. Each descope option should clearly define what can be accomplished with reduced resources and how success criteria would be adjusted accordingly.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 }
        },
        {
          id: 'b',
          text: 'Focus descope planning only on cost reduction measures to maximize budget efficiency.',
          termIndices: [t('Descope')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Descope options must address multiple constraint types, not just cost. Resource constraints can include schedule limitations, technical challenges, or programmatic changes. Focusing only on cost reduction may not prepare for other constraint scenarios and fails to provide comprehensive fallback positions for mission planning.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Avoid developing descope options to present the strongest possible mission proposal.',
          termIndices: [t('Descope')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Descope options are required gate products for the Mission Concept Review and demonstrate responsible mission planning. Avoiding descope planning appears unrealistic and fails to show how the project would adapt to resource constraints. This approach reduces proposal credibility rather than strengthening it.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 2, budget: 2 }
        }
      ],
      defaultNextNodeId: 'node-6'
    },
    {
      id: 'node-6',
      phase: 'Documentation and Review Preparation',
      title: 'Preparing for Mission Concept Review',
      narrative: 'Your Pre-Phase A study is nearing completion and you must prepare products for the Mission Concept Review. This includes mission justification, concept of operations, preliminary cost estimates, and success criteria. The review will determine whether your concepts advance to Phase A for detailed development. You need to ensure all required products demonstrate concept feasibility and readiness for the next phase.',
      termHighlights: [t('Mission Concept Review'), t('Success Criteria'), t('Baseline')],
      decisions: [
        {
          id: 'a',
          text: 'Present only the single best concept to focus review attention and resources.',
          termIndices: [t('Mission Concept Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'The Mission Concept Review should evaluate all feasible concepts developed during Pre-Phase A. Presenting only one concept eliminates the comparative analysis that helps stakeholders make informed selection decisions. Multiple concepts demonstrate the breadth of analysis required in concept studies.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Prepare comprehensive documentation for all feasible concepts including success criteria and preliminary baselines.',
          termIndices: [t('Mission Concept Review'), t('Success Criteria'), t('Baseline')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The Mission Concept Review requires complete documentation of all feasible concepts developed during Pre-Phase A. This includes mission justification, operations concepts, cost estimates, technology assessments, and clearly defined success criteria. Preliminary baselines provide the foundation for Phase A development if concepts are selected to proceed.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Focus documentation on technical details while minimizing cost and schedule estimates.',
          termIndices: [t('Success Criteria')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Mission Concept Review documentation must include life cycle cost and schedule estimates along with technical content. Stakeholders need complete information to assess concept feasibility across all dimensions. Minimizing cost and schedule information prevents informed decision-making about concept viability and program planning.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 3 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'You successfully conducted comprehensive Pre-Phase A concept studies that identified feasible mission alternatives and prepared them for stakeholder review. Your systematic approach to stakeholder analysis, concept development, and feasibility assessment provided the foundation for informed mission selection decisions.',
    failureNarrative: 'Your approach to concept studies missed critical elements of Pre-Phase A methodology. Incomplete stakeholder analysis, inadequate feasibility assessment, or poor documentation preparation would likely result in concepts that fail to meet review criteria or advance to Phase A development.',
    successThreshold: 60
  }
}
