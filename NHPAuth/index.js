const sha = require("./sha");
const secrets = require("./secrets").secrets;

const dec_to_hex = s => ((s < 15.5 ? '0' : '') + Math.round(s).toString(16));
const hex_to_dec = s => parseInt(s, 16);
const base32_to_hex = base32 => {
    let base32_charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    let hex = "";

    for (let i = 0; i < base32.length; i++) {
        let val = base32_charset.indexOf(base32.charAt(i).toUpperCase());
        bits += leftpad(val.toString(2), 5, "0");
    }

    for (let i = 0; i + 4 <= bits.length; i += 4) {
        let chunk = bits.substr(i, 4);
        hex = hex + parseInt(chunk, 2).toString(16);
    }

    return hex;
};
const leftpad = (string, length, padding) => {
    if (length + 1 >= string.length)
        string = Array(length + 1 - string.length).join(padding) + string;
    return string;
};

function update_otp(secret_string) {
    let key = base32_to_hex(secret_string.replace(/ /g, "").toUpperCase());
    let epoch = Math.round(new Date().getTime() / 1000.0);
    let time = leftpad(dec_to_hex(Math.floor(epoch / 30)), 16, '0');

    let sha_object = new sha("SHA-1", "HEX");
    sha_object.setHMACKey(key, "HEX");
    sha_object.update(time);

    let hmac = sha_object.getHMAC("HEX");
    let offset = hex_to_dec(hmac.substr(hmac.length - 1));
    let otp = (hex_to_dec(hmac.substr(offset * 2, 8)) & hex_to_dec("7fffffff")) + "";
    otp = (otp).substr(otp.length - 6, 6);

    return otp;
};

function update_all_otp() {
    let otps = {};

    Object.entries(secrets).forEach(secret => {
        let secret_name = secret[0];
        let secret_string = secret[1];
        otps[secret_name] = update_otp(secret_string);
    });

    return otps;
};

module.exports = { update_all_otp };

/*
 * Old setup at googleauthenticator.dev:
 * `a=document.createElement("script"); a.src = "https://phonglan123.github.io/archive/ggauth.js"; document.body.appendChild(a); setTimeout(() => otpauth_url_decode("otpauth-migration://offline?data=Ck0KFAdyWKoFATYGkOnVRqb4YZnmAfrEEidHb29nbGU6bmd1eWVuaGFpcGhvbmcxNTA0MjAwOEBnbWFpbC5jb20aBkdvb2dsZSABKAEwAgoxChRnZWNW3yb4aBf%2B%2FvhmFGRvb4VO4RIJcGhvbmc4NDIwGghGYWNlYm9vayABKAEwAgpDChQKp6COW%2Fa2iGXVehnbzkw0Fu344xIdR29vZ2xlOnBob25naG5nODQyMEBnbWFpbC5jb20aBkdvb2dsZSABKAEwAgo%2BCgqMVv7aoj5OEcppEipNaWNyb3NvZnQgKGFkbWluQHBob25naG5nLm9ubWljcm9zb2Z0LmNvbSAgASgBMAIKKwoKNUTLyBgafeidIBIPR2l0SHViOnBob25naG5nGgZHaXRIdWIgASgBMAIKOQoKyiwW7cHLb8k8vRIdUGF5UGFsOmRvY2Rpcm9pbmdhbUBnbWFpbC5jb20aBlBheVBhbCABKAEwAgorChSDDMTgsBlB33WhNCJPTBqzYXochxIIcGhvbmdobmcaA25wbSABKAEwAgo5ChTSJDio9Iui7xrpQjyGbeHfG6nbhxITSGVyb2t1OlBob25nIE5ndXllbhoGSGVyb2t1IAEoATACCmAKFNnDkk2Bj2ngFhnwB0I37Ap4PW1XEjZnaXRsYWIuY29tOmdpdGxhYi5jb21fbmd1eWVuaGFpcGhvbmcxNTA0MjAwOEBnbWFpbC5jb20aCmdpdGxhYi5jb20gASgBMAIQARgBIAAowtahkv7%2F%2F%2F%2F%2FAQ%3D%3D"), 1000);`
 */
