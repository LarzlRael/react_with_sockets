const { Schema, model } = require("mongoose");


const MensajeSchema = Schema({

    de: {
        type: String,
        ref: 'Usuario',
        required: true
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        unique: true
    },
    mensaje: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

MensajeSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    
    return object
});


module.exports = model('Mensaje', MensajeSchema);