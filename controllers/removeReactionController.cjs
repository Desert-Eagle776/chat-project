const models = require('../models/removeReactionModel.cjs');

module.exports = {
    removeReactionPost: async (req, res) => {
        const messageId = req.query.message_id;
        const removeReaction = await models.removeReaction(messageId);
    },
}