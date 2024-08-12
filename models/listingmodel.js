import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({

    name: {
        type: String, 
        required: true
    },
    type: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    availability: {
        type: Number, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Listing = new mongoose.model("Listing", listingSchema);
export default Listing;