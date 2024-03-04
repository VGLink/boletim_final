const numeros = [8, 3, 12, 5, 7, 1, 6, 15, 4, 9];

    // Usando a função reduce para encontrar o maior número
    const maiorNumero = numeros.reduce((max, numero) => (numero > max ? numero : max), numeros[0]);

    document.write('<p>Lista de números: ' + numeros.join(', ') + '</p>');
    document.write('<p>Maior número: ' + maiorNumero + '</p>');