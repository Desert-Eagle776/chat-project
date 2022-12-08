const models = require('../models/authModel.cjs');
const tokenGeneration = require('../src/tokenGeneration.cjs');

module.exports = {
    authGet: async (req, res) => {
        res.render('./partials/auth', {
            title: 'Авторизація'
        })
    },
    authPost: async (req, res) => {
        const userName = req.body.auth_user_name;
        const userPass = req.body.auth_pass;

        const userVerification = await models.userVerification(userName, userPass);

        if (userVerification.length === 0) {
            res.redirect('/auth');
        } else {
            const token = tokenGeneration();
            const userId = userVerification[0].id;

            const addingUserInAuth = await models.addingUserInAuth(userId, token);
            if (addingUserInAuth) res.cookie('token', token);

            res.redirect('/main_chat');
        }
    },
}