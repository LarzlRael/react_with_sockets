const { response } = require("express");
const bcrypt = require('bcryptjs');

const usuario = require("../models/usuario");
const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {

    try {
        const { email, password } = req.body;

        // verificar que el emal no exista
        const existeEmail = await Usuario.findOne({ email });
        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'el correo ya existe'
            })
        }


        // guardar usuario en BD

        const newUser = new Usuario(req.body);

        // encriptar la contrasseña
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt);

        await newUser.save();

        // generar el JWT
        const token = await generarJWT(newUser.id);

        res.json({
            ok: true,
            newUser,
            token
        })


    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        })
    }

}


const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        const usuarioDB = await Usuario.findOne({ email });
        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // validar contraseña

        const validaPassword = bcrypt.compareSync(password, usuarioDB.password);

        if (!validaPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }
        // generar el JWT
        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'serve error'
        })
    }


}

const renewToken = async (req, res = response) => {

    const uid = req.uid;

    // Genrar un nuevo JWT
    const token = await generarJWT(uid);

    // obtener el usuario por UID

    const usuario = await Usuario.findById(uid);

    res.json({
        ok: 'true',
        usuario,
        token
    })
}


module.exports = {
    crearUsuario,
    login,
    renewToken
}