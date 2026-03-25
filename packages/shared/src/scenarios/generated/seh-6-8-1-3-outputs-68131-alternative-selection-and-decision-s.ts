import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6813Outputs68131AlternativeSelectionAndDecisionS: ScenarioTemplate = {
  meta: {
    id: 'seh-6-8-1-3-outputs-68131-alternative-selection-and-decision-s',
    title: 'Decision Documentation and Alternative Selection',
    subtitle: 'Document a critical propulsion system decision for NASA leadership review',
    difficulty: 'beginner',
    categories: ['project-mgmt', 'risk'],
    termIndices: [
      t('Decision Analysis Process'),
      t('Decision Matrix'),
      t('Trade Study'),
      t('Trade Study Report'),
      t('Risk Assessment'),
      t('Technical Risk'),
      t('Critical Design Review'),
      t('Analysis of Alternatives (AoA)'),
      t('Decision Authority'),
      t('Technical Team'),
      t('Continuous Risk Management'),
      t('Decision Support Package')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase C',
      title: 'Propulsion System Decision Crisis',
      narrative: 'Your Mars orbiter project faces a critical propulsion system decision just weeks before Critical Design Review. Three viable alternatives have emerged from your trade study, but the project manager needs a comprehensive decision report to present to the NASA review board. The decision will impact mission success and cost significantly.',
      termHighlights: [
        t('Decision Analysis Process'),
        t('Critical Design Review'),
        t('Trade Study')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document all decision analysis information in a comprehensive report following NASA standards, including decision matrix, rationale, and risk assessments.',
          termIndices: [
            t('Decision Analysis Process'),
            t('Decision Matrix'),
            t('Risk Assessment')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. NASA requires comprehensive documentation of all decision analysis information to support leadership decisions. A formal report with decision matrix provides the necessary backup for presentations and captures the full rationale.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Create a simple PowerPoint presentation with your recommendation and present it directly to the review board.',
          termIndices: [
            t('Decision Authority'),
            t('Technical Team')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While presentations are important, NASA requires documented backup materials. Without a formal report, the decision rationale is not properly captured and the review board lacks detailed analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Email a brief summary of your preferred option to the project manager and let them handle the documentation.',
          termIndices: [
            t('Technical Team')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. As the technical team, you are responsible for providing comprehensive decision documentation. Informal communication fails to meet NASA standards and leaves critical decisions without proper analytical backing.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Phase C',
      title: 'Building the Decision Matrix',
      narrative: 'You begin structuring the decision report with the decision matrix as the centerpiece. The three propulsion options each have different performance characteristics, costs, and technical risks. You need to establish the proper criteria and scoring methodology that will clearly demonstrate your analytical approach.',
      termHighlights: [
        t('Decision Matrix'),
        t('Analysis of Alternatives (AoA)'),
        t('Technical Risk')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish clear decision criteria with stakeholder input, assign appropriate weights, and document the complete setup rationale before scoring alternatives.',
          termIndices: [
            t('Decision Matrix'),
            t('Analysis of Alternatives (AoA)'),
            t('Decision Support Package')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The decision matrix setup rationale is critical for NASA decision reports. Clear criteria, justified weights, and documented methodology ensure the analysis is transparent and defensible to the review board.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Use standard engineering criteria like performance, cost, and schedule, and score each option based on your engineering judgment.',
          termIndices: [
            t('Decision Matrix'),
            t('Technical Team')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but could be stronger. While these are valid criteria, the approach lacks stakeholder input and documented rationale for weights. NASA decision reports require clear justification for all matrix setup decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Score the alternatives quickly based on obvious performance differences and move on to other report sections.',
          termIndices: [
            t('Decision Matrix')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Rushing the decision matrix without proper setup rationale undermines the entire analysis. NASA requires documented justification for criteria selection, weights, and evaluation methods to ensure decision integrity.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Documenting Risks and Benefits',
      narrative: 'With your decision matrix complete, you need to provide detailed risk and benefit analysis for each propulsion option being considered. The review board will scrutinize these assessments to understand the implications of each choice. Your analysis must be thorough and technically sound.',
      termHighlights: [
        t('Risk Assessment'),
        t('Technical Risk'),
        t('Continuous Risk Management')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document comprehensive risks and benefits for each final option, including technical risks, cost impacts, schedule implications, and mission success factors.',
          termIndices: [
            t('Risk Assessment'),
            t('Technical Risk'),
            t('Continuous Risk Management')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. NASA decision reports must include detailed risk and benefit analysis for all options under consideration. This comprehensive approach enables informed decision-making by clearly presenting all implications.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Focus primarily on technical risks since those are most relevant to engineering decisions, with brief mentions of cost and schedule.',
          termIndices: [
            t('Technical Risk'),
            t('Risk Assessment')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but limited. While technical risks are crucial, NASA decision-makers need comprehensive understanding of all risk categories including programmatic impacts. A narrow focus may lead to uninformed decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 }
        },
        {
          id: 'c',
          text: 'Provide a general risk statement noting that all options have been analyzed and deemed acceptable.',
          termIndices: [
            t('Risk Assessment')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Generic risk statements provide no value for decision-making. NASA requires specific, detailed risk and benefit analysis for each option to enable proper evaluation and informed choices.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -2 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Final Recommendation and Documentation',
      narrative: 'You are completing the decision report with your final recommendation. The analysis clearly favors Option B, but there was some dissenting opinion from the structures team who preferred Option A. You need to properly document both the recommendation and the dissent to provide complete transparency.',
      termHighlights: [
        t('Decision Support Package'),
        t('Decision Authority'),
        t('Trade Study Report')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Document your clear recommendation with supporting rationale, explicitly address the dissenting opinion, and explain how it was evaluated in your decision process.',
          termIndices: [
            t('Decision Support Package'),
            t('Decision Authority'),
            t('Trade Study Report')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. NASA decision reports must document both recommendations and dissent. Addressing dissenting opinions demonstrates thorough consideration of all viewpoints and strengthens the overall decision analysis.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Present your recommendation strongly and mention that some alternative views were considered but rejected based on the analysis.',
          termIndices: [
            t('Decision Support Package'),
            t('Technical Team')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While presenting a strong recommendation is appropriate, NASA standards require explicit documentation of dissenting opinions and how they were addressed, not just a brief mention.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Focus only on your recommended option to present a unified front and avoid confusing the decision-makers with conflicting opinions.',
          termIndices: [
            t('Decision Authority')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Hiding dissenting opinions violates NASA transparency requirements and deprives decision-makers of complete information. All significant viewpoints must be documented to ensure informed decision-making.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -1, budget: -2 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Phase C',
      title: 'Review Board Presentation',
      narrative: 'Your comprehensive decision report is complete and the review board meeting is tomorrow. You have documented the mission context, decision criteria, alternative evaluations, risk analysis, recommendations, and dissent. The project manager asks how you will present this complex analysis effectively to the board.',
      termHighlights: [
        t('Decision Analysis Process'),
        t('Critical Design Review'),
        t('Decision Authority')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Present the executive summary and key findings while emphasizing that the comprehensive written report provides complete analytical backup for all presentation materials.',
          termIndices: [
            t('Decision Analysis Process'),
            t('Critical Design Review'),
            t('Decision Authority')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The report serves as essential backup to presentation materials, ensuring the review board has access to complete analysis. This approach provides both accessible summary and detailed documentation as required by NASA.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 2 }
        },
        {
          id: 'b',
          text: 'Walk through the entire decision matrix in detail to show the board exactly how each score was determined.',
          termIndices: [
            t('Decision Matrix'),
            t('Critical Design Review')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but potentially ineffective. While transparency is valued, overwhelming the board with matrix details may obscure key messages. The written report should contain the detailed analysis while presentations focus on key findings.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Keep the presentation simple and avoid mentioning the detailed report unless specifically asked about analytical methods.',
          termIndices: [
            t('Decision Authority')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Not highlighting the comprehensive analytical backing undermines confidence in the decision process. NASA review boards expect to know that thorough analysis supports all recommendations.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -1 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'Excellent work on the decision documentation process. You properly followed NASA standards for decision analysis, created comprehensive backup materials, and ensured transparency throughout. Your systematic approach to documenting alternatives, rationale, and dissent will support informed decision-making by NASA leadership.',
    failureNarrative: 'Your approach to decision documentation needs improvement. NASA requires comprehensive written reports that serve as backup to presentation materials, with clear documentation of all alternatives, analysis methods, and dissenting opinions. Informal or incomplete documentation undermines the decision process and fails to meet agency standards.',
    successThreshold: 60,
  },
}
