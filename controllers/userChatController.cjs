const path = require('path');
const fs = require('fs');
const models = require('../models/userChatModel.cjs');
const getCurrentUserId = require('../src/currentUser.cjs');

module.exports = {
    userChatGet: async (req, res) => {
        const userId = req.query.id;
        console.log(userId, 'userId');
        const currentUser = await getCurrentUserId(req.cookies);
        console.log(currentUser, 'currentUser');

        const outputMessages = await models.outputMessages(currentUser, userId, currentUser, userId);
        if (outputMessages.length === 0) console.log('Error output Messages!');

        for (let i = 0; i < outputMessages.length; i++) {
            const presenceOfReaction = await models.presenceOfReaction(outputMessages[i].id);

            if (presenceOfReaction.length === 0) {
                outputMessages[i].like = false
            } else {
                outputMessages[i].like = true
            }
        }

        for (let i = 0; i < outputMessages.length; i++) {
            const outputFile = await models.outputFile(outputMessages[i].id);

            if (outputFile != 0) {
                outputMessages[i].filename = outputFile[0];

                const fileExtensions = path.extname(`${outputFile[0].file}`);

                if (fileExtensions === '.jpg' || fileExtensions === '.jpeg' || fileExtensions === '.png') {
                    outputMessages[i].image = true;
                } else if (fileExtensions === '.mp3') {
                    outputMessages[i].music = true;
                } else if (fileExtensions === '.MP4') {
                    outputMessages[i].video = true;
                }
            } else {
                console.log('File Error!');
            }
        }

        res.render('./partials/user_chat', {
            title: 'Чат з користувачем',
            table_messages: outputMessages,
            to_user_id: userId,
        });
    },
    userChatPost: async (req, res) => {
        const toUserId = req.body.id;
        const message = req.body.text_message;
        const file = req.file;
        console.log(file, 'file')
        const currentUser = await getCurrentUserId(req.cookies);

        const addingMessages = await models.addingMessages(currentUser, toUserId, message);
        if (addingMessages.length === 0) console.error('Error adding message!');

        const messageOutput = await models.messageOutput(currentUser);
        const indexLastElementInArray = messageOutput.slice(-1)[0];

        if (file != undefined) {
            const addingFile = await models.addingFile(file.originalname, indexLastElementInArray.id);

            fs.copyFile(file.path, './public/file/' + file.originalname, (err) => {
                if (err) throw err;

                res.redirect('/user_chat?id=' + toUserId);
            })
        } else {
            res.redirect('/user_chat?id=' + toUserId);
        }
    },
}