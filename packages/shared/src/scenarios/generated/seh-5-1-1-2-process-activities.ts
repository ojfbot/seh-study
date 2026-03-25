import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh5112ProcessActivities: ScenarioTemplate = {
  meta: {
    id: 'seh-5-1-1-2-process-activities',
    title: 'Implementation Strategy Crossroads',
    subtitle: 'Navigate make/buy/reuse decisions for critical Mars rover components',
    difficulty: 'advanced',
    categories: ['project-mgmt', 'lifecycle', 'risk'],
    termIndices: [
      t('Product Realization'),
      t('End Product'),
      t('Enabling Products'),
      t('Product Implementation Process'),
      t('Technical Team'),
      t('Analysis'),
      t('Test'),
      t('Inspection'),
      t('Contract'),
      t('Contractor'),
      t('Software'),
      t('System'),
      t('Process'),
      t('Specification')
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase C',
      title: 'Implementation Strategy Selection',
      narrative: 'Your Mars rover project faces a critical decision for the autonomous navigation system. The technical team has identified three options: purchase a COTS solution, develop custom software in-house, or reuse flight-proven code from a previous mission. Each approach has different implications for cost, schedule, and risk. You must prepare for implementation regardless of which path is chosen.',
      termHighlights: [t('Product Implementation Process'), t('Technical Team'), t('Product Realization')],
      decisions: [
        {
          id: 'a',
          text: 'Develop implementation strategy and detailed planning procedures first, then review all documentation and specifications to ensure they are adequate for the selected implementation form.',
          termIndices: [t('Process'), t('Specification'), t('Technical Team')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. The SE Handbook emphasizes that preparing to conduct product implementation is a key first step regardless of implementation form. This includes strategy development, planning, and ensuring specifications are at the appropriate level of detail for the chosen approach.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 1, budget: 0 }
        },
        {
          id: 'b',
          text: 'Jump straight into vendor evaluation since the COTS option looks most promising and time is critical.',
          termIndices: [t('Contractor'), t('Contract')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Risky approach. While vendor evaluation is important for purchase decisions, skipping the preparation phase can lead to inadequate specifications and missed requirements. You may end up with a product that does not meet mission needs.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Start coding immediately using the heritage software as a baseline to save time.',
          termIndices: [t('Software'), t('End Product')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Poor decision. Beginning implementation without proper preparation violates SE principles. You have not verified that personnel are trained, enabling products are ready, or that the heritage software is truly applicable to this mission environment.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: -1, budget: -2 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Phase C',
      title: 'Purchase Option Evaluation',
      narrative: 'The team decides to pursue the COTS purchase option for the navigation system. Three vendors have submitted proposals, each claiming their product meets your specifications. You must now work with the acquisition team to evaluate the proposals and ensure the selected vendor can deliver a product that truly meets mission requirements.',
      termHighlights: [t('Contract'), t('Contractor'), t('Specification')],
      decisions: [
        {
          id: 'a',
          text: 'Work with the contracting officer to review technical information, participate in vendor selection, and ensure the contract SOW includes all necessary documentation and compliance certificates.',
          termIndices: [t('Contract'), t('Contractor'), t('Technical Team')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Excellent approach. The SE Handbook specifies that the technical team should collaborate with acquisition to ensure accuracy of contracts and SOWs, and that all necessary documentation is requested from vendors upfront.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 1 }
        },
        {
          id: 'b',
          text: 'Select the lowest-cost vendor since all three claim to meet specifications.',
          termIndices: [t('Contractor'), t('End Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Risky cost-focused decision. Price should not be the sole factor. The technical team must evaluate whether vendors truly understand requirements and can deliver acceptable products with proper documentation and support.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: 2 }
        },
        {
          id: 'c',
          text: 'Let the contracting office handle all vendor interactions since procurement is not a technical responsibility.',
          termIndices: [t('Technical Team'), t('Contract')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Wrong approach. The SE Handbook clearly states that the technical team should participate in proposal review and vendor selection to ensure technical requirements are properly evaluated and understood.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Product Delivery and Inspection',
      narrative: 'The selected vendor has delivered the navigation system along with documentation packages. Your team must now inspect the delivered product to ensure it matches what was ordered and that all required documentation has been provided. This includes source code, operator manuals, certificates of compliance, and safety information.',
      termHighlights: [t('Inspection'), t('End Product'), t('Test')],
      decisions: [
        {
          id: 'a',
          text: 'Assist in thorough inspection of the delivered product and documentation, verify it matches the purchase order, and ensure all enabling products for test and operations support are ready.',
          termIndices: [t('Inspection'), t('End Product'), t('Enabling Products')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct procedure. The SE Handbook requires the technical team to inspect delivered products and documentation, and ensure enabling products are ready for subsequent testing and operations phases.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 }
        },
        {
          id: 'b',
          text: 'Accept the delivery based on the vendor certificate and move directly to integration testing.',
          termIndices: [t('Test'), t('System')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Potentially risky shortcut. While vendor certificates are valuable, independent inspection ensures the right product was delivered and all documentation is complete before proceeding to expensive integration activities.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Focus only on the hardware inspection since software can be verified later during testing.',
          termIndices: [t('Software'), t('Inspection')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incomplete approach. Software documentation including source code and operator manuals are critical deliverables that must be verified at delivery. Missing software documentation can cause major delays in later phases.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -2, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Make Decision Implementation',
      narrative: 'For the rover\'s custom drilling system, the team has decided to manufacture the hardware in-house. The design specifications are complete, but you need to ensure all enabling products are ready before fabrication begins. This includes verifying that materials, tooling, trained personnel, and manufacturing procedures are available.',
      termHighlights: [t('Enabling Products'), t('Process'), t('End Product')],
      decisions: [
        {
          id: 'a',
          text: 'Verify all enabling products are ready including materials, drawings, trained operators, manufacturing procedures, and test fixtures before beginning fabrication.',
          termIndices: [t('Enabling Products'), t('Process'), t('Technical Team')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Proper implementation approach. The SE Handbook requires ensuring all enabling products are ready before making products, including materials, procedures, trained personnel, and test fixtures.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        },
        {
          id: 'b',
          text: 'Begin manufacturing with available materials while sourcing the remaining items to maintain schedule.',
          termIndices: [t('End Product'), t('Process')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Risky parallel approach. Starting production without all enabling products ready can lead to rework, quality issues, or production delays when missing items cause problems.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Contract out the manufacturing since the in-house shop is not immediately ready.',
          termIndices: [t('Contractor'), t('Contract')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Poor decision that changes the implementation strategy without proper analysis. If contracting is needed, it should go through proper make/buy/reuse evaluation with appropriate contract planning and vendor selection.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: -1, budget: -2 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Phase C',
      title: 'Heritage Software Reuse Evaluation',
      narrative: 'The team wants to reuse flight-proven attitude control software from a previous Mars mission. While this seems like a low-risk option, you must carefully evaluate whether the software is truly applicable to the new rover\'s different mass properties, operational environment, and mission requirements. The reuse decision requires thorough analysis.',
      termHighlights: [t('Software'), t('Analysis'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Conduct extreme care evaluation to ensure the software is applicable to this mission environment, review all available documentation, and assess if supporting infrastructure is available.',
          termIndices: [t('Software'), t('Analysis'), t('System')],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct approach. The SE Handbook emphasizes extreme care for reuse decisions, requiring thorough evaluation of applicability to new environments, complete documentation review, and assessment of supporting products availability.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 1 }
        },
        {
          id: 'b',
          text: 'Use the heritage software since it is flight-proven and skip detailed analysis to save time and money.',
          termIndices: [t('Software'), t('End Product')],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Dangerous assumption. Flight heritage does not guarantee applicability to different environments or requirements. The rover may have different mass properties, operational scenarios, or performance requirements that make the software unsuitable.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 1, budget: 1 }
        },
        {
          id: 'c',
          text: 'Modify the heritage software immediately to fit the new requirements without full documentation review.',
          termIndices: [t('Software'), t('Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Very risky approach. Modifying software without understanding its complete design basis, assumptions, and limitations can introduce serious faults. Full documentation review is essential before any modifications.',
          nextNodeId: null,
          scoreImpact: { risk: -4, schedule: 0, budget: -1 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'You successfully navigated the implementation process activities by following systematic preparation, proper evaluation of make/buy/reuse options, and thorough verification of deliverables. Your attention to enabling products and documentation ensures the Mars rover components will meet mission requirements.',
    failureNarrative: 'Your implementation approach missed critical preparation steps and failed to properly evaluate the risks and requirements for each implementation option. This could lead to component failures, schedule delays, or cost overruns that jeopardize the Mars rover mission.',
    successThreshold: 60,
  },
}
