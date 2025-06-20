const btnExecute = document.getElementById('btn-execute')
const result = document.getElementById('result')
const name_warning = document.getElementById('name_warning')
const age_warning = document.getElementById('age_warning')


btnExecute.addEventListener('click', function () {
    const edad = document.getElementById('edad').value

    const name = document.getElementById('name').value

    let message
    let messageName;
    let messageAge;

    if (name.trim() === '') {
        messageName = 'Warning: Ingresa un nombre'
    } else if (edad < 18 && edad >= 1) {
        message = message = `Hola ${name}, eres menor de edad. !Sigue aprendiendo y disfrutando del codigo!`
    } else if (edad >= 18) {
        message = `Hola ${name}, eres mayor de edad. !Preparate para grandes oportunidades en el mundo de la programacion!`
    } else {
        messageAge = 'Warning: Ingresa una edad'
    }

    name_warning.textContent = messageName
    age_warning.textContent = messageAge
    result.textContent = message
});