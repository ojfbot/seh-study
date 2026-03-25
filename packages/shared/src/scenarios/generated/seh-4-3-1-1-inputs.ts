import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh4311Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-4-3-1-1-inputs',
    title: 'Logical Decomposition Input Assembly',
    subtitle: 'Gather and validate inputs for functional analysis of a crew life support system',
    difficulty: 'intermediate',
    categories: ['requirements', 'design'],
    termIndices: [
      t('Technical Requirements'),
      t('Technical Measures'),
      t('Logical Decomposition Process'),
      t('Functional Analysis'),
      t('Measure of Effectiveness (MOE)'),
      t('Measure of Performance (MOP)'),
      t('Technical Performance Measures'),
      t('Validated Requirements'),
      t('Customer'),
      t('Stakeholder'),
      t('System'),
      t('Product'),
      t('Analysis'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Requirements Assembly',
      title: 'Technical Requirements Validation',
      narrative:
        'You are preparing to begin logical decomposition for the Environmental Control and Life Support System (ECLSS) of a new crewed transport vehicle. The customer has provided what they claim are validated technical requirements, but you notice discrepancies in documentation dates and approval signatures. Some requirements appear to be draft versions rather than customer-approved baselines.',
      termHighlights: [t('Technical Requirements'), t('Validated Requirements'), t('Customer')],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with logical decomposition using the available requirements since the content appears technically sound.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Using unvalidated requirements as input to logical decomposition will propagate uncertainty throughout the functional analysis. The logical decomposition process specifically requires validated requirements that have been approved by the customer and stakeholders to ensure the functional breakdown addresses the actual problem to be solved.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 2 },
        },
        {
          id: 'b',
          text: 'Halt the logical decomposition process and work with the customer to obtain properly validated and approved technical requirements.',
          termIndices: [t('Validated Requirements'), t('Customer'), t('Logical Decomposition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The logical decomposition process requires validated requirements as a fundamental input. Validated requirements ensure that the functional analysis will decompose the correct problem statement and that all stakeholder expectations are properly captured before proceeding with system architecture development.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Create your own technical requirements based on similar NASA missions and proceed with decomposition.',
          termIndices: [t('Technical Requirements'), t('Stakeholder')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Self-generated requirements bypass the customer approval process and may not reflect actual stakeholder expectations. Technical requirements must represent a validated description of the problem to be solved, established through proper functional and performance analysis with customer and stakeholder involvement.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -1, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Technical Measures Definition',
      title: 'Establishing Performance Metrics',
      narrative:
        'With validated technical requirements in hand, you now need to establish technical measures for the ECLSS logical decomposition. The customer wants to track system effectiveness in maintaining crew health, but the current documentation only provides basic performance specifications like flow rates and pressure ranges. You need to develop a comprehensive measurement framework.',
      termHighlights: [t('Technical Measures'), t('Measure of Effectiveness (MOE)'), t('Measure of Performance (MOP)')],
      decisions: [
        {
          id: 'a',
          text: 'Use only the existing flow rate and pressure specifications as technical measures since they are quantifiable and easily monitored.',
          termIndices: [t('Measure of Performance (MOP)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Flow rates and pressures are measures of performance (MOPs) that indicate how well the system performs specific functions, but they do not capture overall system effectiveness. Technical measures must include measures of effectiveness (MOEs) that assess mission success and customer satisfaction with the life support capability.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Develop a comprehensive set including MOEs for crew health maintenance, MOPs for subsystem performance, and TPMs for critical design parameters.',
          termIndices: [t('Measure of Effectiveness (MOE)'), t('Measure of Performance (MOP)'), t('Technical Performance Measures')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Technical measures require all three types: MOEs to assess overall system effectiveness and customer satisfaction, MOPs to measure specific performance characteristics, and TPMs to track critical technical parameters during development. This comprehensive approach supports effective logical decomposition by providing measurable criteria at each functional level.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Focus exclusively on measures of effectiveness since customer satisfaction is the primary concern for life support systems.',
          termIndices: [t('Measure of Effectiveness (MOE)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While MOEs are important for assessing overall system effectiveness, technical measures must also include MOPs and TPMs. MOPs provide measurable performance criteria for functional decomposition, and TPMs enable tracking of critical design parameters during implementation. All three types work together to support the logical decomposition process.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Input Validation',
      title: 'Stakeholder Alignment Check',
      narrative:
        'Before proceeding with functional analysis, you discover that the astronaut office has different expectations for ECLSS performance than what appears in the technical requirements document. The crew operations team expects 14-day autonomous operation capability, while the requirements specify 7-day autonomy. You must resolve this stakeholder alignment issue before beginning logical decomposition.',
      termHighlights: [t('Stakeholder'), t('Functional Analysis'), t('Technical Requirements')],
      decisions: [
        {
          id: 'a',
          text: 'Average the two expectations and specify 10-day autonomous operation as a compromise solution.',
          termIndices: [t('Stakeholder')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Averaging conflicting stakeholder expectations without proper analysis may result in a solution that satisfies neither party. Technical requirements must be established through proper stakeholder engagement and functional analysis, not arbitrary compromise. The logical decomposition process requires clear, agreed-upon requirements from all relevant stakeholders.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Convene a stakeholder meeting to analyze the operational scenarios and establish validated requirements that all parties approve.',
          termIndices: [t('Stakeholder'), t('Validated Requirements'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Conflicting stakeholder expectations must be resolved through proper analysis and stakeholder engagement before logical decomposition can begin. This ensures that the functional analysis addresses the correct problem and that all relevant parties have approved the technical requirements that will drive the system architecture.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Proceed with the 7-day requirement since it appears in the official documentation and defer the crew office concern for later phases.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Ignoring stakeholder concerns, especially from the end users, risks developing a system that fails to meet operational needs. The crew office represents critical stakeholders whose expectations must be considered in the technical requirements. Deferring this fundamental requirement conflict will compromise the entire logical decomposition process.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Process Initialization',
      title: 'Decomposition Readiness Assessment',
      narrative:
        'With stakeholder alignment achieved and technical measures defined, you are preparing to initialize the logical decomposition process for the ECLSS. Your team has assembled validated technical requirements, established comprehensive technical measures, and confirmed customer approval. However, you realize that the functional analysis will need to consider integration with other spacecraft systems that are still in early design phases.',
      termHighlights: [t('Logical Decomposition Process'), t('System'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Begin logical decomposition immediately with the current inputs and address system integration issues as they arise during functional analysis.',
          termIndices: [t('Functional Analysis'), t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While you have valid inputs for logical decomposition, proceeding without considering system integration dependencies may require significant rework. However, beginning with well-defined functional boundaries and addressing integration through interface management is an acceptable approach that maintains progress while managing technical risk.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Establish preliminary interface requirements and integration assumptions with other system teams before beginning functional analysis.',
          termIndices: [t('System'), t('Process'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. While complete integration definition may not be possible, establishing preliminary interface requirements and documented assumptions enables effective logical decomposition while maintaining traceability to integration dependencies. This approach provides the most complete input set for the functional analysis process.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until all interfacing systems complete their preliminary design before starting ECLSS logical decomposition.',
          termIndices: [t('Logical Decomposition Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Waiting for complete system definition would significantly delay the logical decomposition process and is unnecessary given proper interface management. The process can proceed effectively with validated requirements and technical measures, addressing integration through documented assumptions and interface control. This delay would impact the overall program schedule without providing proportional technical benefit.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: 4, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Input Quality Assessment',
      title: 'Final Input Verification',
      narrative:
        'As you conduct a final review of inputs before commencing logical decomposition, you notice that while the technical requirements are validated and the technical measures are comprehensive, some of the technical performance measures lack clear threshold values. The TPMs specify parameters to track but do not define acceptable ranges or critical limits for the ECLSS functional analysis.',
      termHighlights: [t('Technical Performance Measures'), t('Technical Measures'), t('Functional Analysis')],
      decisions: [
        {
          id: 'a',
          text: 'Proceed with logical decomposition and define TPM thresholds during the functional analysis as requirements are allocated to lower levels.',
          termIndices: [t('Technical Performance Measures'), t('Logical Decomposition Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. While complete TPM threshold definition is ideal, the logical decomposition process can proceed with identified parameters and develop specific threshold values as functional requirements are allocated to subsystem levels. This iterative approach is consistent with the recursive nature of systems engineering and allows technical measures to evolve with the functional architecture.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Halt the process and conduct additional analysis with stakeholders to define complete TPM threshold values before beginning decomposition.',
          termIndices: [t('Technical Performance Measures'), t('Analysis')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While complete TPM definition would be beneficial, halting logical decomposition for this level of detail may not be necessary. The process can accommodate iterative refinement of technical measures as the functional architecture develops. However, ensuring stakeholder agreement on measurement criteria is a valid concern that supports effective decomposition.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Remove the undefined TPMs from the technical measures set and proceed with only the fully defined MOEs and MOPs.',
          termIndices: [t('Technical Performance Measures'), t('Technical Measures')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Removing TPMs eliminates important technical measures that track critical design parameters during development. TPMs are a special subset of technical measures essential for monitoring system development progress. The logical decomposition process benefits from having identified TPM parameters even if threshold values require refinement during functional analysis.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully assembled the proper inputs for logical decomposition: validated technical requirements approved by customers and stakeholders, comprehensive technical measures including MOEs, MOPs, and TPMs, and appropriate stakeholder alignment. This foundation enables effective functional analysis that will accurately decompose the system problem and create a sound architectural basis for the ECLSS design.',
    failureNarrative:
      'The logical decomposition process was compromised by inadequate input preparation. Without properly validated requirements and comprehensive technical measures, the functional analysis may address the wrong problem or lack measurable criteria for success. Stakeholder misalignment and incomplete technical measures will propagate uncertainty throughout the system architecture development.',
    successThreshold: 60,
  },
}
