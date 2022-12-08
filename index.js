import express from "express";
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'handlebars';
import exhbs from 'express-handlebars';
import cookieParser from "cookie-parser";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use(cookieParser('secret key'));

import registrRoter from './routes/registrRoutes.cjs';
import authRouter from './routes/authRoutes.cjs';
import mainChatRouter from './routes/mainChatRoutes.cjs';
import userChatRouter from './routes/userChatRoutes.cjs';
import changeMessageRouter from "./routes/changeMessageRoutes.cjs";
import deleteMessageRouter from './routes/deleteMessageRoutes.cjs';
import addingReactionRouter from './routes/addingReactionRoutes.cjs';
import removeReactionRouter from './routes/removeReactionRoutes.cjs';
import lockedUserRouter from './routes/lockedUserRoutes.cjs';
import unlockUserRouter from './routes/unlockUserRoutes.cjs';
import profileRouter from './routes/profileRoutes.cjs';
import addingAnAvatarRouter from './routes/addingAnAvatarRoutes.cjs';

app.use('/', registrRoter);
app.use('/auth', authRouter);
app.use('/main_chat', mainChatRouter);
app.use('/user_chat', userChatRouter);
app.use('/change_message', changeMessageRouter);
app.use('/delete_message', deleteMessageRouter);
app.use('/adding_reaction', addingReactionRouter);
app.use('/remove_reaction', removeReactionRouter);
app.use('/locked_user', lockedUserRouter);
app.use('/unlock_user', unlockUserRouter);
app.use('/profile', profileRouter);
app.use('/adding_an_avatar', addingAnAvatarRouter);

app.engine("hbs", exhbs.engine(
    {
        layoutsDir: "views/layouts",
        defaultLayout: "menu",
        extname: "hbs"
    }
));

hbs.registerHelper('times', function (n, block) {
    var accum = '';
    for (var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

app.listen(3000, () => {
    console.log('Application listening on port 3000!');
})