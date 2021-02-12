const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("show dark lord");
    console.log(result);
})();