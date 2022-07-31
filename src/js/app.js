const btnAvancar = $('#btn-avancar');
const btnVoltar = $('#btn-voltar');
var cartoes = $('.cartao');
var cartaoAtual = 0;


function esconderCartaoSelecionado(){
    $('.selecionado').removeClass('selecionado');
}

function mostrarCartao(){
    $(cartoes[cartaoAtual]).addClass('selecionado');
}


btnAvancar.click(function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao()
});

btnVoltar.click(function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao()
});