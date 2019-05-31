import request from 'request';

export default function (options) {
    var rootApi = "https://rest.cricketapi.com/"
    // request new token
    let accessKey = "124aabe1fdd58da0265117b80e89dc5b"
    let secretkey = "35b1ca6b470ce3b8125759469d8d1f88"
    let deviceid = "LOCALDEVICE"
    let appid = "cricloop"
    let accesUrl = rootApi + "rest/v2/auth/"

    return new Promise(function (resolve, reject) {
        request({
            method: 'POST', uri: accesUrl, gzip: true, headers: {'Content-type': 'application/json'}, formData: {
                access_key: accessKey,
                secret_key: secretkey,
                app_id: appid,
                device_id: deviceid
            }
        }, function (error, res, keybody) {

            keybody = JSON.parse(keybody);
            if (keybody.status) {
                var newToken = keybody.auth.access_token;
                return newToken
                //resolve(newToken);
            } else {
                return null //reject(null);
            }
        })
    })
}
