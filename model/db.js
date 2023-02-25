const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// mongoose
//     .connect("mongodb://127.0.0.1:27017/imagesDB")
//    
mongoose.connect("mongodb+srv://amanmalviya258:Aman123@cluster0.4wpddzu.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("db connected!")).catch((err) => console.log(err.message));;