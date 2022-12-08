const models = require('../models/deleteMessageModel.cjs');

module.exports = {
    deleteMessageGet: async (req, res) => {
        const userId = req.query.user_id;
        const messageId = req.query.message_id;

        const deleteFile = await models.deleteFile(messageId);
        const deleteReaction = await models.deleteReaction(messageId);
        const deleteMessage = await models.deleteMessage(messageId);

        res.redirect(`/user_chat?id=${userId}`);
    },
}