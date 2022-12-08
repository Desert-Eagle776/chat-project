const connection = require('../config/connection.cjs');

module.exports = {
    removeReaction: async (messageId) => {
        const sqlRemoveReaction = 'DELETE FROM reaction WHERE message_id=?'
        const [rowsRemoveReaction, fieldsRemoveReaction] = await connection.execute(sqlRemoveReaction, [messageId]);

        return rowsRemoveReaction;
    },
}