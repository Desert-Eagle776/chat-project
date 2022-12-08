const connection = require('../config/connection.cjs');

module.exports = {
    updatingOrAddingAvatar: async (img, userId) => {
        const sqlAddingImage = 'UPDATE users set avatar=? WHERE id=?';
        const [rowsAvatar, fieldsAvatar] = await connection.execute(sqlAddingImage, [img, userId]);

        return rowsAvatar;
    },
}