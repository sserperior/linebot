const { getManager } = require('nlp/brain');

(async () => {
    const result = await getManager().process('show 3* ice heroes');
    console.log(result);
})();