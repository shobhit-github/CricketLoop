import passport from 'passport';
import User from '../models/user';
import request from 'request';
import accesstoken from './accesstoken';

/**
 * POST /login
 */
export function login(req, res, next) {
    // Do email and password validation for the server
    passport.authenticate('local', (authErr, user, info) => {
        if (authErr) return next(authErr);
        if (!user) {
            return res.sendStatus(401);
        }
        // Passport exposes a login() function on req (also aliased as
        // logIn()) that can be used to establish a login session
        return req.logIn(user, (loginErr) => {
            if (loginErr) return res.sendStatus(401);
            return res.sendStatus(200);
        });
    })(req, res, next);
}

/**
 * POST /logout
 */
export function logout(req, res) {
    req.logout();
    res.sendStatus(200);
}

/**
 * POST /signup
 * Create a new local account
 */
export function signUp(req, res, next) {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({email: req.body.email}, (findErr, existingUser) => {
        if (existingUser) {
            return res.sendStatus(409);
        }

        return user.save((saveErr) => {
            if (saveErr) return next(saveErr);
            return req.logIn(user, (loginErr) => {
                if (loginErr) return res.sendStatus(401);
                return res.sendStatus(200);
            });
        });
    });
}

export function matchScores(req, res, next) {
    let key = req.body.key

    async function GenToken() {
        var access_token = await accesstoken();
        return access_token
    }

    GenToken()
        .then(
            token => {

                let url = "https://rest.cricketapi.com/" + "rest/v2/match/" + key + "/?card_type=full_card&access_token=" + token

                request({
                    method: 'GET',
                    uri: url,
                    gzip: true,
                    headers: {'Content-type': 'application/json'}
                }, function (error, res, keybody) {
                    try {
                        JSON.parse(keybody)
                    } catch (error) {
                        console.log('error as response not a valid json-  Season Info: ', error);
                        return 0//resolve(0)
                    }

                    if (!error && keybody) {
                        try {
                            keybody = JSON.parse(keybody);
                        } catch (error) {
                            console.log('error as response not a valid json-  Season Info: ', error);
                            return 0//resolve(0)
                        }

                        var body = keybody
                        if (body.status) {
                            if (body.data) {
                                console.log("Got the first ", key);
                                return body.data
                                //resolve(body.data)
                            } else {
                                console.log("Failed Season : ", key);
                                return 0//resolve(0)
                            }
                        } else {
                            return 0//resolve(0)
                            console.log("Season Info have been errored. The body return with false. The err param is: ", error, " and the response is ", keybody);
                        }


                    } else {
                        return 0//resolve(0)
                        console.log("Season Info - Request to API have been errored. The err param is: ", error, " and the response is ", res);
                    }


                });

            })
        .catch(
            err => {
                console.log(err, "ERROR in users.js")
            })
}

export default {
    login,
    logout,
    signUp,
    matchScores
};
