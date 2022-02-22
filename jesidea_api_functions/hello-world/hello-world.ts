import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow from anywhere 
    },
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
