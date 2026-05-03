# Security Pillar

## Overview

The **Security pillar** focuses on protecting applications and data from threats. It encompasses identity, access control, encryption, and threat protection.

## Security Layers (Defense in Depth)

```
┌─────────────────────────────────────┐
│      User/Application Layer         │
│   (MFA, Conditional Access)         │
└────────────────────┬────────────────┘
┌────────────────────▼────────────────┐
│    Identity & Access Layer          │
│   (Azure AD, RBAC, Managed ID)      │
└────────────────────┬────────────────┘
┌────────────────────▼────────────────┐
│    Application Layer                │
│   (WAF, API Authorization)          │
└────────────────────┬────────────────┘
┌────────────────────▼────────────────┐
│    Network Layer                    │
│   (NSG, Firewall, DDoS Protection)  │
└────────────────────┬────────────────┘
┌────────────────────▼────────────────┐
│    Data Layer                       │
│   (Encryption, TLS, Key Vault)      │
└────────────────────┬────────────────┘
┌────────────────────▼────────────────┐
│    Physical Layer                   │
│   (Data Center Security)            │
└─────────────────────────────────────┘
```

## Key Security Principles

### 1. Least Privilege
- Users get minimum permissions needed
- Regular access reviews
- Principle: "deny by default, allow by exception"

### 2. Assume Breach
- Design as if attackers are already inside
- Detection systems everywhere
- Rapid response capability

### 3. Encrypt Everything
```
Data in Transit          Data at Rest        Keys
├─ TLS/HTTPS            ├─ Encryption       ├─ Azure Key Vault
├─ VPN                  ├─ Database         └─ HSM-backed
└─ Service-to-service   └─ Storage
```

## Security Controls by Layer

| Layer | Controls | Examples |
|-------|----------|----------|
| **Identity** | Authentication & Authorization | Microsoft Entra ID, MFA |
| **Network** | Traffic filtering & inspection | NSGs, Firewalls, DDoS |
| **Application** | Input validation, WAF | App protection, validation |
| **Data** | Encryption, access control | TLS, encryption at rest |
| **Infrastructure** | Hardening, updates, patches | VM hardening, patching |

## Azure Security Services

```
THREAT DETECTION
├─ Microsoft Defender for Cloud
├─ Microsoft Sentinel (SIEM)
└─ Log Analytics

IDENTITY PROTECTION
├─ Microsoft Entra ID
├─ Conditional Access
└─ Privileged Identity Management

DATA PROTECTION
├─ Azure Key Vault
├─ Azure Disk Encryption
└─ Data Lake Security
```

## Threat Model Example

```
Asset: Customer Data
├─ Threat: Unauthorized access
│  └─ Control: Encryption + RBAC
├─ Threat: Data exfiltration
│  └─ Control: DLP + Monitoring
└─ Threat: Ransomware
   └─ Control: Backup + Immutable storage
```

## Security Best Practices

1. **Enable MFA** - Multi-factor authentication everywhere
2. **Use managed identities** - Eliminate credential management
3. **Encrypt sensitive data** - At rest and in transit
4. **Monitor everything** - Centralized logging and alerting
5. **Regular updates** - Patch systems quickly
6. **Principle of least privilege** - Minimal permissions
7. **Secure by default** - Don't require opt-in for security
8. **Regular testing** - Penetration testing and security reviews

## Compliance Frameworks

- **ISO 27001** - Information security
- **SOC 2** - Service organization controls
- **PCI DSS** - Payment card security
- **HIPAA** - Healthcare compliance
- **GDPR** - Data privacy (EU)

## Resources

- [Security Pillar Guidance](https://docs.microsoft.com/en-us/azure/architecture/framework/security/)
- [Microsoft Defender for Cloud](https://docs.microsoft.com/en-us/azure/defender-for-cloud/)
- [Azure Security Best Practices](https://docs.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)
- [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/)
- [Microsoft Sentinel](https://docs.microsoft.com/en-us/azure/sentinel/)
- [Azure Disk Encryption](https://docs.microsoft.com/en-us/azure/virtual-machines/disk-encryption-overview)
