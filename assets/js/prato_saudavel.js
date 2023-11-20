$('.tela-3').hide()
$('.tela-4').hide()
$('.tela-5').hide()
$('.modal_ingredientes').hide()

$('.start_btn').click(function () {
    $('.tela-1').fadeOut();
    setTimeout(() => {
        $('.tela-2').fadeIn()
    }, 500)
})

// Lógica do Objeto:
let selected = 0;
let corretos = 0
$('.verificar_btn').click(function () {
    let telaAtual = $(this).parents('.tela')
    let proxTela = $(this).parents('.tela').next('.tela')
    let selecionadosArray = $('.selected')
    
    let errados = 0
    console.log(selecionadosArray)
    for (let i = 0; i < selecionadosArray.length; i++) {
        if (selecionadosArray[i].classList.contains('cr')) {
            corretos++
        } else {
            errados++
        }
    };
    console.log('errados: ' + errados)
    console.log('corretos: ' + corretos)
    console.log(selecionadosArray.length)
    telaAtual.fadeOut()
    setTimeout(() => {
        proxTela.fadeIn()
    }, 500)
    $('.selected').removeClass('selected')
    if(telaAtual.hasClass('tela-4')){
        // resultado => (selecionados/corretos)*100
        $('.pontuacao span').text((corretos/16)*100)

    }
})

$('.g-item').click(function () {
    let item = $(this)
    if (item.hasClass('selected')) {
        item.removeClass('selected')
        selected--
        console.log('selected sqrs: ' + selected)
    } else {
        item.addClass('selected')
        selected++
        console.log('selected sqrs: ' + selected)
    }
})

$('.ingredientes_btn').click(function () {
    $(this).parents('.tela').children('.section-2').children('.modal_ingredientes').fadeIn()
})
$('.modal_cls_btn').click(function () {
    $(this).parents('.modal_ingredientes').fadeOut()
})
