# product-service
This APP is used to get data for product. Product data includes two part.
1. Product Information - Product Information is fetched from Adidas live production.
2. Product Review - Product Review is fetched from Product Review App.


This is an aggregation API which  support partial success scenarios 
which is either both product and review or only product or review.

This App has fully working CI-CD with Gitlab and ready to be deployed to GCP Cloud.
This App uses Helm as deployment manager. 

This App uses below mention tehnologies and tools
1. Node Js 
2. Fastify Framework
3. Postgreys Database 
4. Gitlab for Code Repository and CI-CD
5. Helm 

CI-CD contains below mention stages.
Build
Test Unit
Test Integration 
Deploy

- Build Steps create image and put in gitlab registry. 
Deploy step takes image from gitlab  registry and using helm deploy to gcp.

- This app stores all secret variables at git lab secret variable and which are stored to 
gcp secret manager with the help of helm.

- This App has test case coverage in terms of unit test cases and  integration test case.

- This App is using Helm to deploy. To deploy in GCP Kubernetes cluster need to define below mention 
variables in gitlab secret variables.

K8_CLUSTER_NAME
K8_CLUSTER_REGION
GCP_PROJECT_ID
K8_NAMESPACE
NPM_USERNAME
NPM_PASSWORD

- Deploy can be extended to various env which is dev , stag and prod
Prod deployment can be triggered only with tag and manual execution.


Application for better compatibility needs to run with:

node version **~12.15.0**

> Reason for version lock: This has been resolved. node-gyp doesn't
> currently support the latest nodejs (v13), so rolling back to v12
> fixed it.


### Install Project Dependencies

To be able to run the application properly you need to execute the
following commands:

    $ sudo rm package-lock.json

next install all dependencies

    $ npm i

Just in case you find some unknown dependency issues please execute
the following command:

    $ npm audit fix


### Run Console Commands

In order to run your application service
you can use any of this:

Run Migrations:
    $ num run migrate

Create Migrations:
    $ npm run migrate:make

Run Unit Tests:
    $ npm run test:unit

Run Integration Tests:
    $ npm run test:integration

Run All Tests:
    $ npm run test

To start service on your local machine you may use
    $ npm run start

To see swagger docs
    http://localhost:4444/documentation

To run lint fixing you may use
    $ npm run link:fix

