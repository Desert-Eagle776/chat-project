const connection = require('../config/connection.cjs');

module.exports = {
    checkTokenInAuth: async (token) => {
        const checkTokenInAuth = 'SELECT user_id, token FROM `auth` WHERE token=?';
        const [rowsCheckAuth, fieldsCheckAuth] = await connection.execute(checkTokenInAuth, [token]);

        return rowsCheckAuth;
    },
    checkTokenInRegistr: async (token) => {
        const checkTokenInRegistr = 'SELECT id, token FROM `users` WHERE token=?';
        const [rowsCheckRegistr, fieldsCheckRegistr] = await connection.execute(checkTokenInRegistr, [token]);

        return rowsCheckRegistr;
    },
}