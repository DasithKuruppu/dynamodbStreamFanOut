import { Handler } from 'aws-lambda';

export const persistanceUpdateHandler: Handler = (event: any) => {
  console.log("PERSISTANCE UPDATE HANDLER");
  console.log(event);
  console.log(event?.Records[0].Sns)
}