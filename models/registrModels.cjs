const connection = require('../config/connection.cjs');

module.exports = {
    checkUniqeLogin: async (userName) => {
        const checkUniqeLogin = "SELECT user_name FROM `users` WHERE user_name=?";
        const [rowsLogin, fieldsLogin] = await connection.execute(checkUniqeLogin, [userName]);

        return rowsLogin;
    },
    addingUser: async (userName, password, token) => {
        const sql = 'INSERT INTO `users` (user_name, password, token) VALUES (?, ?, ?)';
        const [rowsAddingUser, fieldsAddingUser] = await connection.execute(sql, [userName, password, token]);

        return rowsAddingUser;
    },
}