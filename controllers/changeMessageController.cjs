const models = require('../models/changeMessageModel.cjs');

module.exports = {
    changeMessageGet: async (req, res) => {
        const messageId = req.query.message_id;

        const messageForEditing = await models.messageForEditing(messageId);

        res.render('./partials/change_message', {
            title: 'Корегування',
            message: messageForEditing,
        })
    },
    changeMessagePost: async (req, res) => {
        const messageId = req.body.message_id;
        const changedMessage = req.body.textarea;
        const userId = req.body.user_id;

        const updateMessage = await models.updateMessage(changedMessage, messageId);

        if (updateMessage.length != 0) {
            res.redirect(`/user_chat?id=${userId}`);
        } else {
            res.redirect('/change_message');
        }
    },
}