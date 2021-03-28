const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = { uid };

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, (err, token) => {

            if (err) {
                console.log(err)
                reject('No se pudo generar el jwt')
            } else {
                console.log(token)
                resolve(token);
            }
        })
    })
}

module.exports = {
    generarJWT
}
