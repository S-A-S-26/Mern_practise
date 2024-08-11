const mongoose=require('mongoose');

// URI="mongodb://127.0.0.1:27017/practice"
URI=process.env.DBURI
console.log("env",process.env.DBURI);

const connectMongo=async ()=>{
    try {
       mongoose.connect(URI)
       console.log("Connected to MongoDB")
    } catch (error) {
       console.log("Error connecting database: ", error) 
    }
}

module.exports = connectMongo;