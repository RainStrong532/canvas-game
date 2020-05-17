const express = require('express');

const app = express();
const port = 1380;

app.set('view engine', 'pug');
app.set('views', './src/expressjs/views');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: [
            { name: 'Mạnh', age: 20 },
            { name: 'Mẽ', age: 20 }
        ]
    });
})
app.listen(port, () => {
    console.log('server is running on port ' + port);
})