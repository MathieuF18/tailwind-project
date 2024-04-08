import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
mongoose.Promise = global.Promise;  

const visitSchema = new Schema({
    name: String,
    description: String,
    long_description: String,
    duration: Number,
    img: String,
    size: Number,
    price: Number,
    path: String,
    link: String
},{timestamps: true});


const Visit = mongoose.models.Visit || mongoose.model('Visit', visitSchema); 
export default Visit