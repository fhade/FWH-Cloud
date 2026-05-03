# Landing Zone Architecture

## Reference Architecture

A typical landing zone follows this hierarchical structure:

```
┌─────────────────────────────────────────────────────────┐
│                    ROOT MANAGEMENT GROUP                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌────────────────────────────────────────────────┐   │
│  │         PLATFORM MANAGEMENT GROUP              │   │
│  │  ┌──────────────┐  ┌──────────────────────┐   │   │
│  │  │  Identity    │  │  Management & Sec    │   │   │
│  │  │  Subscription│  │  Subscription        │   │   │
│  │  └──────────────┘  └──────────────────────┘   │   │
│  │  ┌──────────────┐  ┌──────────────────────┐   │   │
│  │  │  Connectivity│  │  Compliance          │   │   │
│  │  │  Subscription│  │  Subscription        │   │   │
│  │  └──────────────┘  └──────────────────────┘   │   │
│  └────────────────────────────────────────────────┘   │
│                                                         │
│  ┌────────────────────────────────────────────────┐   │
│  │      LANDING ZONES MANAGEMENT GROUP            │   │
│  │                                                 │   │
│  │  ┌──────────────┐  ┌──────────────┐           │   │
│  │  │   Corp       │  │   Online     │           │   │
│  │  │   Landing    │  │   Landing    │           │   │
│  │  │   Zone       │  │   Zone       │           │   │
│  │  │              │  │              │           │   │
│  │  │ - Prod Sub   │  │ - Prod Sub   │           │   │
│  │  │ - Dev Sub    │  │ - Dev Sub    │           │   │
│  │  └──────────────┘  └──────────────┘           │   │
│  └────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Network Architecture

```
                    ┌─────────────────────┐
                    │   On-Premises       │
                    │   Network           │
                    └──────────┬──────────┘
                               │
                         ExpressRoute
                         or VPN
                               │
                    ┌──────────▼──────────┐
                    │  Hub Virtual Network│
                    │  - Azure Firewall   │
                    │  - VPN/ExpressRoute │
                    │  - DNS Servers      │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
        ┌───────▼────┐  ┌──────▼────┐  ┌─────▼───────┐
        │ Spoke VNet  │  │ Spoke VNet │  │ Spoke VNet  │
        │ (Prod)      │  │ (Dev)      │  │ (Test)      │
        │ - Resources │  │ - Resources│  │ - Resources │
        └─────────────┘  └────────────┘  └─────────────┘
```

## Security Layers

```
         Application Layer
              ↓
      Web Application Firewall (WAF)
              ↓
      Network Security Groups (NSGs)
              ↓
      Azure Firewall / NVA
              ↓
      DDoS Protection
              ↓
      Encryption in Transit & At Rest
```

## Design Principles

1. **Subscriptions as Scale Unit** - Use multiple subscriptions for isolation
2. **Management Groups for Governance** - Apply policies at scale
3. **Hub-and-Spoke Network** - Centralized security and connectivity
4. **Separation of Duties** - Different subscriptions for different purposes
5. **Centralized Logging** - All logs flow to central location

## Common Patterns

### Corp Landing Zone
- For regulated workloads
- Requires compliance controls
- Connected to on-premises via ExpressRoute
- Example: Financial systems, healthcare

### Online Landing Zone
- For internet-facing applications
- May have less strict governance
- Cloud-native architectures
- Example: Public web apps, SaaS applications

## Resources

- [Enterprise-Scale Architecture](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/enterprise-scale/architecture)
- [Network Topology and Connectivity](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/define-an-azure-network-topology)
- [Azure Landing Zone Design Guide](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/)
