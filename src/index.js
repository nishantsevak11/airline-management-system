const express = require('express');

const {PORT} = require('./config/serverConfig');

const ApiRoutes = require('./routes/index');

async function serverStart () {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))

    app.use('/api', ApiRoutes);
    app.use('*', (req, res) => {
        res.send("404 Not Found")
    });
   
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      
    });
}

serverStart();