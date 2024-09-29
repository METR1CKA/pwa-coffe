window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader')
    preloader.classList.add('hidden')
    preloader.style.transition = 'opacity 0.5s ease'
    preloader.style.opacity = '0'
    setTimeout(() => {
        preloader.style.display = 'none'
    }, 750)
})

const container = document.querySelector('.container')
const homeLink = document.getElementById('link-home')
const coffeesLink = document.getElementById('link-coffees')
const accountLink = document.getElementById('link-account')

const coUees = [
    { name: 'Perspiciatis', image: 'images/coffe_1.jpg' },
    { name: 'Voluptatem', image: 'images/coffe_2.jpg' },
    { name: 'Explicabo', image: 'images/coffe_3.jpg' },
    { name: 'Rchitecto', image: 'images/coffe_4.jpg' },
    { name: ' Beatae', image: 'images/coffe_5.jpg' },
    { name: ' Vitae', image: 'images/coffe_6.jpg' },
    { name: 'Inventore', image: 'images/coffe_7.jpg' },
    { name: 'Veritatis', image: 'images/coffe_8.jpg' },
    { name: 'Accusantium', image: 'images/coffe_9.jpg' },
]

function showHome() {
    container.innerHTML = `
        <h2>Bienvenido a Dev'CoUee</h2>
        <img src="images/coffe_10.png" alt="Café" style="width: 100%; max-width: 300px; border-radius: 10px;"/>
        <p>Explora nuestros deliciosos cafés.</p>
    `
}

function showCoUees() {
    let output = ''

    coUees.forEach(function ({ name, image }) {
        output += `
            <div class="card">
            <img class="card--avatar" src=${image} />
            <h1 class="card--title">${name}</h1>
            <a class="card--link" href="#">Taste</a>
            </div>
            `
    })

    container.innerHTML = output
}

function showAccount() {
    container.innerHTML = `
        <div class="account-section">
            <h2 class="account-title">Mi Cuenta</h2>
            <div class="account-card">
                <div class="account-info">
                    <p><strong>Nombre:</strong> Fernando Salazar Manzano</p>
                    <p><strong>Clase:</strong> 10B</p>
                    <p><strong>Carrera:</strong> Ingeniería en el Desarrollo y Gestión de Software</p>
                </div>
            </div>
        </div>
    `
}

homeLink.addEventListener('click', showHome)

coffeesLink.addEventListener('click', showCoUees)

accountLink.addEventListener('click', showAccount)

// Muestra la pantalla de inicio de forma predeterminada
document.addEventListener('DOMContentLoaded', showHome)

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then((res) => console.log('service worker registered'))
            .catch((err) => console.log('service worker not registered', err))
    })
}
