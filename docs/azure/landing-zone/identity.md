# Identity and Access Management

## Overview

Identity and Access Management (IAM) is the foundation of landing zone security. It controls who can access what resources and what actions they can perform.

## Key Components

### Azure Active Directory (Azure AD)
- Central identity provider for your organization
- Manages users, groups, and application permissions
- Enables single sign-on (SSO) across cloud and on-premises

### Role-Based Access Control (RBAC)
- Assign roles to users, groups, and service principals
- Control resource access at subscription and resource group level
- Built-in roles: Owner, Contributor, Reader, etc.

### Access Management Flow

```
┌──────────────┐
│    User      │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────────┐
│     Azure Active Directory (Azure AD)│
│  - Authentication                    │
│  - Authorization                     │
│  - Group Management                  │
└──────┬───────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────┐
│         RBAC Assignment              │
│  - Role: Contributor                 │
│  - Scope: /subscriptions/XXX         │
└──────┬───────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────┐
│       Resource Access                │
│  - Virtual Machines                  │
│  - Databases                         │
│  - Networks                          │
└──────────────────────────────────────┘
```

## Best Practices

### 1. **Use Groups for Access Management**
```
Instead of:  User → Direct Role Assignment

Better:      User → Group → Role Assignment
             (Easier to manage at scale)
```

### 2. **Apply Least Privilege**
- Assign minimum permissions needed
- Review and audit regularly
- Remove unnecessary access

### 3. **Enable Multi-Factor Authentication (MFA)**
- Require second authentication factor
- Protects against compromised passwords
- Essential for privileged accounts

### 4. **Use Managed Identities**
- For applications and services
- Eliminates need for password management
- Automatic credential rotation

## RBAC Best Practices

| Do | Don't |
|----|-------|
| Use groups for role assignment | Assign roles directly to users |
| Use built-in roles when possible | Create custom roles unless necessary |
| Use service principals for apps | Use user accounts for applications |
| Enable MFA for privileged users | Allow password-only authentication |
| Review permissions quarterly | Set and forget |

## Resources

- [Azure AD Documentation](https://docs.microsoft.com/en-us/azure/active-directory/)
- [RBAC Documentation](https://docs.microsoft.com/en-us/azure/role-based-access-control/)
- [Best Practices for Azure AD](https://docs.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)
- [Managed Identities](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/)
