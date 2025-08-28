
// copy-button

let heartCount = 0;

let heartButtons = document.querySelectorAll(".heart-button");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    heartCount++;
    document.querySelector(".heart-count-number").innerText = heartCount;
  });
}

let callButtons = document.querySelectorAll(".call-button")


for (let i = 0; i< callButtons.length; i++){
    callButtons[i].addEventListener("click", function(){

        let coin = Number(document.getElementsByClassName('default-coin')[0].innerText)
        if(coin >= 20){
            let card = callButtons[i].parentElement.parentElement;
            let title = card.querySelector(".card-subtitle").innerText;
            let number = card.querySelector(".contact-num").innerText;
            alert(`📞Calling ${title} ${number}`);
            document.getElementsByClassName('default-coin')[0].innerText = coin - 20;
        }
        else{
          alert('Not enough coins')
        }
    })
}


