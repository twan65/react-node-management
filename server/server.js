const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
    {
        'id': 1,
        'email': 'twan65@test.co.jp',
        'image':'https://placeimg.com/64/64/any',
        'name':'Antaewoong1',
        'birthday':'19900605',
        'address1':'東京都',
        'address2':'荒川区',
        'address3':'荒川３−７２−２K2K ２０２',
        'gender':'男性',
        'position':'エンジニア',
        'skils':["java", "Node", "React"],
        'certificates':[]
    },
    {
        'id': 2,
        'email': 'twan65@test.co.jp',
        'image':'https://placeimg.com/64/64/any',
        'name':'Antaewoong1',
        'birthday':'19900605',
        'address1':'東京都',
        'address2':'荒川区',
        'address3':'荒川３−７２−２K2K ２０２',
        'gender':'男性',
        'position':'エンジニア',
        'skils':["java", "Node", "React"],
        'certificates':[]
    },
    {
        'id': 3,
        'email': 'twan65@test.co.jp',
        'image':'https://placeimg.com/64/64/any',
        'name':'Antaewoong1',
        'birthday':'19900605',
        'address1':'東京都',
        'address2':'荒川区',
        'address3':'荒川３−７２−２K2K ２０２',
        'gender':'男性',
        'position':'エンジニア',
        'skils':["java", "Node", "React"],
        'certificates':[]
    },
];

app.get('/api/v1/users', (req, res) => {
    res.send(users);
});

app.get('/api/v1/users/:id', (req, res) => {
    res.send(users.find(e => e.id == req.params.id));
});

app.listen(port, () => console.log(`Listening on port ${port}`));