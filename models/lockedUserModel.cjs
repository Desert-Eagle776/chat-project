const connection = require('../config/connection.cjs');

module.exports = {
    enablingTheLock: async (value, lockedUserId) => {
        const sqlEnablingLock = 'UPDATE users SET locked=? WHERE id=?';
        const [rowsEnablingLock, fieldsEnablingLock] = await connection.execute(sqlEnablingLock, [value, lockedUserId]);

        return rowsEnablingLock;
    },
}