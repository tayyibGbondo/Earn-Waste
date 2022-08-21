const product1 = document.querySelector('.buynow')
const ordre_container = document.querySelector('.ordre-container')
const body = document.body
const closeBtn = document.querySelector('.close')

product1.addEventListener('click', () => {
   if( ordre_container.style.display = 'none'){
    ordre_container.style.display = 'flex'
    console.log('yes its contain')
   }else{
    console.log('its does not contain')
   }
})

closeBtn.addEventListener('click',() => {
    ordre_container.style.display = 'none';
})
