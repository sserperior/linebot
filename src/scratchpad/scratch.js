const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("show bane");
    console.log(result);
})();