import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const seh325ElectronicSignal: ScenarioTemplate = {
  meta: {
    id: 'seh-3-2-5-electronic-signal',
    title: 'CubeSat Electronic Interface Definition',
    subtitle: 'Define signal interface requirements between spacecraft subsystems',
    difficulty: 'intermediate',
    categories: ['requirements', 'design', 'verification'],
    termIndices: [
      t('Derived Requirements'),
      t('Specification'),
      t('Interface Management Process'),
      t('Requirement'),
      t('Analysis'),
      t('Allocated Baseline (Phase C)'),
      t('Bidirectional Traceability'),
      t('Technical Requirements'),
      t('Technical Requirements Definition Process'),
      t('Verification (of a product)'),
      t('Critical Design Review'),
      t('Requirements Allocation Sheet'),
      t('Requirements Management Process'),
    ],
    estimatedMinutes: 18,
  },
  
  startNodeId: 'node-1',
  
  nodes: [
    {
      id: 'node-1',
      phase: 'Interface Analysis',
      title: 'Signal Type Classification',
      narrative:
        'You are defining electronic signal interfaces for your CubeSat constellation mission between the command and data handling (CDH) subsystem and the attitude determination and control system (ADCS). The parent specification allocates general interface requirements, but you must now derive specific signal interface requirements. The mission requires telemetry data transfer, command signals, and navigation sensor inputs. You need to categorize these signal types to establish proper derived requirements.',
      termHighlights: [t('Derived Requirements'), t('Specification'), t('Interface Management Process')],
      decisions: [
        {
          id: 'a',
          text: 'Create separate requirement categories for digital command signals, analog sensor signals, and high-speed data transfer protocols with specific voltage and timing specifications.',
          termIndices: [t('Derived Requirements'), t('Technical Requirements'), t('Requirements Management Process')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Proper signal classification by type (digital commands, analog sensors, data protocols) allows you to derive specific technical requirements for each category. This systematic approach ensures all signal characteristics like voltage levels, timing, and protocols are properly specified and traceable to parent requirements.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Define all signals as generic "electronic interfaces" without distinguishing between signal types or characteristics.',
          termIndices: [t('Requirement'), t('Specification')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Generic interface definitions fail to provide the specificity needed for proper system design and verification. Each signal type has unique characteristics that must be captured in derived requirements to ensure compatibility and performance.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
        {
          id: 'c',
          text: 'Copy the parent specification requirements directly without any derivation or signal-specific analysis.',
          termIndices: [t('Analysis'), t('Technical Requirements Definition Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Simply copying parent requirements without analysis and derivation fails to address the specific interface characteristics needed for implementation. The technical requirements definition process requires analyzing parent requirements to derive implementable specifications.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 3, budget: 2 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    
    {
      id: 'node-2',
      phase: 'EMI Requirements',
      title: 'Electromagnetic Interference Control',
      narrative:
        'Now you must define electromagnetic interference requirements for the CDH-to-ADCS interface. The CubeSat will operate in close proximity to other spacecraft in the constellation, and sensitive navigation sensors require protection from EMI. Your derived requirements must address both electromagnetic emission limits and susceptibility thresholds. The allocated baseline requires EMI compliance but does not specify detailed limits.',
      termHighlights: [t('Allocated Baseline (Phase C)'), t('Technical Requirements'), t('Analysis')],
      decisions: [
        {
          id: 'a',
          text: 'Specify EMI emission limits based on conducted and radiated interference analysis, with susceptibility thresholds derived from sensor sensitivity requirements and verification test procedures.',
          termIndices: [t('Analysis'), t('Technical Requirements'), t('Verification (of a product)')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. EMI requirements must be derived through analysis of both emission sources and susceptibility levels. Specifying both conducted and radiated limits with clear verification procedures ensures the interface will not cause interference or be susceptible to external EMI sources.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: 0, budget: -1 },
        },
        {
          id: 'b',
          text: 'State that EMI requirements will be "determined later" and defer specification until integration testing.',
          termIndices: [t('Requirements Management Process'), t('Critical Design Review')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Deferring EMI requirements until integration risks costly design changes and test failures. EMI characteristics must be established early to guide component selection and circuit design, not left as "to be determined" through critical design review.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 4, budget: 3 },
        },
        {
          id: 'c',
          text: 'Apply generic commercial EMI standards without analysis of mission-specific requirements or space environment considerations.',
          termIndices: [t('Mission'), t('Technical Requirements Definition Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Generic commercial EMI standards may not address space environment conditions or mission-specific sensitivity requirements. The technical requirements definition process must consider the unique operational environment and constellation proximity effects.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    
    {
      id: 'node-3',
      phase: 'Grounding Design',
      title: 'Electrical Grounding Architecture',
      narrative:
        'You are now defining grounding requirements for the electronic interface. The CubeSat uses a single-point ground architecture, but the CDH and ADCS subsystems have different grounding needs for signal integrity and safety. The ADCS magnetometer requires isolated grounding to prevent magnetic interference, while digital circuits need stable reference potentials. You must establish grounding requirements that ensure both signal quality and system safety.',
      termHighlights: [t('Requirement'), t('Technical Requirements'), t('System')],
      decisions: [
        {
          id: 'a',
          text: 'Define signal ground separation requirements with specified isolation impedance between analog sensor grounds and digital circuit grounds, including common-mode voltage limits.',
          termIndices: [t('Technical Requirements'), t('Specification'), t('Analysis')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Proper grounding requirements must address signal integrity by specifying ground separation, isolation impedance, and common-mode voltage limits. This ensures sensitive analog sensors are protected from digital switching noise while maintaining safe reference potentials.',
          nextNodeId: null,
          scoreImpact: { risk: -3, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Connect all subsystem grounds together without any isolation or impedance specifications.',
          termIndices: [t('System'), t('Requirements Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Connecting all grounds without proper isolation can create ground loops and noise coupling that degrades sensitive sensor performance. Grounding requirements must address signal integrity and electromagnetic compatibility concerns.',
          nextNodeId: null,
          scoreImpact: { risk: 5, schedule: 1, budget: 2 },
        },
        {
          id: 'c',
          text: 'Specify that grounding will follow "industry best practices" without defining specific requirements or verification criteria.',
          termIndices: [t('Verification (of a product)'), t('Requirements Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Vague references to "best practices" do not provide implementable requirements. Grounding specifications must include measurable parameters and verification criteria to ensure proper implementation and testing.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 2, budget: 1 },
        },
      ],
      defaultNextNodeId: 'node-4',
    },
    
    {
      id: 'node-4',
      phase: 'Bonding Requirements',
      title: 'Electrical Bonding Specification',
      narrative:
        'The final step is defining electrical bonding requirements between the CDH and ADCS structural interfaces. The CubeSat chassis provides structural mounting and electrical bonding paths, but you must specify bonding impedance limits to ensure safety and EMI control. The requirements allocation sheet shows that bonding must support both electrical safety and electromagnetic shielding effectiveness.',
      termHighlights: [t('Requirements Allocation Sheet'), t('Specification'), t('Bidirectional Traceability')],
      decisions: [
        {
          id: 'a',
          text: 'Specify maximum bonding resistance values between chassis connection points with verification test procedures and traceability to safety and EMI parent requirements.',
          termIndices: [t('Verification (of a product)'), t('Bidirectional Traceability'), t('Technical Requirements')],
          isCorrect: true,
          isAcceptable: true,
          feedback:
            'Correct. Electrical bonding requirements must specify measurable resistance limits with clear verification procedures. Maintaining bidirectional traceability to parent safety and EMI requirements ensures the bonding specifications support both system safety and electromagnetic compatibility objectives.',
          nextNodeId: null,
          scoreImpact: { risk: -2, schedule: -1, budget: 0 },
        },
        {
          id: 'b',
          text: 'Assume that mechanical mounting automatically provides adequate electrical bonding without specific requirements or testing.',
          termIndices: [t('Verification (of a product)'), t('Requirements Management Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. Mechanical mounting does not guarantee electrical bonding performance. Oxide layers, coatings, and joint resistance can create poor electrical connections that compromise safety and EMI performance without proper specification and verification.',
          nextNodeId: null,
          scoreImpact: { risk: 6, schedule: 2, budget: 2 },
        },
        {
          id: 'c',
          text: 'Reference general electrical codes without deriving mission-specific bonding requirements or considering space environment effects.',
          termIndices: [t('Mission'), t('Derived Requirements'), t('Technical Requirements Definition Process')],
          isCorrect: false,
          isAcceptable: false,
          feedback:
            'Incorrect. General electrical codes do not address space environment conditions like thermal cycling, outgassing, and radiation effects on bonding materials. The technical requirements definition process must derive mission-specific bonding requirements appropriate for the operational environment.',
          nextNodeId: null,
          scoreImpact: { risk: 4, schedule: 3, budget: 1 },
        },
      ],
      defaultNextNodeId: null,
    },
  ],
  
  debriefTemplate: {
    successNarrative:
      'You successfully defined comprehensive electronic signal interface requirements by properly categorizing signal types, establishing EMI limits through analysis, specifying grounding isolation requirements, and defining measurable bonding criteria with verification procedures. Your systematic approach to deriving requirements from parent specifications ensures implementable and verifiable interface definitions.',
    failureNarrative:
      'Your interface requirements lacked the specificity and analysis needed for proper implementation. Electronic signal interfaces require detailed technical requirements derived through systematic analysis of signal characteristics, EMI considerations, grounding needs, and bonding performance, all with clear verification criteria and traceability to parent requirements.',
    successThreshold: 60,
  },
}
