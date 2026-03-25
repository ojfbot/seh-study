import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh3111IntroductionNasaPolicyRecognizesTheNeedToAc: ScenarioTemplate = {
  meta: {
    id: 'seh-3-11-1-introduction-nasa-policy-recognizes-the-need-to-ac',
    title: 'Tailoring SE Requirements for Mars Rover Mission',
    subtitle: 'Navigate the balance between SE compliance and mission-specific needs',
    difficulty: 'intermediate',
    categories: ['requirements', 'project-mgmt', 'risk'],
    termIndices: [
      t('Tailoring'),
      t('Acceptable Risk'),
      t('Mission'),
      t('Program'),
      t('Project'),
      t('Customer'),
      t('Objective'),
      t('Process'),
      t('Requirement'),
      t('Stakeholder'),
      t('System'),
      t('Risk'),
      t('Systems Engineering Management Plan (SEMP)'),
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Requirements Assessment',
      title: 'SE Requirements vs. Project Constraints',
      narrative:
        'Your Mars rover project has a compressed 18-month development schedule and limited budget compared to flagship missions. The customer expects full NPR 7123.1 compliance, but preliminary analysis shows certain requirements may be excessive for your focused mission objectives. Your project manager asks you to evaluate options for managing this challenge.',
      termHighlights: [t('Project'), t('Mission'), t('Requirement')],
      decisions: [
        {
          id: 'a',
          text: 'Implement all NPR 7123.1 requirements as written to ensure complete compliance, regardless of cost or schedule impact.',
          termIndices: [t('Requirement'), t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While compliance is important, NASA policy explicitly recognizes that rigid adherence without consideration of project-specific needs can lead to inefficient resource use. The policy encourages tailoring to achieve mission success within constraints.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -4, budget: -4 },
        },
        {
          id: 'b',
          text: 'Propose a tailoring approach that seeks relief from specific NPR requirements while maintaining mission success capability.',
          termIndices: [t('Tailoring'), t('Mission'), t('Acceptable Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Tailoring is the NASA-approved process for seeking relief from SE NPR requirements when consistent with program objectives, allowable risk, and constraints. This approach balances compliance with mission-specific needs.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Ignore problematic requirements without formal documentation, focusing only on mission-critical elements.',
          termIndices: [t('Requirement')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Ignoring requirements without formal process violates NASA policy and creates compliance issues. Tailoring requires documentation of deviations or waivers, typically in the SEMP Compliance Matrix.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Stakeholder Alignment',
      title: 'Building Consensus on Risk Posture',
      narrative:
        'You decide to pursue tailoring but recognize that success requires stakeholder agreement on acceptable risk levels. The customer wants minimal risk, your project team wants maximum flexibility, and center management wants clear justification. You need to establish a framework for risk acceptance before proceeding with specific tailoring requests.',
      termHighlights: [t('Acceptable Risk'), t('Stakeholder'), t('Customer')],
      decisions: [
        {
          id: 'a',
          text: 'Develop a risk assessment matrix showing how proposed tailoring affects technical, cost, and schedule risk domains.',
          termIndices: [t('Risk'), t('Acceptable Risk'), t('Stakeholder')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. NASA policy emphasizes that acceptable risk must be understood and agreed upon by the project, customer, stakeholder, center management, and independent reviewers. A clear risk assessment facilitates this agreement.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Present only the cost and schedule benefits of tailoring, minimizing discussion of increased risks.',
          termIndices: [t('Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Withholding risk information undermines stakeholder trust and violates the principle that acceptable risk must be understood and agreed upon by all parties. Transparent communication is essential for effective tailoring.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Let each stakeholder group define their own acceptable risk levels independently without coordination.',
          termIndices: [t('Stakeholder'), t('Acceptable Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Uncoordinated risk acceptance leads to conflicting expectations and project failure. NASA policy requires that acceptable risk be agreed upon by all relevant parties, not determined independently.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Documentation Strategy',
      title: 'Formal Tailoring Process',
      narrative:
        'With stakeholder agreement on acceptable risk levels, you now need to formalize your tailoring requests. Some changes require waivers or deviations, while others might be handled through customization of SE practices. Your team has identified five specific areas where standard NPR requirements don\'t align well with your focused rover mission.',
      termHighlights: [t('Tailoring'), t('Systems Engineering Management Plan (SEMP)')],
      decisions: [
        {
          id: 'a',
          text: 'Document all changes as deviations requiring formal waiver approval, regardless of their nature or scope.',
          termIndices: [t('Process'), t('Systems Engineering Management Plan (SEMP)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Not all modifications require formal waivers. NASA policy distinguishes between tailoring (requiring deviations/waivers) and customization (modification of practices that doesn\'t require waivers but should be documented in the SEMP).',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -2 },
        },
        {
          id: 'b',
          text: 'Categorize changes as either tailoring (requiring waivers) or customization (practice modifications) and document appropriately in the SEMP.',
          termIndices: [t('Tailoring'), t('Systems Engineering Management Plan (SEMP)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect. NASA policy makes this important distinction. Tailoring seeks relief from NPR requirements and requires formal waivers, while customization modifies recommended practices without requiring waivers. Both should be documented in the SEMP.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Implement all changes as informal customizations without formal documentation to avoid bureaucratic delays.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Significant customization should be documented in the SEMP, and any relief from NPR requirements must go through formal tailoring with waivers or deviations. Informal implementation creates compliance and traceability issues.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Implementation Review',
      title: 'Lessons Learned Integration',
      narrative:
        'Your tailoring approach is approved and documented. Now you\'re implementing the customized SE practices for your rover project. The policy emphasizes that effective tailoring should reflect lessons learned and best practices from similar missions. You have access to data from previous small rover projects, but limited time to analyze it thoroughly.',
      termHighlights: [t('Process'), t('Mission'), t('Objective')],
      decisions: [
        {
          id: 'a',
          text: 'Focus implementation on your current project needs without reviewing lessons learned from other missions.',
          termIndices: [t('Mission'), t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Ignoring lessons learned misses a key element of effective tailoring. NASA policy specifically states that tailoring should reflect lessons learned and best practices to make the process more systematic and efficient.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Delay implementation to conduct exhaustive analysis of all available lessons learned data from similar projects.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While lessons learned are important, exhaustive analysis can become counterproductive. The goal is systematic and efficient tailoring, not perfect analysis that delays mission progress.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -1 },
        },
        {
          id: 'c',
          text: 'Incorporate relevant lessons learned from similar small projects while maintaining project schedule momentum.',
          termIndices: [t('Mission'), t('Process'), t('Objective')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent balance. Effective tailoring incorporates lessons learned and best practices to make the process systematic and efficient, while avoiding analysis paralysis that undermines project objectives.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Success Evaluation',
      title: 'Measuring Tailoring Effectiveness',
      narrative:
        'Six months into implementation, your tailored SE approach is showing results. Technical milestones are being met on schedule, and the team is operating efficiently within budget constraints. However, you need to demonstrate that your tailoring decisions are achieving the desired benefits while maintaining appropriate risk levels for final project approval.',
      termHighlights: [t('Objective'), t('Risk'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Focus metrics solely on cost and schedule performance to prove tailoring value.',
          termIndices: [t('Objective')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Cost and schedule are important, but NASA policy requires tailoring to be consistent with program objectives, allowable risk, and constraints. Measuring only cost and schedule ignores the critical risk dimension.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Develop metrics that demonstrate achievement of mission objectives while staying within acceptable risk bounds and project constraints.',
          termIndices: [t('Mission'), t('Objective'), t('Acceptable Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect approach. This aligns with NASA policy that tailoring should be consistent with program objectives, allowable risk, and constraints. Comprehensive metrics demonstrate that tailoring is achieving its intended purpose.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Avoid formal measurement since the project is progressing smoothly without obvious problems.',
          termIndices: [t('System')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Lack of obvious problems doesn\'t validate tailoring effectiveness. Formal measurement is needed to demonstrate that the tailoring is achieving desired benefits and maintaining acceptable risk levels as intended.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully applied NASA\'s tailoring policy to balance SE compliance with mission-specific needs. Your systematic approach to risk assessment, stakeholder alignment, and formal documentation demonstrates effective use of tailoring as a systems engineering tool.',
    failureNarrative:
      'Your approach to SE requirements management missed key principles of NASA\'s tailoring policy. Effective tailoring requires formal processes, stakeholder agreement on acceptable risk, and systematic incorporation of lessons learned to achieve mission success within constraints.',
    successThreshold: 60,
  },
}
