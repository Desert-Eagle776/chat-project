const connection = require('../config/connection.cjs');

module.exports = {
    userVerification: async (userName, password) => {
        const sqlUserVerification = 'SELECT id, user_name, password FROM `users` WHERE user_name=? AND password=?';
        const [rowsAuth, fieldsAuth] = await connection.execute(sqlUserVerification, [userName, password]);

        return rowsAuth;
    },
    addingUserInAuth: async (userId, token) => {
        const addingUserInAuth = 'INSERT INTO `auth` (user_id, token) VALUES (?, ?)';
        const [rowsAddingUserInAuth, fieldsAddingUserInAuth] = await connection.execute(addingUserInAuth, [userId, token]);

        return rowsAddingUserInAuth;
    },
}