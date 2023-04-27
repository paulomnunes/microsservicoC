const express = require('express');
const eventoRoutes = require('./routes/eventoRoutes');

const app = express();
const port = 5000;

app.use(express.json());
app.use(eventoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});