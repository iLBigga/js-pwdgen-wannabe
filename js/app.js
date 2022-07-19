// Nome

const mioNome = prompt('Come ti chiami?')

// Cognome

const mioCognome = prompt('Qual è il tuo cognome?')

// Colore preferito

const colorePreferito = prompt('Qual è il tuo colore preferito?')

// Get element

const title = document.getElementById('title')

// Password

const passWorld = mioNome + mioCognome + colorePreferito + 246

// Risultato

title.innerHTML = passWorld