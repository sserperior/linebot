const { getManager } = require('nlp/brain');

(async () => {
    const result = await getManager().process("rate frigg");
    console.log(result);
})();