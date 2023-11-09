$('.start_btn').click(function(){
    $('.tela-1').fadeOut();
    setTimeout(()=>{
        $('.tela-2').fadeIn()
    },500)
})

$('.verificar_btn').click(function(){
    let telaAtual = $(this).parents('.tela')
    let proxTela = $(this).parents('.tela').next('.tela')
    telaAtual.fadeOut()
    setTimeout(()=>{
        proxTela.fadeIn()
    },500)
})