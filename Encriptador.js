const d= document;
const textArea = d.querySelector (".form__input");
const imagenmun = d.querySelector(".result__img");
const loaderEspera = d.querySelector(".loader");
const tituloResult = d.querySelector (".result__title");
const textoResult = d.querySelector (".result__text");
const botonEncriptar = d.querySelector (".form__btn");
const botonDesencriptar = d.querySelectorAll (".form__btn");
const botonCopiar = d.querySelector (".result__btn");



const llaves = [
    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
// Accion de encriptamiento

function encriptamensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i< mensaje.length; i++) {
        let letra =mensaje [i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra=== llaves[j][0]) {
                encriptada = llaves[j] [1]; 
                break; 
            }
                    }
                    mensajeEncriptado+= encriptada;
            }

    return mensajeEncriptado;

}


//Accion de  desencriptado



function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i ++) {
        let regex = new RegExp (llaves [i][1],'g');
        mensajeDesencriptado =mensajeDesencriptado.replace(regex, llaves[i][0]);     
    }
    return mensajeDesencriptado;
    
}

// Elementos escondidos
textArea.addEventListener("input", (e)=>{
    imagenmun.style.display = "none";
    loaderEspera.classList.remove("hidden");
    tituloResult.textContent = "Capturando Mensaje";
    textoResult.textContent = "";
    console.log(e.target.value);
});

// accion del boton encriptar

botonEncriptar.addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptamensaje(mensaje);
    textoResult.textContent= mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    tituloResult.textContent = "El resultado es:";
});


botonDesencriptar [1].addEventListener('click', (e)=> {
        e.preventDefault();
        let mensaje = textArea.value.toLowerCase();
        let mensajeDesencriptado = desencriptarMensaje(mensaje);
        textoResult.textContent= mensajeDesencriptado;
        botonCopiar.classList.remove("hidden");
});


botonCopiar.addEventListener("click", ()=> {
    let textoCopiado = textoResult.textContent;
    navigator.clipboard.writeText(textoCopiado).then (()=>{
    imagenmun.style.display="block";
    loaderEspera.classList.add("hidden");
    tituloResult.textContent= "El texto se copio";
    botonCopiar.classList.add("hidden");
    textoResult.textContent=""
    })
});
