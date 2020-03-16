const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}/emp`;

console.log('TEST' + `${process.env.REACT_APP_MONGO_USER}`);

mongoose.connect(dbRoute, {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getData', (req, res) => {
    Data.find((err, data) => {
    if (err) return res.json({success: false, error: err });
    return res.json({success: true, data: data });
    });
});

app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

// // this is our update method
// // this method overwrites existing data in our database
// router.post('/updateData', (req, res) => {
//     const { id, update } = req.body;
//     Data.findByIdAndUpdate(id, update, (err) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     });
//   });
  
//   // this is our delete method
//   // this method removes existing data in our database
//   router.delete('/deleteData', (req, res) => {
//     const { id } = req.body;
//     Data.findByIdAndRemove(id, (err) => {
//       if (err) return res.send(err);
//       return res.json({ success: true });
//     });
//   });
// this is our create methid
// this method adds new data in our database
// router.post('/putData', (req, res) => {
//     let data = new Data();
  
//     const { id, message } = req.body;
  
//     if ((!id && id !== 0) || !message) {
//       return res.json({
//         success: false,
//         error: 'INVALID INPUTS',
//       });
//     }
//     data.message = message;
//     data.id = id;
//     data.save((err) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     });
//   });