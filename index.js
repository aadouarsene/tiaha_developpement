let btn_menu = document.querySelector('.menu_responsive')

let block_menu = document.querySelector('.block_menu_responsive')
let bar1 = document.querySelector('.bar1')
let bar2 = document.querySelector('.bar2')
let bar3 = document.querySelector('.bar3')

btn_menu.addEventListener('click', ()=>{
    block_menu.classList.toggle('deroulement_menu')
    bar1.classList.toggle('bar1_transform')
    bar2.classList.toggle('bar2_transform')
    bar3.classList.toggle('bar3_transform')

})

