import { Handler } from '@netlify/functions'
const axios = require('axios').default;

export const handler: Handler = async (event, context) => {

  // sources are like albums
  const { source = 'family-retro-log' } = event.queryStringParameters

  // TODO 1.- Get json all images

  const result = await axios.get('http://jesidea.com/jesimage/jesimage-feed-1.json', {}, {
    auth: {
      username: 'escacenafamily',
      password: 'escacenafamily'
    }
  });

  // TODO 2.- Get random image
  /**
   * var favorites = ["http://google.com", "http://yahoo.com", "http://msn.com", "http://apple.com"];
var favorite = favorites[Math.floor(Math.random() * favorites.length)];
var postmessage = "hi my favorite site is " + favorite;
   */

  // TODO 3.- Build response

  return {
    statusCode: 200,
    body: result,
  }
}
