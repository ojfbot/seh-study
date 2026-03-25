import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh39ProjectPhaseFCloseout: ScenarioTemplate = {
  meta: {
    id: 'seh-3-9-project-phase-f-closeout',
    title: 'Mission End of Life',
    subtitle: 'Navigate the complex closeout of a CubeSat constellation after successful mission completion',
    difficulty: 'advanced',
    categories: ['lifecycle', 'project-mgmt', 'reviews'],
    termIndices: [
      t('Decommissioning Review'),
      t('Post-Launch Assessment Review'),
      t('Mission'),
      t('System'),
      t('Baseline'),
      t('Risk'),
      t('Failure'),
      t('Success Criteria'),
      t('Evaluation'),
      t('Product'),
      t('Critical Event Readiness Review'),
      t('Program'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Phase F',
      title: 'Decommissioning Strategy',
      narrative:
        'Your CubeSat constellation has completed its primary mission after two successful years in low Earth orbit. You must now implement the decommissioning plan while three satellites remain operational and two have already failed. The mission directorate wants to maximize science return while meeting orbital debris requirements.',
      termHighlights: [t('Mission'), t('System'), t('Failure')],
      decisions: [
        {
          id: 'a',
          text: 'Execute the formal decommissioning plan developed during Phase E, conducting a systematic deorbit of operational satellites while archiving all mission data and lessons learned.',
          termIndices: [t('System'), t('Mission'), t('Baseline')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct approach. Phase F activities should follow the systematic decommissioning plan established in Phase E. This ensures proper disposal according to NPR 8715.6 orbital debris requirements while capturing all technical knowledge and mission results for future programs.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 1 },
        },
        {
          id: 'b',
          text: 'Keep the operational satellites running indefinitely to maximize science return, deferring decommissioning decisions until funding runs out.',
          termIndices: [t('Mission'), t('Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates established Phase F principles and orbital debris requirements. Unplanned mission extensions without proper review and decommissioning planning create technical and programmatic risks. NASA requires systematic closeout planning, not indefinite operations.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: -2, budget: -3 },
        },
        {
          id: 'c',
          text: 'Immediately deorbit all satellites and close the mission to minimize ongoing costs, focusing only on data archiving.',
          termIndices: [t('System'), t('Mission')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Overly aggressive approach that wastes potential science return. While cost control is important, Phase F should balance systematic closeout with maximizing mission value. Operational satellites should continue until planned decommissioning dates unless safety concerns arise.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 2, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Phase F',
      title: 'Data Preservation Challenge',
      narrative:
        'As you begin archiving mission data, you discover that 40% of the science data lacks proper metadata and calibration files due to incomplete documentation during operations. The science team requests six months to reprocess and validate the dataset before final archival. Meanwhile, the ground systems are scheduled for decommissioning next month.',
      termHighlights: [t('Product'), t('Evaluation'), t('Baseline')],
      decisions: [
        {
          id: 'a',
          text: 'Extend ground system operations for six months to enable proper data reprocessing, updating the mission baseline and conducting a formal evaluation of data quality requirements.',
          termIndices: [t('Baseline'), t('Evaluation'), t('Product')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct decision. Phase F emphasizes that mission products must be properly documented and archived. The systems engineering approach requires evaluating whether incomplete data archival would compromise mission success criteria and adjusting timelines accordingly.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -2, budget: -2 },
        },
        {
          id: 'b',
          text: 'Archive the available data as-is and close the mission on schedule, noting data quality issues in the final mission report.',
          termIndices: [t('Product'), t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This fails to meet Phase F objectives for proper data analysis and archival. Incomplete mission products compromise the value of the entire program and violate systems engineering principles for capturing and preserving technical knowledge.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Transfer raw data to the science team for processing on their own systems while proceeding with ground system decommissioning on schedule.',
          termIndices: [t('System'), t('Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This approach creates risks for data quality and completeness. While it meets schedule constraints, transferring responsibility without proper systems engineering oversight may result in incomplete or inconsistent mission products that reduce scientific value.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Phase F',
      title: 'Lessons Learned Integration',
      narrative:
        'The Decommissioning Review board has identified critical lessons about CubeSat constellation operations that could benefit future missions. However, three different NASA programs want to claim ownership of this knowledge, and the original project office is being dissolved. You must ensure these technical insights are properly captured and made accessible.',
      termHighlights: [t('Decommissioning Review'), t('Program'), t('Success Criteria')],
      decisions: [
        {
          id: 'a',
          text: 'Establish a formal technical knowledge capture process that documents lessons learned in the NASA Technical Reports Server, with clear traceability to specific mission events and design decisions.',
          termIndices: [t('Decommissioning Review'), t('Evaluation')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Phase F emphasizes capturing technical knowledge for future programs. A systematic evaluation process ensures lessons learned are properly documented with sufficient detail and context to be valuable for future systems engineering efforts.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Let each interested program extract whatever lessons they find relevant from the mission database and final reports.',
          termIndices: [t('Program'), t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This ad-hoc approach fails to meet Phase F requirements for systematic knowledge capture. Without structured evaluation and documentation, critical systems engineering insights will be lost or misinterpreted, reducing the value for future programs.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Assign the lessons learned documentation to the most interested program office, with a requirement to share results with other NASA centers.',
          termIndices: [t('Program'), t('Success Criteria')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this ensures someone takes responsibility, it may not capture the full breadth of systems engineering lessons. Phase F requires comprehensive evaluation of mission results, not just those relevant to one particular program\'s interests.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Phase F',
      title: 'Hardware Disposition',
      narrative:
        'The mission includes significant ground hardware assets: custom antenna arrays, specialized test equipment, and flight spare components worth $2M. The original acquisition contracts are ambiguous about hardware ownership after mission completion. Meanwhile, two follow-on programs have expressed interest in reusing specific components, but would need modifications.',
      termHighlights: [t('System'), t('Product'), t('Risk')],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a systematic evaluation of all hardware assets, documenting their condition and configuration, then coordinate with NASA legal and procurement to establish clear disposition plans before physical transfer.',
          termIndices: [t('Evaluation'), t('Product'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct approach. Phase F requires systematic disposal of system components with proper documentation. This evaluation ensures hardware assets are properly characterized and legal requirements are met before disposition to future programs or disposal.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Immediately transfer the hardware to the programs that expressed interest to avoid storage costs, letting them sort out ownership and modification issues.',
          termIndices: [t('System'), t('Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This creates significant legal and technical risks. Uncontrolled hardware transfer without proper evaluation violates Phase F principles and could result in contract disputes or safety issues if hardware condition is not properly documented.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Store all hardware in NASA facilities until ownership questions are resolved, maintaining it in operational condition for potential future use.',
          termIndices: [t('System'), t('Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this avoids immediate risks, it\'s not cost-effective and doesn\'t address the underlying disposition requirements. Phase F should include systematic resolution of asset disposition, not indefinite storage that consumes ongoing resources.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Phase F',
      title: 'Final Mission Assessment',
      narrative:
        'The Post-Launch Assessment Review board is conducting the final mission evaluation and has found that while primary science objectives were exceeded, significant cost overruns occurred during operations due to unexpected ground system maintenance. They\'re questioning whether the mission met its overall success criteria given the budget performance.',
      termHighlights: [t('Post-Launch Assessment Review'), t('Success Criteria'), t('Evaluation')],
      decisions: [
        {
          id: 'a',
          text: 'Present a comprehensive evaluation that weighs science achievements against cost performance using the original mission success criteria, providing objective analysis for future program planning.',
          termIndices: [t('Evaluation'), t('Success Criteria'), t('Mission')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Phase F requires objective evaluation of all mission aspects against established success criteria. This comprehensive analysis provides valuable input for future systems engineering decisions and program planning processes.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Emphasize the exceptional science returns and argue that cost overruns are irrelevant given the mission\'s scientific success.',
          termIndices: [t('Mission'), t('Success Criteria')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This biased approach fails Phase F evaluation requirements. Systems engineering principles require objective assessment of all success criteria, including cost performance. Dismissing cost overruns prevents learning for future programs.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: -2 },
        },
        {
          id: 'c',
          text: 'Focus on documenting the operational challenges that caused cost overruns while noting that science objectives were met, without making an overall mission success determination.',
          termIndices: [t('Post-Launch Assessment Review'), t('Evaluation')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While factual documentation is important, Phase F requires completing the mission evaluation against established success criteria. Avoiding the overall assessment decision fails to provide the closure and lessons needed for future programs.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: -1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative:
      'You successfully navigated the complex Phase F closeout process, demonstrating strong systems engineering discipline in decommissioning activities, data archival, and mission evaluation. Your systematic approach to capturing lessons learned and managing hardware disposition will benefit future NASA programs.',
    failureNarrative:
      'Your Phase F execution encountered significant challenges that compromised mission value and violated NASA systems engineering principles. Key issues included inadequate planning for asset disposition, incomplete data archival, and failure to conduct proper mission evaluation against success criteria.',
    successThreshold: 60,
  },
}
