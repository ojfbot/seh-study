import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh6411Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-6-4-1-1-inputs',
    title: 'Risk Management Input Collection',
    subtitle: 'Gather the right inputs to establish effective technical risk management',
    difficulty: 'beginner',
    categories: ['risk', 'project-mgmt'],
    termIndices: [
      t('Risk Management'),
      t('Technical Risk'),
      t('Risk Assessment'),
      t('Baseline'),
      t('Data Management'),
      t('Process'),
      t('Program'),
      t('Metric'),
      t('Mitigation'),
      t('Analysis'),
      t('Product'),
      t('Stakeholder Expectations'),
      t('Concept of Operations (ConOps) (Concept Documentation)'),
    ],
    estimatedMinutes: 15,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'Phase A',
      title: 'Establishing Risk Management Foundation',
      narrative:
        'As the HSI Lead for an ISS science experiment, you need to establish technical risk management for your project. Your project manager asks what inputs you need to begin the risk management process effectively. The project is still in early formulation, but you want to ensure all necessary documentation and processes are identified.',
      termHighlights: [
        t('Risk Management'),
        t('Technical Risk'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Request the Project Risk Management Plan and current project baseline documentation to establish the risk management strategy and context.',
          termIndices: [
            t('Risk Management'),
            t('Baseline'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Project Risk Management Plan provides the strategy for conducting technical risk management, while baseline documentation establishes the current project context. These are foundational inputs identified in SEH 6.4.1.1.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Start identifying technical risks immediately based on your experience with similar ISS experiments.',
          termIndices: [
            t('Technical Risk'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but premature. While experience is valuable, you need the proper input documentation first. Without the Project Risk Management Plan and baseline, your risk identification lacks strategic context and may miss important areas.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until the design is more mature before worrying about risk management inputs.',
          termIndices: [
            t('Risk Management'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Risk management must begin early in the project lifecycle. Waiting until design maturity means missing opportunities for early risk identification and mitigation planning, potentially leading to costly design changes later.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'Gathering Technical Assessment Inputs',
      narrative:
        'With the foundational documents secured, you now need inputs from other technical processes to support risk assessment activities. The Technical Assessment Process has been generating analysis results, and you need to determine what specific outputs will help identify and assess technical risks for your ISS experiment.',
      termHighlights: [
        t('Risk Assessment'),
        t('Technical Assessment Process'),
        t('Analysis'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Request Technical Risk Issues and Technical Risk Status Measurements from the Technical Assessment and Decision Analysis Processes.',
          termIndices: [
            t('Technical Risk'),
            t('Risk Assessment'),
            t('Technical Assessment Process'),
            t('Analysis'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. These are specific inputs identified in SEH 6.4.1.1 that come from Technical Assessment and Decision Analysis Processes. They provide the technical foundation needed to conduct risk assessment and prepare for mitigation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Ask for all technical analysis outputs regardless of their relevance to risk management.',
          termIndices: [
            t('Analysis'),
            t('Technical Assessment Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but inefficient. While comprehensive data gathering seems thorough, it can overwhelm the risk process with irrelevant information. Focus on specific risk-related outputs like Technical Risk Issues and Status Measurements.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Only request final analysis conclusions since detailed technical data is not needed for risk management.',
          termIndices: [
            t('Analysis'),
            t('Risk Management'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Risk management requires detailed technical inputs, not just conclusions. Technical Risk Issues and Status Measurements provide the specific data needed for effective risk assessment and mitigation planning.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Phase A',
      title: 'Defining Risk Reporting Requirements',
      narrative:
        'Your risk management process is taking shape, but you need to establish how technical risks will be communicated to stakeholders. The project manager wants to understand the reporting structure for technical risks, including frequency and audience. You need to define Technical Risk Reporting Requirements as an input to the risk management process.',
      termHighlights: [
        t('Technical Risk'),
        t('Stakeholder'),
        t('Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Define Technical Risk Reporting Requirements specifying how risks will be reported, frequency of reporting, and target audiences.',
          termIndices: [
            t('Technical Risk'),
            t('Process'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Technical Risk Reporting Requirements are a key input identified in SEH 6.4.1.1. They establish how technical risks will be communicated, ensuring stakeholders receive appropriate risk information at the right intervals.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Use the standard NASA risk reporting format without customizing it for your specific project needs.',
          termIndices: [
            t('Technical Risk'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but not optimal. While standard formats provide consistency, each project has unique stakeholder needs and risk profiles. Customized Technical Risk Reporting Requirements ensure more effective communication.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Decide that risk reporting can be handled informally through team meetings and email updates.',
          termIndices: [
            t('Technical Risk'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Informal risk reporting lacks the systematic approach required for effective risk management. Technical Risk Reporting Requirements ensure consistent, thorough communication to all relevant stakeholders.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Phase A',
      title: 'Collecting Additional Useful Inputs',
      narrative:
        'Beyond the typical inputs, you recognize that additional information could enhance your risk management effectiveness. Your team has access to stakeholder expectations, the concept of operations, and relevant experience data from previous ISS experiments. You need to determine which additional inputs will most benefit your technical risk management process.',
      termHighlights: [
        t('Stakeholder Expectations'),
        t('Concept of Operations (ConOps) (Concept Documentation)'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Gather stakeholder expectations, concept of operations, imposed constraints, and relevant experience data to enhance risk identification.',
          termIndices: [
            t('Stakeholder Expectations'),
            t('Concept of Operations (ConOps) (Concept Documentation)'),
            t('Technical Risk'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. These are additional inputs identified in SEH 6.4.1.1 that enhance risk management. Stakeholder expectations and ConOps provide context for risk identification, while experience data helps assess likelihood and consequences.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Focus only on the typical inputs since additional inputs might complicate the risk management process.',
          termIndices: [
            t('Risk Management'),
            t('Process'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but limited. While focusing on typical inputs ensures you meet minimum requirements, additional inputs like stakeholder expectations and ConOps provide valuable context that can significantly improve risk identification and assessment.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Collect every available document and data set to ensure nothing is missed in risk management.',
          termIndices: [
            t('Risk Management'),
            t('Data Management'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. While thoroughness is important, collecting excessive inputs can overwhelm the risk management process and delay progress. Focus on the specific additional inputs that provide clear value: stakeholder expectations, ConOps, constraints, and experience data.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -3, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'Phase A',
      title: 'Implementing Input Collection Process',
      narrative:
        'With all necessary inputs identified, you now need to establish a systematic process for collecting, organizing, and maintaining these inputs throughout the project lifecycle. The project manager emphasizes that this input collection process must be sustainable and not burden other technical processes. You need to finalize your approach to input management for technical risk management.',
      termHighlights: [
        t('Process'),
        t('Data Management'),
        t('Product'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish a systematic process with the Technical Data Management Process to collect, organize, and maintain risk management inputs throughout the project lifecycle.',
          termIndices: [
            t('Process'),
            t('Technical Data Management Process'),
            t('Data Management'),
            t('Product'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Coordinating with the Technical Data Management Process ensures systematic collection and maintenance of risk management inputs. This sustainable approach provides ongoing access to current information without burdening other processes.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Create a separate risk management database to collect and store all inputs independently from other project processes.',
          termIndices: [
            t('Risk Management'),
            t('Process'),
            t('Data Management'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but inefficient. While a dedicated database provides control, it creates duplication and maintenance overhead. Coordinating with existing Technical Data Management Process is more sustainable and avoids information silos.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -1, budget: -2 },
        },
        {
          id: 'c',
          text: 'Rely on informal requests to other processes when risk management inputs are needed.',
          termIndices: [
            t('Risk Management'),
            t('Process'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Informal input collection creates delays, inconsistencies, and gaps in risk management information. A systematic process ensures timely access to current, complete inputs throughout the project lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 'You successfully established a comprehensive input collection strategy for technical risk management. By identifying all necessary inputs from project documents, technical processes, and additional sources, you created a solid foundation for effective risk identification, assessment, and mitigation throughout the project lifecycle.',
    failureNarrative: 'Your input collection approach had significant gaps that will likely impact risk management effectiveness. Missing key inputs or using unsustainable collection methods can lead to incomplete risk identification and delayed risk responses, potentially jeopardizing project success.',
    successThreshold: 60,
  },
}
