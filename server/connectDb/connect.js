const mongoose = require("mongoose");
const url_db =
  "mongodb+srv://dbUser:54900777@databasemerbappliation.pmjh4.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    await mongoose.connect(url_db);
    console.log("db is connected sucessfully");
  } catch (error) {
    console.log("connection with database is failed");
  }
};

module.exports = connectDb;
