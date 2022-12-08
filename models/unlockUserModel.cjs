const connection = require('../config/connection.cjs');

module.exports = {
    disablingTheLock: async (value, unlockUserId) => {
        const sqlDisablingLock = 'UPDATE users SET locked=? WHERE id=?';
        const [rowsDisablingLock, fieldsDisablingLock] = await connection.execute(sqlDisablingLock, [value, unlockUserId]);

        return rowsDisablingLock;
    },
}