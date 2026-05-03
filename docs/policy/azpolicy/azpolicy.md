# Security Baseline Policies

!!!note "Work in progress"
      The policies below are currently being developed and are not yet ready for full production. The Security Architect Security team is working to establish a production security baseline as soon as possible.

!!!warning "Important"
      The policies below **should never be modified** without the approval of **Security Architect Security Architects**. In the event of a security policy waiver or changes needed to a security policy, a request must be made to Security Architect for a Security Architecture Decision Record (SADR) to ensure proper security procedures are followed.


## Azure Policy Category

### **Storage Accounts**

| ![Policy](policy.png){: style="height:30px;width:55px"} | **Configure your Storage account public access to be disallowed**  |
|------|---|
| **Description** | Anonymous public read access to containers and blobs in Azure Storage is a convenient way to share data but might present security risks. To prevent data breaches caused by undesired anonymous access, Microsoft recommends preventing public access to a storage account unless your scenario requires it. |
| **Policy Effect** | Modify |
| **Security Architect Notes** | To prevent critical data and intellectual property from being unintentionally exposed through public access to Azure Storage Accounts, this feature will be set to disabled, preventing outsiders from accessing blobs and containers publicly.  |


| ![Policy](policy.png){: style="height:30px;width:55px"}| **Storage accounts should have the specified minimum TLS version** |
|------|---|
| **Description** | Configure a minimum TLS version for secure communication between the client application and the storage account. To minimize security risk, the recommended minimum TLS version is the latest released version, which is currently TLS 1.2. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | Minimum version of TLS 1.2 is required to access data for storage account.  |


| ![Policy](policy.png){: style="height:30px;width:55px"} | **Configure secure transfer of data on a storage account** |
|------|---|
| **Description** | Secure transfer is an option that forces storage account to accept requests only from secure connections (HTTPS). Use of HTTPS ensures authentication between the server and the service and protects data in transit from network layer attacks such as man-in-the-middle, eavesdropping, and session-hijacking |
| **Policy Effect** | Modify |
| **Security Architect Notes** | Calls to an Azure Storage Account REST API operation must be made over HTTPS. Microsoft recommends that any requests originating from an insecure connection should be rejected.   |


| ![Policy](policy.png){: style="height:30px;width:55px"}| **Secure transfer to storage accounts should be enabled** |
|------|---|
| **Description** | Audit requirement of Secure transfer in your storage account. Secure transfer is an option that forces your storage account to accept requests only from secure connections (HTTPS). Use of HTTPS ensures authentication between the server and the service and protects data in transit from network layer attacks such as man-in-the-middle, eavesdropping, and session-hijacking. |
| **Policy Effect** | Deny |
| **Security Architect Notes** |    |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Storage accounts should prevent shared key access** |
|------|---|
| **Description** | Audit requirement of Azure Active Directory (Azure AD) to authorize requests for your storage account. By default, requests can be authorized with either Azure Active Directory credentials, or by using the account access key for Shared Key authorization. Of these two types of authorization, Azure AD provides superior security and ease of use over Shared Key, and is recommended by Microsoft. |
| **Policy Effect** | Deny |
| **Security Architect Notes** |  Microsoft states in its documentation that the use of Shared Key Authorization is not ideal and recommends using Azure Entra ID which provides superior security. Targeting the users who have Listkeys rights, the attacker can then identify these shared keys and move to accessing those resources.  |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Storage accounts should restrict network access** |
|------|---|
| **Description** | Network access to storage accounts should be restricted. Configure network rules so only applications from allowed networks can access the storage account. To allow connections from specific internet or on-premises clients, access can be granted to traffic from specific Azure virtual networks or to public internet IP address ranges |
| **Policy Effect** | Audit |
| **Security Architect Notes** | To secure your storage account, you should first configure a rule to deny access to traffic from all networks (including internet traffic) on the public endpoint, by default. Then, you should configure rules that grant access to traffic from specific virtual networks. You can also configure rules to grant access to traffic from selected public internet IP address ranges, enabling connections from specific internet or on-premises clients. This configuration helps you build a secure network boundary for your applications.   |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Storage accounts should restrict network access using virtual network rules** |
|------|---|
| **Description** | Protect your storage accounts from potential threats using virtual network rules as a preferred method instead of IP-based filtering. Disabling IP-based filtering prevents public IPs from accessing your storage accounts. |
| **Policy Effect** | Deny |
| **Security Architect Notes** |  By configuring your Microsoft Azure Storage account to deny access to all networks, including internet traffic, you add an additional layer of security. To further enhance security, you should limit access to only selected networks.  |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Storage accounts should allow access from trusted Microsoft services** |
|------|---|
| **Description** | Some Microsoft services that interact with storage accounts operate from networks that can't be granted access through network rules. To help this type of service work as intended, allow the set of trusted Microsoft services to bypass the network rules. These services will then use strong authentication to access the storage account. |
| **Policy Effect** | Audit |
| **Security Architect Notes** |  To grant access to trusted cloud services, make sure to enable the 'Allow trusted Microsoft services to access this storage account' exception within your Azure Storage account configuration settings.  |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Storage Accounts should use a virtual network service endpoint** |
|------|---|
| **Description** | This policy audits any Storage Account not configured to use a virtual network service endpoint. |
| **Policy Effect** | Audit |
| **Security Architect Notes** | Restricting default network access helps to provide a new layer of security, since storage accounts accept connections from clients on any network. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Secure transfer to storage accounts should be enabled** |
|------|---|
| **Description** | Audit requirement of Secure transfer in your storage account. Secure transfer is an option that forces your storage account to accept requests only from secure connections (HTTPS). Use of HTTPS ensures authentication between the server and the service and protects data in transit from network layer attacks such as man-in-the-middle, eavesdropping, and session-hijacking |
| **Policy Effect** | Deny |
| **Security Architect Notes** |   |


