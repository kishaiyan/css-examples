const ratings=document.querySelectorAll(".rating")

ratings.forEach(rating=>{
  rating.addEventListener('click',()=>{
    removeActive();
    rating.classList.add('active')
  })
})

function removeActive(){
  ratings.forEach(rating=>{
    rating.classList.remove('active')
  })
}