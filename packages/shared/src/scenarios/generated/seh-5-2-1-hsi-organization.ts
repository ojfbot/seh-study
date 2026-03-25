import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh521HsiOrganization: ScenarioTemplate = {
  meta: {
    id: 'seh-5-2-1-hsi-organization',
    title: 'Organizing HSI for Sample Return',
    subtitle: 'Structure the Human Systems Integration team for an asteroid sample return mission',
    difficulty: 'intermediate',
    categories: ['human-factors', 'project-mgmt'],
    termIndices: [
      t('Human Systems Integration'),
      t('Program'),
      t('Project'),
      t('Stakeholder'),
      t('Technical Team'),
      t('Contractor'),
      t('Contract'),
      t('System'),
      t('Risk Management'),
      t('Process'),
      t('Evaluation'),
      t('Test'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Team Formation',
      title: 'Establishing HSI Leadership',
      narrative:
        'You are the program manager for NASA\'s first asteroid sample return mission. The mission involves complex robotic operations, crew interfaces for sample handling upon return, and ground operations coordination. You need to establish a Human Systems Integration organization structure that will effectively manage HSI activities across multiple contractors and NASA centers. The program director asks you to define the HSI integrator role and its relationship to other technical teams.',
      termHighlights: [t('Human Systems Integration'), t('Program'), t('Technical Team')],
      decisions: [
        {
          id: 'a',
          text: 'Assign HSI responsibilities as an additional duty to the existing systems engineering team lead.',
          termIndices: [t('Human Systems Integration'), t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'HSI requires dedicated expertise and cannot be effectively managed as an additional duty. The complexity of integrating human factors across spacecraft design, ground operations, and crew interfaces demands a specialized HSI integrator with appropriate authority and resources.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Designate a dedicated HSI integrator reporting directly to the program manager with authority over HSI activities across all contractors.',
          termIndices: [t('Human Systems Integration'), t('Program'), t('Contractor')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. A dedicated HSI integrator with direct program management reporting ensures HSI considerations have appropriate visibility and authority. This structure enables effective coordination across multiple contractors and technical teams while maintaining accountability to program-level objectives.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Create separate HSI teams within each contractor organization without a central NASA integrator.',
          termIndices: [t('Contractor'), t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Without a central NASA HSI integrator, there is no mechanism to ensure consistency, resolve conflicts, or maintain program-level HSI requirements across contractors. This fragmented approach creates coordination gaps and reduces HSI effectiveness.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Contractor Oversight',
      title: 'Managing Contractor HSI Activities',
      narrative:
        'With your HSI integrator in place, you must now define how NASA will oversee contractor HSI activities. The spacecraft contractor will develop crew interfaces for sample container handling, while the ground systems contractor manages mission operations displays and procedures. Each contractor must submit an HSI plan, but you need to establish the oversight framework. The contracts office asks for your requirements on contractor HSI management.',
      termHighlights: [t('Contractor'), t('Contract'), t('Evaluation')],
      decisions: [
        {
          id: 'a',
          text: 'Require contractors to submit HSI plans but allow them full autonomy in HSI implementation without NASA oversight.',
          termIndices: [t('Contractor'), t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Full contractor autonomy without NASA oversight creates significant risk of HSI requirements drift and interface mismatches. The program needs active evaluation and monitoring processes to ensure contractor HSI activities align with overall mission objectives.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 2, budget: -1 },
        },
        {
          id: 'b',
          text: 'Establish formal HSI review gates where contractors must demonstrate HSI progress and NASA evaluates compliance with requirements.',
          termIndices: [t('Contractor'), t('Evaluation'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Formal review gates with NASA evaluation ensure contractors maintain HSI rigor while providing visibility into progress and issues. This balanced approach maintains contractor responsibility while giving NASA the oversight needed to protect mission objectives.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Have NASA HSI personnel embedded full-time within each contractor facility to directly manage all HSI activities.',
          termIndices: [t('Contractor'), t('Human Systems Integration')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Full NASA embedding is unnecessarily expensive and undermines contractor responsibility. This approach creates unclear authority relationships and inflated costs without proportional risk reduction. Effective oversight can be achieved through structured evaluation processes.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -1, budget: 4 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Technical Integration',
      title: 'HSI Team Relationships',
      narrative:
        'Your HSI integrator needs to coordinate with multiple technical teams including systems engineering, risk management, and test and evaluation. The mission involves complex interfaces between robotic sample collection, Earth-return capsule design, and crew operations for sample handling. You must define how the HSI team will work with these other disciplines to ensure human factors are properly integrated throughout the system design.',
      termHighlights: [t('Technical Team'), t('System'), t('Risk Management')],
      decisions: [
        {
          id: 'a',
          text: 'Have HSI work independently and provide recommendations that other technical teams can choose to adopt or ignore.',
          termIndices: [t('Technical Team'), t('Human Systems Integration')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Independent HSI work without formal integration processes leads to human factors being treated as optional add-ons rather than integral system requirements. This approach fails to achieve the cross-disciplinary coordination essential for effective HSI.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Integrate HSI personnel as formal members of systems engineering, risk management, and test teams with defined HSI responsibilities in each domain.',
          termIndices: [t('Technical Team'), t('Risk Management'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Formal integration of HSI personnel into other technical teams ensures human factors considerations are built into systems engineering decisions, risk assessments, and test planning from the beginning. This prevents HSI from being an afterthought and improves overall system performance.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Require all technical teams to report to the HSI integrator to ensure human factors take priority in all decisions.',
          termIndices: [t('Technical Team'), t('Human Systems Integration')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Making HSI the controlling authority over all technical teams creates organizational dysfunction and undermines systems engineering leadership. Effective HSI requires partnership and integration, not dominance over other technical disciplines.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 3, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Authority Structure',
      title: 'HSI and Technical Authorities',
      narrative:
        'The final element of your HSI organizational structure involves defining the relationship between HSI personnel and NASA Technical Authorities for Engineering, Safety, and Health/Medical. Your asteroid sample return mission has unique challenges including potential biological contamination risks from the samples and crew exposure to sample handling equipment. The Technical Authorities need clear interfaces with your HSI team to ensure proper oversight and approval processes.',
      termHighlights: [t('Human Systems Integration'), t('Process'), t('Stakeholder')],
      decisions: [
        {
          id: 'a',
          text: 'Establish the HSI integrator as an independent authority equal to existing Technical Authorities with final approval power over human factors decisions.',
          termIndices: [t('Human Systems Integration'), t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Creating HSI as an independent authority conflicts with established NASA Technical Authority structures and creates potential approval conflicts. HSI should work within existing authority frameworks rather than establishing competing approval chains.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Define formal interfaces between HSI personnel and each Technical Authority with clear processes for HSI input to Technical Authority decisions.',
          termIndices: [t('Process'), t('Human Systems Integration'), t('Stakeholder')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Establishing formal interfaces and processes ensures HSI considerations reach Technical Authorities in a structured way while respecting existing authority relationships. This approach leverages Technical Authority expertise while ensuring human factors receive appropriate consideration.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Have HSI report directly to the program manager without formal interfaces to Technical Authorities to maintain independence.',
          termIndices: [t('Program'), t('Human Systems Integration')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Bypassing Technical Authorities creates gaps in safety, engineering, and medical oversight of HSI activities. Technical Authorities provide essential expertise and approval authority that HSI needs to access through formal processes, not circumvent.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully established an effective HSI organizational structure with clear leadership, contractor oversight, technical team integration, and Technical Authority interfaces. This framework ensures human factors considerations are properly managed throughout the asteroid sample return mission.',
    failureNarrative:
      'Your HSI organizational approach created gaps in leadership authority, contractor oversight, or Technical Authority coordination. These organizational weaknesses will likely result in inadequate human factors integration and increased mission risk.',
    successThreshold: 60,
  },
}
