let fondo=document.querySelector("#fondo")
let llanta=document.querySelector("#llanta")
let llanta1=document.querySelector("#llanta1")
let humo=document.querySelector("#humo")

fondo. addEventListener('click',cambiar)

function cambiar(){
    fondo.classList.add('anifo')
    llanta.classList.add('anillan')
    llanta1.classList.add('anillan')
    humo.classList.add('anihu')

    
}

