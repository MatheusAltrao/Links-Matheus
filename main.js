function copyEmail() {

  const valueInput = document.getElementById('input-email')
  const email = valueInput.value
  const alert = document.getElementById('alert')
  
 
  navigator.clipboard.writeText(email)

  alert.style.opacity = 1
  setTimeout(function () {
    alert.style.opacity = 0
  }, 2000)

 
 
  alert.classList.add('show')

  console.log(email)
}




