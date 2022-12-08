const models = require('../models/registrModels.cjs');
const tokenGeneration = require('../src/tokenGeneration.cjs');

module.exports = {
    registrGet: (req, res) => {
        res.render('./partials/registr', {
            title: 'Головна сторінка'
        });
    },
    registrPost: async (req, res) => {
        let token = tokenGeneration();
        console.log(token);

        const userName = req.body.user_name;
        const userPass = req.body.user_pass;

        const checkUniqeLogin = await models.checkUniqeLogin(userName);

        if (checkUniqeLogin.length === 0) {
            const addingUser = await models.addingUser(userName, userPass, token);
            console.log(addingUser)

            res.cookie('token', token)

            if (addingUser.length === 0) {
                res.redirect('/');
            } else {
                res.redirect('/main_chat');
            }
        } else {
            res.redirect('/main_chat');
        }
    }
}