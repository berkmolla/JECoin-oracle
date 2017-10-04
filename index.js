
const http = require('http');
const port = 3000;

const serverOptions = {path: '/webhook', port: 3000}
const githubhookListener = require('githubhook')(serverOptions)

githubhookListener.listen()

githubhookListener.on('pull_request:JECoin-oracle', (ref, data) => {

    const action = data.action

    console.log(data);

});
