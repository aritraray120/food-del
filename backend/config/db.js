import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aritraray120:kswA1bCSA2gzMOQ3@cluster0.mhyrz.mongodb.net/food-del')
        .then(() => console.log("DB connected")
        )

}

