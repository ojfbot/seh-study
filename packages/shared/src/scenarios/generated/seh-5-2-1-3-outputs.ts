import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh5213Outputs: ScenarioTemplate = {
  meta: {
    id: 'seh-5-2-1-3-outputs',
    title: 'Science Module Integration Documentation',
    subtitle: 'Generate comprehensive outputs from ISS experiment integration activities',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'verification', 'configuration'],
    termIndices: [
      t('Product Integration Process'),
      t('Product'),
      t('System'),
      t('Analysis'),
      t('Technical Data Management Process'),
      t('Interface Management Process'),
      t('Test'),
      t('Model'),
      t('Software'),
      t('Requirement'),
      t('Configuration Items (CI)'),
      t('Technical Data Package'),
      t('Process'),
      t('Verification (of a product)'),
      t('Mission')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Integration Documentation Planning',
      title: 'Defining Output Requirements',
      narrative:
        'Your ISS protein crystal growth experiment has completed physical integration into the EXPRESS rack. The project manager asks you to identify the key outputs that must be documented from the product integration process. Your mission operations team needs comprehensive documentation to support flight readiness rationale and future analysis during on-orbit operations.',
      termHighlights: [t('Product Integration Process'), t('Product'), t('Mission')],
      decisions: [
        {
          id: 'a',
          text: 'Focus solely on the integrated product hardware with basic interface verification results.',
          termIndices: [t('Product'), t('Verification (of a product)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This approach is insufficient. The product integration process generates multiple categories of outputs beyond just the physical product. You need comprehensive documentation including system analysis models, integration strategy documents, and technical data packages to support both flight readiness and future mission phases.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Generate integrated product documentation, system analysis models, work products, and technical data management outputs.',
          termIndices: [t('Product'), t('System'), t('Analysis'), t('Technical Data Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The product integration process produces multiple output categories: the integrated product itself, supporting documentation and analysis models for flight readiness, and various work products including integration strategies and interface management documentation. This comprehensive approach ensures all stakeholders have the information needed for mission success.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Create a simple integration report and defer detailed documentation until after launch.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Deferring documentation is a critical mistake. Flight readiness rationale must be established before launch, and detailed integration outputs are essential for troubleshooting and analysis during on-orbit operations. Missing documentation creates unacceptable risk for mission operations.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 3, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Technical Analysis Documentation',
      title: 'System Analysis Models and Data',
      narrative:
        'You are preparing the system analysis models that will support flight readiness rationale. The integration revealed some interface timing issues between your experiment software and the EXPRESS rack controller. Your analysis models must demonstrate that all system interactions are properly balanced and documented for future mission phases.',
      termHighlights: [t('System'), t('Analysis'), t('Model'), t('Software')],
      decisions: [
        {
          id: 'a',
          text: 'Document the timing analysis with mathematical models showing interface compliance within requirements.',
          termIndices: [t('Analysis'), t('Model'), t('Requirement')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent approach. Mathematical modeling and analytical techniques provide the foundation for demonstrating system compliance. Your timing analysis models will serve as critical documentation for flight readiness rationale and will be invaluable for mission operations teams during on-orbit troubleshooting.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Create a basic interface description without detailed analytical backing.',
          termIndices: [t('Interface Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Basic descriptions without analytical backing are insufficient for flight readiness rationale. The timing issues you discovered require detailed mathematical models and analysis to demonstrate that system interactions are properly balanced and compliant with requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 2, budget: 0 },
        },
        {
          id: 'c',
          text: 'Run additional physical tests instead of creating analysis models.',
          termIndices: [t('Test'), t('Model')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While additional testing provides valuable data, it cannot replace the need for system analysis models. Models provide the analytical foundation for understanding system behavior across operational ranges and serve as essential documentation for future mission phases when physical testing is not possible.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Work Products Generation',
      title: 'Integration Strategy Documentation',
      narrative:
        'The integration team needs comprehensive work products to support technical data management processes. You must generate integration strategy documents, interface management documentation, and assembly sequence rationale. The flight operations team specifically requests detailed handling requirements and test equipment specifications for future servicing missions.',
      termHighlights: [t('Technical Data Management Process'), t('Interface Management Process'), t('Test')],
      decisions: [
        {
          id: 'a',
          text: 'Create integration strategy documents, interface management plans, assembly sequences, and handling requirements.',
          termIndices: [t('Technical Data Management Process'), t('Interface Management Process'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Perfect comprehensive approach. These work products are essential outputs of the product integration process. Integration strategy documents guide future activities, interface management documentation ensures proper system interoperability, and detailed handling requirements protect both hardware and personnel during future operations.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Focus only on assembly drawings and skip the procedural documentation.',
          termIndices: [t('Technical Data Package')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Assembly drawings alone are insufficient work products. The integration process must generate comprehensive documentation including integration strategies, interface management plans, handling requirements, and assembly sequence rationale. Missing procedural documentation creates operational risks for future mission phases.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Generate basic documentation and rely on institutional knowledge for details.',
          termIndices: [t('Technical Data Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Relying on institutional knowledge violates technical data management principles. All integration work products must be formally documented to ensure knowledge preservation, enable future analysis during mission operations, and support potential future servicing or upgrade activities.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Configuration Management',
      title: 'Final Integration Package',
      narrative:
        'You are finalizing the integrated product outputs for delivery to mission operations. The configuration management team requires proper identification of all configuration items and their integration status. Your package must include the integrated experiment system with all interactions properly balanced, plus complete documentation supporting flight readiness rationale.',
      termHighlights: [t('Configuration Items (CI)'), t('Product'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Deliver integrated product with all system interactions identified, complete documentation, and properly managed configuration items.',
          termIndices: [t('Product'), t('System'), t('Configuration Items (CI)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Excellent execution of product integration process outputs. You have delivered the integrated product with properly balanced system interactions, comprehensive documentation supporting flight readiness rationale, and well-managed configuration items. This complete package enables successful mission operations and provides the foundation for future analysis and servicing activities.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -2, budget: 0 },
        },
        {
          id: 'b',
          text: 'Deliver the hardware with minimal documentation to meet schedule pressure.',
          termIndices: [t('Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Minimal documentation fails to meet the requirements of product integration process outputs. Flight readiness rationale depends on comprehensive documentation, system analysis models, and proper configuration management. Schedule pressure cannot justify compromising the essential outputs needed for safe mission operations.',
          nextNodeId: null,
          scoreImpact: { risk: 7, schedule: -3, budget: 0 },
        },
        {
          id: 'c',
          text: 'Request additional time to perfect all documentation before delivery.',
          termIndices: [t('Technical Data Package')],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'While thoroughness is important, the product integration process outputs should be generated systematically throughout integration activities, not perfected at the end. This approach causes unnecessary schedule delays. Proper process execution produces adequate documentation without requiring extensive post-integration refinement.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 4, budget: 2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully generated comprehensive outputs from the product integration process, including the integrated experiment system, detailed documentation supporting flight readiness rationale, and complete work products for technical data management. Your systematic approach ensures mission operations teams have all necessary information for successful on-orbit activities.',
    failureNarrative: 'The product integration outputs were incomplete or inadequate, creating risks for flight readiness rationale and future mission operations. Comprehensive documentation including system analysis models, integration strategies, and proper configuration management are essential outputs that cannot be compromised without affecting mission success.',
    successThreshold: 60,
  },
}
