const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process('list atlantis family heroes');
    console.log(result);
})();