import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname+'./../.env' });

import app from './app';

app.listen(process.env.PORTA, () => {
    console.log(`Rodando na porta ${process.env.PORTA}`); 
})
.on('error', (err) => {
    console.log(`Deu erro aqui fi: ${err}`);
});
