# product-service
This APP is used to get data for product. Product data includes two part.
1. Product Information - Product Information is fetched from Adidas live production.
2. Product Review - Product Review is fetched from Product Review App.


This is an aggregation API which  support partial success scenarios 
which is either both product and review or only product or review.
In case both actions are success , API will response with product and review
and status code will be 200.

In case of partial success either product or review is success , api will return
with success entity and status code will be 206

In case both actions are failed , API will response with error.



This App has fully working CI-CD with Gitlab and ready to be deployed to GCP Cloud.
This App uses Helm as deployment manager. 


This App uses below mention technologies and tools
1. Node Js 
2. Fastify Framework
3. Postgreys Database 
4. Gitlab for Image Repository and CI-CD
5. Helm 

This App has fully working CI-CD with Gitlab and ready to be deployed to GCP Cloud.
This App uses Helm as deployment package. 

CI-CD contains below mention stages.
* Build
* Lint 
* Audit
* Test Unit
* Test Integration 
* Deploy

- Build Steps create image and put in gitlab registry
- Audit step uses Clair tools for security scanning 
- Test Unit to make sure all unit test cases are working as expected
- Test Integration to make sure all integration test cases are working as expected
- Deploy step takes image from gitlab  registry and using helm deploy to gcp

- This app stores all secret variables at git lab secret variable and which are further  deployed to  
gcp secret manager with the help of helm.

- This App has test case coverage in terms of unit test cases and  integration test case.

- This App is using Helm to deploy. To deploy in GCP Kubernetes cluster need to define below mention 
variables in gitlab secret variables.

* K8_CLUSTER_NAME
* K8_CLUSTER_REGION
* GCP_PROJECT_ID
* K8_NAMESPACE
* NPM_USERNAME
* NPM_PASSWORD

- This App has capability to configure istio configurations also. Configurations are kept 
inside deployment folder.
- Some dummy URL as dev.adidas.services is configured in deployment/charts/config/value-dev.yaml 
- Complete URL will be like dev.adidas.services/catalog/v1/product-review/
- At Istio Vertual Services these URLs can be configured and actual configurations are present at values.yaml 
- This App has Auto scale configurations also present. These configureations are kept inside helm folders hpa..yaml
- Configrations for auto scale is kept as-
   * minReplicas: 3
   * maxReplicas: 10
   * targetCPUAverageUtilization: 75
   * targetMemoryAverageUtilization: 75
- Means mimimum pod will be 3 and max can be scaled upto 10
- When pod reach 75 % of CPU and 75% of heap , new pod will be created

Below mention major NPM packages are used.

"ajv": "^6.10.2",
"ajv-errors": "^1.0.1",
"ajv-keywords": "^3.4.1",
"dotenv": "^8.2.0",
"faker": "^5.5.3",
"fastify": "^2.11.0",
"fastify-cors": "^2.2.0",
"fastify-env": "^1.0.1",
"fastify-jwt": "^2.4.0",
"fastify-oas": "^2.5.0",
"fastify-routes": "^2.0.3",
"fastify-swagger": "^4.6.0",
"http-status-codes": "^1.4.0",
"jwt-decode": "^2.2.0",
"knex": "^0.19.2"
"knex-stringcase": "^1.3.0",
"make-promises-safe": "^5.0.0",
"path-to-regexp": "^6.2.0",
"pg": "^8.2.1",
"randomstring": "^1.1.5"

- Unit Testing and Integration testing is based on Jest framework.


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

To run lint fixing you may use
    $ npm run link:fix

