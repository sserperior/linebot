const { getManager } = require('nlp/brain');
const axios = require('axios');

(async () => {
    //const result = await getManager().process("how are you cyber?");
    //console.log(result);
    const result = null;
    try {
        result = await axios.get('https://aws1.discourse-cdn.com/smallgiantgames/original/3X/2/b/2bdd036335ec86fb5eb6335a7706a8a61ba6c4bd.jpeg');
        console.log(result.status);
    } catch (error) {
        console.log(error);
    }
})();