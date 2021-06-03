const express = require('express');
const app = express();
const indexRouter = require("./routes")
app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.set("jwt-secret", process.env.JWT_SECRET);
app.set("refresh-secret", process.env.REFRESH_SECRET);

app.listen(3000, () => {
    console.log('Server listening at 3000 port')
});