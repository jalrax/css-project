const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('.plan button')
const noButton = document.querySelector('.modal__action--negative')
const sideMenu = document.querySelector('.mobile-nav')
const sideMenuButton = document.querySelector('.toggle-button')

buttons.forEach(el => el.addEventListener('click', () => {
  backdrop.classList.add('open')
  modal.classList.add('open')
}))

backdrop.addEventListener('click', () => {
  backdrop.classList.remove('open')
  modal ? modal.classList.remove('open') : null
  sideMenu ? sideMenu.classList.remove('open') : null
})

if (noButton) {
  noButton.addEventListener('click', () => {
    backdrop.classList.remove('open')
    modal.classList.remove('open')
  })
}

sideMenuButton.addEventListener('click', () => {
  backdrop.classList.add('open')
  sideMenu.classList.add('open')
})
