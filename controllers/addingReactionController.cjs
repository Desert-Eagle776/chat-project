const models = require('../models/addingReactionModel.cjs');
const getCurrentUserId = require('../src/currentUser.cjs');

module.exports = {
    addingReactionPost: async (req, res) => {
        const reaction = req.query.reaction;
        const messageId = req.query.id;
        const currentUser = await getCurrentUserId(req.cookies);

        const addingReaction = await models.addingReaction(currentUser, reaction, messageId);
    },
}