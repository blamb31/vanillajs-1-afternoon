board = []

function play(clickedId) {
    let clickedElement = document.getElementById(clickedId)
    let playerSpan = document.getElementById('player')

    if(clickedElement.innerText === "X" ||clickedElement.innerText === "O") {
        alert (`That space has already been selected`)
    }

    else if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
        board[clickedId] = "X"
    }
    else {
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        board[clickedId] = "O"
    }  
    let topLeft = board[0]
    let topCenter = board[1]
    let topRight = board[2]
    let middleLeft = board[3]
    let middleCenter = board[4]
    let middleRight = board[5]
    let bottomLeft = board[6]
    let bottomCenter = board[7]
    let bottomRight = board[8]

    if (topLeft !== undefined && topLeft === topRight && topLeft === topCenter){
        alert(`Congratulations! Player ${topLeft} wins!`)
        clearGame()
        
    }
    if (middleLeft !== undefined && middleLeft === middleRight && middleLeft === middleCenter){
        alert(`Congratulations! Player ${middleLeft} wins!`)
        clearGame()
        
    }
    if (bottomLeft !== undefined && bottomLeft === bottomRight && bottomLeft === bottomCenter){
        alert(`Congratulations! Player ${bottomLeft} wins!`)
        clearGame()
        
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`Congratulations! Player ${topLeft} wins!`)
        clearGame()
        
    }
    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        alert(`Congratulations! Player ${topRight} wins!`)
        clearGame()
        
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`Congratulations! Player ${topLeft} wins!`)
        clearGame()
        
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert(`Congratulations! Player ${topCenter} wins!`)
        clearGame()
        
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`Congratulations! Player ${topRight} wins!`)
        clearGame()
    }

    let boardFull = true

    for (let i = 0; i < 9; i++) {
        if (board[i] === undefined) {
            boardFull = false
        }
    }

    if (boardFull === true){
        alert(`This is a CAT's game!`)
        clearGame()
    }
}

function clearGame() {
    for (let i = 0; i < 9; i++){
        clearingElement = document.getElementById(i)
        clearingElement.innerText = ''
        board = []
    }
}  
