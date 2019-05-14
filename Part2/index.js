idInput = document.getElementById('idInput')
colorInput = document.getElementById('colorInput')

// // console.log(cardId)
// console.log(cardStyle)

suits =  {
    d:"diamonds" , 
    h:"hearts" , 
    s:"spades" ,  
    c:"clubs"
}

function setCard() {
    let card = document.getElementById(idInput.value)
    card.style.color = colorInput.value

}



function reset() {
    for (let key in suits ){
        let suit = suits[key]
        let card = document.getElementById(suit)
        card.style.color = "grey"
    }
    
}



