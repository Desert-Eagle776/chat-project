const connection = require('../config/connection.cjs');

module.exports = {
    checkForBlocking: async (value) => {
        const sqlCheckBlocking = 'SELECT id, user_name, avatar, locked FROM users WHERE locked=?';
        const [rowsCheckBlocking, fieldsCheckBlocking] = await connection.execute(sqlCheckBlocking, [value]);

        return rowsCheckBlocking;
    },
}