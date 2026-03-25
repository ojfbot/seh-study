import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh5111Inputs: ScenarioTemplate = {
  meta: {
    id: 'seh-5-1-1-1-inputs',
    title: 'Gateway Module Procurement Strategy',
    subtitle: 'Determine optimal inputs for implementing critical Gateway life support components',
    difficulty: 'intermediate',
    categories: ['project-mgmt', 'requirements', 'lifecycle'],
    termIndices: [
      t('Product Implementation Process'),
      t('Decision Analysis Process'),
      t('End Product'),
      t('Enabling Products'),
      t('Specification'),
      t('Configuration Management Process'),
      t('Technical Requirements'),
      t('Heritage (or legacy)'),
      t('Product Realization'),
      t('Analysis of Alternatives (AoA)'),
      t('Technical Data Package'),
      t('Contract'),
      t('Contractor'),
      t('Process'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Implementation Strategy',
      title: 'Critical Component Decision',
      narrative:
        'Your lunar Gateway module project requires an environmental control life support system (ECLSS) oxygen generation assembly. The technical requirements are well-defined, but you must decide whether to purchase from a qualified vendor, develop in-house, or reuse heritage hardware from ISS programs. The flight director needs your implementation approach and required inputs identified.',
      termHighlights: [t('Product Implementation Process'), t('Technical Requirements'), t('Heritage (or legacy)')],
      decisions: [
        {
          id: 'a',
          text: 'Immediately select heritage ISS hardware without analyzing whether it meets Gateway specifications and environments.',
          termIndices: [t('Heritage (or legacy)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Reusing heritage products requires careful verification that they meet current project specifications and environmental conditions. ' +
            'The Decision Analysis Process must evaluate whether ISS ECLSS components can handle lunar orbital thermal cycling and radiation exposure. ' +
            'Skipping this analysis risks implementing incompatible hardware.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Conduct an Analysis of Alternatives comparing purchase, development, and reuse options with their required inputs.',
          termIndices: [t('Analysis of Alternatives (AoA)'), t('Decision Analysis Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Decision Analysis Process requires systematic evaluation of alternatives. ' +
            'An AoA will identify the specific inputs needed for each approach: vendor specifications for purchase, design documentation for development, or heritage qualification data for reuse. ' +
            'This ensures the Product Implementation Process receives appropriate inputs.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Default to purchasing since it requires the least project effort and inputs.',
          termIndices: [t('Contract'), t('Contractor')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Purchase decisions must be based on technical merit and lifecycle cost analysis, not just perceived ease. ' +
            'Even purchased products require significant inputs including detailed specifications, acceptance criteria, and integration requirements. ' +
            'Without proper Decision Analysis Process, you may select suboptimal solutions.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Purchase Path Inputs',
      title: 'Vendor Specification Package',
      narrative:
        'Your Analysis of Alternatives recommended purchasing the ECLSS oxygen generator from a qualified aerospace contractor. You must now identify and obtain the specific inputs required for the Product Implementation Process when purchasing an end product. The procurement team is waiting for your technical input package requirements.',
      termHighlights: [t('End Product'), t('Specification'), t('Contractor')],
      decisions: [
        {
          id: 'a',
          text: 'Request only the basic product datasheet from the vendor catalog.',
          termIndices: [t('Specification')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Basic datasheets lack the detailed specifications required for Product Implementation Process inputs. ' +
            'When purchasing end products, you need configuration-controlled design specifications, interface requirements, and environmental qualification data. ' +
            'Insufficient specification detail leads to integration failures and costly redesigns.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: 2 },
        },
        {
          id: 'b',
          text: 'Obtain configuration-controlled design specifications and all applicable technical documentation from the Configuration Management Process.',
          termIndices: [t('Configuration Management Process'), t('Specification'), t('Technical Data Package')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. For purchased end products, the Product Implementation Process requires configuration-controlled specifications and complete technical documentation. ' +
            'The Configuration Management Process ensures you receive current, approved design specifications, interface control documents, and qualification test data. ' +
            'This forms the proper Technical Data Package for implementation.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Accept whatever documentation the contractor provides without specific requirements.',
          termIndices: [t('Contractor'), t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Accepting unspecified documentation creates gaps in Product Implementation Process inputs. ' +
            'You must define specific Technical Requirements for contractor-provided specifications, test data, and interface definitions. ' +
            'Uncontrolled documentation leads to configuration mismatches and integration problems.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Development Path Inputs',
      title: 'In-House Manufacturing Requirements',
      narrative:
        'Your team decides to develop a backup ECLSS component in-house to reduce vendor dependency. For products that will be made by your technical team, you must identify the specific inputs required for the Product Implementation Process. The manufacturing engineering group needs direction on what documentation and resources they require.',
      termHighlights: [t('Product Implementation Process'), t('Process')],
      decisions: [
        {
          id: 'a',
          text: 'Provide only the high-level technical requirements and let manufacturing figure out the details.',
          termIndices: [t('Technical Requirements')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'High-level requirements alone are insufficient inputs for Product Implementation Process when making end products. ' +
            'Manufacturing needs detailed design specifications, manufacturing plans, processes, procedures, and material specifications. ' +
            'Incomplete inputs lead to manufacturing delays and quality problems.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 4, budget: 2 },
        },
        {
          id: 'b',
          text: 'Assemble configuration-controlled design specifications, manufacturing plans, processes, procedures, and raw material specifications.',
          termIndices: [t('Configuration Management Process'), t('Specification'), t('Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. When making or coding end products, the Product Implementation Process requires comprehensive inputs including design specifications, manufacturing plans, processes, procedures, and material specifications. ' +
            'These must all be configuration-controlled to ensure consistent Product Realization. ' +
            'Complete inputs enable successful manufacturing implementation.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Start manufacturing immediately with preliminary designs to save time.',
          termIndices: [t('Product Realization')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Manufacturing with preliminary inputs violates Configuration Management Process requirements and creates significant risk. ' +
            'Product Realization requires stable, approved design specifications before implementation begins. ' +
            'Premature manufacturing leads to rework, scrap, and schedule delays when designs change.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -1, budget: 3 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Reuse Path Inputs',
      title: 'Heritage Component Qualification',
      narrative:
        'Your team identified a potential ISS heritage component for reuse but must verify it meets Gateway environmental requirements. When reusing end products from other projects, specific inputs are required for the Product Implementation Process. The systems engineering team needs guidance on what heritage documentation and verification data you require.',
      termHighlights: [t('Heritage (or legacy)'), t('End Product'), t('Product Realization')],
      decisions: [
        {
          id: 'a',
          text: 'Accept the heritage component based on its ISS flight history without additional verification.',
          termIndices: [t('Heritage (or legacy)')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Flight heritage alone does not guarantee suitability for different mission environments. ' +
            'Product Implementation Process for reused components requires verification that they meet current project specifications and environmental conditions. ' +
            'Lunar thermal cycling and radiation exposure differ significantly from ISS conditions.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: -1 },
        },
        {
          id: 'b',
          text: 'Obtain all original product documentation plus analysis proving it meets Gateway specifications and environments.',
          termIndices: [t('Heritage (or legacy)'), t('Analysis'), t('Specification')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. For reused end products, Product Implementation Process inputs include the original product documentation plus verification that specifications and environments match current requirements. ' +
            'This analysis was a key factor in the Decision Analysis Process make/buy/reuse decision. ' +
            'Proper heritage qualification ensures successful Product Realization.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 1 },
        },
        {
          id: 'c',
          text: 'Request only the heritage component physical hardware without documentation.',
          termIndices: [t('End Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Physical hardware alone lacks the documentation inputs required for Product Implementation Process. ' +
            'Reuse requires associated product documentation including specifications, test data, and qualification reports. ' +
            'Without proper documentation, you cannot verify the component meets current requirements or integrate it properly.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Enabling Products',
      title: 'Implementation Support Requirements',
      narrative:
        'Regardless of your make/buy/reuse decision, you must identify the enabling products necessary to support implementation of your ECLSS components. The project manager asks what facilities, tools, and support equipment are required inputs for successful Product Implementation Process execution.',
      termHighlights: [t('Enabling Products'), t('Product Implementation Process')],
      decisions: [
        {
          id: 'a',
          text: 'Assume existing facilities are adequate and proceed without specific enabling product requirements.',
          termIndices: [t('Enabling Products')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Enabling Products are essential inputs that facilitate Product Implementation Process success. ' +
            'Without identifying required test facilities, integration tooling, or specialized equipment, implementation may fail due to inadequate support infrastructure. ' +
            'Proper planning requires explicit enabling product identification.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 1 },
        },
        {
          id: 'b',
          text: 'Identify all necessary enabling products including test facilities, integration tooling, and specialized support equipment.',
          termIndices: [t('Enabling Products'), t('Product Implementation Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Enabling Products are critical inputs for Product Implementation Process regardless of make/buy/reuse approach. ' +
            'These include production facilities, test equipment, integration tooling, and specialized support systems. ' +
            'Proper enabling product planning ensures Product Realization can proceed without infrastructure limitations.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until implementation begins to determine what support equipment might be needed.',
          termIndices: [t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Enabling Products must be identified as inputs before Product Implementation Process begins, not during execution. ' +
            'Late identification of required facilities or tooling causes schedule delays and cost overruns. ' +
            'Proper Process planning requires all necessary enabling products to be available when implementation starts.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 4, budget: 2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative:
      'You successfully identified the appropriate inputs for Product Implementation Process across all make/buy/reuse scenarios. ' +
      'Your systematic approach to gathering configuration-controlled specifications, enabling products, and verification data will enable effective Product Realization.',
    failureNarrative:
      'Your Product Implementation Process planning missed critical input requirements that could compromise component development and integration. ' +
      'Proper input identification through Decision Analysis Process is essential for successful Product Realization outcomes.',
    successThreshold: 60,
  },
}
