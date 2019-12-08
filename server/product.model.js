const mongoose = require('mongoose');
const autoIncrementModelID = require('./counter.model.js');

const ProductSchema = mongoose.Schema({
    id: { type: Number, unique: true, min: 1 },
    name: { type: String },
    type: { type: String },
    price: { type: Number },
    rating: { type: Number },
    warranty_years: { type: Number },
    available: { type: Boolean}
}, { versionKey: false });

ProductSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }

    autoIncrementModelID('activities', this, next);
});

module.exports = mongoose.model('Products', ProductSchema);