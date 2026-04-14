const inputUm = document.getElementById('num1');
const inputDois = document.getElementById('num2');
const spanResultado = document.getElementById('resultado');
const divErro = document.getElementById('mensagem-erro');
const btsom = document.getElementById('btnSoma');
const btsub = document.getElementById('btnSub');
const btmult = document.getElementById('btnMult');
const btdiv = document.getElementById('btnDiv');
const btlimpar = document.getElementById('btnLimpar');

function calcular(operacao) {
    divErro.innerHTML = "";
    const valor1 = inputUm.value;
    const valor2 = inputDois.value;
    if (valor1 === "" || valor2 === "") {
        divErro.innerHTML = "Digite os dois numeros!";
        return;
    }

    const n1 = parseFloat(valor1);
    const n2 = parseFloat(valor2);

    if (isNaN(n1) || isNaN(n2)) {
        divErro.innerHTML = "Digite apenas números!";
        return;
    }

    let resultado = 0;

    if (operacao === '+') {
        resultado = n1 + n2;
    } else if (operacao === '-') {
        resultado = n1 - n2;
    } else if (operacao === '*') {
        resultado = n1 * n2;
    } else if (operacao === '/') {
        if (n2 === 0) {
            divErro.innerHTML = "Não pode dividir por zero!";
            return;
        }
        resultado = n1 / n2;
    }
    spanResultado.innerHTML = resultado;
}

btlimpar.addEventListener('click', function () {
    inputUm.value = "";
    inputDois.value = "";
    spanResultado.innerHTML = "0";
    divErro.innerHTML = "";
});

btsom.addEventListener('click', function () { calcular('+'); });
btsub.addEventListener('click', function () { calcular('-'); });
btmult.addEventListener('click', function () { calcular('*'); });
btdiv.addEventListener('click', function () { calcular('/'); });