---
title: Security Control List
tags:
  - standards
  - guidelines
  - technical-maturity-levels
---

# Azure Policy

The Organization Policy Service gives you centralized and programmatic control over our GCP organization's cloud resources. Public Cloud team and SRM Cloud Security will be able to configure constraints across our entire Ubisoft resource hierarchy.

## Benefits
- **Centralize control to configure restrictions on how your organization’s resources can be used.**
- **Define and establish guardrails for your development teams to stay within compliance boundaries.**
- **Help project owners and their teams move quickly without worry of breaking compliance.**

## Organization Policies in place at Ubisoft

!!!error "IMPORTANT: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

### **Domain restricted sharing** 

| Information | Description |
|------|---|
| **Policy name** | **Domain restricted sharing** |
| **Description** | This list constraint defines one or more Cloud Identity or Google Workspace customer IDs whose principals can be added to IAM policies. By default, all user identities are allowed to be added to IAM policies. Only allowed values can be defined in this constraint, denied values are not supported. If this constraint is active, only principals that belong to the allowed customer IDs can be added to IAM policies. |
| **Applies to** | Inheritance from Organization Level "ubisoft.com" |
| **Effective Policy** | **Allowed :** C02i8q32t |
| **Domains Accepted** | ubisoft.com (Primary Domain), ivory-tower.fr (Secondary Domain), massive.se (Secondary Domain), redstorm.com (Secondary Domain) |

!!!warning "IMPORTANT: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

### **Skip Default Network Creation** 

| Information | Description |
|------|---|
| **Policy name** | **Skip default network creation** |
| **Description** | This boolean constraint skips the creation of the default network and related resources during Google Cloud Platform Project resource creation where this constraint is set to True. By default, a default network and supporting resources are automatically created when creating a Project resource. |
| **Applies to** | Inheritance from Organization Level "ubisoft.com" |
| **Effective Policy** | Enforcement : **Enforced** |

### **Disable service account key creation** 

| Information | Description |
|------|---|
| **Policy name** | **Disable service account key creation** |
| **Description** | This boolean constraint disables the creation of service account external keys where this constraint is set to "True". By default, service account external keys can be created by users based on their Cloud IAM roles and permissions. |
| **Applies to** | Inheritance from Organization Level "ubisoft.com" |
| **Effective Policy** | Enforcement : Enforced |


!!!example "EXAMPLE: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!!bug "BUG: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!!tip "TIP: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!!success "SUCCESS: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!!abstract "ABSTRACT: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!!note "NOTE: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!!question "QUESTION: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!!failure "FAILURE: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!!danger "DANGER: Ubisoft GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **SRM Cloud Security Architects**.

!!! note

    FH- DEMO - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
