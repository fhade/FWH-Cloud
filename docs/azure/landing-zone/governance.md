# Governance & Compliance

## Overview

Governance in landing zones ensures consistent policies, compliance, and cost control across all cloud resources through a centralized approach.

## Governance Hierarchy

```
┌─────────────────────────────────────────────────────┐
│                ROOT MANAGEMENT GROUP                │
│         (Apply policies to everything)              │
└────────────────────┬────────────────────────────────┘
                     │
         ┌───────────┴──────────────┐
         │                          │
    ┌────▼──────────────┐  ┌───────▼─────────────┐
    │ PLATFORM MG       │  │ LANDING ZONES MG    │
    │ (Shared Services) │  │ (Workload Specific) │
    └────┬──────────────┘  └───────┬─────────────┘
         │                         │
    ┌────▼─────────────────────────▼──────┐
    │ SUBSCRIPTIONS                        │
    │ - Identity Sub                       │
    │ - Connectivity Sub                   │
    │ - Prod App Sub                       │
    │ - Dev App Sub                        │
    └──────────────────────────────────────┘
```

## Azure Policy Framework

```
┌──────────────────────────────────────────┐
│          AZURE POLICY SCOPE              │
├──────────────────────────────────────────┤
│ Policy Definition                        │
│  └─ What is allowed/denied               │
│                                          │
│ Policy Assignment                        │
│  └─ Where to apply (MG, Sub, RG)        │
│                                          │
│ Compliance Evaluation                    │
│  └─ Check if resources are compliant    │
│                                          │
│ Remediation                              │
│  └─ Auto-fix non-compliant resources    │
└──────────────────────────────────────────┘
```

## Common Landing Zone Policies

| Policy | Purpose | Example |
|--------|---------|---------|
| **Location Restriction** | Limit where resources can be created | Only East US, West US |
| **SKU Restriction** | Control resource sizes | No expensive VMs |
| **Tagging Requirements** | Enforce resource organization | Require Cost Center tag |
| **Encryption** | Require data protection | Enable disk encryption |
| **Logging** | Enable audit trail | Send logs to Log Analytics |
| **Network Access** | Control connectivity | No public IPs |

## Management Groups

```
Management Groups provide:
├── Policy Inheritance
├── Role Assignment at Scale
├── Centralized Governance
├── Organization Alignment
└── Cost Analysis
```

## Cost Management

### Cost Control Mechanisms

```
1. BUDGET ALERTS
   └─ Notify when spending exceeds threshold

2. SPENDING LIMITS
   └─ Prevent exceeding allocated budget

3. RESERVATION RECOMMENDATIONS
   └─ Purchase 1-3 year commitments

4. COST ALLOCATION
   └─ Tag and track costs by department

5. POLICY-BASED RESTRICTIONS
   └─ Prevent expensive resources
```

## Compliance & Audit

### Built-in Compliance Standards

- **CIS Microsoft Azure Foundations Benchmark** - Cloud security baseline
- **HIPAA/HITRUST** - Healthcare compliance
- **PCI DSS** - Payment card security
- **SOC 2** - Service organization controls
- **ISO 27001** - Information security management

### Audit Trail

All actions are logged:
```
Who did what → When → Where → Why
User/Service → Action → Timestamp → Resource → Status
```

## Resources

- [Azure Policy Documentation](https://docs.microsoft.com/en-us/azure/governance/policy/)
- [Management Groups Documentation](https://docs.microsoft.com/en-us/azure/governance/management-groups/)
- [Azure Blueprints](https://docs.microsoft.com/en-us/azure/governance/blueprints/)
- [Cost Management + Billing](https://docs.microsoft.com/en-us/azure/cost-management-billing/)
- [Azure Compliance Documentation](https://docs.microsoft.com/en-us/azure/compliance/)
- [Azure Security Benchmark](https://docs.microsoft.com/en-us/azure/security/benchmarks/overview)
