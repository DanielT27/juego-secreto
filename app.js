let listaNumerosSorteados =[ ];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById ('valorUsuario').value);
    
    console.log(intentos)
    console.log(listaNumerosSorteados)
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        borrarCaja();
    }
        return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo+1));

    //Si ya no hya más numeros a sortear
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos lo números posibles')}
        else{
    //Si el numero generado está en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
    }
    else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    }
}
}


function borrarCaja (){
    let valorCaja =document.querySelector('#valorUsuario')
    valorCaja.value='';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}

function reiniciarJuego (){
    borrarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
