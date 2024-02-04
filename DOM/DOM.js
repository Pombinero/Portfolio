 let containerDiv = document.getElementById('divsection');

 for ( i = 0; i < 5; i++) {
    
    let paragraph = document.createElement('p');

    paragraph.textContent = 'This is a test paragraph ' + (i + 1);
    
    containerDiv.appendChild(paragraph);
}

function changeBackgroundColor() {
    containerDiv.style.backgroundColor = "lightblue";
 }
