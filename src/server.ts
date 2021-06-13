import app from './app';
import { default as c } from './constantes';

app.listen(c.PORTA, () => {
    console.log(`Rodando na porta ${c.PORTA}`); 
})