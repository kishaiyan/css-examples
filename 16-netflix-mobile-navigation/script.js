const confetti = new JSConfetti();


const open=document.querySelector(".open-btn")
const navs=document.querySelectorAll(".nav")
const close=document.querySelector('.close-btn')

open.addEventListener('click',()=>{
  navs.forEach(nav=>{
    nav.classList.add('visible')
  })
  confetti.addConfetti({confettiColors: [
    '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
  ],})
})

close.addEventListener('click',()=>{
  navs.forEach(nav=>{
    nav.classList.remove('visible')
  })
})