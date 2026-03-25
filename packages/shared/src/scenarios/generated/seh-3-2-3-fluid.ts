import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh323Fluid: ScenarioTemplate = {
  meta: {
    id: 'seh-3-2-3-fluid',
    title: 'Fluid Systems Interface Management',
    subtitle: 'Define interface requirements for thermal control and life support fluid systems on a space station resupply vehicle',
    difficulty: 'beginner',
    categories: ['requirements', 'design'],
    termIndices: [
      t('Specification'),
      t('Requirement'),
      t('System'),
      t('Allocated Baseline (Phase C)'),
      t('Analysis'),
      t('Bidirectional Traceability'),
      t('Derived Requirements'),
      t('Interface Management Process'),
      t('Technical Requirements'),
      t('Technical Requirements Definition Process'),
      t('Preliminary Design Review'),
    ],
    estimatedMinutes: 15,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase C',
      title: 'Fluid Interface Requirements Review',
      narrative:
        'Your resupply vehicle must connect to the space station\'s thermal control system and life support systems. The station\'s fluid systems include thermal coolant loops, potable water, waste water, and atmospheric sampling lines. You need to define the interface requirements for your vehicle\'s fluid systems to ensure proper integration.',
      termHighlights: [
        t('System'),
        t('Interface Management Process'),
        t('Specification'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Start the Interface Management Process by identifying all fluid interfaces and defining derived requirements based on the station\'s specifications.',
          termIndices: [
            t('Interface Management Process'),
            t('Derived Requirements'),
            t('Specification'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Interface Management Process is the systematic approach to identify, define, and control interfaces. Derived requirements must be based on the station\'s specifications to ensure compatibility.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Copy the interface requirements from a previous cargo vehicle and adapt them as needed.',
          termIndices: [
            t('Requirement'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but risky. While heritage can inform design, each mission has unique requirements. You must still follow the Interface Management Process to ensure all station specifications are properly addressed.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Design the fluid systems first, then check compatibility with the station later.',
          termIndices: [
            t('System'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Designing without understanding interface requirements violates systems engineering principles. Interface requirements must be defined before system design to prevent costly redesign and integration failures.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -3, budget: -4 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase C',
      title: 'Thermal Control System Requirements',
      narrative:
        'You\'re defining requirements for the thermal control fluid interface. The station uses ammonia coolant loops operating at specific pressures and flow rates. Your vehicle must connect to these loops during docking to maintain proper thermal management. The station\'s specification defines the coolant properties, pressure ranges, and connection standards.',
      termHighlights: [
        t('Technical Requirements'),
        t('Specification'),
        t('Derived Requirements'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Define technical requirements for coolant compatibility, pressure ratings, flow rates, and connection interfaces based on the station specification.',
          termIndices: [
            t('Technical Requirements'),
            t('Specification'),
            t('Derived Requirements'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Technical requirements must be derived from the station specification to ensure proper thermal interface. This includes all critical parameters like fluid compatibility, pressure, flow, and mechanical connections.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Use standard industry fluid connection requirements and assume they will work with the station.',
          termIndices: [
            t('Requirement'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but risky. While industry standards provide a baseline, space station interfaces have unique requirements. You must derive requirements from the actual station specification to ensure compatibility.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Focus only on the mechanical connection requirements and handle fluid compatibility during integration testing.',
          termIndices: [
            t('Technical Requirements'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Fluid compatibility must be addressed in requirements, not left for integration. Incompatible fluids could damage systems or create safety hazards. All interface aspects must be specified upfront.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase C',
      title: 'Life Support Fluid Systems',
      narrative:
        'Your vehicle must interface with the station\'s potable water and waste water systems during crew operations. The station specification defines water quality standards, pressure requirements, and contamination control measures. You need to establish requirements that ensure your vehicle\'s systems meet these standards without compromising station operations.',
      termHighlights: [
        t('Requirement'),
        t('Analysis'),
        t('Technical Requirements Definition Process'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Follow the Technical Requirements Definition Process to establish water quality, pressure, and contamination control requirements based on station specifications.',
          termIndices: [
            t('Technical Requirements Definition Process'),
            t('Requirement'),
            t('Specification'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Technical Requirements Definition Process ensures all life support interface requirements are properly derived from station specifications. This systematic approach prevents contamination and operational issues.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'b',
          text: 'Use terrestrial water quality standards and add safety margins for space environment.',
          termIndices: [
            t('Requirement'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but not optimal. While terrestrial standards provide a baseline, space station water systems have unique requirements for microgravity operations and contamination control that must be specifically addressed.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Plan to use separate fluid systems on the vehicle to avoid any interface complexity.',
          termIndices: [
            t('System'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Avoiding interfaces defeats the purpose of resupply operations. The vehicle must interface with station systems to transfer water and waste. This approach would prevent mission success.',
          nextNodeId: null,
          scoreImpact: { risk: 7, schedule: -4, budget: -2 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Phase C',
      title: 'Requirements Traceability and Analysis',
      narrative:
        'You\'ve defined interface requirements for thermal control and life support fluid systems. Before the Preliminary Design Review, you need to ensure all requirements are properly traced and analyzed for feasibility. The project manager wants confirmation that your fluid interface requirements are complete and traceable to the station specifications.',
      termHighlights: [
        t('Bidirectional Traceability'),
        t('Analysis'),
        t('Preliminary Design Review'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish bidirectional traceability between your interface requirements and station specifications, then perform analysis to verify feasibility.',
          termIndices: [
            t('Bidirectional Traceability'),
            t('Analysis'),
            t('Specification'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Bidirectional traceability ensures every requirement links back to a station specification and forward to design elements. Analysis verifies that the requirements are feasible and complete.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Create a simple requirements list and plan to verify traceability during detailed design.',
          termIndices: [
            t('Requirement'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but risky. Traceability should be established during requirements definition, not delayed. Late traceability verification can reveal gaps that require requirements changes and design rework.',
          nextNodeId: null,
          scoreImpact: { risk: 2, schedule: -1, budget: 0 },
        },
        {
          id: 'c',
          text: 'Assume the requirements are correct since they came from station specifications and proceed to design.',
          termIndices: [
            t('Requirement'),
            t('Specification'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Even requirements derived from specifications need traceability and analysis. This ensures proper interpretation, completeness, and feasibility. Assumptions without verification lead to system failures.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: -2, budget: -3 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Phase C',
      title: 'Allocated Baseline Documentation',
      narrative:
        'Your fluid interface requirements are complete and analyzed. The Preliminary Design Review is approaching, and you need to establish the Allocated Baseline for your fluid systems. This baseline will control the interface requirements and guide the detailed design work that follows.',
      termHighlights: [
        t('Allocated Baseline (Phase C)'),
        t('Preliminary Design Review'),
      ],
      decisions: [
        {
          id: 'a',
          text: 'Establish the Allocated Baseline with your verified fluid interface requirements as controlled configuration documentation for PDR.',
          termIndices: [
            t('Allocated Baseline (Phase C)'),
            t('Preliminary Design Review'),
          ],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. The Allocated Baseline captures the verified interface requirements as controlled configuration documentation. This provides the foundation for detailed design and manufacturing activities following PDR.',
          nextNodeId: null,
          scoreImpact: { risk: -1, schedule: 2, budget: 1 },
        },
        {
          id: 'b',
          text: 'Document the requirements in a simple spreadsheet for the design team to reference.',
          termIndices: [
            t('Requirement'),
          ],
          isCorrect: false,
          isAcceptable: true,
          feedback:
            'Acceptable but not sufficient. While documentation is important, the Allocated Baseline requires formal configuration control. A spreadsheet lacks the necessary change control and approval processes.',
          nextNodeId: null,
          scoreImpact: { risk: 1, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wait until after PDR to formalize the requirements since they might change during design review.',
          termIndices: [
            t('Preliminary Design Review'),
            t('Requirement'),
          ],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. The Allocated Baseline must be established by PDR to enable the review. Waiting until after PDR delays design work and violates the systems engineering process. Requirements should be stable for PDR.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: -3, budget: -2 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'You successfully defined comprehensive fluid interface requirements following proper systems engineering processes. Your systematic approach to interface management, requirements derivation, and traceability ensures the resupply vehicle will integrate properly with station systems.',
    failureNarrative: 'Your approach to fluid interface requirements had significant gaps that could lead to integration failures or safety issues. Proper interface management and requirements processes are critical for mission success.',
    successThreshold: 60,
  },
}
