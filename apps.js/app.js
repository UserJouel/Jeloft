/*const mousemove =  document.querySelector(".mmousemove")
const cursor  = document.querySelector('.cursor')
console.log("okok");

window.addEventListener( "mousemove", e =>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";

    cursor.style.left = e.pageX + "px"
    cursor.style.top = e.pageY + "px"

    
})

let image = document.querySelector (".class")
/*
image.addEventListener("mouseover ",() =>{
    image.classList.add("imM")
})

let ul = document.querySelector ("ul")
console.log("ok");

ul.addEventListener ("mouseover", () =>{
   mousemove.style.opacity= "0.2";
})
ul.addEventListener("mouseout" , () =>{
    mousemove.style.opacity = "1";
})

const Immage =document.querySelector (".Immage")
console.log("test");

Immage.addEventListener("mousout" , () =>{
    image.style.borderradius= "100";
    image.style.transition="4s";
})

*/

let sun2 =document.querySelector(".sun2")
let sun =document.querySelector (".sun")
console.log("test");

sun.addEventListener("mouseenter", () =>{
    sun.classList.add("sun2")  
})
sun.addEventListener("mouseleave", () =>{
    sun.classList.remove("sun2")  
})

console.log("ok");

/* animation menu*/

let Acceuil = document.querySelector("#Acceuil")
Acceuil.addEventListener("mouseenter" , () =>{
    Acceuil.classList.add("Acceuil2");
})
Acceuil.addEventListener("mouseleave" , () =>{
    Acceuil.classList.remove("Acceuil2")
})




let Apropos = document.querySelector("#Apropos")
Apropos.addEventListener("mouseenter" , () =>{
    Apropos.classList.add("Apropos2");
})
Apropos.addEventListener("mouseleave" , () =>{
    Apropos.classList.remove("Apropos2")
})



let Contact = document.querySelector("#Contact")
Contact.addEventListener("mouseenter" , () =>{
    Contact.classList.add("Contact2");
})
Contact.addEventListener("mouseleave" , () =>{
    Contact.classList.remove("Contact2")
})




