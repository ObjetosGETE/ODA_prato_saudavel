$('.start_btn').click(function () {
    $('.tela-1').fadeOut();
    setTimeout(() => {
        $('.tela-2').fadeIn()
    }, 500)
})

// Lógica do Objeto:
let selected = 0;

$('.verificar_btn').click(function () {
    let telaAtual = $(this).parents('.tela')
    let proxTela = $(this).parents('.tela').next('.tela')
    let selecionadosArray = $('.selected')
    let corretos = 0
    let errados = 0
    console.log(selecionadosArray)
    for(let i=0; i<selecionadosArray.length;i++){
        if (selecionadosArray[i].classList.contains('cr')) {
            corretos++
        } else {
            errados++
        }
    };
    console.log('errados: ' + errados)
    console.log('corretos: ' + corretos)
    if (errados > 0){
        console.log('whoops, try again!')
    }
    if (errados == 0 && selecionadosArray.length == 4){
        console.log(selecionadosArray.length)
        telaAtual.fadeOut()
        setTimeout(() => {
            proxTela.fadeIn()
        }, 500)
        $('.selected').removeClass('selected')
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