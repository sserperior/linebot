const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("show costume colen");
    console.log(result);
})();