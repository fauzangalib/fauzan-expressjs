const express = require('express');
const app = express();
const router = require('./routes');
const log = require('./middlewares/logger');
const port = process.env.PORT || 4000;

app.use(log);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);
app.use((req, res) => {
    res.send({
        status: 'failed',
        message: 'Resource' + req.originalUrl + 'Not Found'
    });
});
app.listen(port, function() {
    console.log(`Server Starts on ${port}`)
});