import { Router } from 'express';
import passport from './discordPassport'

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Fala fi', user: req.user });
});

routes.get('/teste', passport.authenticate('discord', {
    scope: ['identify', 'email', 'guilds']
}));

routes.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/erro'
}), (req, res) => {
    res.redirect('/');
});

export default routes;
