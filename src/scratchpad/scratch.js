const { getManager } = require('nlp/brain');

(async () => {
    const result = await getManager().process("grade sargasso");
    console.log(result);
})();