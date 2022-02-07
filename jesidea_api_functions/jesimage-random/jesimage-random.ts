import { Handler } from '@netlify/functions'
const axios = require('axios').default;

export const handler: Handler = async (event, context) => {

  // sources are like albums
  const { album } = event.queryStringParameters

  // 1.- Get json all images
  const { data, errors } = await axios.get('http://jesidea.com/jesimage/jesimage-feed-1.json', {
    auth: {
      username: 'escacenafamily',
      password: 'escacenafamily'
    }
  });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  const items = album === null ? data.items : data.items.filter(item => item.album === album);;

  // 2.- Get random image
  var randomItem = items[Math.floor(Math.random() * items.length)];

  return {
    statusCode: 200,
    body: JSON.stringify(randomItem),
  }
}
