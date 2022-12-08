const connection = require('../config/connection.cjs');

module.exports = {
    deleteFile: async (messageId) => {
        const sqlDeleteFile = 'DELETE FROM file_attachment WHERE message_id=?'
        const [rowsDeleteFile, fieldsDeleteFile] = await connection.execute(sqlDeleteFile, [messageId]);

        return rowsDeleteFile;
    },
    deleteReaction: async (messageId) => {
        const sqlDeleteReaction = 'DELETE FROM reaction WHERE message_id=?'
        const [rowsDeleteReaction, fieldsDeleteReaction] = await connection.execute(sqlDeleteReaction, [messageId]);

        return rowsDeleteReaction;
    },
    deleteMessage: async (messageId) => {
        const sqlDeleteMessage = 'DELETE FROM messages WHERE id=?';
        const [rowsDeleteMessage, fieldsDeleteMessage] = await connection.execute(sqlDeleteMessage, [messageId]);

        return rowsDeleteMessage;
    }
}