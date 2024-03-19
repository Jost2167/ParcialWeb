
function cambiarTamaño() {
    const texto = document.getElementById("textoCambiar");
    const tamañoActual = parseFloat(window.getComputedStyle(texto, null).getPropertyValue('font-size'));
    const nuevoTamaño = tamañoActual * 1.2; // Aumentar el tamaño en un 20%
    texto.style.fontSize = nuevoTamaño + 'px';
}

function cambiarColor() {
    const texto = document.getElementById("textoCambiar");
    const color = getRandomColor();
    texto.style.color = color;
}

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Mostrar los datos en un alert
    alert('Usuario: ' + username + '\nContraseña: ' + password);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        stratum: document.getElementById('stratum').value,
        dob: document.getElementById('dob').value,
        bloodGroup: document.getElementById('bloodGroup').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        activities: []
    };

    if (document.getElementById('activity1').checked) {
        formData.activities.push(document.getElementById('activity1').value);
    }
    if (document.getElementById('activity2').checked) {
        formData.activities.push(document.getElementById('activity2').value);
    }
    if (document.getElementById('activity3').checked) {
        formData.activities.push(document.getElementById('activity3').value);
    }

    console.log(formData);
});
