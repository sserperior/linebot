const cfenv = require('cfenv');
const express = require('express');

const lineUtils = require('line/LineUtils');

const app = express();
const port = cfenv.getAppEnv().port || 3000;

app.post('/', lineUtils.middleware);
app.listen(port, () => console.log(`Listening on port ${port}`));