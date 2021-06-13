import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Fala fi' });
});

export default routes;
