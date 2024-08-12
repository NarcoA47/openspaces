import mongoose from 'mongoose'

const filtersSchema = new mongoose.Schema({
    saftandhygenic: {
        type: 'string',
        required: true
    },
    wifi: {
        type: 'string',
        required: true
    },
    AC: {
        type: 'string',
        required: true
    },
    Balcony: {
        type: 'string',
        required: true
    },
    Furnished: {
        type: 'string',
        required: true
    }
}, {
    timestamps: true,
})

const Filters = new mongoose.model("Filters", filtersSchema);
export default Filters