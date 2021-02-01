const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process("what is thor's special?");
    console.log(result);
})();