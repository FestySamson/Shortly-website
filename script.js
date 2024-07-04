const myForm = document.getElementById('link-form') 
const MyInput = document.getElementById('link-input')
const ErrorMessage = document.getElementById('err-msg')

myForm.addEventListener('submit', formSubmit)

function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

function formSubmit(e) {
    e.preventDefault()
   if(MyInput.value === ''){
    ErrorMessage.innerHTML='Please enter a link'
   }else if(!validURL(MyInput.value)){
     ErrorMessage.innerHTML='Please enter a valid link'
   }else{
     ErrorMessage.innerHTML=''
     alert('linked shortened successful')
   }
}