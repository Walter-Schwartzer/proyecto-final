// // document.getElementById("icon_bars").addEventListener("click", mostrar_menu);

// // function mostrar_menu(){
// //     document.querySelector(".nav-links").classList.toggle("mostar_menu")
// // }

// //alert("Bienvenido a mi pagina web")


// let nombre = prompt ("decime tu nombre");

// alert ("bienvenido " + nombre +  " a GamingEX")


// const input = document.querySelector(".input-contraseña")

// input.minlength = "8" ;


const button = document.querySelector(".button");

button.addEventListener("click", ()=>{
    confirm("Desea confirmar la compra?")
    if (confirm = true){
        alert("Muchas gracias por tu compra!");
    } else {
        alert("Compra cancelada");
    }
});