import { Mongoose } from "mongoose";

export default async function connectToMongo() {
    const mongoose = new Mongoose();
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return mongoose;
}