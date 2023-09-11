const { Schema } = require('mongoose');

const planetsSchema = new Schema({
    keplerName: {
        type: String,
        required: true
    }
});

module.exports = model('Planet', planetsSchema);