
const btnExecute = document.getElementById('btn-execute')
const result = document.getElementById('result')


btnExecute.addEventListener('click', function () {
    const edad = document.getElementById('edad').value

    const name = document.getElementById('name').value

    let message;

    if (edad < 18 && edad >= 1) {
        message = `Hola ${name}, tienes ${edad} years Sigue asi, aun tienes muchas cosas que aprender`
    } else if (edad >= 18) {
        message = `Hola ${name}, tienes ${edad} years, tienes mejores oportunidades laborales`
    } else {
        message = 'Ingresa un valor valido'
    }

    result.textContent = `${message}`
});