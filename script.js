const pic1 = document.getElementById("0-imagem-miniatura");
const pic2 = document.getElementById("1-imagem-miniatura");
const pic3 = document.getElementById("2-imagem-miniatura");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
// const imageVisualizacao = document.querySelector("#visualizacao img");
// let imagemselecionada = 1
// function atualizarimagemSelecionada() {
//     imageVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + imagemselecionada + ".jpeg"
// }
// pic1.addEventListener("click", function(){
//     imagemselecionada = 0;
//     atualizarimagemSelecionada();
// });
// pic2.addEventListener("click", function(){
//     imagemselecionada = 1;
//     atualizarimagemSelecionada();
// });
// pic3.addEventListener("click", function(){
//     imagemselecionada = 2;
//     atualizarimagemSelecionada();
// });
const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");
const opcoestamanho = ['41 mm','45 mm'];
const opcoesCores = [
    'Verde-cipreste',
    'Azul-inverno',
    'Meia-noite',
    'Estelar',
    'Rosa-claro'
];
let imagemselecionada = 1;
let tamanhoselecionado = 1;
let opcaocorselecionada = 1;
function atualizarCorSelecionada(){
    const opcaocorselecionadaa = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);
    opcaocorselecionada = opcaocorselecionadaa;
    const nomeCor = opcoesCores[opcaocorselecionadaa]
    tituloProduto.innerText = 
    "Pulseira loop esportiva " + nomeCor.toLowerCase() + " para caixa de " + opcoestamanho[tamanhoselecionado];
    nomeCorSelecionada.innerText = "Cor - " + nomeCor;
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-" + imagemselecionada + ".jpeg";
    pic1.src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-0.jpeg"
    pic2.src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-1.jpeg"
    pic3.src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-2.jpeg"
}
function atualizarimagemselecionada(){
    const opcaoimagemselecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
    imagemselecionada = opcaoimagemselecionada;
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-"+ opcoesCores[opcaocorselecionada] + "/imagem-" + imagemselecionada + ".jpeg"
};
function atualizartamanho(){
    const opcaoTamanhoSelecionado = 
    document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
    tamanhoselecionado = opcaoTamanhoSelecionado;
    const tamanhocaixa = opcoestamanho[tamanhoselecionado]
    tituloProduto.innerText = 
    "Pulseira loop esportiva " + opcoesCores[opcaocorselecionada].toLowerCase() + " para caixa de " + tamanhocaixa;
    if(tamanhocaixa === '41 mm'){
        imagemVisualizacao.classList.add("caixa-pequena");
    } else{
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}




