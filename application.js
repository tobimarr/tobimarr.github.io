const initAlert = () => {
  document.getElementById('alert').addEventListener('click', (e) => {
    alert('Meddl Loide')
  })
}



document.addEventListener('DOMContentLoaded', () => {
  initAlert()
}, false)