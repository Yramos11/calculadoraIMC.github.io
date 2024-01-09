let inputPeso = document.querySelector("#peso");
let inputAltura = document.querySelector("#altura");
let botao = document.querySelector(".btnCalcular");
let mensagem = document.querySelector(".mensagem");
let frase = document.querySelector(".frase");
let mensagemErro = document.querySelectorAll(".mensagemErro");

botao.addEventListener("click", calcular)

function limparErro(){

    mensagemErro.forEach((msg) =>{

        msg.textContent = "";
    })
}

function calcular(){

    limparErro();

    let valorPeso = inputPeso.value;
    let valorAltura = inputAltura.value;
    
    let imc = valorPeso/(valorAltura * valorAltura);

    mensagem.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    // VALORES DE IMC PARA A FRASE FINAL
    if(imc <= 18.5){

        frase.textContent = `Você está abaixo do peso Ideal`
        frase.style.color = "#006432"
    }
    
    if(imc > 18.5 && imc <= 24.99){

        frase.textContent = `Você está no peso Ideal`
        frase.style.color = "#00bb5d"
    }

    if(imc >= 25 && imc <= 29.99){

        frase.textContent = `Você está acima do peso Ideal`
        frase.style.color = "orange"
    }

    if(imc >= 30){

        frase.textContent = `Você está com obesidade !!!`
        frase.style.color = "red"
    }

    // VERIFICAR SE OS CAMPOS ESTÃO VAZIOS
    if(valorPeso === ""){

        exibirErro(inputPeso, "Peso não pode estar em branco.");
        mensagem.textContent = "";
        frase.textContent = "";
    }

    if(valorAltura === ""){

        exibirErro(inputAltura, "Altura não pode estar em branco.");
        mensagem.textContent = "";
        frase.textContent = "";
    }
}

function exibirErro(input, mensagemDeErro){

    let elementoMensagemErro = input.nextElementSibling;
    elementoMensagemErro.textContent = mensagemDeErro;
}

// APARECER DESCRIÇÃO DO IMC

let paragrafo = document.querySelector(".paragrafoImc")
let descreverImc = document.querySelector(".descricaoImc") 

function aparecerDescricao(){

    descreverImc.classList.toggle("aparecer")
}

function desaparecerDescricao(){

    descreverImc.classList.add("aparecer")
}