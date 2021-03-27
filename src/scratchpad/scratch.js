const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("show underwild");
    console.log(result);
})();