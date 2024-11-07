const setCurrentYear = () => {
  const date = new Date().getFullYear()

  document.getElementById('currentYear').innerHTML = date;
}



document.addEventListener('DOMContentLoaded', () => {
  setCurrentYear()
}, false)