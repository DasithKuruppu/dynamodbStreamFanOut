import { Handler } from 'aws-lambda';

export const processEventHandler: Handler = (event: any) => {
  console.log("EVENT HANDLER");
  console.log(event);
}
