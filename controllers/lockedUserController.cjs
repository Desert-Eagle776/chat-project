const models = require('../models/lockedUserModel.cjs');
const getCurrentUserId = require('../src/currentUser.cjs');

module.exports = {
    lockedUserGet: async (req, res) => {
        const lockedUserId = req.query.id;

        const currentUser = await getCurrentUserId(req.cookies);

        const enablingTheLock = await models.enablingTheLock('true', lockedUserId);

        if (Object.keys(enablingTheLock).length !== 0) {
            res.redirect('main_chat?id=' + currentUser);
        } else {
            console.error('Якась помилка!');
        }
    },
}