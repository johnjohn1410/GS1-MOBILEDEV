function apagar(id){
    const robo = JSON.parse(localStorage.getItem("robo")) || []

    const botDeletado = robo.filter(bot => bot.id !== id)
    
    localStorage.setItem("robo", JSON.stringify(botDeletado))
    
    document.querySelector('#_'+id).remove()
}