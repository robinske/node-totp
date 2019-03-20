const speakeasy = require('speakeasy');
const opn = require('opn');
const qrcode = require('qrcode');
const fs = require('fs');


var secret = speakeasy.generateSecret({name: 'brooklyn.js demo'});


function generateQRcode() {
    qrcode.toDataURL(secret.otpauth_url, function(err, data) {
        fs.writeFileSync('./qr.html', `<img src="${data}">`);
        opn("./qr.html");
    });
}


function verifyToken(token) {
    return speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token: token
    });
}



