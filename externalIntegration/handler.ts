import { Handler } from 'aws-lambda';

export const externalIntegrationHandler: Handler = (event: any) => {
  console.log("EXTERNAL INTEGRATION HANDLER");
  console.log(event);
  console.log(event?.Records[0].Sns)
}