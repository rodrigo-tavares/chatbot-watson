const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const watsonAssistant = new AssistantV1({
    version: '2019-01-23',
    username: 'apikey',
    password: 'V-gMKeFATNI5tfAxJXtoxEmlIyrOlSoh3uP5lPCBGYno',
    url: 'https://gateway-wdc.watsonplatform.net/assistant/api'
});

module.exports = watsonAssistant;
