
function calcularIMC(peso, altura) {
    calculo = peso / (altura * altura);
    return calculo;
}

function classificarIMC(imc) {
    var classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Você está abaixo do peso!';
    }

    else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Você está com sobrepeso!';
    }

    else if (imc >= 30) {
        classificacao = 'Você está obeso!';
    }

    else {
        classificacao = 'Você está com o peso normal!';
    }

    return classificacao;
}

function inputIMC(e) {
    e.preventDefault();
    var pesoPessoa = document.querySelector('#peso').value;
    var alturaPessoa = document.getElementById('altura').value;

    var pesoValor = parseFloat(pesoPessoa);
    var alturaValor = parseFloat(alturaPessoa);

    if (isNaN(pesoValor) || isNaN(alturaValor) || pesoValor <= 0 || alturaValor <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
    }
    
    var imc = calcularIMC(pesoValor, alturaValor);

    console.log(`o valor do IMC é de: ${imc}`);

    var classificacao = classificarIMC(imc);
    var resultadoDiv = document.querySelector("#resultado");

    resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.<br> ${classificacao}`;

    resultadoDiv.style.display = "block";
    
}
