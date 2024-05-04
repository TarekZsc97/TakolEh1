let searchCont = document.querySelector('.search')
let addbtn = document.querySelector('.add-btn')
let div = document.querySelector('.gradiants')
let btn = document.querySelector('.btn')
let del = document.querySelector('.del')

btn.addEventListener('click',function(){
   // this.preventDefault()
   if(div.innerHTML == ''){
      let warning = document.createElement('div')
      warning.className = 'warning'
      warning.append(document.createTextNode('لا يمكن الاستمرار والحقل فارغ من فضلك قم بادخال قيمه'))
      let del = document.createElement('span')
      del.append(document.createTextNode('حسنا'))
      del.className = 'del'
      warning.append(del)
      document.body.append(warning)
   }
})

addbtn.addEventListener('click', function () {
   if (searchCont.value !== '') {
      let par = document.createElement('input')
      par.classList.add("paragraph", "input");
      par.name = "search"
      par.value = searchCont.value
      // par.append(document.createTextNode(searchCont.value))
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

div.addEventListener('click', function (e) {
   if (e.target.classList.contains('cancel')) {
      e.target.parentElement.remove()
   }
})
document.body.addEventListener('click',function(e){
   if (e.target.classList.contains('del')) {
      e.target.parentElement.remove()
   }
})