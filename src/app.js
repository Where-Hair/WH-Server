const express = require('express')();
const app = express();

app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(3000, () => {
    console.log('Server listening at 3000 port')
});