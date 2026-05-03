---
title: Containers
---

# Welcome to Rome Containers
Rome Containers provides containerization solutions for workloads within FWH. Whether you need to run a simple
web service or need a full-fledged Kubernetes clusters to run a full stack of operators and applications, Rome
Containers provides solutions to meet those needs.

Containers offers two classes of service, a full managed Kubernetes cluster (RCC) or a single namespace within a
shared Kubernetes clusters (RCW).

## To RCC, or to RCW, that is the question

| ![RCW](images/nsg.svg)                         | ![RCC](images/security-icon.svg)                          |
|------------------------------------------------------|-----------------------------------------------------------------|
| A web server[^1]                                     | A complex service using Operators/CRDs [^5]                     |
| Not sure how my app will evolve[^2]                  | Performing load testing to determine the max RPS of my app [^6] |
| Running weekly job that crunches data[^3]            |                                                                 |
| Running an app that can scale up to 50 replicas [^4] |                                                                 |

## Why are RCC/RCW suited to different things?

A RCW setup is something that is contained in a single namespace. Some resources cannot be created in this context as it
could impact other users on the shared Kubernetes cluster. These actions are not possible with RCW :

- Installing a daemonset
- Creating a loadbalancer service
- Creating a nodeport service
- Creating a clusterRole or clusterRoleBinding
- Installing an operator with CRDs
- Creating a Persistent Volume to support RWM (Persistent Volume Claims using default Openstack storage in RWO mode are OK)
- Accessing application logs older than 30 days
- Creating any cluster-wide resource (more generally speaking)

[^1]: This can easily be done with RCW, as the scope is limited. There's actually [a RCW nginx example here](rcw/howtos/deploy-sample-app/access-runway-dev-panel.md).
[^2]: You are starting a POC and you are not sure what your app will turn into. RCW is perfect: limited costs as you are billed against what resources you use only, access to most Kubernetes features without the hassle of having a full cluster, etc. Once your POC is done, you can always package it and move on to RCC if needs be.
[^3]: This can easily be done with RCW. For instance, someone could containerize the data crunching application and trigger its execution via a Kubernetes cronjob. The containerize app could pull the data locally, process it and then push the results to another location. Cost would be minimal, as CPU and memory resources are consumed during the execution on the job, and not before or after.
[^4]: It may seem like a big workload, but there are currently some of these that are running on RCW. Give your Rome Containers team a heads-up to ensure there are enough resources on the mutualized cluster and charge ahead.
[^5]: Because CRDs are cluster-wide resources, this limits using the [operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) within RCW. If your project relies on CRDs, then RCC is the solution for you.
[^6]: RCW is elastic, but to run load testing, a dedicated cluster (used temporarily or not) would be preferable. You would definitely become a noisy RCW neighbor during load testing.

## Containers Success Stories

### Horizon on RCC

Horizon was traditionally hosted on UKS.
The Kubernetes clusters were created with Terraform by using the `openstack`
and `uks` providers directly.
This resulted in a quite verbose and involved code that managed both
the cloud and the kubernetes parts.

By moving to the RCC Terraform provider our code drastically reduced in size
(around a 60% LoC reduction) and complexity.
Without even asking for it we gained nodes autoscaling
and a support team that can help us with our clusters,
leaving us free to dedicate our time to the platform development.

## Still unsure which service to use?

Reach out to Rome DevRel team to further discuss your use case.