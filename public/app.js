// Importamos los módulos necesarios
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Habilitamos CORS para todas las rutas
app.use(cors());

// Parseamos el cuerpo de las solicitudes entrantes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Definimos la ruta GET para la raíz ("/")
app.get('/', (req, res) => {
    // Enviamos el archivo index.html
    res.sendFile(__dirname + '/index.html');
});

// Definimos la ruta POST para '/calculate'
app.post('/calculate', (req, res) => {
    // Obtenemos las matrices del cuerpo de la solicitud
    const matrix1 = req.body.matrix1;
    const matrix2 = req.body.matrix2;
    const result = [];

    // Realizamos la suma de las matrices
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    // Enviamos el resultado en formato JSON
    res.json(result);
});

// Definimos el puerto
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor
app.listen(PORT, () => {
    // Imprimimos un mensaje cuando el servidor está en funcionamiento
    console.log(`Server running on port: ${PORT}`);
});
