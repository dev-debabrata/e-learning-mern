const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    } catch (error) {
        console.log("mongodb connection error;", error);
        process.exit(1);
    }
};

module.exports = connectdb;