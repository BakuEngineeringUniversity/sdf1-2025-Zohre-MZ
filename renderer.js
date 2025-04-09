// renderer.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeTextBtn');

    button.addEventListener('click', () => {
        document.querySelector('h1').innerText = "Text Changed!";
    });
});
