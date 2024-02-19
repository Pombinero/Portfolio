document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("gameButton");
    
    button.addEventListener("click", () => {
        
    const name = document.getElementById("gameInput").value;

    let game = "";
    for (let i = 0; i < 2; i++) {
    game += ` ${name}! I love that type of game too!<br>`;
    }
    
    document.getElementById("game").innerHTML = game;
    });
});