document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.glitch-name');
    const originalText = nameElement.innerText;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;
    
    const interval = setInterval(() => {
        nameElement.innerText = nameElement.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return originalText[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        
        if(iteration >= originalText.length) {
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
});