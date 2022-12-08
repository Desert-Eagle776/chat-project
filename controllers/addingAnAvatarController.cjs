const models = require('../models/addingAnAvatarModel.cjs');
const fs = require('fs');

module.exports = {
    addingAnAvatarPost: async (req, res) => {
        const userId = req.body.id;
        const img = req.file;

        const addingAnAvatar = await models.updatingOrAddingAvatar(img.originalname, userId);

        if (addingAnAvatar) res.redirect('/profile?id=' + userId);

        fs.copyFile(img.path, './public/image/' + img.originalname, (err) => {
            if (err) throw err;
            console.log('Copying completed successfully!');
        });
    },
}