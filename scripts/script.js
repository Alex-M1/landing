const qs = (selector) => document.querySelector(selector)
const qsa = (selector) => document.querySelectorAll(selector)

const workBlock = qs('.our-work__block')
const ourWorksColor = ['#b6b6b6', '#acacac', '#8a8a8a', '#a1a1a1', '#a4a4a4']

const createOurWork = (quantity) => {
    if (quantity > 0) {
        workBlock.innerHTML += `
        <div class="our-work__item"></div>
        `
        return createOurWork(quantity - 1)
    }
    return quantity
}

const setWorkItemBg = (items, bg) => {
    let count = 0
    items.forEach(el => {
        if (count >= bg.length) count = 0
        el.style.background = bg[count]
        count++
    })
}
createOurWork(12)

const workItems = qsa('.our-work__item')
setWorkItemBg(workItems, ourWorksColor)


