const { getManager } = require('nlp/brain');

(async () => {
    const result = await getManager().process('show hunter’s lodge');
    console.log(result);
})();