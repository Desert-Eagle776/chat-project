const connection = require('../config/connection.cjs');

module.exports = {
    messageForEditing: async (messageId) => {
        const sqlMessage = 'SELECT id, message, to_user_id FROM messages WHERE id=?'
        const [rowsEditingMessage, fieldsEditingMessage] = await connection.execute(sqlMessage, [messageId]);

        return rowsEditingMessage;
    },
    updateMessage: async (message, messageId) => {
        const sqlUpdateMessage = 'UPDATE messages SET message=? WHERE id=?'
        const [rowsUpdateMessage, fieldsUpdateMessage] = await connection.execute(sqlUpdateMessage, [message, messageId]);

        return rowsUpdateMessage;
    },
}