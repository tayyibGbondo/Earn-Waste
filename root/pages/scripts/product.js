const product1 = document.querySelector('.buynow')
const ordre_container = document.querySelector('.ordre-container')
const body = document.body
const sendBtn = document.querySelector('.send')

product1.addEventListener('click', () => {
    ordre_container.style.display = 'block'
})

sendBtn.addEventListener('click',() => {
    ordre_container.style.remove.display = 'block'
})