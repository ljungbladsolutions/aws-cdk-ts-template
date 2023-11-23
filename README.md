# Welcome to the CDK TypeScript Template

This is a CDK Typescript template to have a fresh and quick startup!

This template includes:

- Typescript config
- Eslint config
- Prettier config
- A lambda function infrastructure with source code
- A test of the lambda infrastructure (to verify template output)
- A simple jest test to verify that jest is setup correctly

## Scripts from package.json

```
npm run lint
```

Will execute: eslint . --ext .ts

```
npm run prettier
```

Will execute: "prettier --write ."

```
npm run build
```

Will execute: "tsc -noEmit true && npm run lint && npm run test"`

### Avoid manual step in cdk deploy

Add `requireApproval: "never"` in `cdk.json` to skip manual approval each time you deploy a stack.

```
"requireApproval": "never"
```


## How to deploy and test the lambda function
1. Make sure to have and AWS account and the AWS CLI in place.
2. Run CDK deploy command to deploy the stack 

### Deploy
```
cdk deploy 
```

If you have `profiles`, then edit the `package.json` and update the profile names.


### Test lambda
You can either test the lamda in the AWS console or do it from the command line. Here is how to do it from the command line:  
```
aws lambda invoke --function-name MyFunction response.txt 
```
If everything works as suspected, the response `Hello world` should be in the response.txt file.