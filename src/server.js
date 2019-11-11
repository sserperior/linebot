const cfenv = require('cfenv');
const express = require('express');

const logger = require('logger');
const lineUtils = require('line/LineUtils');
const brain = require('nlp/brain');

const app = express();
const port = cfenv.getAppEnv().port || 3000;

app.post('/', lineUtils.middleware(brain.generateResponse));
app.listen(port, () => logger.info(`Listening on port ${port}`));