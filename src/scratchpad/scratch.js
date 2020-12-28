const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process('list 4* very fast druids');
    console.log(result);
})();