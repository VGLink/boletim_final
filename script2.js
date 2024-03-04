const numeros = [2, 8, 3, 10, 5, 7, 1, 6, 4, 9];

// Usando a função filter para obter apenas os números maiores que 5
const numerosMaioresQue5 = numeros.filter(numero => numero > 5);

document.write('<p>Lista original: ' + numeros.join(', ') + '</p>');
document.write('<p>Números maiores que 5: ' + numerosMaioresQue5.join(', ') + '</p>');