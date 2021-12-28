const dots = document.querySelectorAll('.hero__dot')
const images = document.querySelectorAll('.hero__image')

const MAX_LENGHT = images.length
let idx = 0

// Manually
dots.forEach(dot => {
    dot.onclick = function setActive() {
        removeActiveDot()
        dot.classList.add('active')
        console.log(Number(dot.textContent))

        removeActiveImage()
        images[Number(dot.textContent) - 1].classList.add('active')

        idx = Number(dot.textContent) - 1
    }
})

function removeActiveDot() {
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
}

function removeActiveImage() {
    images.forEach(image => {
        image.classList.remove('active')
    })
}

//Automatically

function changeImage() {
    if (idx > (MAX_LENGHT - 1)) idx = 0

    removeActiveImage()
    images[idx].classList.add('active')

    removeActiveDot()
    dots[idx].classList.add('active')
    
    idx++
}

setInterval(changeImage, 3000)
