"use strict";

let text = document.querySelector(".text");
const reloj = () => {
    const date = new Date();
    text.textContent = date.getSeconds();
}
setInterval(() => {
    reloj()
},0);
