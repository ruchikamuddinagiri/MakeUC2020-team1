const mongoose = require('mongoose');

const db = () => {
  console.log(process.env.DATABASE_URI)
  return mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((connection) => console.log('Connected to Database'))
    .catch((exception) => console.log('DB Error: ' + exception.message));
};

module.exports = db;