import passport from 'passport';
import Strategy from 'passport-discord';

passport.serializeUser((user: Express.User, done: any) => {
    done(null, user);
});

passport.deserializeUser((obj: object, done: any) => {
    done(null, obj);
});

const strategy = new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: process.env.DISCORD_SCOPES.split('|')
}, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
});

passport.use(strategy);

export default passport;
