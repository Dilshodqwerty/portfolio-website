// Initializing Vars
const photography = document.querySelectorAll('.progress')[0].firstElementChild
const photoshop = document.querySelectorAll('.progress')[1].firstElementChild
const illustrator = document.querySelectorAll('.progress')[2].firstElementChild
const css = document.querySelectorAll('.progress')[3].firstElementChild
const wordpress = document.querySelectorAll('.progress')[4].firstElementChild
const magento = document.querySelectorAll('.progress')[5].firstElementChild

const dict = {
  photography: '100%',
  photoshop: '90%',
  illustrator: '80%',
  css: '95%',
  wordpress: '85%',
  magento: '75%'
}

let counter0 = 0
let counter1 = 0
let counter2 = 0
let counter3 = 0
let counter4 = 0
let counter5 = 0

// Getting screen resolution
const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

// Adding event listener
window.addEventListener('scroll', scroller)

// Functions
function animate() {
  let increase = setInterval(() => {
    if (photography.style.width === dict.photography){
      clearInterval(increase)
    } else {
      photography.style.width = String(counter0 += 0.1) + '%'
    }
  }, 5)
  
  increase = setInterval(() => {
    if (photoshop.style.width === dict.photoshop){
      clearInterval(increase)
    } else {
      photoshop.style.width = String(counter1 += 0.1) + '%'
    }
  }, 5)
  
  increase = setInterval(() => {
    if (illustrator.style.width === dict.illustrator){
      clearInterval(increase)
    } else {
      illustrator.style.width = String(counter2 += 0.1) + '%'
    }
  }, 5)
  
  increase = setInterval(() => {
    if (css.style.width === dict.css){
      clearInterval(increase)
    } else {
      css.style.width = String(counter3 += 0.1) + '%'
    }
  }, 5)
  
  increase = setInterval(() => {
    if (wordpress.style.width === dict.wordpress){
      clearInterval(increase)
    } else {
      wordpress.style.width = String(counter4 += 0.1) + '%'
    }
  }, 5)
  
  increase = setInterval(() => {
    if (magento.style.width === dict.magento){
      clearInterval(increase)
    } else {
      magento.style.width = String(counter5 += 0.1) + '%'
    }
  }, 5)
}

function scroller() {
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement

  if (width < 376) {
    //    1000           812            3607
    if (scrollTop + clientHeight >= scrollHeight - 1795) {
      animate()
      window.removeEventListener('scroll', scroller)
    }
  } else if (width < 576) {
    //    1215          499            3308          
    if (scrollTop + clientHeight >= scrollHeight - 1594) {
      animate()
      window.removeEventListener('scroll', scroller)
    }
  } else {
    //     472           418           1997          
    if (scrollTop + clientHeight >= scrollHeight - 1107) {
      animate()
      window.removeEventListener('scroll', scroller)
    }
  }
}
