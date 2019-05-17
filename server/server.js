require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authCtrl');
const homesCtrl = require('./controllers/homesCtrl')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION  } = process.env;

const app = express();

const aws = require('aws-sdk');

app.get('/api/signs3', (req, res) => {
  aws.config = {
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };

  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return res.send(returnData);
  });
});

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
app.get('/api/cities', homesCtrl.getCities)
app.get('/api/city/:city_id', homesCtrl.getHomesByCity)

app.get('/api/listing/:property_id', homesCtrl.getListing)

app.get('/api/topratedhomes', homesCtrl.getHomesTopRated)
app.get('/api/austinhomes', homesCtrl.getHomesAustin)
app.post('/api/createlisting', homesCtrl.createListing)
app.get('/api/eighthomes', homesCtrl.getEightHomes)
app.get('/api/lasthome', homesCtrl.getLastHome)
