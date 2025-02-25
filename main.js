$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //para recuperar o valor do iput usa o .val() porque é um input
        const novoItem = $('<li style= "display: none";></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class ="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver Imagem em Tamanho Real">
                    Ver imagem tamanho real
                </a>
            </div>            
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1500); /*esta em milisegundos*/
        $('#endereco-imagem-nova').val('');
    })
})
