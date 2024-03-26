function generarCajasDeTexto() {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);
    const resultado = document.getElementById('resultado');
    const matrizDiv1 = document.getElementById('matriz1');
    const matrizDiv2 = document.getElementById('matriz2');
    
    // Limpiar contenido previo
    matrizDiv1.innerHTML = ''; 
    matrizDiv2.innerHTML = ''; 
    resultado.innerHTML = '';

    // Generar cajas de texto para la matriz 1
    generarCajasTexto(matrizDiv1, filas, columnas, 'cell');

    // Generar cajas de texto para la matriz 2
    generarCajasTexto(matrizDiv2, filas, columnas, 'cell2');

    // Agregar botón para sumar matrices
    matrizDiv2.innerHTML += `<button type="button" onclick="suMa()">Sumar Matrices</button>`;
}

function generarCajasTexto(contenedor, filas, columnas, prefijo) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            contenedor.innerHTML += `<input type='number' id='${prefijo}-${i}-${j}' />`; 
        }
        contenedor.innerHTML += '<br/>';
    }
}

function suMa() {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);
    const resultado = document.getElementById('resultado');
    let resultadoMatriz = []; 

    resultado.innerHTML = '';
  
    // Inicializar la matriz de resultados con ceros
    for (let i = 0; i < filas; i++) {
      resultadoMatriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            resultadoMatriz[i][j] = 0;
        }
    }
  
    // Sumar las matrices
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            const cell1 = parseInt(document.getElementById(`cell-${i}-${j}`).value) || 0;
            const cell2 = parseInt(document.getElementById(`cell2-${i}-${j}`).value) || 0;
            resultadoMatriz[i][j] = cell1 + cell2;
        }
    }
  
    // Mostrar la matriz resultante en inputs separados
    resultadoMatriz.forEach(fila => {
      fila.forEach(valor => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = valor;
        input.readOnly = true;
        resultado.appendChild(input);
      });
      resultado.appendChild(document.createElement('br'));
    });
}
