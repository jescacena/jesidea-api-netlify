# jesidea-api-netlify
jesidea-api-netlify

## Pre-requisites
Install netlify cli globally
```
npm install netlify-cli -g
``` 

## Local development
### Prepare run local netlify server
1.- Link to your netlify app:
```
netlify link --name infallible-tereshkova-504804
``` 
### Run local dev server:
```
netlify dev
```

## Functions

[Netlify functions docs](https://docs.netlify.com/functions/overview/)

Functions folder: **/jesidea_api_functions**
### Create functions (powered by AWS)
```
netlify functions:create
```

## Dependencies
- Syntax highlighter: [https://highlightjs.org/usage/](https://highlightjs.org/usage/)


