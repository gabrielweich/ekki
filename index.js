require('dotenv').config()

const db = require('./server/models');
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY]
    })
);

app.use('/api', require('./server/routes'));
app.use((err, req, res, next) => res.status(500).send(err));


if (['production'].includes(process.env.NODE_ENV)) {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8765;

db.sequelize.sync({ force: false, timezone: '-03:00' }).then(() => {
    app.listen(PORT)
    app.on('error', (error) => console.log(`An error has occurred: ${error}`));
    app.on('listening', () => console.log(`Server listening on port ${PORT}`));
})
