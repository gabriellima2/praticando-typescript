import handleClick from "./functions/handleClick.js";

const button = document.querySelector<HTMLButtonElement>(".add-btn");
button?.addEventListener("click", handleClick);
