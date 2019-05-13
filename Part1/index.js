function play() {
    let playerSpan = document.getElementById('player')
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = "O"
    }
    else {
        playerSpan.innerText = "X"
    }
} 

