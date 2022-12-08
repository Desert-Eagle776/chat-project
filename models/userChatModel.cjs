const connection = require('../config/connection.cjs');

module.exports = {
    outputMessages: async (currentUser, userId) => {
        const sqlMessages = `SELECT users_id, to_user_id, messages.id, message, from_user.user_name AS from_username, to_user.user_name AS to_username 
            FROM messages 
            JOIN users AS from_user ON from_user.id=messages.users_id 
            JOIN users AS to_user ON to_user.id=messages.to_user_id 
            WHERE (users_id=? AND to_user_id=?) OR (to_user_id=? AND users_id=?)`;
        const [rowsMessages, fieldsMessages] = await connection.execute(sqlMessages, [currentUser, userId, currentUser, userId]);

        return rowsMessages;
    },
    presenceOfReaction: async (messageId) => {
        const sqlReaction = 'SELECT message_id, reaction_on_message FROM `reaction` WHERE message_id=?';
        const [rowsReaction, fieldsReaction] = await connection.execute(sqlReaction, [messageId]);

        return rowsReaction;
    },
    outputFile: async (messageId) => {
        const fileSql = 'SELECT file, message_id FROM file_attachment WHERE message_id=?';
        const [rowsFile, fieldsFile] = await connection.execute(fileSql, [messageId]);

        return rowsFile;
    },
    addingMessages: async (currentUser, toUserId, message) => {
        const sqlAddingMessage = 'INSERT INTO `messages` (users_id, to_user_id, message) VALUES (?, ?, ?)';
        const [rowsAddingMessage, fieldsAddingMessage] = await connection.execute(sqlAddingMessage, [currentUser, toUserId, message]);

        return rowsAddingMessage;
    },
    messageOutput: async (currentUser) => {
        const messageOutput = 'SELECT id, users_id, message FROM `messages` WHERE users_id=?';
        const [rowsOutputMessage, fieldsOutputMessage] = await connection.execute(messageOutput, [currentUser]);

        return rowsOutputMessage;
    },
    addingFile: async (file, messageId) => {
        const sqlAddingFile = 'INSERT INTO file_attachment (file, message_id) VALUES (?, ?)';
        const [rowsAddingFile, fieldsAddingFile] = await connection.execute(sqlAddingFile, [file, messageId]);

        return rowsAddingFile;
    },
}