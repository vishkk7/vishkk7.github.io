const modoEscuroBtn = document.getElementById('modoEscuroBtn');
const modoClaroBtn = document.getElementById('modoClaroBtn');
const body = document.body;

modoEscuroBtn.addEventListener('click', () => {
    body.classList.add('dark-mode');
});

modoClaroBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
});
