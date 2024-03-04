function cadastrarAluno() {
  const nomeAluno = document.getElementById("nomeAluno").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota3").value);

  const dadosAluno = {
    nome: nomeAluno,
    notas: [nota1, nota2, nota3, nota4],
  };

  localStorage.setItem(nomeAluno, JSON.stringify(dadosAluno));

  // Exibir mensagem de sucesso
  alert("Aluno cadastrado com sucesso!");

  // Limpar campos do formulário
  document.getElementById("nomeAluno").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("nota4").value = "";

  calcularMedia();
}


function calcularMedia() {
    // Obter valores das notas
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
  
    // Calcular a média
    const media = (nota1 + nota2 + nota3  + nota4) / 4;
  
    // Exibir a média
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Média: ${media.toFixed(2)}`;
  
    // Verificar aprovado
    if (media >= 90) {
      resultadoElement.textContent += '\nConceito A - Aprovado';
      exibirAprovado();
    } else if (media >= 75 && media < 90) {
      resultadoElement.textContent += '\nConceito B - Aprovado';
      exibirAprovado();
    } else if (media >= 60 && media < 75) {
      resultadoElement.textContent += '\nConceito C - Recuperação';
    } else if (media >= 40 && media < 60) {
      resultadoElement.textContent += '\nConceito D - Reprovado';
    } else {
      resultadoElement.textContent += '\nConceito E - Reprovado';
    }
  }
  function exibirDados() {
    document.getElementById("dadosArmazenados").innerHTML = ""; 
  
    for (let i = 0; i < localStorage.length; i++) {
      const chave = localStorage.key(i);
      const valor = JSON.parse(localStorage.getItem(chave));
  
      try {
        
        const nomeAluno = valor.nome;
        const notas = valor.notas;
    
        document.getElementById("dadosArmazenados").innerHTML += `<h3>${chave}</h3>`;
        document.getElementById("dadosArmazenados").innerHTML += `<ul>`;
        document.getElementById("dadosArmazenados").innerHTML += `<li>Nome: ${nomeAluno}</li>`;
        document.getElementById("dadosArmazenados").innerHTML += `<li>Notas: ${notas.join(", ")}</li>`;
        document.getElementById("dadosArmazenados").innerHTML += `</ul>`;
      } catch (error) {
        console.error("Erro ao recuperar dados do Local Storage:", error);
      }
    }
  }