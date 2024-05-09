const mongoose = require('mongoose');
const dotenv = require('dotenv').config;
// dotenv.config();

const uri = process.env.MONGO_URI;

mongoose.connect('mongodb://localhost:27017/');
mongoose.connection.once('open', function(){
  console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});

module.exports = mongoose;

// try {
 
//   mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
//   console.log("mongo database is connected");
// } catch (error) {
//   console.log(error);
// }
// module.exports = mongoose;