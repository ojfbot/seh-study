import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh63InterfaceManagement: ScenarioTemplate = {
  meta: {
    id: 'seh-6-3-interface-management',
    title: 'Interface Control Crisis',
    subtitle: 'Manage critical interfaces between multiple contractors on your crewed vehicle',
    difficulty: 'advanced',
    categories: ['project-mgmt', 'configuration'],
    termIndices: [
      t('Interface Management Process'),
      t('Configuration Management Process'),
      t('Product Transition Process'),
      t('Contractor'),
      t('Product'),
      t('Contract'),
      t('Technical Team'),
      t('System Structure'),
      t('Product Integration Process'),
      t('Product Realization'),
      t('Work Breakdown Structure (WBS)'),
      t('Configuration Items (CI)'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase C',
      title: 'Multiple Contractor Coordination',
      narrative:
        'Your crewed transport vehicle involves three major contractors: propulsion, avionics, and life support systems. Each contractor is developing their subsystem independently, but critical interfaces between them are causing integration delays. The propulsion contractor needs electrical power specs from avionics, while life support requires thermal management data from both other contractors. You need to establish formal interface management.',
      termHighlights: [t('Interface Management Process'), t('Contractor')],
      decisions: [
        {
          id: 'a',
          text: 'Implement the Interface Management Process with formal interface control documents, regular interface reviews, and strict change control procedures across all contractor boundaries.',
          termIndices: [t('Interface Management Process'), t('Configuration Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook emphasizes that interface management must be strictly controlled during design and construction, especially when efforts are divided among multiple parties like contractors.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Let each contractor define their own interface requirements and coordinate directly with each other to save management overhead.',
          termIndices: [t('Contractor'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates the fundamental principle of interface management. Without central control, interface definitions will drift, conflicts will emerge, and integration will fail. The SE Handbook requires strict control of all interface processes.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: -3, budget: -2 },
        },
        {
          id: 'c',
          text: 'Focus interface management only on the most critical interfaces and let the contractors handle the rest informally.',
          termIndices: [t('Interface Management Process'), t('Contract')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Risky approach. While it reduces immediate overhead, informal interface management often leads to late-stage integration problems. The SE Handbook calls for comprehensive interface control, not selective management.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase C',
      title: 'Product Integration Planning',
      narrative:
        'You are now identifying lower-level products that must be assembled and integrated according to your system structure. The avionics contractor has 15 different electronic units, propulsion has 8 major components, and life support has 12 subsystems. Each needs specific assembly documentation including torque requirements, routing specifications, and integration sequences. Your technical teams need clear guidance on what documentation is required.',
      termHighlights: [t('Product Integration Process'), t('System Structure')],
      decisions: [
        {
          id: 'a',
          text: 'Create comprehensive assembly drawings, parts lists, and integration procedures for each product in the WBS, including all fastener specifications and assembly instructions.',
          termIndices: [t('Work Breakdown Structure (WBS)'), t('Product Integration Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook specifically requires identifying assembly drawings that show complete configuration, parts lists, and assembly instructions including torque requirements for fasteners.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Require contractors to provide basic assembly drawings but let them determine the level of detail needed for integration procedures.',
          termIndices: [t('Contractor'), t('Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This creates inconsistency across contractors and may lead to integration problems. The SE Handbook emphasizes that interface management must identify complete configuration documentation with consistent standards.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus documentation efforts only on the final vehicle assembly and let contractors handle internal subsystem integration independently.',
          termIndices: [t('Technical Team'), t('Product Realization')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach ignores the hierarchical nature of product integration. Without proper documentation at all levels of the system structure, integration failures will cascade upward, creating major program risks.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Configuration Control Challenge',
      narrative:
        'The propulsion contractor wants to change their engine gimbal interface from hydraulic to electric actuation, which affects both the avionics electrical power budget and the life support system thermal loads. This change could improve reliability but requires coordination across all three contractors. You must decide how to handle this interface change through your established processes.',
      termHighlights: [t('Configuration Management Process'), t('Configuration Items (CI)')],
      decisions: [
        {
          id: 'a',
          text: 'Process the change through formal interface control procedures, update all affected interface specifications, and ensure configuration management tracks the change across all contractors.',
          termIndices: [t('Interface Management Process'), t('Configuration Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook requires conducting interface control that feeds into the Configuration Management Process, ensuring all interface changes are properly controlled and documented.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Approve the change quickly since it improves reliability, and let each contractor update their documentation independently.',
          termIndices: [t('Contractor'), t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This bypasses essential interface control procedures. Without coordinated configuration management, the change will create inconsistencies and potential integration failures across contractor boundaries.',
          nextNodeId: null,
          scoreImpact: { risk: -6, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Defer the change until after initial integration testing to avoid disrupting current development schedules.',
          termIndices: [t('Product Integration Process'), t('Contract')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While this avoids immediate disruption, deferring beneficial changes can lead to suboptimal designs. Better to process the change properly now through interface management than implement it during later phases at higher cost.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Interface Documentation Requirements',
      narrative:
        'Your interface management activities are generating substantial documentation: interface control documents, approved interface requirement changes, and various interface management work products. The technical data management team needs to know how to organize and maintain this documentation, while your contractors need clear guidance on their documentation responsibilities under their contracts.',
      termHighlights: [t('Technical Data Management Process'), t('Product Transition Process')],
      decisions: [
        {
          id: 'a',
          text: 'Establish clear procedures for capturing interface management work products and feeding interface control documents to the Technical Data Management Process as specified in the SE framework.',
          termIndices: [t('Technical Data Management Process'), t('Interface Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook shows interface management work products flowing to the Technical Data Management Process, ensuring proper documentation control and accessibility.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'Let each contractor maintain their own interface documentation in their preferred format and consolidate it only during major reviews.',
          termIndices: [t('Contractor'), t('Contract')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'This creates documentation inconsistencies and makes interface changes difficult to track. The SE Handbook emphasizes centralized interface control and standardized documentation processes.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus on maintaining only the final interface specifications and minimize intermediate documentation to reduce overhead.',
          termIndices: [t('Configuration Items (CI)'), t('Specification')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This eliminates crucial traceability and change history. Interface management requires comprehensive work product capture to support configuration control and enable effective change management throughout the product lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 0, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase D',
      title: 'Integration Execution',
      narrative:
        'Your crewed vehicle is entering the integration phase, and your interface management procedures are being put to the test. The first major integration milestone involves mating the propulsion module with the crew compartment, requiring precise coordination between two contractors and adherence to all documented interface specifications. Several minor discrepancies have emerged during fit checks, and you must decide how to handle them while maintaining schedule.',
      termHighlights: [t('Product Integration Process'), t('Product Transition Process')],
      decisions: [
        {
          id: 'a',
          text: 'Follow established interface management procedures to resolve discrepancies, update documentation as needed, and ensure all changes are properly controlled before proceeding with integration.',
          termIndices: [t('Interface Management Process'), t('Configuration Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The SE Handbook emphasizes that interface management must continue during product integration activities, with proper control of interface changes to ensure successful integration.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Make field modifications to resolve the discrepancies quickly and document the changes after integration is complete.',
          termIndices: [t('Product Integration Process'), t('Technical Team')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This violates configuration control principles and could introduce safety risks. Interface changes during integration must be properly controlled and documented before implementation, not after.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Temporarily waive the interface discrepancies to maintain schedule and address them during post-integration testing.',
          termIndices: [t('Waiver'), t('Product Transition Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While waivers can be appropriate, deferring interface discrepancies to post-integration creates risks and potential rework. Better to resolve them properly now through the established interface management process.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: -1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully implemented comprehensive interface management across multiple contractors, maintaining control over complex technical interfaces while enabling effective product integration. Your systematic approach prevented costly integration failures and schedule delays.',
    failureNarrative:
      'Inadequate interface management led to integration problems, contractor coordination issues, and potential safety risks. Better application of the Interface Management Process could have prevented these costly problems through proper control and documentation.',
    successThreshold: 60,
  },
}
