let heartCount = 0;

let heartButtons = document.querySelectorAll(".heart-button");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    heartCount++;
    document.querySelector(".heart-count-number").innerText = heartCount;
  });
}



let callButtons = document.querySelectorAll(".call-button");


for (let i = 0; i< callButtons.length; i++){
    callButtons[i].addEventListener("click", function(){

        let coin = Number(document.getElementById('default-coin').innerText);
        if(coin >= 20){
            let card = callButtons[i].parentElement.parentElement;
            let title = card.querySelector(".card-subtitle").innerText;
            let number = card.querySelector(".contact-num").innerText;
            let mainTitle = card.querySelector(".card-title").innerText;
            alert(`📞Calling ${title} ${number}`);
            document.getElementById('default-coin').innerText = coin - 20;


            
            
            let inCallDataLeft1 = document.createElement("p");
            inCallDataLeft1.innerText = mainTitle;
            inCallDataLeft1.style.fontSize = "18px";
            inCallDataLeft1.style.fontWeight = "400";

            let inCallDataLeft2 = document.createElement("p");
            inCallDataLeft2.innerText = number;
            inCallDataLeft2.style.fontSize = "18px";
            inCallDataLeft2.style.fontWeight ="400";
            inCallDataLeft2.style.marginTop = "4px";



            let callDataLeft = document.createElement("div");
            callDataLeft.style.display = "flex";
            callDataLeft.style.flexDirection = "column";
            callDataLeft.appendChild(inCallDataLeft1);
            callDataLeft.appendChild(inCallDataLeft2);

            
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let ampm;

            if (hours >= 12) {
              ampm = "PM";

              } else {

                ampm = "AM";
          }



            hours = hours % 12;
            if (hours === 0) {
            hours = 12;
            }

            if (minutes < 10) {
            minutes = "0" + minutes;
            }

            let callDataRight = document.createElement("div");
            callDataRight.innerText = `${hours}:${minutes} ${ampm}`;

            


            let callDataDiv = document.createElement("div");
            callDataDiv.style.alignItems = "center"
            callDataDiv.appendChild(callDataLeft);
            callDataDiv.appendChild(callDataRight);
            callDataDiv.style.justifyContent = "space-between";


            let callData = document.getElementById('Call-data-container').appendChild(callDataDiv);
            callData.style.height = "86px"
            callData.style.maxWidth = "352px";
            callData.style.display = "flex";
            callData.style.backgroundColor = "#F2F2F2";
            callData.style.margin = "0 auto"
            callData.style.padding = "16px"
            callData.style.borderRadius = "8px"
            callData.style.marginTop = "8px"
            




            
        }
        else{
          alert('❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        }





    })
}

let clear = document.getElementById('clear-btn')

clear.addEventListener('click', function(){
  document.getElementById('Call-data-container').innerHTML = "";

})



let copyButtons = document.querySelectorAll(".copy-button");
let copyCounter = 0;
for (let i = 0; i< copyButtons.length; i++){
  copyButtons[i].addEventListener("click", function(){
    let card = copyButtons[i].parentElement.parentElement;
    let number = card.querySelector(".contact-num").innerText;

    navigator.clipboard.writeText(number);
    copyCounter++;

    document.getElementById('copy-number').innerText = copyCounter;

   

    alert(`নাম্বার কপি হয়েছে ${number}`)
  })
}


