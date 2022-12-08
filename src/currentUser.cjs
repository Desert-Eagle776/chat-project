const express = require('express');
const currentUserModel = require('../models/currentUserModel.cjs');

async function getCurrentUserId(cookies) {
    if (typeof cookies === 'object') {
        let token = cookies.token;
        console.log(token);

        let userAuthValidation = await currentUserModel.checkTokenInAuth(token);
        console.log(userAuthValidation, 'token token token');

        let userRegistrValidation = await currentUserModel.checkTokenInRegistr(token);
        console.log(userRegistrValidation, 'tokenRegistr');

        if (userAuthValidation.length != 0) {
            console.log('Функція працює: ', userAuthValidation);
            return userAuthValidation[0].user_id;
        } else {
            console.log('Помилка1!');
        }

        if (userRegistrValidation.length != 0) {
            console.log('Функція працює: ', userRegistrValidation);
            return userRegistrValidation[0].id;
        } else {
            console.log('Помилка2!')
        }
    } else {
        return null;
    }
}

module.exports = getCurrentUserId;