### **Network**

|![Policy](policy.png){: style="height:30px;width:55px"}| **Preview: All Internet traffic should be routed via your deployed Azure Firewall** |
|------|---|
| **Description** | Azure Security Center has identified that some of your subnets aren't protected with a next generation firewall. Protect your subnets from potential threats by restricting access to them with Azure Firewall or a supported next generation firewall |
| **Policy Effect** | AuditIfNotExists |
| **Security Architect Notes** | To safeguard against potential threats, azure VNets and subnets traffic must be routed through the corporate Azure Firewall.  |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Network interfaces should not have public IPs** |
|------|---|
| **Description** | This policy denies the network interfaces which are configured with any public IP. Public IP addresses allow internet resources to communicate inbound to Azure resources, and Azure resources to communicate outbound to the internet. This should be reviewed by the network security team. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | To mitigate risks, services should not be exposed to the internet directly. Security Architect approval process will be required.  |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Network interfaces should disable IP forwarding** |
|------|---|
| **Description** | This policy denies the network interfaces which enabled IP forwarding. The setting of IP forwarding disables Azure's check of the source and destination for a network interface. This should be reviewed by the network security team. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | This policy prevent your Azure virtual machine from routing traffic to unintended destinations by disabling IP forwarding on its NIC. This helsp improve the security of your resource and protect from potential threats. This feature is rarely required. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Subnets should be associated with a Network Security Group** |
|------|---|
| **Description** | Protect your subnet from potential threats by restricting access to it with a Network Security Group (NSG). NSGs contain a list of Access Control List (ACL) rules that allow or deny network traffic to your subnet. |
| **Policy Effect** | AuditIfNotExists |
| **Security Architect Notes** | For best security practice, associate an NSG with a subnet to protect your VMs at the subnet-level. Security Architect will audit this policy for compliance and quick action. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Management ports should be closed on your virtual machines** |
|------|---|
| **Description** | Open remote management ports are exposing your VM to a high level of risk from Internet-based attacks. These attacks attempt to brute force credentials to gain admin access to the machine. |
| **Policy Effect** | AuditIfNotExists |
| **Security Architect Notes** | To ensure the best security practices, it is important to keep management ports closed to the internet. This prevents unauthorized access and potential security breaches. Security Architect will regularly audit this policy for compliance and any violations will require immediate action to be taken. Bastion service is highly recommended to be used instead. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Enforce network security groups to have a DENY RDP and SSH from Internet security rule** |
|------|---|
| **Description** | Enforce network security groups to have a DENY RDP and SSH from internet security rule  |
| **Policy Effect** | AuditIfNotExists |
| **Security Architect Notes** | Proof of Concept (Custom Policy) |


### **Kubernetes**

