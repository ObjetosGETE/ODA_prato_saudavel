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
    telaAtual.fadeOut()
    setTimeout(() => {
        proxTela.fadeIn()
    }, 500)
})

$('.g-item').click(function () {
    let item = $(this)
    if(item.hasClass('selected')){
        item.removeClass('selected')
        selected--
        console.log('selected sqrs: ' + selected)
    } else {
        item.addClass('selected')
        selected++
        console.log('selected sqrs: ' + selected)
    }
})
$('.verificar_btn').click(function(){
    
})