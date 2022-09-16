function copyEmail() {

  const valueInput = document.getElementById('input-email')
  const email = valueInput.value

  navigator.clipboard.writeText(email)

  console.log(email)
}
