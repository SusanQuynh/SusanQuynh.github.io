function switchMode() {
    const x = document.querySelector(".switch_mode i");
    const isToggle = x.classList.toggle("fa-moon");
    if (isToggle) {
        const y = document.querySelector("link")
        y.href = "styles-dark.css";
    } else {
        const y = document.querySelector("link")
        y.href = "style.css";
    }
}

