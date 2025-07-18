const open=document.querySelector(".open-btn")
const navs=document.querySelectorAll(".nav")
const close=document.querySelector('.close-btn')

open.addEventListener('click',()=>{
  console.log("CLICKED TP VISIBLE")
  navs.forEach(nav=>{
    nav.classList.add('visible')
  })
})

close.addEventListener('click',()=>{
  navs.forEach(nav=>{
    nav.classList.remove('visible')
  })
})