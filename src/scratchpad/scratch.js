const { getManager } = require('nlp/brain');

(async () => {
    const result = await getManager().process("hardwood lumber");
    console.log(result);
})();