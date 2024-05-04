
let pic = document.querySelector('.fridge')
let imgDiv = document.querySelector('.image')

let srcOpen = "../static/images/open fridge.png"
let srcClosed = "../static/images/fridge.png"

pic.addEventListener('click',function(){
   if(pic.src != srcClosed){
      pic.src = srcOpen
   }else {
      pic.src = srcClosed
   }
})
