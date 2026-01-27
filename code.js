document.addEventListener('DOMContentLoaded', () => {
    const greetBtn = document.getElementById('greet-btn');
    const messageBox = document.getElementById('message-box');
    const displayMessage = document.getElementById('display-message');

    greetBtn.addEventListener('click', () => {
        displayMessage.innerText = "✨Have a nice day✨";
        
        messageBox.style.display = 'block';
        
        greetBtn.innerText = "Nice to meet you!";
        greetBtn.style.background = "#22c55e";
    });
});