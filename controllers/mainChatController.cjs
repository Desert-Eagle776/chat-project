const models = require('../models/mainChatModel.cjs');
const getcurrentUserId = require('../src/currentUser.cjs');

module.exports = {
    mainChatGet: async (req, res) => {
        const currentUser = await getcurrentUserId(req.cookies)

        const checkBlocking = await models.checkForBlocking('false');

        let otherUsers = await checkBlocking.filter(el => el.id != currentUser);

        let currentUserName = await checkBlocking.filter(el => el.id === currentUser);

        res.render('./partials/main_chat', {
            title: 'Чат',
            names: otherUsers,
            thisName: currentUserName,
        })
    }
}