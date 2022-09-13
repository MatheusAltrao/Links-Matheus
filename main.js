function copyEmail() {
  const email = 'matheusaltrao2@gmail.com'

  navigator.clipboard.writeText(email)

  alert('o email ' + email + ' foi copiado')
}
