import { Handler } from '@netlify/functions';
const axios = require('axios').default;

export const handler: Handler = async (event, context) => {

    const { data, errors } = await axios.get(`https://cercemap.org/resources/quotes/general-quotes.es.json`, {});

    const items = data.data;

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