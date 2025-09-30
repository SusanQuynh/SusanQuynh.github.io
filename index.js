function switchMode() {
    const x = document.querySelector(".switch_mode i");
    const isToggle = x.classList.toggle("fa-sun");
    if (isToggle) {
        const y = document.querySelector("link")
        y.href = "style.css";
    } else {
        const y = document.querySelector("link")
        y.href = "styles-dark.css";
    }
}


