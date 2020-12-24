const getManager = require('nlp/brain').getManager;

(async () => {
    const result = await getManager().process('list 4* paladins');
    console.log(result);
})();