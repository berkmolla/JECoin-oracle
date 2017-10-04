
const http = require('http');
const port = 3000;

const serverOptions
const githubhookListener = require('githubhook')

githubhookListener.listen()

githubhookListener.on('pull_request:JECoin-oracle', (ref, data) => {

    const action = data.action

    if (action !== 'closed') {
        return
    }

    console.log(data);

});