|![Policy](policy.png){: style="height:30px;width:55px"}| **Deploy Azure Policy Add-on to Azure Kubernetes Service clusters** |
|------|---|
| **Description** | Use Azure Policy Add-on to manage and report on the compliance state of your Azure Kubernetes Service (AKS) clusters. For more information, see https://aka.ms/akspolicydoc.  |
| **Policy Effect** | DeployIfNotExists |
| **Security Architect Notes** | Azure Policy enables centralized management and reporting of Kubernetes cluster components compliance status. The integration of Azure Policy's Add-On or Extension enhances governance capabilities, offering features like selectors and overrides to ensure a secure and controlled policy implementation and retraction process. This is required and cannot be removed for AKS clusters.|


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes cluster should not allow privileged containers** |
|------|---|
| **Description** | Do not allow privileged containers creation in a Kubernetes cluster. This recommendation is part of CIS 5.2.1 which is intended to improve the security of your Kubernetes environments. This policy is generally available for Kubernetes Service (AKS), and preview for Azure Arc enabled Kubernetes. For more information, see https://aka.ms/kubepolicydoc.  |
| **Policy Effect** | Deny |
| **Security Architect Notes** | Privileged containers are containers that have all of the root capabilities of a host machine, allowing access to resources that are not accessible in ordinary containers. Running a container with a privileged flag allows users to have critical access to the host’s resources. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes clusters should be accessible only over HTTPS** |
|------|---|
| **Description** | Use of HTTPS ensures authentication and protects data in transit from network layer eavesdropping attacks. This capability is currently generally available for Kubernetes Service (AKS), and in preview for Azure Arc enabled Kubernetes. For more info, visit https://aka.ms/kubepolicydoc  |
| **Policy Effect** | Deny |
| **Security Architect Notes** | Ingresses are accessible over HTTP, which is not secure. The traffic between the application and clients is not encrypted, which makes it vulnerable to attack. To secure your ingresses, HTTPS must be used. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes clusters should use internal load balancers** |
|------|---|
| **Description** | Use internal load balancers to make a Kubernetes service accessible only to applications running in the same virtual network as the Kubernetes cluster. For more information, see https://aka.ms/kubepolicydoc.  |
| **Policy Effect** | Audit |
| **Security Architect Notes** | An internal load balancer doesn't have a public IP and makes a Kubernetes service accessible only to applications that can reach the private IP. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Azure Kubernetes Service Clusters should enable Microsoft Entra ID integration** |
|------|---|
| **Description** | AKS-managed Microsoft Entra ID integration can manage the access to the clusters by configuring Kubernetes role-based access control (Kubernetes RBAC) based on a user's identity or directory group membership. Learn more at: https://aka.ms/aks-managed-aad.  |
| **Policy Effect** | Audit |
| **Security Architect Notes** | Ensure that your AKS clusters are integrated with Microsoft Entra ID in order to provide granular access to AKS resources. By integrating on-premises identities into AKS clusters, you provide a single source for account management and security. [Microsoft Entra ID integration](https://learn.microsoft.com/en-us/azure/aks/concepts-identity#microsoft-entra-integration) |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Azure Role-Based Access Control (RBAC) should be used on Kubernetes Services** |
|------|---|
| **Description** | To provide granular filtering on the actions that users can perform, use Azure Role-Based Access Control (RBAC) to manage permissions in Kubernetes Service Clusters and configure relevant authorization policies. |
| **Policy Effect** | Audit |
| **Security Architect Notes** | When using the Azure Role-Based Access Control (RBAC) , all requests to the Kubernetes API must follow the same authentication flow as explained on the Microsoft Entra ID integration. You use Azure RBAC mechanisms and APIs to assign users built-in roles. [Azure RBAC for Kubernetes Authorization](https://learn.microsoft.com/en-us/azure/aks/concepts-identity#azure-rbac-for-kubernetes-authorization) |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Azure Kubernetes Service Clusters should have local authentication methods disabled** |
|------|---|
| **Description** | Disabling local authentication methods improves security by ensuring that Azure Kubernetes Service Clusters should exclusively require Azure Active Directory identities for authentication. Learn more at: https://aka.ms/aks-disable-local-accounts. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | Avoid the usage of local authentication methods or accounts, these should be disabled wherever possible. Instead use Azure Entra ID to authenticate where possible. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Azure Kubernetes Service clusters should have Defender profile enabled** |
|------|---|
| **Description** | Microsoft Defender for Containers provides cloud-native Kubernetes security capabilities including environment hardening, workload protection, and run-time protection. When you enable the SecurityProfile.AzureDefender on your Azure Kubernetes Service cluster, an agent is deployed to your cluster to collect security event data. Learn more about Microsoft Defender for Containers in https://docs.microsoft.com/azure/defender-for-cloud/defender-for-containers-introduction?tabs=defender-for-container-arch-aks |
| **Policy Effect** | Audit |
| **Security Architect Notes** | Microsoft Defender for Containers service is engineered to continuously oversee your AKS clusters configurations, vigilantly uncovering potential security threats. It proactively pinpoints these hazards and offers strategic advice on the best measures to counteract them effectively. [Overview of Container security in Microsoft Defender for Containers](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-introduction?tabs=defender-for-container-arch-aks) |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Azure Kubernetes Service Clusters should enable workload identity** |
|------|---|
| **Description** | Workload identity allows to assign a unique identity to each Kubernetes Pod and associate it with Azure AD protected resources such as Azure Key Vault, enabling secure access to these resources from within the Pod. Learn more at: https://aka.ms/aks/wi. |
| **Policy Effect** | Audit |
| **Security Architect Notes** | Workloads deployed on an Azure Kubernetes Services (AKS) cluster require Microsoft Entra application credentials or managed identities to access Microsoft Entra protected resources, such as Azure Key Vault and Microsoft Graph. Microsoft Entra Workload ID integrates with the capabilities native to Kubernetes to federate with external identity provider. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes cluster containers should only use allowed images** |
|------|---|
| **Description** | Use images from trusted registries to reduce the Kubernetes cluster's exposure risk to unknown vulnerabilities, security issues and malicious images. For more information, see https://aka.ms/kubepolicydoc. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | When it comes to utilizing container images within AKS clusters, it's imperative to use only those sourced from trusted registries. This is to ensure that the images are secure and have not been tampered with. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes cluster containers should not share host process ID or host IPC namespace** |
|------|---|
| **Description** | Block pod containers from sharing the host process ID namespace and host IPC namespace in a Kubernetes cluster. This recommendation is part of CIS 5.2.2 and CIS 5.2.3 which are intended to improve the security of your Kubernetes environments. This policy is generally available for Kubernetes Service (AKS), and preview for Azure Arc enabled Kubernetes. For more information, see https://aka.ms/kubepolicydoc. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | A container that runs with hostPID has visibility into processes running on the host, which could expose information including environment variables to an attacker. Futhermore, a container that runs with hostIPC namespace has the ability to interact with processes running on the host via shared memory and other interprocess communication (IPC) mechanisms. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes clusters should not allow container privilege escalation** |
|------|---|
| **Description** | Do not allow containers to run with privilege escalation to root in a Kubernetes cluster. This recommendation is part of CIS 5.2.5 which is intended to improve the security of your Kubernetes environments. This policy is generally available for Kubernetes Service (AKS), and preview for Azure Arc enabled Kubernetes. For more information, see https://aka.ms/kubepolicydoc. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | A container running with the allowPrivilegeEscalation flag set to true may have processes that can gain more privileges than their parent. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes cluster containers should only use allowed capabilities** |
|------|---|
| **Description** | Restrict the capabilities to reduce the attack surface of containers in a Kubernetes cluster. This recommendation is part of CIS 5.2.8 and CIS 5.2.9 which are intended to improve the security of your Kubernetes environments. This policy is generally available for Kubernetes Service (AKS), and preview for Azure Arc enabled Kubernetes. For more information, see https://aka.ms/kubepolicydoc. |
| **Policy Effect** | Deny |
| **Security Architect Notes** |  |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes clusters should not use the default namespace** |
|------|---|
| **Description** | Prevent usage of the default namespace in Kubernetes clusters to protect against unauthorized access for ConfigMap, Pod, Secret, Service, and ServiceAccount resource types. For more information, see https://aka.ms/kubepolicydoc. |
| **Policy Effect** | Audit |
| **Security Architect Notes** | For optimal security and resource management, it is advisable to divide a Kubernetes cluster into namespaces. This division allows for the application of security measures at the namespace level and simplifies the management of cluster resources. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes cluster pods should only use approved host network and port range** |
|------|---|
| **Description** | Restrict pod access to the host network and the allowable host port range in a Kubernetes cluster. This recommendation is part of CIS 5.2.4 which is intended to improve the security of your Kubernetes environments. This policy is generally available for Kubernetes Service (AKS), and preview for Azure Arc enabled Kubernetes. For more information, see https://aka.ms/kubepolicydoc. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | This security policy must be put in place to prevent a malicious user or attacker from compromising the cluster through a running container. |

|![Policy](policy.png){: style="height:30px;width:55px"}| **Kubernetes clusters should disable automounting API credentials** |
|------|---|
| **Description** | Disable automounting API credentials to prevent a potentially compromised Pod resource to run API commands against Kubernetes clusters. For more information, see https://aka.ms/kubepolicydoc. |
| **Policy Effect** | Deny |
| **Security Architect Notes** | To enhance security, it's recommended to disable the automatic mounting of service account tokens. These tokens serve as credentials for in-cluster processes to authenticate with the Kubernetes API server. However, if a workload does not require API server interaction, it's advisable to set the automountServiceAccountToken attribute to false. This precaution helps prevent unnecessary access and potential security risks. |


### **Key Vault**

|![Policy](policy.png){: style="height:30px;width:55px"}| **Azure Key Vault should use RBAC permission model** |
|------|---|
| **Description** | Azure Key Vault should use RBAC permission model |
| **Policy Effect** | Deny |
| **Security Architect Notes** | Azure RBAC is the recommended authorization system for the Azure Key Vault data plane. It offers several advantages over Key Vault access policies. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Configure key vaults to enable firewall** |
|------|---|
| **Description** | Enable the key vault firewall so that the key vault is not accessible by default to any public IPs. You can then configure specific IP ranges to limit access to those networks. Learn more at: https://docs.microsoft.com/azure/key-vault/general/network-security |
| **Policy Effect** | Modify |
| **Security Architect Notes** | Enable the firewall to make sure that only traffic from allowed networks can access your key vault. This prevents unauthorized traffic from reaching your key vault and provides an additional layer of protection for your secrets. |


|![Policy](policy.png){: style="height:30px;width:55px"}| **Key vaults should have soft delete enabled** |
|------|---|
| **Description** | Deleting a key vault without soft delete enabled permanently deletes all secrets, keys, and certificates stored in the key vault. Accidental deletion of a key vault can lead to permanent data loss. Soft delete allows you to recover an accidentally deleted key vault for a configurable retention period. |
| **Policy Effect** | Deny|
| **Security Architect Notes** | If a secret is deleted and the key vault does not have soft-delete protection, it is deleted permanently. This will protect secrets from accidental or malicious deletion by a user. |

!!!warning "Key vaults should have soft delete enabled"
      In February 2025, Microsoft will enable soft-delete protection on all key vaults, and users will no longer be able to opt out of or turn off soft-delete.



|![Policy](policy.png){: style="height:30px;width:55px"}| **Azure Key Vault should disable public network access** |
|------|---|
| **Description** | Disable public network access for your key vault so that it's not accessible over the public internet. This can reduce data leakage risks. Learn more at: https://aka.ms/akvprivatelink. |
| **Policy Effect** | Deny|
| **Security Architect Notes** | Unrestricted public access to cloud services can expose applications to external threats. Restricting access, especially for services like Azure Key Vault, is a best practice to safeguard keys, secrets, and certificates. |




### **Azure Virtual Desktop**

|![Policy](policy.png){: style="height:30px;width:55px"}| **TEMPLATE** |
|------|---|
| **Description** |  |
| **Policy Effect** |  |
| **Security Architect Notes** |  |


|![Policy](policy.png){: style="height:30px;width:55px"}| **TEMPLATE** |
|------|---|
| **Description** |  |
| **Policy Effect** |  |
| **Security Architect Notes** |  |


<div class="grid" markdown>

:fontawesome-brands-html5: __HTML__ for content and structure
{ .card }

:fontawesome-brands-js: __JavaScript__ for interactivity
{ .card }

:fontawesome-brands-css3: __CSS__ for text running out of boxes
{ .card }

:fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?
{ .card }

</div>


| Method      | Description                          |
| :---------- | :----------------------------------- |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

| Method      | Description                          |
| :---------- | :----------------------------------- |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

| Method      | Description                          |
| :---------- | :----------------------------------- |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

[def]: https://learn.microsoft.com/en-us/azure/aks/concepts-identity#microsoft-entra-integration


<div class="grid cards" markdown>

- :fontawesome-brands-html5: __HTML__ for content and structure
- :fontawesome-brands-js: __JavaScript__ for interactivity
- :fontawesome-brands-css3: __CSS__ for text running out of boxes
- :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>
