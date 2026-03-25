import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh12ScopeAndDepth: ScenarioTemplate = {
  meta: {
    id: 'seh-1-2-scope-and-depth',
    title: 'Multi-Scale Systems Engineering',
    subtitle: 'Apply NASA SE processes across different project sizes and complexity levels',
    difficulty: 'beginner',
    categories: ['lifecycle', 'project-mgmt'],
    termIndices: [
      t('System'),
      t('Process'),
      t('Program'),
      t('Project'),
      t('Iterative'),
      t('Recursive'),
      t('Contract'),
      t('Contractor'),
      t('Model'),
      t('Product'),
      t('Goal'),
      t('Need'),
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'Portfolio Planning Challenge',
      narrative:
        'As the new SE manager at Johnson Space Center, you oversee three concurrent efforts: a small CubeSat technology demonstration, a medium-scale crew transport system upgrade, and the massive Artemis lunar habitat program. Leadership wants to know how NASA SE processes apply across this diverse portfolio.',
      termHighlights: [
        t('System'),
        t('Process'),
        t('Program'),
        t('Project'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Apply all 17 NASA SE processes to each effort, but tailor the formality, documentation depth, and timescales based on project size and complexity.',
          termIndices: [
            t('Process'),
            t('Program'),
            t('Project'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. NASA SE processes are applicable to all projects regardless of size, but the handbook emphasizes that formality, depth of documentation, and timescales should be varied appropriately for the type, size, and complexity of each project.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Use lightweight processes for the CubeSat, standard processes for the crew transport, and full rigor for Artemis, skipping processes that seem unnecessary for smaller projects.',
          termIndices: [
            t('Process'),
            t('Project'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Partially correct but risky. While scaling rigor is appropriate, all 17 SE processes are applicable to all NASA projects. Skipping processes entirely can lead to gaps in systems thinking and integration issues.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Apply identical SE rigor to all three efforts to ensure consistency and avoid any process gaps.',
          termIndices: [
            t('Process'),
            t('System'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. This approach wastes resources and creates unnecessary bureaucracy. The handbook explicitly states that formality and documentation depth should be varied appropriately for project size and complexity.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'Documentation Format Decision',
      narrative:
        'Your CubeSat team pushes back on creating formal requirements documents, arguing they can track everything in spreadsheets and informal notes. The crew transport team wants traditional documentation, while Artemis demands comprehensive digital models. You need to establish documentation standards that satisfy NASA SE principles.',
      termHighlights: [
        t('Model'),
        t('Product'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Allow teams to capture required information in appropriate forms - documents, models, graphics, drawings, or other formats - as long as the SE information content is complete.',
          termIndices: [
            t('Model'),
            t('Product'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The handbook states that references to "documents" include not only paper or digital files but also models, graphics, drawings, or other appropriate forms that capture the intended information.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Require all teams to use standard NASA document templates regardless of project size to maintain consistency and audit trails.',
          termIndices: [
            t('Product'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Overly rigid but acceptable. While formal documents ensure traceability, the handbook allows flexibility in how information is captured as long as the content requirements are met.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -2, budget: -1 },
        },
        {
          id: 'c',
          text: 'Let each team decide their own documentation approach without any standardization or NASA SE content requirements.',
          termIndices: [
            t('Process'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. While format flexibility is allowed, the SE information content must still meet NASA requirements. Complete freedom in documentation leads to gaps in systems engineering rigor and poor integration.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase B',
      title: 'Contractor Integration Challenge',
      narrative:
        'Your crew transport project involves both in-house NASA engineers and external contractors performing systems engineering functions. Some functions are managed by NASA personnel while others are delegated to contractor teams. You need to ensure SE consistency across this mixed workforce.',
      termHighlights: [
        t('Contract'),
        t('Contractor'),
        t('Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Apply NASA SE processes consistently to all SE functions regardless of whether they are performed by managers, engineers, in-house staff, or contractors.',
          termIndices: [
            t('Process'),
            t('Contract'),
            t('Contractor'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The handbook explicitly states that SE processes apply to systems engineering functions regardless of whether they are performed by a manager or engineer, in-house or by a contractor.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Allow contractors to use their own SE processes as long as deliverables meet NASA requirements, while NASA staff follows NASA SE processes.',
          termIndices: [
            t('Contractor'),
            t('Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but creates integration risks. While contractor processes might be effective, inconsistent SE approaches can lead to interface problems and reduced system coherence.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Require NASA staff to follow NASA SE processes but let contractors manage their work however they prefer to avoid contractual complications.',
          termIndices: [
            t('Contract'),
            t('Contractor'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. This creates a two-tier SE approach that undermines system integration. NASA SE processes must apply consistently across all SE functions regardless of who performs them.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Iterative Design Reality Check',
      narrative:
        'Six months into detailed design, your Artemis habitat team discovers that the life support system architecture cannot meet updated crew safety requirements. The discovery requires revisiting system-level trades and potentially redesigning major subsystems. The program manager is concerned about schedule impact.',
      termHighlights: [
        t('Iterative'),
        t('Recursive'),
        t('System'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Apply SE processes iteratively and recursively - revisit system trades, update requirements, and redesign subsystems as needed to ensure safety requirements are met.',
          termIndices: [
            t('Iterative'),
            t('Recursive'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. NASA SE processes are applied recursively and iteratively throughout the life cycle. When requirements change or issues are discovered, the proper response is to re-apply the processes to correct discrepancies.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -2 },
        },
        {
          id: 'b',
          text: 'Accept the design limitation and work around it with operational procedures to avoid the cost and schedule impact of redesign.',
          termIndices: [
            t('System'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky but potentially acceptable depending on safety analysis. However, crew safety requirements typically cannot be compromised through operational workarounds alone. Consider if this truly meets stakeholder needs.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Request a waiver for the safety requirement to keep the current design and avoid schedule delays.',
          termIndices: [
            t('Need'),
            t('Goal'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Safety requirements for crew systems typically cannot be waived without extraordinary justification. This approach prioritizes schedule over the fundamental need to protect crew safety.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase D',
      title: 'Systems Thinking Integration',
      narrative:
        'As your projects near completion, you are preparing a lessons learned presentation for the NASA Engineering Network. Leadership wants to understand how the holistic, integrative nature of systems engineering added value across your diverse portfolio beyond what individual engineering disciplines could achieve independently.',
      termHighlights: [
        t('System'),
        t('Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Emphasize how SE processes enabled big-picture thinking, balanced opposing constraints, and optimized overall system performance rather than favoring individual subsystems.',
          termIndices: [
            t('System'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. This captures the essence of systems engineering as described in the handbook - it is a way of looking at the "big picture" when making technical decisions and balancing multiple disciplines to produce a coherent whole.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus on how SE processes improved documentation quality and ensured all required deliverables were completed on schedule.',
          termIndices: [
            t('Product'),
            t('Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Misses the point but acceptable. While documentation and deliverables are important, this focuses on process compliance rather than the systems thinking and integration value that SE provides.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Highlight how SE processes enabled better cost control and schedule management compared to discipline-specific approaches.',
          termIndices: [
            t('Process'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect focus. While SE may improve cost and schedule performance, this misses the fundamental value of systems engineering: the holistic integration of multiple disciplines and the systems thinking approach to complex problems.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully demonstrated the scalable and universal nature of NASA systems engineering. Your portfolio approach showed how SE processes apply across all project sizes while allowing appropriate tailoring, and how systems thinking creates value through integration and holistic design optimization.',
    failureNarrative:
      'Your approach missed key aspects of NASA SE scope and depth. Review how the 17 SE processes apply universally but require tailoring, how documentation can take various forms, and how systems engineering adds value through integrative thinking rather than just process compliance.',
    successThreshold: 60,
  },
}
