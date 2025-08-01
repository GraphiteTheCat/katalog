document.addEventListener("scroll", () => {
    let height = window.scrollY;
    const totop = document.getElementById("totop")
    if (height >=300) {
        totop.style.display = "block";
    }
    else {
        totop.style.display = "none";
    }
})
