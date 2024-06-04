const form = document.querySelector(".contact-us-form")
const mask = document.querySelector(".form-mask")

const buttonContact = () => {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

const hiddenMask = () => {
    mask.style.visibility = "hidden"
    form.style.top = "30%"
    form.style.left = "-300px"
}

