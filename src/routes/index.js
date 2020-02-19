const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json(
    {
        message: 'Hola mundillo'
    }

))

router.get('/data', (req, res) => res.json(
    {
        message: 'Aqui deberia ir unos buenos datos'
    }

))

router.get('*', (req, res) => res.json(
    { 
    //  res.render('error');
    opss: "Ohhh!! al parecer el enlace que buscabas no se encuentra!"
    }
));

module.exports = router;