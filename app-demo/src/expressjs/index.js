const express = require('express');

const app = express();
const port = 1380;

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.listen(port, () => {
    console.log('server is running on port ' + port);
})