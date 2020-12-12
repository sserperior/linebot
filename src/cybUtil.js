const convertStringArrayToString = stringArray => {
    let result = '';
    stringArray.forEach(line => {
        if (result.length > 0) {
            result += '\n';
        }
        result += line;
    });
    return result;
};

module.exports = {
    convertStringArrayToString
};