import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dev_sajid:sajid789@cluster0.zvkgaq4.mongodb.net/food_delivery')
    .then(() => {
        console.log("DB Connected!");
    })
    .catch((err) => {
        console.log("Connection Error!",err);
    });
} 