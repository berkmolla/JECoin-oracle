
const http = require('http');
const port = 3000;

const serverOptions = {host: '127.0.0.1', path: '/webhook', port: 3000}
const githubhookListener = require('githubhook')(serverOptions)

githubhookListener.listen()

githubhookListener.on('pull_request:JECoin-oracle', (ref, data) => {

    const action = data.action

    console.log(data);

});
