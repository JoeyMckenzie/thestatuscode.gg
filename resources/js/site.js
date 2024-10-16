import './prism.js'

const title = "The Status Code";
const typedTextSpan = document.querySelector("#typed-text");
const cursorSpan = document.querySelector(".cursor");

function typeText() {
    const textArray = title.split("");
    let typingDelay = 75;

    textArray.forEach((char, index) => {
        setTimeout(() => {
            typedTextSpan.textContent += char;
        }, typingDelay * index);
    });
}

document.addEventListener("DOMContentLoaded", typeText);
