let btnMenu = document.getElementById('btn-menu')
let menu =  document.getElementById('menu')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})