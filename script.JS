document.addEventListener("DOMContentLoaded", function() {

    const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
    const opcoesAcessibilidade = document.getElementById("opcoes-acessibilidade");

    botaoAcessibilidade.addEventListener("click",function (){
        botaoAcessibilidade.classList.toggle ("rotacao-botao")
        opcoesAcessibilidade.classList.toggle ("apresenta-lista")
    })

    const AumentaFontBotao = document.getElementById ("aumentar-Fonte");
    const DiminuirFontBotao = document.getElementById ("diminuir-Fonte");
 
    let tamanhoAtualFonte =1;

    AumentaFontBotao.addEventListener ("click", funtion() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize =  '$(tamanhoAtualFonte)rem'
    
    })

    DiminuirFontBotao.addEventListener ("click", funtion() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = '$(tamanhoAtualFonte)rem'
    })

})

    


    

