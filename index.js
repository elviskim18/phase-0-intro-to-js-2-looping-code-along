const names = ["Nyambura", "Florence", "Grace"];
const cardMsg = [];
function writeCards(names, event){
    for( let i = 0; i < names.length; i++){
        cardMsg.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cardMsg
}

// countdown//
function countDown(){
    let number = 10;
    while(number >= 0) {
        console.log(number)
        number--
    }
}

