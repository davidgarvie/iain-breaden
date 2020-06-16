# Iain Breaden

Static site for https://iainbreadenfreelance.co.uk/

## Running the project Locally
To get started you will need to clone the repository from github. Once cloned, you will need to generate a new `.env` file. The required values in this file can be viewed in the `.env.example` file. You can quickly generate this file with: 

``` bash 
cp .env.example .env
```

You will need to be added to the project space on contentful. Once you have been added, you can find the values of the Space ID and the access token from the contentful UI. 

## Hosting

The site is currently hosted on netlify. A new change is deployed when:
1. New content is published on contentful 
2. New changes are pushed to the master branch on github

