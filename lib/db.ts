import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        
        await mongoose.connect('mongodb://127.0.0.1:27017/demo1')
        console.log('connect ok',mongoose.connection.host);
    } catch (error) {
        console.log('connect fail',error);
    }
}

const TopicSchema = new mongoose.Schema({
    title:String,
    describe:String
})

export const TopicModel = mongoose.models.Topic || mongoose.model("Topic",TopicSchema)

