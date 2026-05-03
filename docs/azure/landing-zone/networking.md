# Network Architecture & Connectivity

## Overview

Network architecture is critical in landing zones. It provides connectivity, security boundaries, and centralized management for all cloud resources.

## Hub-and-Spoke Model

```
                     ┌─────────────────────┐
                     │   On-Premises       │
                     │   Network           │
                     └──────────┬──────────┘
                                │
                    ┌───────────┴──────────┐
                    │                      │
              ExpressRoute or VPN   (Optional)
                    │                      │
          ┌─────────▼────────────────────┐
          │  HUB VIRTUAL NETWORK          │
          │  ┌────────────────────────┐   │
          │  │  Azure Firewall        │   │
          │  │  - Inspection          │   │
          │  │  - Threat Protection   │   │
          │  │  - NAT Rules           │   │
          │  └────────────────────────┘   │
          │  ┌────────────────────────┐   │
          │  │  VPN/ExpressRoute GW   │   │
          │  │  - On-prem Connectivity│   │
          │  └────────────────────────┘   │
          │  ┌────────────────────────┐   │
          │  │  Private DNS Server    │   │
          │  │  - Name Resolution     │   │
          │  └────────────────────────┘   │
          └──┬──────────────┬──────────┬──┘
             │              │          │
             │ Peering      │ Peering  │ Peering
             │              │          │
    ┌────────▼────┐  ┌──────▼──┐  ┌────▼────────┐
    │SPOKE VNET 1 │  │SPOKE 2  │  │SPOKE 3      │
    │(Prod)       │  │(Dev)    │  │(Test)       │
    │- VMs        │  │- VMs    │  │- VMs        │
    │- DBs        │  │- DBs    │  │- DBs        │
    │- Apps       │  │- Apps   │  │- Apps       │
    └─────────────┘  └─────────┘  └─────────────┘
```

## Key Network Components

### 1. **Virtual Network (VNet)**
- Isolated network space in Azure
- Contains subnets for resource organization
- Supports hybrid connectivity

### 2. **Subnets**
- Network segments within a VNet
- Can have Network Security Groups (NSGs)
- /24 or /25 typically recommended

### 3. **Network Security Groups (NSGs)**
- Firewall rules at subnet and NIC level
- Inbound and outbound rules
- Allow/Deny traffic based on protocols and ports

### 4. **Route Tables**
- Define how traffic flows
- Can force traffic through firewall
- Support custom routing

### 5. **Virtual Network Peering**
- Connect VNets together
- Low-latency connectivity
- Works across regions and subscriptions

## Connectivity Options

```
                    CONNECTIVITY OPTIONS
                           │
           ┌───────────────┼───────────────┐
           │               │               │
      Site-to-Site      ExpressRoute    Point-to-Site
      VPN                                  VPN
           │               │               │
      - Internet      - Private         - Individual
      - Encrypted     - Dedicated       - Encrypted
      - Lower Cost    - Higher Speed    - Low Cost
```

## Network Security Best Practices

| Control | Purpose |
|---------|---------|
| NSGs | Subnet-level filtering |
| Azure Firewall | Centralized inspection |
| WAF | Application layer protection |
| DDoS Protection | Distributed denial of service |
| Private Endpoints | Private access to services |
| Service Endpoints | Restrict to VNets |

## Resources

- [Virtual Networks Documentation](https://docs.microsoft.com/en-us/azure/virtual-network/)
- [Network Security Best Practices](https://docs.microsoft.com/en-us/azure/security/fundamentals/network-best-practices)
- [Azure Firewall Documentation](https://docs.microsoft.com/en-us/azure/firewall/)
- [Hub-and-Spoke Network Topology](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke)
- [ExpressRoute Documentation](https://docs.microsoft.com/en-us/azure/expressroute/)
