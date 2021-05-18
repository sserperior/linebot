const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("crude iron");
    console.log(result);
})();