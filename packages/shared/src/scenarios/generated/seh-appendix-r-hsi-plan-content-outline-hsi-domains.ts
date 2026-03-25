import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixRHsiPlanContentOutlineHsiDomains: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-r-hsi-plan-content-outline-hsi-domains',
    title: 'Gateway Module HSI Domain Integration',
    subtitle: 'Integrate human factors domains into lunar gateway module design',
    difficulty: 'beginner',
    categories: ['human-factors', 'requirements', 'design'],
    termIndices: [
      t('Human Systems Integration'),
      t('Human-Centered Design'),
      t('Human Factors Engineering'),
      t('Mission'),
      t('Process'),
      t('Requirement'),
      t('Safety'),
      t('Key Performance Parameter'),
      t('Life Cycle Cost (LCC)'),
      t('System'),
      t('Goal'),
      t('Program'),
      t('Project'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase A',
      title: 'HSI Domain Identification',
      narrative:
        'You are leading the HSI effort for NASA\'s lunar Gateway habitat module. The project manager asks you to identify which human performance domains will directly affect mission success. With limited crew time and resources, you must prioritize the most critical HSI domains for integration into the systems engineering process.',
      termHighlights: [
        t('Human Systems Integration'),
        t('Mission'),
        t('Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a systematic analysis to identify HSI domains (habitability, human factors, safety, training) that directly impact mission success probability, then develop integration processes for each domain.',
          termIndices: [
            t('Human Systems Integration'),
            t('Human Factors Engineering'),
            t('Safety'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Systematically identifying HSI domains that directly affect mission success probability is the proper approach. This ensures all critical human performance factors are integrated into the systems engineering process from the start.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus only on safety-related HSI domains since crew safety is the top priority for Gateway operations.',
          termIndices: [
            t('Safety'),
            t('Human Systems Integration'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but incomplete. While safety is critical, limiting HSI to only safety domains misses other factors like habitability, human factors engineering, and training that also directly impact mission success probability.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Skip formal HSI domain identification and rely on existing space station heritage designs.',
          termIndices: [
            t('Human Systems Integration'),
            t('System'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Heritage designs may not address Gateway-specific human performance requirements. Skipping HSI domain identification violates the requirement to identify domains that directly affect program success probability.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'HSI Requirements Definition',
      narrative:
        'With HSI domains identified, you need to define specific HSI requirements that contribute to mission success, affordability, and operational effectiveness. The Gateway module will operate with minimal crew for extended periods, requiring careful consideration of manpower, skill requirements, and training needs.',
      termHighlights: [
        t('Requirement'),
        t('Mission'),
        t('Human-Centered Design'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Define HSI requirements that influence system design to optimize crew workload, required skill sets, and training requirements while following NASA-STD-3001 human-centered design processes.',
          termIndices: [
            t('Requirement'),
            t('Human-Centered Design'),
            t('System'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. HSI requirements should directly influence system design to moderate manpower needs, skill requirements, and training while following established NASA human-centered design standards. This ensures mission success and cost effectiveness.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 2 },
        },
        {
          id: 'b',
          text: 'Create generic HSI requirements based on previous NASA missions without considering Gateway-specific operational constraints.',
          termIndices: [
            t('Requirement'),
            t('Mission'),
            t('Goal'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but suboptimal. Generic requirements may not address Gateway\'s unique operational environment. Program-specific HSI requirements should be derived to address specific manpower, skill, and training challenges.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Postpone HSI requirements definition until after the system architecture is finalized.',
          termIndices: [
            t('Requirement'),
            t('System'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. HSI requirements must be defined early to influence system design. Waiting until after architecture is finalized means HSI considerations cannot properly moderate manpower, skill, and training requirements in the design.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase B',
      title: 'HSI Performance Measures',
      narrative:
        'Your HSI plan needs to establish clear measures of effectiveness to verify HSI requirements and track HSI performance throughout the life cycle. The project office wants to understand how HSI measures connect to overall program performance indicators.',
      termHighlights: [
        t('Key Performance Parameter'),
        t('Goal'),
        t('Life Cycle Cost (LCC)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish HSI measures of effectiveness that verify requirements and identify functional connections between HSI measures and key program performance indicators used throughout the life cycle.',
          termIndices: [
            t('Key Performance Parameter'),
            t('Requirement'),
            t('Goal'),
            t('Life Cycle Cost (LCC)'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Establishing HSI measures of effectiveness that connect to key performance measures ensures HSI effectiveness can be tracked and verified throughout the program life cycle, supporting overall mission success.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Use standard spacecraft performance measures without specific HSI effectiveness indicators.',
          termIndices: [
            t('Key Performance Parameter'),
            t('Human Systems Integration'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but inadequate. Standard spacecraft measures may not capture HSI effectiveness. Specific HSI measures of effectiveness are needed to verify requirements and track human performance aspects throughout the life cycle.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Rely on subjective crew feedback as the only measure of HSI effectiveness.',
          termIndices: [
            t('Key Performance Parameter'),
            t('Human Systems Integration'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Subjective feedback alone cannot provide the quantitative measures of effectiveness needed to verify HSI requirements. Objective, measurable HSI performance indicators connected to program KPPs are essential.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase B',
      title: 'HSI Integration Strategy',
      narrative:
        'The project manager asks you to finalize the HSI integration strategy for the Gateway module program. You need to document how HSI domain knowledge will be integrated into the broader systems engineering processes and how HSI will be managed across the program life cycle.',
      termHighlights: [
        t('Process'),
        t('Program'),
        t('Project'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document a comprehensive HSI integration strategy that defines processes to apply, validate, evaluate, and mitigate HSI domain knowledge while integrating HSI inputs into all systems engineering processes.',
          termIndices: [
            t('Process'),
            t('Human Systems Integration'),
            t('System'),
            t('Program'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A comprehensive integration strategy ensures HSI domain knowledge is systematically applied, validated, and integrated into systems engineering processes throughout the program, maximizing HSI effectiveness.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Create separate HSI processes that run parallel to systems engineering without formal integration points.',
          termIndices: [
            t('Process'),
            t('Human Systems Integration'),
            t('System'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but ineffective. Parallel processes without integration points reduce HSI effectiveness. HSI domain knowledge must be integrated into systems engineering processes to influence design decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Handle HSI integration on an ad hoc basis as issues arise during development.',
          termIndices: [
            t('Process'),
            t('Human Systems Integration'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Ad hoc HSI integration violates the requirement for systematic processes to apply and integrate HSI domain knowledge. This approach leads to missed requirements and costly late-stage design changes.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -3, budget: -4 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'Excellent work developing a comprehensive HSI plan for the Gateway module. Your systematic approach to identifying critical HSI domains, defining requirements, establishing performance measures, and creating integration processes will ensure human factors are properly considered throughout the program life cycle.',
    failureNarrative:
      'Your HSI planning needs improvement. Without systematic domain identification, clear requirements, and proper integration processes, human performance factors may not be adequately addressed, potentially leading to operational difficulties and mission risks.',
    successThreshold: 60,
  },
}
