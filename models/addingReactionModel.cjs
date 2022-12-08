const connection = require('../config/connection.cjs');

module.exports = {
    addingReaction: async (userId, reaction, messageId) => {
        const sqlAddingReaction = 'INSERT INTO reaction (user_id, reaction_on_message, message_id) VALUE (?, ?, ?)';
        const [rowsReaction, fieldsReaction] = await connection.execute(sqlAddingReaction, [userId, reaction, messageId]);

        return rowsReaction;
    },
}