import { Handler } from 'aws-lambda';

export const notificationHandler: Handler = (event: any) => {
  console.log("NOTIFICATION HANDLER");
  console.log(event);
  console.log(event?.Records[0].Sns)
}