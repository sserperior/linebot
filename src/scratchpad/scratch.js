const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("list heroes of the month");
    console.log(result);
})();