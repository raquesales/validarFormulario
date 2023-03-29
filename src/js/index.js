const btnEnviar = document.querySelector(".btn-enviar")
const inputs = document.querySelectorAll(".dados-pessoais")
const aviso = document.querySelectorAll(".aviso")

function Verificar(item, i) {
    if (item.value === "") {
        item.classList.add("nao-preenchido")
        aviso[i].innerHTML = ("campo obrigatório")

    } else if (item.value != "") {
        item.classList.remove("nao-preenchido")
        item.classList.add("preenchido")
        aviso[i].innerHTML = ("")
    }
}

btnEnviar.addEventListener("click", () => {
    inputs.forEach((item, i) => {
        Verificar(item, i)
    })
    VerificarMudanca()
})

function VerificarMudanca() {
    inputs.forEach((item, i) => {
        item.addEventListener("change", () => {
            Verificar(item, i)
        })
    })
}

