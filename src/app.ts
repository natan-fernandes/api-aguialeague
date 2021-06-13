import express from 'express';
import routes from './routes';
import Session from 'express-session';
import passport from './discordPassport';

class App {
    public server;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }
    
    middlewares() {
        this.server.use(express.json());
        this.server.use(Session({
            secret: "secret",
            resave: true,
            saveUninitialized: false
        }));
        this.server.use(passport.initialize());
        this.server.use(passport.session());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
