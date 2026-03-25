import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh71EnvironmentalImpactsDescribesHowTheEnvisioned: ScenarioTemplate = {
  meta: {
    id: 'seh-7-1-environmental-impacts-describes-how-the-envisioned',
    title: 'Mars Sample Return Environmental Assessment',
    subtitle: 'Evaluate the complete lifecycle environmental impacts of a Mars sample return mission',
    difficulty: 'intermediate',
    categories: ['lifecycle', 'requirements'],
    termIndices: [
      t('Environmental Impact'),
      t('Environmental Management'),
      t('System'),
      t('Life Cycle Cost (LCC)'),
      t('Analysis'),
      t('Context Diagram'),
      t('Stakeholder'),
      t('Technical Requirements'),
      t('Risk Assessment'),
      t('Need'),
      t('Acquisition'),
      t('Prognosis'),
    ],
    estimatedMinutes: 18,
  },
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      phase: 'Mission Planning',
      title: 'Defining Environmental Impact Scope',
      narrative:
        'You are leading the environmental impact assessment for a Mars sample return mission that will retrieve samples collected by the Perseverance rover. The mission includes an Earth Return Orbiter, Mars Ascent Vehicle, and Sample Retrieval Lander, spanning development through disposal phases. Your team needs to establish the scope of environmental impacts to assess across all mission phases.',
      termHighlights: [t('Environmental Impact'), t('System'), t('Life Cycle Cost (LCC)')],
      decisions: [
        {
          id: 'a',
          text: 'Focus environmental assessment only on launch operations and propellant emissions during the operational phase.',
          termIndices: [t('Environmental Impact')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'This scope is too narrow. Environmental impacts must be assessed across the entire system lifecycle from development through disposal, including manufacturing, testing, operations, and end-of-life disposal on Earth and potential space debris generation.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Assess environmental impacts from development through disposal including Earth, space, and Mars environments across all mission phases.',
          termIndices: [t('Environmental Impact'), t('System'), t('Life Cycle Cost (LCC)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Comprehensive environmental impact assessment must span the complete system lifecycle and consider impacts on local, planetary, and space environments. This includes manufacturing waste, launch emissions, orbital debris potential, planetary protection, and disposal methods.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 1 },
        },
        {
          id: 'c',
          text: 'Delegate environmental assessment to each contractor to handle their specific subsystem impacts independently.',
          termIndices: [t('Acquisition'), t('Environmental Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Environmental management requires integrated system-level assessment. While contractors contribute subsystem impact data, the overall environmental impact analysis must be coordinated to identify cumulative effects and system-level environmental requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 2, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Impact Analysis',
      title: 'Orbital Debris Assessment',
      narrative:
        'Your analysis identifies that the Mars Ascent Vehicle will remain in Mars orbit after sample transfer, and the Earth Return Orbiter will enter a disposal trajectory after sample capsule release. The mission also requires multiple trajectory correction maneuvers that could create debris. You must assess the orbital debris generation potential and develop mitigation strategies.',
      termHighlights: [t('Analysis'), t('Risk Assessment'), t('Environmental Impact')],
      decisions: [
        {
          id: 'a',
          text: 'Design Mars Ascent Vehicle with controlled deorbit capability and Earth Return Orbiter for heliocentric disposal trajectory.',
          termIndices: [t('Environmental Impact'), t('Risk Assessment'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Controlled disposal eliminates long-term orbital debris in both Mars and Earth orbital environments. This approach addresses environmental impact requirements for space environments and demonstrates responsible space exploration practices.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 1, budget: 2 },
        },
        {
          id: 'b',
          text: 'Accept orbital debris generation as unavoidable for interplanetary missions and focus on other environmental impacts.',
          termIndices: [t('Environmental Impact')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Orbital debris generation is not acceptable without mitigation. Space environment protection requires active debris mitigation strategies. Leaving spacecraft in orbit without disposal plans violates environmental impact requirements for space environments.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: -1, budget: -1 },
        },
        {
          id: 'c',
          text: 'Plan to leave spacecraft in stable parking orbits for future missions to potentially recover and reuse.',
          termIndices: [t('Prognosis'), t('Environmental Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While reuse concepts are valuable, leaving spacecraft in orbit without concrete recovery plans still constitutes debris generation. Environmental impact assessment requires definitive disposal strategies, not speculative future recovery scenarios.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Planetary Protection',
      title: 'Mars Contamination Assessment',
      narrative:
        'The Sample Retrieval Lander will operate on Mars surface for several months before sample pickup, and the Mars Ascent Vehicle will launch from Mars carrying potentially viable samples. Your environmental assessment must address forward and backward contamination risks that could impact both Earth and Mars environments. Stakeholders are concerned about contamination protocols.',
      termHighlights: [t('Environmental Impact'), t('Stakeholder'), t('Environmental Management')],
      decisions: [
        {
          id: 'a',
          text: 'Implement planetary protection protocols for both forward contamination prevention and backward contamination containment.',
          termIndices: [t('Environmental Impact'), t('Environmental Management'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Comprehensive planetary protection addresses environmental impacts on both planetary bodies. Forward contamination protocols protect Mars indigenous environment, while backward contamination containment protects Earth biosphere from potential Mars organisms.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 2, budget: 3 },
        },
        {
          id: 'b',
          text: 'Focus only on Earth protection since Mars samples pose the primary contamination risk to our biosphere.',
          termIndices: [t('Environmental Impact'), t('Risk Assessment')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Environmental impact assessment must consider impacts on all relevant environments. Forward contamination of Mars could compromise scientific integrity and potentially harm indigenous Mars environment, violating comprehensive environmental protection requirements.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Rely on existing sterilization procedures from previous Mars missions without additional contamination assessment.',
          termIndices: [t('Analysis'), t('Environmental Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Sample return missions present unique bidirectional contamination challenges requiring specific analysis. Environmental impact assessment cannot rely solely on heritage procedures without evaluating new mission-specific contamination pathways and risks.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: -1, budget: -1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    {
      id: 'node-4',
      phase: 'Manufacturing Impacts',
      title: 'Development Phase Environmental Assessment',
      narrative:
        'Your assessment reveals significant environmental impacts during the development phase including specialized materials for heat shields, nuclear power sources requiring plutonium handling, and extensive testing facilities generating hazardous waste. The manufacturing and testing phases span multiple years and locations. You need to address these development-phase environmental impacts in your overall assessment.',
      termHighlights: [t('Environmental Impact'), t('Analysis'), t('Stakeholder')],
      decisions: [
        {
          id: 'a',
          text: 'Document all development-phase impacts including materials, waste generation, and disposal requirements across the full supply chain.',
          termIndices: [t('Environmental Impact'), t('Analysis'), t('Environmental Management')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Comprehensive environmental impact assessment includes the entire system lifecycle from development through disposal. Manufacturing, testing, and development activities often generate significant environmental impacts that must be documented and managed.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 2 },
        },
        {
          id: 'b',
          text: 'Focus environmental assessment primarily on operational impacts since development impacts are temporary.',
          termIndices: [t('Environmental Impact')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Development phase environmental impacts can be substantial and long-lasting, particularly with hazardous materials and waste generation. Environmental assessment must address the complete lifecycle impact, not just operational phases.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 0, budget: 0 },
        },
        {
          id: 'c',
          text: 'Assume contractors will handle development impacts through their existing environmental compliance programs.',
          termIndices: [t('Acquisition'), t('Environmental Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While contractors must maintain environmental compliance, the system-level environmental impact assessment requires integrated analysis of development impacts. Mission-specific environmental requirements cannot be addressed through contractor compliance alone.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 1, budget: 0 },
        },
      ],
      defaultNextNodeId: 'node-5',
    },
    {
      id: 'node-5',
      phase: 'Organizational Impacts',
      title: 'Environmental Management Organization',
      narrative:
        'Your environmental impact assessment reveals the need for specialized planetary protection officers, orbital debris analysts, and hazardous materials handling specialists throughout the mission lifecycle. These roles require coordination between NASA centers, international partners, and contractor organizations. You must address how environmental impact management affects organizational structures and training requirements.',
      termHighlights: [t('Environmental Management'), t('Stakeholder'), t('Need')],
      decisions: [
        {
          id: 'a',
          text: 'Establish integrated environmental management team with specialized training and cross-organizational coordination protocols.',
          termIndices: [t('Environmental Management'), t('Stakeholder'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Complex environmental impacts require dedicated organizational support with specialized expertise and coordinated management across multiple organizations. This ensures environmental requirements are properly implemented throughout the mission lifecycle.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 2, budget: 3 },
        },
        {
          id: 'b',
          text: 'Assign environmental management responsibilities to existing mission operations personnel without additional training.',
          termIndices: [t('Environmental Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Environmental impact management for complex space missions requires specialized expertise in planetary protection, orbital mechanics, and hazardous materials. Existing personnel cannot adequately address these requirements without appropriate training and organizational support.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 0, budget: -1 },
        },
        {
          id: 'c',
          text: 'Contract all environmental management functions to external organizations to minimize internal organizational impact.',
          termIndices: [t('Acquisition'), t('Environmental Management')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'While external expertise is valuable, environmental management requires integrated coordination with mission operations and design decisions. Complete external delegation creates coordination challenges and reduces internal capability for environmental decision-making.',
          nextNodeId: null,
          scoreImpact: { risk: 3, schedule: 1, budget: 1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  debriefTemplate: {
    successNarrative: 'Your comprehensive environmental impact assessment successfully identified and addressed impacts across the complete mission lifecycle, from development through disposal. You properly considered Earth, space, and Mars environments while establishing appropriate organizational support for environmental management.',
    failureNarrative: 'The environmental impact assessment was incomplete or inadequately scoped. Critical environmental impacts were overlooked or improperly managed, potentially leading to environmental damage and mission complications. A more comprehensive systems approach to environmental assessment is required.',
    successThreshold: 60,
  },
}
