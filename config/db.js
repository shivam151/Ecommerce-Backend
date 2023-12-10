import mongoose from 'mongoose'
import colors from 'colors'
const connectdb =async ()=>{
    try {
    const conn= await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connected To Mangodb Database ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Eroor in mongodb ${error}`.bgRed.white)
    }
}

export default connectdb;