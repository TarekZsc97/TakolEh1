let searchCont = document.querySelector('.search')
let btn = document.querySelector('.add-btn')
let div = document.querySelector('.gradiants')

btn.addEventListener('click',function(){
   if(searchCont.value !== ''){
   let par = document.createElement('input')
   par.classList.add["paragraph input"]
   par.name = "search"
   par.value = 
   par.append(document.createTextNode(searchCont.value))
   let cancel = document.createElement('span')
   cancel.append(document.createTextNode('x'))
   cancel.className = 'cancel'
   let newGrad = document.createElement('div')
   newGrad.className = 'grad'
   newGrad.append(cancel)
   newGrad.append(par)
   div.append(newGrad)
   searchCont.value = ''}
})

div.addEventListener('click',function(e){
   if(e.target.classList.contains('cancel')){
      e.target.parentElement.remove()
   }
})