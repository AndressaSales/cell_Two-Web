function on(){
    let lamp = window.document.querySelector('.lam');
    let screen = window.document.getElementById('tela_2');
    lamp.style.color = 'yellow'
    screen.style.background = 'orange'
}
function off(){
    let lamp = window.document.querySelector('.lam');
    let screen = document.getElementById('tela_2');
    screen.style.background = 'rgb(7, 7, 63)'
    lamp.style.color = 'black'
}