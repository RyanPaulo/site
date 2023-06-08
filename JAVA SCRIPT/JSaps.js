function mostrar(id) {
    if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none'
} else {
    document.getElementById(id).style.display = 'block'
}
}
function ocultar(id) {
    if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none'
    element = document.getElementsByTagName("h1")[2];
    element.scrollIntoView();
} else {
    document.getElementById(id).style.display = 'block'
}
}
function voltar() {
    element = document.getElementsByTagName('h1')[0]
    element.scrollIntoView()
}
function abrir(id) {
    document.getElementById(id).style.display = 'block'
}
function fechar(id) {
    document.getElementById(id).style.display = 'none'
    element = document.getElementsByTagName('h1')[2]
    element.scrollIntoView()
}
function ocultar1(id) {
    if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none'
    element = document.getElementsByTagName("h1")[5];
    element.scrollIntoView();
} else {
    document.getElementById(id).style.display = 'block'
}
}
function ocultar2(id) {
    if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none'
    element = document.getElementsByTagName("h1")[8];
    element.scrollIntoView();
} else {
    document.getElementById(id).style.display = 'block'
}
}
function ocultar3(id) {
    if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none'
    element = document.getElementsByTagName("h1")[9];
    element.scrollIntoView();
} else {
    document.getElementById(id).style.display = 'block'
}
}