const burgerBtn = qs('.burger-btn')
const closeBtn = qs('.close-burger')
const burgerMenu = qs('.burger-nav')
const burgerLinks = qsa('.burger-nav a')

const closeMenu = (menu, button) => {
    menu.style.right = -200 + 'px'
    setTimeout(() => button.style.display = 'block', 800)
}

burgerBtn.addEventListener('click', () => {
    burgerMenu.style.right = 10 + 'px'
    burgerBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => closeMenu(burgerMenu, burgerBtn))

for (let i = 0; i < burgerLinks.length; i++) {
    burgerLinks[i].addEventListener('click', () => closeMenu(burgerMenu, burgerBtn))
}