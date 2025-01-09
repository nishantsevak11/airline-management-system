const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');

async function serverStart () {
   
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

serverStart();