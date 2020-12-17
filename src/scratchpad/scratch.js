const { getManager } = require('nlp/brain');

(async () => {
    const result = await getManager().process("show al");
    console.log(result);
})();