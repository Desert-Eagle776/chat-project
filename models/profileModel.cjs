const connection = require('../config/connection.cjs');

module.exports = {
    dataCurrentUser: async (currentUserId) => {
        const sqlDataCurrentUser = 'SELECT id, user_name, avatar FROM users WHERE id=?';
        const [rowsUser, fieldsUser] = await connection.execute(sqlDataCurrentUser, [currentUserId]);

        return rowsUser;
    },
    blockedUsers: async () => {
        const sqlBlockedUsers = 'SELECT id, user_name, locked FROM users WHERE locked=?'
        const [rowsLocked, fieldsLocked] = await connection.execute(sqlBlockedUsers, ['true']);

        return rowsLocked;
    },
}