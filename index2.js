let select = document.querySelector('select[class="select"]')
let value
let itens = document.getElementsByClassName("MarketItens")
let item = document.getElementsByClassName("MarketItem")
let contents = document.getElementsByClassName("contents")
let content = document.getElementsByClassName("content")
let imagens = document.querySelectorAll('img[class="imagens"]')


select.addEventListener('focus', (event) => {
    event.target.style.outlineColor = "rgb(22, 78, 199)";
})
select.addEventListener('change', (event) => {
    console.log(event.target.value)
    value = event.target.value
})


// select.addEventListener("change", handleChange);

// function handleChange(e) {
//     window.localStorage.setItem("opção", e.target.value);
// }


select.addEventListener('click', (event) => {
    if (value == "valor2") {
        itens[0].style.justifyContent = "start"
        itens[0].style.height = "60vh"
        itens[0].style.width = "28.5vw"
        itens[0].style.marginBotton = "1vh"
        contents[0].style.marginTop = "1vh"
        for (let index = 0; index < item.length; index++) {
            item[index].style.marginLeft = "2vw"
            item[index].style.marginRight = "2vw"
            item[index].style.marginTop = "1.5vh"
            item[index].style.height = "18vh"
            item[index].style.width = "15vh"
            //item[index].hover.style.height = "25vh"
        }
        for (let index = 0; index < imagens.length; index++) {
            imagens[index].style.width = "12vw"
            imagens[index].style.height = "15vh"
        }
    } else if (value == "valor3") {
        content[0].style.alignContent = "start"
        itens[0].style.justifyContent = "start"
        itens[0].style.height = "45vh"
        itens[0].style.width = "48.3vw"
        itens[0].style.marginTop = "2vh"
        itens[0].style.marginBottom = "1vh"
        contents[0].style.marginTop = "1vh"
        for (let index = 0; index < item.length; index++) {
            item[index].style.marginLeft = "2vw"
            item[index].style.marginRight = "2vw"
        }
    } else if (value == "valor5") {
        itens[0].style.height = "26vh"
        itens[0].style.marginBottom = "25vh"
        for (let index = 0; index < item.length; index++) {
            item[index].style.marginLeft = "2vw"
            item[index].style.marginRight = "2vw"
        }
    }
})