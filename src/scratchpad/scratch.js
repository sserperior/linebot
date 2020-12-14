const { getManager } = require('nlp/brain');

(async () => {
    const result = await getManager().process("show riddles of wonderland");
    console.log(result);
})();