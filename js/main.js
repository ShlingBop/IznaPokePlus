const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })

})

const pokeBowls = document.querySelector('#pokeBowls')
const udonBowls = document.querySelector('#udonBowls')
const sideMenu = document.querySelector('#sideMenu')

const pokeDrop = document.querySelector('#pokeDrop')
const udonDrop = document.querySelector('#udonDrop')
const sideDrop = document.querySelector('#sideMenuDrop')

pokeDrop.addEventListener('click', pokeBowlDrop)
udonDrop.addEventListener('click', udonBowlDrop)
sideDrop.addEventListener('click', sideMenuDrop)

function pokeBowlDrop(){
    pokeBowls.classList.remove('hidden');
    udonBowls.classList.add('hidden');
    sideMenu.classList.add('hidden');
    udonDrop.classList.remove('menuBackgroundColor')
    pokeDrop.classList.add('menuBackgroundColor')
    sideDrop.classList.remove('menuBackgroundColor')
}

function udonBowlDrop(){
    pokeBowls.classList.add('hidden')
    sideMenu.classList.add('hidden')
    udonBowls.classList.remove('hidden')
    pokeDrop.classList.remove('menuBackgroundColor')
    udonDrop.classList.add('menuBackgroundColor')
    sideDrop.classList.remove('menuBackgroundColor')
    
}

function sideMenuDrop(){
    pokeBowls.classList.add('hidden')
    udonBowls.classList.add('hidden')
    sideMenu.classList.remove('hidden')
    pokeDrop.classList.remove('menuBackgroundColor')
    udonDrop.classList.remove('menuBackgroundColor')
    sideDrop.classList.add('menuBackgroundColor')

}



