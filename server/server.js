require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authCtrl');
const homesCtrl = require('./controllers/homesCtrl')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`listening on ${SERVER_PORT}`)
    })
})

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//AUTH ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/user-data', authCtrl.userData)

//HOMES ENDPOINTS
app.get('/api/homes', homesCtrl.getHomes)
app.get('/api/topratedhomes', homesCtrl.getHomesTopRated)
app.post('/api/createlisting', homesCtrl.createListing)