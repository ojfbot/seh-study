import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6811Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-6-8-1-1-inputs',
    title: 'Complex Decision Analysis Inputs',
    subtitle: 'Determine when formal decision analysis is warranted for Mars rover power system selection',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'risk'],
    termIndices: [
      t('Decision Analysis Process'),
      t('Risk'),
      t('Analysis'),
      t('Evaluation'),
      t('Technical Requirements'),
      t('Safety'),
      t('Environmental Impact'),
      t('Mission'),
      t('Customer'),
      t('Objective'),
      t('Program'),
      t('Project'),
      t('Trade Study'),
      t('Technical Risk'),
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Decision Need Assessment',
      title: 'Power System Selection Crisis',
      narrative:
        'Your Mars rover project faces a critical power system decision after the primary nuclear option fails certification testing. Three alternative power systems are under consideration: enhanced solar arrays, hybrid nuclear-solar, and advanced fuel cells. The project manager asks you to determine what level of analysis is needed given the complexity, uncertainty, stakeholder diversity, and safety implications.',
      termHighlights: [t('Decision Analysis Process'), t('Safety'), t('Technical Risk')],
      decisions: [
        {
          id: 'a',
          text: 'Recommend a quick engineering judgment call in the next team meeting since all options are technically feasible.',
          termIndices: [t('Evaluation')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This oversimplifies a complex decision with significant mission, safety, and cost implications. The diversity of stakeholders (science teams, operations, safety boards) and multiple technical attributes (power density, reliability, environmental impact) warrant more thorough analysis than a simple meeting can provide.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Initiate formal decision analysis process due to complexity, uncertainty, multiple attributes, and diverse stakeholders.',
          termIndices: [t('Decision Analysis Process'), t('Risk'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. This decision meets all four criteria for formal decision analysis: complexity in understanding power system ramifications, uncertainty in performance on Mars, multiple attributes (power, mass, cost, safety), and diverse stakeholders with different priorities. The high-stakes nature of mission success justifies comprehensive analysis.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 2 },
        },
        {
          id: 'c',
          text: 'Defer the decision until more test data is available to eliminate all uncertainty.',
          termIndices: [t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Waiting to eliminate all uncertainty is unrealistic and will delay the mission beyond acceptable schedule constraints. The decision analysis process is specifically designed to handle uncertainty through risk assessment and probabilistic modeling while maintaining project momentum.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 4, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Input Identification',
      title: 'Gathering Decision Inputs',
      narrative:
        'You\'ve initiated the formal decision analysis process. Now you must identify and gather the comprehensive technical, cost, and schedule inputs needed. The customer has provided high-level mission objectives, but you need supporting data from multiple engineering disciplines. Various stakeholders are requesting different types of analysis to support their concerns.',
      termHighlights: [t('Customer'), t('Mission'), t('Technical Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Focus only on technical performance data since engineering specifications are the most objective inputs.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Technical data alone is insufficient for comprehensive decision analysis. Cost and schedule inputs are equally critical, and qualitative factors like safety margins and environmental impact must also be considered. A narrow focus on technical specifications will lead to suboptimal decisions.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 2 },
        },
        {
          id: 'b',
          text: 'Collect comprehensive inputs including technical performance, life cycle costs, schedule impacts, safety assessments, and environmental considerations.',
          termIndices: [t('Analysis'), t('Safety'), t('Environmental Impact')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Comprehensive decision analysis requires inputs from all relevant domains - technical, cost, schedule, safety, and environmental. This holistic approach ensures that the decision considers all stakeholder concerns and mission requirements, leading to more robust and defensible conclusions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Request each stakeholder group to provide their own separate analysis and recommendations.',
          termIndices: [t('Evaluation')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Separate stakeholder analyses without integration leads to conflicting recommendations and decision paralysis. The decision analysis process should synthesize diverse inputs into a unified framework that can evaluate trade-offs between competing objectives systematically.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 3, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Analysis Support Requests',
      title: 'Managing Analysis Requests',
      narrative:
        'Analysis support requests are flooding in from technical, cost, and schedule assessment processes. The thermal team wants detailed heat rejection studies, the structures team needs mass property analysis, mission operations requests power budget assessments, and the program office demands cost-benefit analysis. You must prioritize which analyses are essential versus nice-to-have given resource and schedule constraints.',
      termHighlights: [t('Analysis'), t('Program'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Approve all analysis requests to ensure no important factor is overlooked in the decision.',
          termIndices: [t('Analysis')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Approving all requests without prioritization will consume excessive resources and time, potentially delaying the critical decision. The section emphasizes that formal decision analysis should be commensurate with consequences - not every analysis request is equally vital to the decision outcome.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 5, budget: 4 },
        },
        {
          id: 'b',
          text: 'Prioritize analyses based on their impact on key decision criteria and stakeholder concerns, focusing resources on high-consequence factors.',
          termIndices: [t('Analysis'), t('Objective'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The analysis effort should be commensurate with the consequences and focused on factors that significantly influence the decision outcome. Prioritizing based on impact ensures efficient resource utilization while maintaining decision quality and addressing primary stakeholder concerns.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Reject most analysis requests and rely primarily on heritage data from previous Mars missions.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Over-reliance on heritage data ignores the unique aspects of this mission and the specific characteristics of the power system alternatives. While heritage provides valuable baseline information, new analysis is needed to address the specific decision alternatives and their implications for this mission.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Decision Criteria Definition',
      title: 'Establishing Evaluation Framework',
      narrative:
        'With inputs being gathered, you must now define the criteria for evaluating the power system alternatives. The customer expects the rover to operate for at least two years with specific power requirements. Technology limitations, environmental conditions on Mars, safety considerations, total ownership costs, and schedule impacts all need to be factored into the evaluation framework.',
      termHighlights: [t('Customer'), t('Safety'), t('Environmental Impact')],
      decisions: [
        {
          id: 'a',
          text: 'Create a simple pass/fail checklist based only on minimum technical requirements and cost constraints.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'A binary pass/fail approach fails to capture the nuances and trade-offs inherent in complex decisions. Multiple attributes like safety margins, environmental impact, and life cycle costs require comparative evaluation rather than simple threshold checks to support optimal decision making.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Develop a comprehensive evaluation framework incorporating customer expectations, technology limitations, environmental impact, safety, life cycle costs, and schedule considerations.',
          termIndices: [t('Customer'), t('Safety'), t('Environmental Impact')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. This comprehensive approach addresses all the criteria types mentioned in the section and provides a robust framework for evaluating alternatives across multiple dimensions. This ensures that all stakeholder concerns and mission requirements are systematically considered in the decision process.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus evaluation criteria exclusively on what the science teams consider most important for mission success.',
          termIndices: [t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Focusing solely on science team priorities ignores other critical stakeholder concerns including safety, cost, and operational considerations. The decision analysis process must balance diverse stakeholder perspectives rather than optimizing for a single viewpoint, especially when safety and program sustainability are at stake.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Decision Analysis Execution',
      title: 'Resource Allocation Decision',
      narrative:
        'The decision analysis framework is established, but executing the full analysis will require significant engineering resources over six weeks. The program manager is concerned about the time and cost investment, especially since the decision must be made to maintain the launch window. You need to justify the resource allocation for formal decision analysis given the high stakes nature of the power system selection.',
      termHighlights: [t('Program'), t('Project'), t('Trade Study')],
      decisions: [
        {
          id: 'a',
          text: 'Reduce the analysis scope to save time and resources, accepting that some uncertainty will remain in the decision.',
          termIndices: [t('Trade Study')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this approach saves resources, it may leave critical uncertainties unresolved that could impact mission success. For high-stakes decisions like power system selection, the cost of inadequate analysis often exceeds the investment in comprehensive evaluation, especially given the mission\'s importance.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Proceed with full decision analysis, emphasizing that the resource investment is justified by the high stakes impact on mission success, cost, and safety.',
          termIndices: [t('Decision Analysis Process'), t('Safety'), t('Mission')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The section emphasizes that formal decision analysis is warranted when decisions have potential for high stakes impacts to cost, safety, or mission success criteria. The power system selection clearly meets this threshold, making the resource investment in comprehensive analysis both appropriate and necessary.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 2 },
        },
        {
          id: 'c',
          text: 'Cancel the formal decision analysis and make an immediate decision based on available information to avoid schedule delays.',
          termIndices: [t('Project')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach prioritizes short-term schedule concerns over long-term mission success. Given the complexity, uncertainty, multiple attributes, and high-stakes nature of the power system decision, abandoning formal analysis risks making a suboptimal choice that could compromise the entire mission.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -3, budget: -1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully applied the principles of decision analysis input management, recognizing when formal analysis is warranted and ensuring comprehensive inputs are gathered efficiently. Your systematic approach balanced stakeholder needs with resource constraints while maintaining focus on mission-critical factors.',
    failureNarrative: 'The decision analysis process was compromised by inadequate input management, either through oversimplification of complex factors or inefficient resource allocation. This could lead to suboptimal power system selection with significant consequences for mission success and safety.',
    successThreshold: 60,
  },
}
