const models = require('../models/profileModel.cjs');

module.exports = {
    profileGet: async (req, res) => {
        const currentUserId = req.query.id;

        const dataCurrentUser = await models.dataCurrentUser(currentUserId);
        const blockedUsers = await models.blockedUsers();

        res.render('./partials/profile', {
            title: 'Профіль',
            currentUser: dataCurrentUser,
            lockedUsers: blockedUsers,
            userid: dataCurrentUser[0].id,
        });
    },
}