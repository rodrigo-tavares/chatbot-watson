const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const watson = require('../src/watson/client-watson');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/mensagem/', (req, res, next) => {
    const { text, context = {} } = req.body;

    const params = {
        input: { text },
        workspace_id: '61302320-b1a9-4308-9dc3-7f7e059a4af9',
        context,
    };

    watson.message(params, (err, response) => {
        if (err) {
            res.status(500).json(err);
            return next();
        }
        res.json(response);
        return next();
    });
});

app.listen(3000);
