## 1. After our app is online, here's the result, CI process
a. Using domain: schoolx.host
 <img src="images/project-img/fe-1.png" />
b. Using dns from aws
 <img src="images/project-img/fe-lb.png" />
**Note: Because I use schoolx.host domain for fe app, so to use full functionality we should use the domain**

 <img src="images/project-img/app-work.png" />
 It seems every thing work as expect

### CICD Images
1. In the first time we run the CICD it seems like everything would fail as images below:
##### Lint failed: 
 <img src="images/project-img/lint-failed.png" />

##### UT failed (BE/FE)
 <img src="images/project-img/ut-failed.png" />
 <img src="images/project-img/ut-failed-be.png" />

 ##### Pipeline failed after fixing lint
 <img src="images/project-img/pipeline.png" />

 ##### Pipeline success when fix UT
 <img src="images/project-img/CI-success.png" />

 ## 2. CD process: 

##### Docker build and push successfully
 <img src="images/project-img/success-docker.png" />
 <img src="images/project-img/fullCD-pipeline.png" />

##### Migration via k8s cluster because I use private RDS DB
 <img src="images/project-img/success-migration.png" />

##### Deploy app failed and run revert
 <img src="images/project-img/revert-run-rollout.png" />

##### Deploy app successfully and passed smoke test
 <img src="images/project-img/deploy-success.png" />
 <img src="images/project-img/smoke-passed.png" />

##### It seems like our app update successfully
 <img src="images/project-img/Update-app-sucessfully.png" />

##### Update app with full pipeline:
 <img src="images/project-img/full-part1.png" />
 <img src="images/project-img/full-part2.png" />
 <img src="images/project-img/updatev3.png" />

##### Docker Hub for image registry
 <img src="images/project-img/DockerHub.png" />

##### Cloudformation slack
1. network stack 
 <img src="images/project-img/network-stack.png" />
2. Cluster stack
 <img src="images/project-img/cluster-stack.png" />

##### EC2 nodes 
 <img src="images/project-img/ec2-nodes.png" />
 After run `kubectl get nodes`

``` 
NAME                         STATUS   ROLES    AGE     VERSION
ip-10-1-0-102.ec2.internal   Ready    <none>   4h30m   v1.26.2-eks-a59e1f0
ip-10-1-2-229.ec2.internal   Ready    <none>   4h28m   v1.26.2-eks-a59e1f0
```


 



 
