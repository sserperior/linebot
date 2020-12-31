const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process('war 29 5000 15 5000 14');
    console.log(result);
})();