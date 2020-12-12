const cfenv = require('cfenv');
const express = require('express');
const mongoose = require('mongoose');

const logger = require('logger');
const lineUtils = require('line/LineUtils');
const brain = require('nlp/brain');
const ConnectionManager = require('dao/ConnectionManager');

const app = express();
const port = cfenv.getAppEnv().port || 3000;

app.post('/', lineUtils.middleware(brain.generateResponse));

(async () => {
    const connection = await mongoose.createConnection(process.env.MONGODB_CONNECTION_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    ConnectionManager.init(connection);
    app.listen(port, () => logger.info(`Listening on port ${port}`));
})();