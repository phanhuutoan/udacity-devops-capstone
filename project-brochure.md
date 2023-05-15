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

 



 
