const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/users', (req, res) => {
    res.send([
        {
            'id': 1,
            'image':'https://placeimg.com/64/64/any',
            'name':'Antaewoong1',
            'birthday':'19900605',
            'gender':'男性',
            'job':'エンジニア'
        },
        {
            'id': 2,
            'image':'https://placeimg.com/64/64/any',
            'name':'Antaewoong2',
            'birthday':'19900605',
            'gender':'男性',
            'job':'エンジニア'
        },
        {
            'id': 3,
            'image':'https://placeimg.com/64/64/any',
            'name':'Antaewoong3',
            'birthday':'19900605',
            'gender':'男性',
            'job':'エンジニア'
        },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));