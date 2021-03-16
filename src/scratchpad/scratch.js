const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("show trials of nature");
    console.log(result);
})();