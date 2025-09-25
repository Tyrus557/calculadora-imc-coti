
function calcularIMC(peso, altura) {
    calculo = peso / (altura * altura);
    return calculo;
}

function classificarIMC(imc) {
    var classificacao = '';
    var cor = '';
    var saida = [classificacao, cor]
    if (imc < 18.5) {
        saida = ['Você está abaixo do peso','#3498db'];
    }

    else if (imc >= 25 && imc < 29.9) {
        saida = ['Você está com sobrepeso','#e67e22'];
    }

    else if (imc >= 30) {
        saida = ['Você está obeso','#e74c3c'];
    }

    else {
        saida = ['Você está com o peso normal','#2ecc71']
    }

    return saida;
}

function inputIMC(e) {
    e.preventDefault();
    const pesoPessoa = document.querySelector('#peso').value;
    const alturaPessoa = document.querySelector('#altura').value;

    

    if (pesoPessoa <= 0 || alturaPessoa <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
    }
    
    var imc = calcularIMC(pesoPessoa, alturaPessoa);

    console.log(`o valor do IMC é de: ${imc}`);

    var classificacao = classificarIMC(imc);
    var mensagem = classificacao[0];
    var cor = classificacao[1];

    var resultadoDiv = document.querySelector("#resultado");

    resultadoDiv.innerHTML = `Seu IMC é: <span>${imc.toFixed(2)}.<br> ${mensagem}</span>`;

    resultadoDiv.style.display = "block";
    resultadoDiv.children[0].style.color = cor;    

}
