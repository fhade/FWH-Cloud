# Governance Policies

!!!note "Work in progress"
      The policies below are currently being developed and are not yet ready for full production. The Governance team is working to establish a production baseline as soon as possible.

!!!warning "Important"
      The policies below **should never be modified** without the approval of **Governance Team**.

## Azure Policy Category

### **General**

| ![Policy](policy.png){: style="height:30px;width:55px"} | **Allowed locations**  |
|------|---|
| **Description** | This policy enables you to restrict the locations your organization can specify when deploying resources. Use to enforce your geo-compliance requirements. Excludes resource groups, Microsoft.AzureActiveDirectory/b2cDirectories, and resources that use the 'global' region. |
| **Policy Effect** | Deny |
| **SRM Notes** |  Ensures deployed resources and resource groups belong to the list set in the allowed locations. (East Us, "More to be confirmed") |


| ![Policy](policy.png){: style="height:30px;width:55px"} | **Allowed virtual machine size SKUs**  |
|------|---|
| **Description** | This policy enables you to specify a set of virtual machine size SKUs that your organization can deploy. |
| **Policy Effect** | Deny |
| **SRM Notes** | For Governance purposes, the following VM SKU's have been block from deployment - M-Series, L-Series, G-Series, H-Series, N-Series |



| ![Policy](policy.png){: style="height:30px;width:55px"} | **Configure Azure Activity logs to stream to specified Event Hub**  |
|------|---|
| **Description** | Deploys the diagnostic settings for Azure Activity to stream subscriptions audit logs to an Event Hub to monitor subscription-level events. Amended built-in policy to add eventHubName-parameter to stream to a specific event hub. |
| **Policy Effect** | AuditIfNotExists, DeployIfNotExists |
| **Governance Notes** | This is in a PoC phase right now and should not be applied at this time |


### **Tagging**

|![Policy](policy.png){: style="height:30px;width:55px"}| **Subscription must have subscriptionType tag** |
|------|---|
| **Description** | Define the type of the subscription. |
| **Policy Effect** | Modify |
| **Governance Notes**  |  Governance Policy |

|![Policy](policy.png){: style="height:30px;width:55px"}| **Subscription must have cost_center tag** |
|------|---|
| **Description** | Cost center value, Value of the tag, such as Axxxx. |
| **Policy Effect** | Modify |
| **Governance Notes**  | Governance Policy  |

|![Policy](policy.png){: style="height:30px;width:55px"}| **Subscription must have rome_projectid tag** |
|------|---|
| **Description** | Rome project ID value must be in place. Value of the tag, such as 28cxxxxx-9d4b-446e-8d70-e4c908xxx4a0. |
| **Policy Effect** | Modify |
| **Governance Notes**  | Governance Policy  |

