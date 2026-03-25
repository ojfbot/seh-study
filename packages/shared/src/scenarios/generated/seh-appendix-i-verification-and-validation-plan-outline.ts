import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const sehAppendixIVerificationAndValidationPlanOutline: ScenarioTemplate = {
  meta: {
    id: 'seh-appendix-i-verification-and-validation-plan-outline',
    title: 'CubeSat Integration Verification Planning',
    subtitle: 'Plan comprehensive verification and validation for a CubeSat constellation beyond component-level testing',
    difficulty: 'beginner',
    categories: ['verification', 'project-mgmt', 'reviews'],
    termIndices: [
      t('Program'),
      t('System'),
      t('Test'),
      t('Product Verification Process'),
      t('Product Validation Process'),
      t('Product Integration Process'),
      t('Verification (of a product)'),
      t('Validation (of a product)'),
      t('System Integration Review'),
      t('Flight Readiness Review'),
      t('Technical Requirements'),
      t('Analysis'),
      t('Inspection'),
      t('Demonstration'),
      t('Environmental Impact')
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase D',
      title: 'Beyond Component Testing',
      narrative: 'Your CubeSat constellation has completed all component-level verification testing. Now you need to plan the next phase of verification and validation activities. The program manager asks what additional testing will be needed when your CubeSats integrate with their launch vehicle and ground systems.',
      termHighlights: [
        t('Program'),
        t('System'),
        t('Product Verification Process')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Develop a comprehensive verification and validation plan covering launch vehicle integration, ground system interfaces, and constellation deployment scenarios using multiple verification methods.',
          termIndices: [
            t('Product Verification Process'),
            t('Product Validation Process'),
            t('System')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. A comprehensive V&V plan addresses all integration levels beyond component testing. This includes launch vehicle integration, ground system interfaces, and operational scenarios that cannot be fully tested at the component level.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 2 }
        },
        {
          id: 'b',
          text: 'Focus only on launch vehicle integration testing since that is the most critical interface for mission success.',
          termIndices: [
            t('Product Integration Process'),
            t('Test')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but incomplete. While launch vehicle integration is critical, you also need to verify ground system interfaces, constellation coordination, and operational scenarios. A narrow focus increases risk of interface failures.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: -1 }
        },
        {
          id: 'c',
          text: 'Since component testing is complete, assume the system will work properly when integrated and focus resources on other project activities.',
          termIndices: [
            t('System'),
            t('Product Integration Process')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Component-level testing cannot verify all system-level behaviors and interfaces. Integration testing often reveals issues not detectable at component level. This approach creates unacceptable technical risk.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -2, budget: -3 }
        }
      ],
      defaultNextNodeId: 'node-2'
    },
    {
      id: 'node-2',
      phase: 'Phase D',
      title: 'Verification Methods Selection',
      narrative: 'You are defining the specific verification methods for each requirement in your V&V plan. Some requirements can be verified through testing, others through analysis, inspection, or demonstration. Your team needs to select the most appropriate methods for launch vehicle interface verification.',
      termHighlights: [
        t('Verification (of a product)'),
        t('Analysis'),
        t('Test')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Use a combination of analysis for structural loads, inspection for physical interfaces, demonstration for deployment mechanisms, and testing for electrical interfaces.',
          termIndices: [
            t('Analysis'),
            t('Inspection'),
            t('Demonstration'),
            t('Test')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Different verification methods are appropriate for different types of requirements. This multi-method approach provides comprehensive verification while being cost-effective and technically appropriate.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Rely primarily on testing since it provides the most realistic verification of actual system performance.',
          termIndices: [
            t('Test'),
            t('Verification (of a product)')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but not optimal. While testing is valuable, some requirements are better verified through other methods. Over-reliance on testing can be expensive and may not be feasible for all interface conditions.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -1, budget: -2 }
        },
        {
          id: 'c',
          text: 'Use only analysis and inspection to minimize cost and schedule impact since these methods are faster than testing.',
          termIndices: [
            t('Analysis'),
            t('Inspection')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. While analysis and inspection are valuable, they cannot verify all interface behaviors. Critical interfaces like electrical connections and deployment mechanisms require demonstration or testing to ensure proper operation.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 1 }
        }
      ],
      defaultNextNodeId: 'node-3'
    },
    {
      id: 'node-3',
      phase: 'Phase D',
      title: 'Validation Planning',
      narrative: 'Beyond verification, you need to plan validation activities to ensure the integrated system meets stakeholder needs in the operational environment. The mission operations team wants to understand how you will validate that the constellation performs its intended mission functions.',
      termHighlights: [
        t('Validation (of a product)'),
        t('Product Validation Process'),
        t('System')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Plan end-to-end mission scenario validation including ground system operations, constellation coordination, and data product delivery to validate stakeholder needs are met.',
          termIndices: [
            t('Validation (of a product)'),
            t('Product Validation Process'),
            t('System')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Validation ensures the system meets stakeholder needs in the operational environment. End-to-end scenario validation demonstrates that the integrated system delivers the intended mission value.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 2 }
        },
        {
          id: 'b',
          text: 'Focus validation on individual satellite performance since the constellation will work if each satellite works properly.',
          termIndices: [
            t('Product Validation Process'),
            t('System')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but insufficient. Individual satellite validation is important, but constellation-level validation is needed to verify coordination, coverage, and mission-level performance that emerges from satellite interactions.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 }
        },
        {
          id: 'c',
          text: 'Skip formal validation since verification testing will prove the system works correctly.',
          termIndices: [
            t('Verification (of a product)'),
            t('Validation (of a product)')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Verification and validation serve different purposes. Verification proves you built the system right, but validation proves you built the right system for stakeholder needs. Both are required.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -1, budget: -1 }
        }
      ],
      defaultNextNodeId: 'node-4'
    },
    {
      id: 'node-4',
      phase: 'Phase D',
      title: 'Integration Review Planning',
      narrative: 'Your V&V plan needs to include formal reviews to assess integration readiness and flight readiness. The program requires specific review milestones before launch vehicle integration and before launch. You must determine the appropriate review structure.',
      termHighlights: [
        t('System Integration Review'),
        t('Flight Readiness Review'),
        t('Technical Requirements')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Plan a System Integration Review before launch vehicle integration and a Flight Readiness Review before launch, with defined entrance criteria and success metrics.',
          termIndices: [
            t('System Integration Review'),
            t('Flight Readiness Review'),
            t('Technical Requirements')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. These reviews provide formal checkpoints to assess integration readiness and flight readiness. Clear entrance criteria ensure thorough preparation and reduce risk of proceeding with incomplete verification.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 }
        },
        {
          id: 'b',
          text: 'Combine both reviews into a single comprehensive review to save schedule time and resources.',
          termIndices: [
            t('System Integration Review'),
            t('Flight Readiness Review')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but not optimal. While efficient, combining reviews may compromise thoroughness. Each review serves different purposes at different integration levels, and separate reviews allow for better issue resolution.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: -1 }
        },
        {
          id: 'c',
          text: 'Skip formal reviews and rely on informal coordination meetings to assess readiness since the team knows the system status.',
          termIndices: [
            t('System Integration Review'),
            t('Flight Readiness Review')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Formal reviews provide independent assessment, documentation, and approval authority that informal meetings cannot provide. Program-level decisions require formal review processes with proper authority.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -2, budget: 0 }
        }
      ],
      defaultNextNodeId: 'node-5'
    },
    {
      id: 'node-5',
      phase: 'Phase E',
      title: 'Environmental Validation',
      narrative: 'Your CubeSats will operate in the space environment with radiation, thermal cycling, and other stresses that cannot be fully replicated in ground testing. You need to plan how to validate system performance in the actual operational environment after launch.',
      termHighlights: [
        t('Environmental Impact'),
        t('Validation (of a product)'),
        t('System')
      ],
      decisions: [
        {
          id: 'a',
          text: 'Plan phased operational validation with initial checkout, commissioning phase validation, and ongoing performance monitoring to validate system operation in the space environment.',
          termIndices: [
            t('Validation (of a product)'),
            t('Environmental Impact'),
            t('System')
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Correct. Phased operational validation allows systematic assessment of system performance in the actual environment. This approach validates that the system meets mission requirements under real operational conditions.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 1 }
        },
        {
          id: 'b',
          text: 'Assume ground testing was sufficient and proceed directly to full operational mode after basic system checkout.',
          termIndices: [
            t('Test'),
            t('Environmental Impact')
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but risky. While ground testing is valuable, the space environment presents unique challenges. A gradual validation approach reduces risk of mission failure due to unexpected environmental effects.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -1, budget: 0 }
        },
        {
          id: 'c',
          text: 'Plan extensive on-orbit testing that duplicates all ground verification activities to ensure nothing was missed.',
          termIndices: [
            t('Test'),
            t('Verification (of a product)')
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Incorrect. Duplicating ground verification on-orbit is inefficient and may consume limited mission resources. Focus should be on validating performance under conditions that could not be tested on ground.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: -3, budget: -3 }
        }
      ],
      defaultNextNodeId: null
    }
  ],
  debriefTemplate: {
    successNarrative: 'Your comprehensive verification and validation planning ensures the CubeSat constellation will be thoroughly tested at all integration levels. The multi-method approach and formal review structure provides confidence in mission success while managing cost and schedule efficiently.',
    failureNarrative: 'Inadequate verification and validation planning has created significant technical risks for the CubeSat constellation. Missing critical integration testing and validation activities could lead to mission failure or costly rework during the integration phase.',
    successThreshold: 60,
  },
}
