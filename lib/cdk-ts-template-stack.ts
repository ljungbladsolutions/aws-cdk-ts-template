import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import path from 'path'

export class CdkTsTemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    new NodejsFunction(this, 'MyFunction', {
      runtime: Runtime.NODEJS_18_X,
      entry: path.join(__dirname, '../src/myFunction.ts'),
      handler: 'handler',
      functionName: 'MyFunction',
      bundling: {
        minify: true,
        sourceMap: true,
      },
    })
  }
}
