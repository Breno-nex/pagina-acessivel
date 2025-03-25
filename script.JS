document.addEventListener("DOMContentLoaded", function() {

    const AumentaFontBotao = document.getElementById ("aumentar-Fonte");
    const DiminuirFontBotao = document.getElementById ("diminuir-Fonte");
 
    let tamanhoAtualFonte =1;

    AumentaFontBotao.addEventListener ("click", funtion() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = '$(tamanhoAtualFonte)rem'
    

    DiminuirFontBotao.addEventListener ("click", funtion() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = '$(tamanhoAtualFonte)rem'
    
})
}}))



