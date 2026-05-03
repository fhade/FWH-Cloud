---
title: Security Control List
tags:
  - standards
  - guidelines
  - technical-maturity-levels
---

# Azure Policy

The Organization Policy Service gives you centralized and programmatic control over our GCP organization's cloud resources. Public Cloud team and Security Architect Cloud Security will be able to configure constraints across our entire FWH resource hierarchy.

## Benefits
- **Centralize control to configure restrictions on how your organization’s resources can be used.**
- **Define and establish guardrails for your development teams to stay within compliance boundaries.**
- **Help project owners and their teams move quickly without worry of breaking compliance.**

## Organization Policies in place at FWH

!!!error "IMPORTANT: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

### **Domain restricted sharing** 

| Information | Description |
|------|---|
| **Policy name** | **Domain restricted sharing** |
| **Description** | This list constraint defines one or more Cloud Identity or Google Workspace customer IDs whose principals can be added to IAM policies. By default, all user identities are allowed to be added to IAM policies. Only allowed values can be defined in this constraint, denied values are not supported. If this constraint is active, only principals that belong to the allowed customer IDs can be added to IAM policies. |
| **Applies to** | Inheritance from Organization Level "fwh.com" |
| **Effective Policy** | **Allowed :** C02i8q32t |
| **Domains Accepted** | fwh.com (Primary Domain), ivory-tower.fr (Secondary Domain), massive.se (Secondary Domain), redstorm.com (Secondary Domain) |

!!!warning "IMPORTANT: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

### **Skip Default Network Creation** 

| Information | Description |
|------|---|
| **Policy name** | **Skip default network creation** |
| **Description** | This boolean constraint skips the creation of the default network and related resources during Google Cloud Platform Project resource creation where this constraint is set to True. By default, a default network and supporting resources are automatically created when creating a Project resource. |
| **Applies to** | Inheritance from Organization Level "fwh.com" |
| **Effective Policy** | Enforcement : **Enforced** |

### **Disable service account key creation** 

| Information | Description |
|------|---|
| **Policy name** | **Disable service account key creation** |
| **Description** | This boolean constraint disables the creation of service account external keys where this constraint is set to "True". By default, service account external keys can be created by users based on their Cloud IAM roles and permissions. |
| **Applies to** | Inheritance from Organization Level "fwh.com" |
| **Effective Policy** | Enforcement : Enforced |


!!!example "EXAMPLE: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!!bug "BUG: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!!tip "TIP: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!!success "SUCCESS: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!!abstract "ABSTRACT: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!!note "NOTE: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!!question "QUESTION: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!!failure "FAILURE: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!!danger "DANGER: FWH GCP Organization Policies"
      The organization policies below **should never be changed** without the approval of **Security Architect Cloud Security Architects**.

!!! note

    FH- DEMO - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
