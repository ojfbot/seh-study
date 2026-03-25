import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixGTechnologyAssessmentinsertionG1IntroductionPur: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-g-technology-assessmentinsertion-g1-introduction-pur',
    title: 'Technology Maturity Reality Check',
    subtitle: 'Navigate technology readiness gaps threatening your lunar gateway module',
    difficulty: 'advanced',
    categories: ['technology', 'risk', 'project-mgmt'],
    termIndices: [
      t('Technology Readiness Level'),
      t('Technology Assessment'),
      t('Technology Maturity Assessment'),
      t('Technology Development Plan'),
      t('Advancement Degree of Difficulty Assessment (AD2)'),
      t('Technology Readiness Assessment Report'),
      t('Product Breakdown Structure'),
      t('Key Decision Point'),
      t('Heritage (or legacy)'),
      t('Preliminary Design Review'),
      t('Earned Value Management'),
      t('Risk'),
      t('Descope'),
      t('Metric'),
      t('Feasible')
    ],
    estimatedMinutes: 20,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Pre-Phase A',
      title: 'Heritage System Assumptions',
      narrative:
        'Your lunar gateway module team proudly announces they will use the "proven" ISS environmental control system as heritage hardware, claiming TRL 9 status. However, this system was designed for LEO, not deep space radiation and thermal cycling. The project manager wants to proceed immediately to save development time and cost.',
      termHighlights: [t('Heritage (or legacy)'), t('Technology Readiness Level')],
      decisions: [
        {
          id: 'a',
          text: 'Conduct a formal Technology Assessment to determine actual TRL for the new lunar environment, recognizing that heritage systems often drop to TRL 5 when used in different architectures or environments.',
          termIndices: [t('Technology Assessment'), t('Technology Readiness Level'), t('Heritage (or legacy)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook explicitly states that heritage systems used in different architectures or environments typically drop to TRL 5. A systematic Technology Assessment will identify the real maturity gaps and development needs.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Accept the TRL 9 claim since the ISS system has flight heritage, and proceed with the assumption that minimal modifications will be needed.',
          termIndices: [t('Technology Readiness Level'), t('Heritage (or legacy)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Dangerous assumption. Using heritage systems in new environments without proper assessment often leads to schedule slips, cost overruns, and failures. The lunar environment presents significantly different challenges than LEO.',
          nextNodeId: null,
          scoreImpact: { risk: -6, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Require additional testing of the heritage system but maintain TRL 9 status since it has flight experience.',
          termIndices: [t('Heritage (or legacy)'), t('Technology Readiness Level')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Partially correct but misses the key point. Additional testing is good, but the TRL methodology requires dropping to TRL 5 for heritage systems in new environments until proven otherwise through systematic assessment.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'Systematic Technology Assessment Framework',
      narrative:
        'You convince leadership to conduct a proper Technology Assessment. Your team now needs to structure this assessment systematically across all project elements. Multiple subsystems show technology gaps, and stakeholders want to understand the development scope and associated risks.',
      termHighlights: [t('Technology Assessment'), t('Product Breakdown Structure')],
      decisions: [
        {
          id: 'a',
          text: 'Structure the Technology Assessment against the Product Breakdown Structure to systematically evaluate all systems, subsystems, and components while facilitating cost and schedule integration.',
          termIndices: [t('Technology Assessment'), t('Product Breakdown Structure'), t('Technology Maturity Assessment')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Using the PBS framework ensures comprehensive coverage and provides results in a format readily usable for program cost and schedule development, as recommended in the SE Handbook.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Focus the assessment only on the most critical subsystems to save time and avoid analysis paralysis.',
          termIndices: [t('Technology Assessment')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky shortcut. While focusing on critical items seems efficient, the SE Handbook emphasizes systematic evaluation to avoid letting important technologies "slip through the cracks." Missed dependencies could cause major issues later.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Delegate technology assessments to individual subsystem teams and compile their results.',
          termIndices: [t('Technology Assessment'), t('Technology Maturity Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Poor approach that lacks systematic rigor. Without a unified framework and assessment team, you lose consistency and miss integration challenges that affect overall system TRL.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase A',
      title: 'TRL Assessment Results',
      narrative:
        'Your systematic assessment reveals the environmental control system is actually TRL 4 for lunar applications, the power management system is TRL 6, and a new radiation-hardened processor is TRL 3. The project faces KDP-B in six months and needs to develop a realistic Technology Development Plan.',
      termHighlights: [t('Technology Development Plan'), t('Advancement Degree of Difficulty Assessment (AD2)')],
      decisions: [
        {
          id: 'a',
          text: 'Perform Advancement Degree of Difficulty assessments for all sub-TRL technologies to understand development requirements, then create a comprehensive Technology Development Plan with alternative paths and fallback positions.',
          termIndices: [t('Advancement Degree of Difficulty Assessment (AD2)'), t('Technology Development Plan'), t('Descope')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct methodology. The AD2 process determines what is required to advance technologies to needed TRLs, enabling realistic planning with alternatives and performance descopes as required by the SE Handbook.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Declare these findings as initial estimates and plan to reassess after KDP-B when more detailed designs are available.',
          termIndices: [t('Technology Development Plan'), t('Key Decision Point')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Backwards approach. KDP-B requires demonstrating technology readiness before proceeding to Phase C. Waiting until after KDP-B to address technology gaps violates the systematic development process.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: -3, budget: -3 },
        },
        {
          id: 'c',
          text: 'Focus development resources on the TRL 3 processor since it represents the highest risk, and assume the other technologies can be addressed in parallel development.',
          termIndices: [t('Technology Development Plan'), t('Risk')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Incomplete approach. While addressing the lowest TRL item is important, the SE Handbook requires comprehensive planning for all technology gaps with proper integration considerations and fallback options.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase A',
      title: 'Integration Challenges',
      narrative:
        'Your AD2 assessment reveals that while individual components may reach required TRLs, the integrated system presents new challenges. The environmental control, power, and processing subsystems have never been integrated in a lunar configuration, effectively creating additional integration TRL gaps.',
      termHighlights: [t('Technology Readiness Level'), t('Technology Assessment')],
      decisions: [
        {
          id: 'a',
          text: 'Recognize that integration affects TRL at every level and plan specific integration demonstrations, acknowledging that the integrated system TRL may be lower than individual component TRLs.',
          termIndices: [t('Technology Readiness Level'), t('Technology Assessment')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct understanding. The SE Handbook explicitly states that integration affects TRL at every level. Even if components achieve high TRLs individually, the integrated system requires demonstration.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -2, budget: -2 },
        },
        {
          id: 'b',
          text: 'Assume that if individual subsystems reach TRL 6, the integrated system will automatically achieve TRL 6 through standard integration testing.',
          termIndices: [t('Technology Readiness Level')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect assumption. Integration complexity can significantly reduce system TRL even when components are mature. This oversight often leads to major schedule and cost impacts during system integration.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -2 },
        },
        {
          id: 'c',
          text: 'Plan to address integration challenges during Phase C when detailed interfaces are defined.',
          termIndices: [t('Technology Readiness Level')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Too late in the process. Integration TRL gaps should be identified and addressed during Phase A/B to avoid major rework during implementation phases. Early planning enables better risk management.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase B',
      title: 'Progress Tracking and Metrics',
      narrative:
        'As development progresses, you need to track technology maturation progress and provide meaningful metrics to stakeholders. The Technology Development Plan calls for specific milestones, but team leads are reporting progress inconsistently, making it difficult to assess real advancement.',
      termHighlights: [t('Metric'), t('Earned Value Management')],
      decisions: [
        {
          id: 'a',
          text: 'Establish clear TRL advancement milestones with specific evidence requirements and integrate technology metrics into the Earned Value Management system for consistent progress tracking.',
          termIndices: [t('Metric'), t('Earned Value Management'), t('Technology Development Plan')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent integration approach. Using standardized TRL evidence requirements within the EVM framework provides objective progress measurement and enables early identification of development issues.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Rely on monthly team reports and engineering judgment to assess technology advancement progress.',
          termIndices: [t('Metric')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Subjective approach lacking rigor. Without standardized metrics and evidence requirements, progress assessment becomes inconsistent and unreliable, potentially masking real development problems until too late.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus tracking efforts only on technologies below TRL 5 since higher TRL items are considered lower risk.',
          termIndices: [t('Technology Readiness Level'), t('Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incomplete tracking strategy. All technologies in development require monitoring, and integration challenges can affect even high-TRL components. This approach misses important system-level risks.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-6',
    },
    {
      id: 'node-6',
      phase: 'Phase C',
      title: 'PDR Preparation',
      narrative:
        'Approaching Preliminary Design Review, you must prepare the Technology Readiness Assessment Report to demonstrate that all technologies have achieved required maturity levels. Some technologies are progressing slower than planned, and stakeholders are pressuring you to show green status across the board.',
      termHighlights: [t('Technology Readiness Assessment Report'), t('Preliminary Design Review')],
      decisions: [
        {
          id: 'a',
          text: 'Provide an honest assessment based on demonstrated evidence, clearly identifying any technologies that have not yet achieved required TRLs and their impact on project risk.',
          termIndices: [t('Technology Readiness Assessment Report'), t('Preliminary Design Review'), t('Risk')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Professional integrity approach. The TRAR must accurately document technology maturity with evidence. Honest assessment enables proper risk management and informed decision-making at PDR.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Report optimistic TRL assessments based on projected progress to avoid delays, planning to address any gaps during detailed design.',
          termIndices: [t('Technology Readiness Assessment Report'), t('Technology Readiness Level')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Unethical and dangerous approach. Misrepresenting technology maturity undermines the entire project lifecycle process and sets up the project for major problems during implementation phases.',
          nextNodeId: null,
          scoreImpact: { risk: -8, schedule: -3, budget: -4 },
        },
        {
          id: 'c',
          text: 'Request additional time to complete technology demonstrations before PDR to ensure all technologies achieve required TRLs.',
          termIndices: [t('Technology Readiness Assessment Report'), t('Preliminary Design Review'), t('Feasible')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Conservative but potentially feasible approach. While ensuring technology maturity is important, this may indicate inadequate planning earlier in the process. The impact on project schedule needs careful evaluation.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully navigated the complex technology assessment process, properly identifying heritage system limitations, conducting systematic evaluations, and maintaining assessment integrity throughout development. Your approach aligns with SE Handbook best practices for technology risk management.',
    failureNarrative:
      'Technology assessment shortcuts and optimistic assumptions caught up with your project. Poor early assessment led to unrealistic planning, inadequate risk management, and potential technical failures that could have been avoided with proper systematic processes.',
    successThreshold: 60,
  },
}
