require('dotenv').config();

import { Handler, Context, Callback } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = async (event: any, context: Context, callback: Callback) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${Math.floor(Math.random() * 10)}`
    })
  };

  // callback(undefined, response);
  return response;
};

export { hello };
