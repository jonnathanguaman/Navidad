// Generar efecto de nieve
function generateSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.width = `${Math.random() * 5 + 2}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
        snowContainer.appendChild(snowflake);
    }
}

// Contador regresivo
function startCountdown() {
    const countdownElement = document.querySelector('.countdown');
    const targetDate = new Date('December 25, 2024 00:00:00').getTime();

    function updateCountdown() {
        const now = Date.now();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        countdownElement.textContent = `Faltan ${days} días, ${hours} horas, ${minutes} minutos, y ${seconds} segundos para Navidad 🎄`;
    }

    setInterval(updateCountdown, 1000);
}

// Generar luces
function generateLights() {
    const tree = document.querySelector('.tree');
    const colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];
    const treeHeight = 300; 
    const treeBase = 300;   
    const rows = 8;        
    const lights = [];  

    for (let i = rows - 1; i >= 0; i--) { 
        const yOffset = (treeHeight / rows) * (rows - i); 
        const lightsInRow = (rows - i) * 2 - 1; 

        for (let j = 0; j < lightsInRow; j++) {
            const light = document.createElement('div');
            light.classList.add('light');
            light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            const rowWidth = (treeBase / treeHeight) * yOffset;
            const xOffset = (treeBase / 500) - rowWidth / 2 + (rowWidth / (lightsInRow - 1)) * j;

            light.style.position = 'absolute';
            light.style.top = `${yOffset}px`;
            light.style.left = `${xOffset}px`;
            light.style.width = '8px';
            light.style.height = '8px';
            light.style.borderRadius = '50%';
            light.style.transition = 'background-color 1s ease';  

            tree.appendChild(light);
            lights.push(light); 
        }
    }

    return lights;
}

// Método para apagar las luces
function turnOffLights(lights) {
    lights.forEach(light => {
        light.style.transition = '3s';  
        light.style.backgroundColor = 'black'; 
    });
}

// Método para encender las luces
function turnOnLights(lights) {
    lights.forEach(light => {
        light.style.transition = 'background-color 1s ease'; 
        const originalColor = light.getAttribute('data-color'); 
        light.style.backgroundColor = originalColor || 'white';
        light.style.transition = '3s';
    });
}

// Lógica para el botón
let lights = generateLights(); 
const toggleButton = document.getElementById('toggleLightsBtn');
let lightsOn = true; 

lights.forEach(light => {
    light.setAttribute('data-color', light.style.backgroundColor);
});

toggleButton.addEventListener('click', () => {
    if (lightsOn) {
        turnOffLights(lights);
        toggleButton.textContent = 'Encender Luces'; 
    } else {
        turnOnLights(lights);
        toggleButton.textContent = 'Apagar Luces'; 
    }
    lightsOn = !lightsOn;
});

generateSnowflakes();
startCountdown();
