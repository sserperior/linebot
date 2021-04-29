const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("show azlar costume");
    console.log(result);
})();