const express = require('express');
const PORT = 5000;
const cors = require('cors');
const index = require('./routes/index');
const app = express();
const http = require('http');
const fs = require('fs');
const session = require('express-session');
const config = require('./config/config.json');

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use('/', index);

app.use(session({
    secret: config.telegram.secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
        sameSite: 'Strict',
        secure: true,
    },
}));

const options = {
    key: fs.readFileSync('./config/ssl/private.key'),
    cert: fs.readFileSync('./config/ssl/certificate.crt'),
};

http.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
