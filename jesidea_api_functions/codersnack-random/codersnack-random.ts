import { Handler } from '@netlify/functions'
const axios = require('axios').default;

const getEntityChunkDictinary = {
    'quiz': {
        value: 'quizzes'
    },
    'snack': {
        value: 'snacks'
    }
}

export const handler: Handler = async (event, context) => {

    const { category = 'angular', entity = 'quiz' } = event.queryStringParameters

    // 1.- Get json data
    const jsonFile = `${category}.${getEntityChunkDictinary[entity].value}.json`;
    const { data, errors } = await axios.get(`https://raw.githubusercontent.com/jescacena/cs-netlify/master/assets/jsons/${jsonFile}`, {});

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
        body: JSON.stringify(randomItem),
    }
}
