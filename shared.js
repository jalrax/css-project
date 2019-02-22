const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('.plan button')
const noButton = document.querySelector('.modal__action--negative')
const sideMenu = document.querySelector('.mobile-nav')
const sideMenuItems = document.querySelector('.mobile-nav__items')
const sideMenuButton = document.querySelector('.toggle-button')

buttons.forEach(el => el.addEventListener('click', () => {
    backdrop.style.display = 'block'
    setTimeout(() => backdrop.classList.add('open'), 10)
    modal.classList.add('open')
}))

backdrop.addEventListener('click', () => {
    backdrop.classList.remove('open')
    modal ? modal.classList.remove('open') : null
    sideMenu ? sideMenu.classList.remove('open') : null
    sideMenuItems ? sideMenuItems.classList.remove('opaque') : null
    setTimeout(() => {
        backdrop.style.display = 'none'
        sideMenu.style.display = 'none'
    }, 500)
})

if (noButton) {
    noButton.addEventListener('click', () => {
        backdrop.classList.remove('open')
        setTimeout(() => backdrop.style.display = 'none', 500)
        modal.classList.remove('open')
    })
}

sideMenuButton.addEventListener('click', () => {
    sideMenuItems.classList.add('opaque')
    backdrop.style.display = 'block'
    sideMenu.style.display = 'block'
    setTimeout(() => {
        backdrop.classList.add('open')
        sideMenu.classList.add('open')
    }, 10)
})