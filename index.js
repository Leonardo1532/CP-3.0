let botao1 = document.querySelector('button[class="button1"]')
let botao2 = document.querySelector('button[class="button2"]')
let alvo = document.querySelectorAll('form[class="formulario"]')
let register = document.querySelector('section[class="Register"]')
let form = document.querySelector('div[class="form"]')
let botoes = document.querySelector('section[class="botões"]')
let botao = document.querySelectorAll('div[class="botao"]')
let title = document.querySelector('div[class="titleRegister2"]')
let cadChecks = document.querySelectorAll('div[class="cadastro"], div[class="check"]')
let separar = document.querySelector('section[class="separar"]')


botao1.addEventListener('click', (event) => {
    alvo[0].style.flexDirection = "column"
    alvo[0].style.alignItems = "flex-end"
    alvo[0].style.height = "870px"

    register.style.height = "930px"
    register.style.marginTop = "3vh"
    form.style.height = "870px"
    botoes.style.height = "75px"
    for (let index = 0; index < botao.length; index++) {
        botao[index].style.marginTop = "11px"
    }
})


botao2.addEventListener('click', (event) => {
    alvo[0].style.display = "grid"
    alvo[0].style.gridTemplateColumns = "250px 250px 250px"
    alvo[0].style.gridTemplateRows = "50px 50px 50px 50px 50px 50px 50px"
    alvo[0].style.gap = "25px"

    title.style.gridColumn = "1 / span 3"
    title.style.gridRow = "3 / 4"
    botoes.style.gridColumn = "1 / span 3"
    botoes.style.gridRow = "7 / 8"
    separar.style.gridColumn = "1 / span 3"
    separar.style.gridRow = "6 / 7"

    alvo[0].style.height = "575px"
    register.style.height = "630px"
    form.style.height = "573px"
    botoes.style.height = "75px"

})