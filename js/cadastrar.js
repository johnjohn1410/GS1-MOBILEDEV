let robo = []
window.addEventListener("load", ()=> {
    robo = JSON.parse(localStorage.getItem("robo")) || []
})

document.querySelector("#botao-cadastrar").addEventListener("click", () => {   
    // Pegar os valores dos inputs
    const id = document.querySelector('#ID')
    const local = document.querySelector('#local')
    const saida = document.querySelector('#saida')
    const retorno = document.querySelector('#retorno')
    const qtd = document.querySelector('#qtd')

    // Objeto Robô com os valores
    const bot = {
        id: id.value,
        local: local.value,
        saida: saida.value,
        retorno: retorno.value,
        qtd: qtd.value,
    } 
    let teste = robo.find(robot => robot.id == id.value)
    console.log(robo.find(bot => bot.id == id))
    console.log(id in robo)
    console.log(teste)

    if (teste !== undefined ) {
        alert("Id Duplicado, verifique os dados inseridos")
        
    } else {salvar(bot)}

})



function salvar (bot) {
    console.log(robo)
    robo.push(bot)
    localStorage.setItem("robo", JSON.stringify(robo))
    
    window.location.href = "index.html" 
}