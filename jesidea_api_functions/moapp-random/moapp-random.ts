import { Handler } from '@netlify/functions'
const axios = require('axios').default;


export const handler: Handler = async (event, context) => {

    const { age = 'goldenAge' } = event.queryStringParameters

    // 1.- Get json data
    const jsonFile = `${age}.characters.json`;
    const { data, errors } = await axios.get(`https://cercemap.org/resources/moapp/json/${jsonFile}`, {});

    // Error handling
    if (errors) {
        return {
            statusCode: 500,
            body: JSON.stringify(errors)
        };
    }

    const items = data;

    // 2.- Get random image
    var randomItem = items[Math.floor(Math.random() * items.length)];

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow from anywhere 
        },
        body: JSON.stringify(randomItem),
    }
}
