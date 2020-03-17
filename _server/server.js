
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const router = require('./routes/index');

const app = express();
const PORT = process.env.NODE_SERVER_PORT;
const MONGO_CONN_STRING = process.env.MONGO_CONN_STRING;

if (process.env.NODE_ENV == 'development'){ console.log(`${MONGO_CONN_STRING}, ${PORT}`);}

// //app.use(cors());
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// //app.use('/api', router);

// mongoose.connect(`${MONGO_CONN_STRING}`, { useNewUrlParser: true, useFindAndModify: false });
// mongoose.connection.once('open', function(){
//     console.log('connected to the Database.');
// });
// mongoose.connection.on('error', function(error) {
//     console.log('Mongoose Connection Error : ' + error);
// });

// app.get('/', function(request, response) { response.send('Hello World!') });

app.listen(PORT, function() { console.log(`Server listening on port ${PORT}`) });