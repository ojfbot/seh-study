import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh52ProductIntegrationProductIntegrationIsAKeyA: ScenarioTemplate = {
  meta: {
    id: 'seh-5-2-product-integration-product-integration-is-a-key-a',
    title: 'Asteroid Sample Return Integration Crisis',
    subtitle: 'Navigate complex subsystem interactions during spacecraft assembly',
    difficulty: 'intermediate',
    categories: ['design', 'verification', 'project-mgmt'],
    termIndices: [
      t('Product Integration Process'),
      t('System'),
      t('Product'),
      t('Analysis'),
      t('Test'),
      t('Fault'),
      t('Mission'),
      t('Process'),
      t('Recovery'),
      t('Activity'),
      t('Product Realization'),
      t('Interface Management Process'),
      t('Technical Risk'),
      t('Verification (of a product)'),
    ],
    estimatedMinutes: 18,
  },

  startNodeId: 'node-1',

  nodes: [
    {
      id: 'node-1',
      phase: 'System Integration',
      title: 'Subsystem Interface Conflict',
      narrative:
        'During final spacecraft assembly, your team discovers that the sample containment system\'s thermal interface conflicts with the propulsion module\'s heat dissipation requirements. The propulsion team reports that their exhaust plume will exceed the sample container\'s maximum operating temperature during critical maneuvers. You must address this subsystem interaction issue before integration can proceed.',
      termHighlights: [t('Product Integration Process'), t('System'), t('Interface Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Redesign the thermal protection around the sample container to handle higher temperatures from propulsion operations.',
          termIndices: [t('System'), t('Product Integration Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Addressing the thermal interface through redesigned protection maintains system functionality while allowing both subsystems to operate within their requirements. This demonstrates proper engineering of subsystem interactions during the product integration process.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 3 },
        },
        {
          id: 'b',
          text: 'Require the propulsion team to reduce their exhaust temperature output to protect the sample container.',
          termIndices: [t('Technical Risk'), t('Mission')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Reducing propulsion performance compromises the spacecraft\'s ability to execute critical trajectory corrections and asteroid rendezvous maneuvers. This approach prioritizes one subsystem over mission success, which violates proper system integration principles.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Accept the thermal conflict and plan to manage it operationally during flight.',
          termIndices: [t('Fault'), t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Accepting a known interface conflict introduces unnecessary technical risk to the mission. Proper product integration requires resolving subsystem interactions during assembly, not deferring problems to operations where recovery options are limited.',
          nextNodeId: null,
          scoreImpact: { risk: 8, schedule: -2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },

    {
      id: 'node-2',
      phase: 'Integration Testing',
      title: 'Emergent Behavior Detection',
      narrative:
        'During integrated system testing, you observe that the navigation software experiences processing delays when the sample analysis instruments are active. This emergent behavior wasn\'t predicted in individual subsystem testing. The delays could affect attitude control during critical sampling operations at the asteroid.',
      termHighlights: [t('Test'), t('Analysis'), t('Product')],
      decisions: [
        {
          id: 'a',
          text: 'Conduct detailed analysis of the data bus loading and processor resource allocation between the navigation and instrument subsystems.',
          termIndices: [t('Analysis'), t('Test'), t('Product Integration Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Systematic analysis of the interaction between navigation processing and instrument data handling is essential to understand this emergent behavior. Integration testing reveals subsystem interactions that don\'t appear in isolation, requiring thorough investigation.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Schedule sampling operations to occur only when navigation processing demands are minimal.',
          termIndices: [t('Mission'), t('Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this operational workaround reduces immediate risk, it severely constrains mission flexibility and may prevent optimal sampling opportunities. The underlying integration issue remains unresolved, creating ongoing operational complexity.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Continue with integration assuming the delays are within acceptable tolerances for mission operations.',
          termIndices: [t('Technical Risk'), t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Proceeding without understanding the cause of processing delays introduces unquantified risk to critical mission phases. Proper product integration requires verification that all subsystem interactions perform as intended before declaring the system ready.',
          nextNodeId: null,
          scoreImpact: { risk: 7, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },

    {
      id: 'node-3',
      phase: 'Environmental Integration',
      title: 'Launch Environment Compatibility',
      narrative:
        'Your analysis reveals that the combined vibration environment during launch may cause resonance between the sample container mounting and the communication antenna structure. Ground testing shows potential for antenna pointing degradation that could affect Earth communications during critical mission phases.',
      termHighlights: [t('Analysis'), t('System'), t('Product Realization')],
      decisions: [
        {
          id: 'a',
          text: 'Implement vibration isolation between the sample container and antenna mounting structures.',
          termIndices: [t('Product Integration Process'), t('System'), t('Product Realization')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Adding vibration isolation addresses the structural interaction while maintaining both subsystems\' functionality. This exemplifies proper engineering of environmental interactions during product integration to ensure system performance.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Reinforce the antenna mounting to better withstand vibration loads from the sample container.',
          termIndices: [t('Product'), t('Technical Risk')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While reinforcement may help, it doesn\'t address the root cause of the resonance interaction. This approach may reduce symptoms but doesn\'t eliminate the coupling between subsystems that creates the vibration issue.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Accept the antenna pointing degradation and rely on ground station tracking to maintain communications.',
          termIndices: [t('Technical Risk'), t('Recovery')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Accepting degraded communications capability compromises mission robustness and places excessive reliance on ground systems for recovery. Proper system integration ensures all subsystems can perform their functions despite environmental interactions.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },

    {
      id: 'node-4',
      phase: 'Mission Operations Integration',
      title: 'Human-System Integration Challenge',
      narrative:
        'During mission operations simulations, flight controllers report difficulty managing the integrated system during asteroid approach sequences. The sample collection procedure requires simultaneous coordination of navigation, imaging, and mechanical systems, but the current interfaces don\'t provide adequate situational awareness for operators.',
      termHighlights: [t('Mission'), t('Process'), t('Activity')],
      decisions: [
        {
          id: 'a',
          text: 'Redesign the operator interface displays to integrate information from all subsystems into coordinated views for mission-critical operations.',
          termIndices: [t('Product Integration Process'), t('Mission'), t('Activity')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Integrating subsystem information into coordinated operator displays ensures effective human-system integration during complex operations. This demonstrates proper attention to all three elements of system integration: hardware, software, and human operators.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 3, budget: 2 },
        },
        {
          id: 'b',
          text: 'Provide additional training to flight controllers on managing multiple subsystem interfaces simultaneously.',
          termIndices: [t('Process'), t('Mission')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While training helps, it places the burden of integration on human operators rather than engineering proper system integration. This approach increases workload and error potential during critical mission phases.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Simplify the mission operations by automating the sample collection sequence to reduce operator workload.',
          termIndices: [t('Technical Risk'), t('Recovery')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Full automation eliminates operator flexibility to respond to unexpected conditions during asteroid sampling. This reduces system robustness and removes human judgment that may be critical for mission success in dynamic environments.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 4, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },

    {
      id: 'node-5',
      phase: 'System Validation',
      title: 'End-to-End Integration Verification',
      narrative:
        'Your integrated spacecraft has completed assembly and subsystem testing. Before declaring the system ready for launch, you must conduct final end-to-end verification that all subsystem interactions function properly and that no adverse emergent behaviors remain. The mission director asks for your integration verification approach.',
      termHighlights: [t('Verification (of a product)'), t('Test'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Execute a complete mission simulation that exercises all subsystem interactions under representative operational scenarios.',
          termIndices: [t('Verification (of a product)'), t('Test'), t('Mission')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. End-to-end mission simulation provides the most comprehensive verification of product integration by testing all subsystem interactions under realistic conditions. This approach validates that the integrated system functions as intended and reveals any remaining emergent behaviors.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Conduct separate verification tests for each major subsystem interface pair to ensure individual interactions work properly.',
          termIndices: [t('Test'), t('Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While pairwise testing verifies individual interfaces, it may miss complex interactions that emerge only when all subsystems operate together. This approach provides incomplete verification of the fully integrated system.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Review all integration test data and analysis results to confirm the system meets requirements without additional testing.',
          termIndices: [t('Analysis'), t('Technical Risk')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Relying solely on previous test data without end-to-end verification misses the opportunity to validate complete system integration. This approach provides insufficient confidence that all subsystem interactions will perform properly during actual mission operations.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -1, budget: 0 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],

  debriefTemplate: {
    successNarrative: 
      'Excellent integration leadership! You successfully navigated complex subsystem interactions by applying systematic analysis, proper interface management, and comprehensive verification. Your approach demonstrates mastery of product integration principles that ensure robust system performance.',
    failureNarrative:
      'Your integration approach introduced significant risks and compromises to system performance. Successful product integration requires systematic engineering of all subsystem interactions rather than accepting conflicts or deferring problems to operations.',
    successThreshold: 60,
  },
}
