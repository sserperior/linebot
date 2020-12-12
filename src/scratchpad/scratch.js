const { getManager } = require('nlp/brain');

(async () => {
    const result = await getManager().process("list paladin heroes");
    console.log(result);
})();