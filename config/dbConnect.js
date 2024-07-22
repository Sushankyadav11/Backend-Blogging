const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // console.log('connecting to the database')

        //connect to the database
        await mongoose.connect('mongodb+srv://user:123@sushank.qsoeioy.mongodb.net/sushank?retryWrites=true&w=majority&appName=Sushank');
    }catch(err){
        console.log('Error while connecting database: ', err);
    }
}

module.exports = connectDB;

