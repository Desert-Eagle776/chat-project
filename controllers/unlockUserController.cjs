const models = require('../models/unlockUserModel.cjs');
const getCurrentUserId = require('../src/currentUser.cjs');

module.exports = {
    unlockUserGet: async (req, res) => {
        const unlockUserId = req.query.id;
        const currentUser = await getCurrentUserId(req.cookies);

        const unlockUser = await models.disablingTheLock('false', unlockUserId);

        if (Object.keys(unlockUser).length !== 0) {
            res.redirect('/profile?id=' + currentUser);
        } else {
            console.error('Якась помилка!');
        }
    },
}