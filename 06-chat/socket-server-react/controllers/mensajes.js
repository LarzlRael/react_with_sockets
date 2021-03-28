const { response } = require("express");
const Mensaje = require("../models/mensajes");

const obtenerChat = (req, res = response) => {

    const miId = req.uid;
    const mensajeDe = req.params.de;

    const last30 = await Mensaje.find({
        $or: [
            { de: miId, para: mensajeDe },
            { de: mensajeDe, para: miId },
        ]
    }).sort({ createdAt: 'desc' })
        .limit(30);

    res.json({
        ok: true,
        mensajes: last30
    })
}

const obtenerChat = (req, res = response) => {


}
module.exports = {
    obtenerChat
}