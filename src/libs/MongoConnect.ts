import mongoose from "mongoose";


const connectMongoDB = async () => {
    mongoose.connect(process.env.MONGO_URL!).then((res) => {
        console.log("COnnected to MONGODB")
    }).catch(Err => {
        console.log("Error got while connecting to db : " + Err)
    })
}

export default connectMongoDB;