import './Button.css'

const p = document.createElement('p')

p.textContent = 'Confirm'

document.body.append(p)

p.addEventListener('click', () => alert('Hola soy un boton'))
