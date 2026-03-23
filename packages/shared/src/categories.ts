import type { Category } from './types.js'

/** Auto-classified category assignments for each glossary term (by index). */
export const TERM_CATEGORIES: Category[] = [
  'risk',           // 0: Acceptable Risk
  'project-mgmt',   // 1: Acquisition
  'project-mgmt',   // 2: Activity
  'technology',      // 3: Advancement Degree of Difficulty Assessment (AD2)
  'configuration',   // 4: Allocated Baseline (Phase C)
  'verification',    // 5: Analysis
  'project-mgmt',   // 6: Analysis of Alternatives (AoA)
  'project-mgmt',   // 7: Analytic Hierarchy Process (AHP)
  'risk',           // 8: Anomaly
  'project-mgmt',   // 9: Approval
  'lifecycle',       // 10: Approval (for Implementation)
  'design',          // 11: Architecture (System)
  'design',          // 12: Architecture (ISO Definition)
  'configuration',   // 13: As-Deployed Baseline
  'human-factors',   // 14: Automated
  'design',          // 15: Autonomous
  'configuration',   // 16: Baseline
  'requirements',    // 17: Bidirectional Traceability
  'technology',      // 18: Brassboard
  'technology',      // 19: Breadboard
  'project-mgmt',   // 20: Concurrence
  'design',          // 21: Concurrent Engineering
  'configuration',   // 22: Configuration Items (CI)
  'configuration',   // 23: Configuration Management Process
  'project-mgmt',   // 24: Component Facilities
  'lifecycle',       // 25: Concept of Operations (ConOps)
  'design',          // 26: Context Diagram
  'risk',           // 27: Continuous Risk Management
  'project-mgmt',   // 28: Contract
  'project-mgmt',   // 29: Contractor
  'project-mgmt',   // 30: Control Account Manager
  'lifecycle',       // 31: Control Gate (or milestone)
  'project-mgmt',   // 32: Cost-Benefit Analysis
  'project-mgmt',   // 33: Cost-Effectiveness Analysis
  'reviews',         // 34: Critical Design Review
  'lifecycle',       // 35: Critical Event (or key event)
  'reviews',         // 36: Critical Event Readiness Review
  'human-factors',   // 37: Customer
  'configuration',   // 38: Data Management
  'project-mgmt',   // 39: Decision Analysis Process
  'project-mgmt',   // 40: Decision Authority
  'project-mgmt',   // 41: Decision Matrix
  'reviews',         // 42: Decision Support Package
  'project-mgmt',   // 43: Decision Tree
  'reviews',         // 44: Decommissioning Review
  'configuration',   // 45: Deliverable Data Item
  'verification',    // 46: Demonstration
  'requirements',    // 47: Derived Requirements
  'project-mgmt',   // 48: Descope
  'design',          // 49: Design Solution Definition Process
  'project-mgmt',   // 50: Designated Governing Authority
  'risk',           // 51: Detection
  'risk',           // 52: Diagnosis
  'risk',           // 53: Discrepancy
  'project-mgmt',   // 54: Earned Value
  'project-mgmt',   // 55: Earned Value Management
  'design',          // 56: Emergent Behavior
  'design',          // 57: End Product
  'design',          // 58: Enabling Products
  'technology',      // 59: Engineering Unit
  'design',          // 60: Enhanced Functional Flow Block Diagram
  'reviews',         // 61: Entrance Criteria
  'risk',           // 62: Environmental Impact
  'risk',           // 63: Environmental Management
  'project-mgmt',   // 64: Establish (with respect to processes)
  'project-mgmt',   // 65: Evaluation
  'design',          // 66: Extensibility
  'risk',           // 67: Failure
  'risk',           // 68: Failure Tolerance
  'risk',           // 69: Fault
  'risk',           // 70: Fault Identification
  'risk',           // 71: Fault Isolation
  'risk',           // 72: Fault Management
  'risk',           // 73: Fault Tolerance
  'project-mgmt',   // 74: Feasible
  'design',          // 75: Flexibility
  'reviews',         // 76: Flight Readiness Review
  'project-mgmt',   // 77: Float
  'lifecycle',       // 78: Formulation Phase
  'design',          // 79: Functional Analysis
  'configuration',   // 80: Functional Baseline (Phase B)
  'reviews',         // 81: Functional Configuration Audit (FCA)
  'design',          // 82: Functional Decomposition
  'design',          // 83: Functional Flow Block Diagram
  'project-mgmt',   // 84: Gantt Chart
  'requirements',    // 85: Goal
  'verification',    // 86: Government Mandatory Inspection Points
  'risk',           // 87: Health Assessment
  'risk',           // 88: Health Monitoring
  'technology',      // 89: Heritage (or legacy)
  'human-factors',   // 90: Human-Centered Design
  'human-factors',   // 91: Human Factors Engineering
  'human-factors',   // 92: Human Systems Integration
  'lifecycle',       // 93: Implementation Phase
  'project-mgmt',   // 94: Incommensurable Costs
  'project-mgmt',   // 95: Influence Diagram
  'verification',    // 96: Inspection
  'design',          // 97: Integrated Logistics Support
  'design',          // 98: Interface Management Process
  'design',          // 99: Iterative
  'lifecycle',       // 100: Key Decision Point
  'lifecycle',       // 101: Key Event (or Critical Event)
  'requirements',    // 102: Key Performance Parameter
  'project-mgmt',   // 103: Knowledge Management
  'project-mgmt',   // 104: Least-Cost Analysis
  'reviews',         // 105: Liens
  'project-mgmt',   // 106: Life Cycle Cost (LCC)
  'design',          // 107: Logical Decomposition Models
  'design',          // 108: Logical Decomposition Process
  'design',          // 109: Logistics (or Integrated Logistics Support)
  'project-mgmt',   // 110: Loosely Coupled Program
  'project-mgmt',   // 111: Maintain (with respect to establishment of processes)
  'design',          // 112: Maintainability
  'project-mgmt',   // 113: Margin
  'configuration',   // 114: Master Equipment List (MEL)
  'requirements',    // 115: Measure of Effectiveness (MOE)
  'requirements',    // 116: Measure of Performance (MOP)
  'project-mgmt',   // 117: Metric
  'lifecycle',       // 118: Mission
  'reviews',         // 119: Mission Concept Review
  'reviews',         // 120: Mission Definition Review
  'risk',           // 121: Mitigation
  'design',          // 122: Model
  'requirements',    // 123: Need
  'verification',    // 124: Nonconforming product
  'requirements',    // 125: Objective
  'project-mgmt',   // 126: Objective Function (sometimes Cost Function)
  'design',          // 127: Operational Environment
  'reviews',         // 128: Operational Readiness Review
  'design',          // 129: Operations Concept
  'design',          // 130: Optimal Solution
  'human-factors',   // 131: Other Interested Parties (Stakeholders)
  'reviews',         // 132: Peer Review
  'project-mgmt',   // 133: Performance Standards
  'reviews',         // 134: Physical Configuration Audits (PCA)
  'reviews',         // 135: Post-Flight Assessment Review
  'reviews',         // 136: Post-Launch Assessment Review
  'project-mgmt',   // 137: Precedence Diagram
  'reviews',         // 138: Preliminary Design Review
  'project-mgmt',   // 139: Process
  'design',          // 140: Producibility
  'design',          // 141: Product
  'configuration',   // 142: Product Baseline (Phase D/E)
  'design',          // 143: Product Breakdown Structure
  'design',          // 144: Product Implementation Process
  'design',          // 145: Product Integration Process
  'design',          // 146: Product Realization
  'design',          // 147: Product Transition Process
  'verification',    // 148: Product Validation Process
  'verification',    // 149: Product Verification Process
  'reviews',         // 150: Production Readiness Review (PRR)
  'risk',           // 151: Prognosis
  'project-mgmt',   // 152: Program
  'reviews',         // 153: Program/System Definition Review
  'requirements',    // 154: Program Requirements
  'reviews',         // 155: Program System Requirements Review
  'requirements',    // 156: Programmatic Requirements
  'project-mgmt',   // 157: Project
  'project-mgmt',   // 158: Project Plan
  'requirements',    // 159: Project Requirements
  'lifecycle',       // 160: Phase Product
  'lifecycle',       // 161: Product Form
  'technology',      // 162: Prototype
  'verification',    // 163: Quality Assurance
  'design',          // 164: Realized Product
  'risk',           // 165: Recovery
  'design',          // 166: Recursive
  'human-factors',   // 167: Relevant Stakeholder
  'verification',    // 168: Relevant Environment
  'design',          // 169: Reliability
  'design',          // 170: Repeatable
  'requirements',    // 171: Requirement
  'requirements',    // 172: Requirements Allocation Sheet
  'requirements',    // 173: Requirements Management Process
  'risk',           // 174: Risk
  'risk',           // 175: Risk Assessment
  'risk',           // 176: Risk-Informed Decision Analysis Process
  'risk',           // 177: Risk Management
  'risk',           // 178: Safety
  'design',          // 179: Search Space (or Alternative Space)
  'project-mgmt',   // 180: Single-Project Programs
  'technology',      // 181: Software
  'project-mgmt',   // 182: Solicitation
  'requirements',    // 183: Specification
  'human-factors',   // 184: Stakeholder
  'human-factors',   // 185: Stakeholder Expectations
  'human-factors',   // 186: Stakeholder Expectations Definition Process
  'reviews',         // 187: Standing Review Board
  'design',          // 188: State Diagram
  'reviews',         // 189: Success Criteria
  'project-mgmt',   // 190: Surveillance
  'design',          // 191: System
  'reviews',         // 192: System Acceptance Review
  'reviews',         // 193: System Definition Review
  'reviews',         // 194: System Integration Review
  'reviews',         // 195: System Requirements Review
  'risk',           // 196: System Safety Engineering
  'design',          // 197: System Structure
  'design',          // 198: Systems Approach
  'design',          // 199: Systems Engineering (SE) Engine
  'project-mgmt',   // 200: Systems Engineering Management Plan (SEMP)
  'project-mgmt',   // 201: Tailoring
  'project-mgmt',   // 202: Technical Assessment Process
  'project-mgmt',   // 203: Technical Cost Estimate
  'configuration',   // 204: Technical Data Management Process
  'configuration',   // 205: Technical Data Package
  'verification',    // 206: Technical Measures
  'verification',    // 207: Technical Performance Measures
  'project-mgmt',   // 208: Technical Planning Process
  'requirements',    // 209: Technical Requirements
  'requirements',    // 210: Technical Requirements Definition Process
  'risk',           // 211: Technical Risk
  'risk',           // 212: Technical Risk Management Process
  'project-mgmt',   // 213: Technical Team
  'technology',      // 214: Technology Readiness Assessment Report
  'technology',      // 215: Technology Assessment
  'technology',      // 216: Technology Development Plan
  'technology',      // 217: Technology Maturity Assessment
  'technology',      // 218: Technology Readiness Level
  'verification',    // 219: Test
  'reviews',         // 220: Test Readiness Review
  'requirements',    // 221: Threshold Requirements
  'project-mgmt',   // 222: Tightly Coupled Programs
  'requirements',    // 223: Traceability
  'design',          // 224: Trade Study
  'design',          // 225: Trade Study Report
  'design',          // 226: Trade Tree
  'design',          // 227: Transition
  'project-mgmt',   // 228: Uncoupled Programs
  'project-mgmt',   // 229: Utility
  'requirements',    // 230: Validated Requirements
  'verification',    // 231: Validation (of a product)
  'project-mgmt',   // 232: Variance
  'verification',    // 233: Verification (of a product)
  'configuration',   // 234: Waiver
  'project-mgmt',   // 235: Work Breakdown Structure (WBS)
  'project-mgmt',   // 236: WBS Model
  'project-mgmt',   // 237: Workflow Diagram
]
