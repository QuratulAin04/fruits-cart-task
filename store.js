function userInput(){
    let inputElement = document.querySelector("input").value;
    console.log(inputElement);
    var inputItem = document.querySelector("#input-item");
    inputItem.innerHTML = "Your Budget: " +  inputElement;
}
let pOrange = 12.5;
let pCherry = 15.8;
let totalAmount =  0;
let quantityOfOrange = 0; 
let quantityOfCherry = 0;
let orangeTotalcost = 0;
let cherryotalcost = 0;


function addInputOrange(){
   let number = document.querySelector("#number1");
   console.log(number);
    number.innerHTML  = ++quantityOfOrange ;
    orangeTotalcost = quantityOfOrange * pOrange;
    console.log("orange cost " + orangeTotalcost);  
     totalElement(); 
     balanceAmount();
}

function SubtractInputOrange(){
    
    let number = document.querySelector("#number1");
   console.log(number);
    number.innerHTML  = --quantityOfOrange ;
    orangeTotalcost= quantityOforange * pOrange;
    console.log(orangeTotalcost);
    totalElement(); 
    balanceAmount();
    if(quantityOfOrange == 0){
        alert("quantity is zero");
    } 
}

function addInputCherry(){
    let number2 = document.querySelector("#number2");
    console.log(number2);
     number2.innerHTML  = ++quantityOfCherry ;
     cherryTotalcost = quantityOfCherry * pCherry;
     console.log("cherry cost" + cherryTotalcost);
     totalElement(); 
     balanceAmount();
 }
  
function SubtractInputCherry(){
     
    let number2 = document.querySelector("#number2");
    console.log(number2);
    number2.innerHTML  = --quantityOfCherry ;
    cherryTotalcost = quantityOfCherry * pCherry;
    console.log(cherryTotalcost); 
    totalElement(); 
    balanceAmount();
    if(quantityOfCherry == 0){
         alert("quantity is zero");
    } 
}
 
 function totalElement(){ 
   let totalNumber = document.querySelector("#total");
   console.log(totalNumber);

   totalAmount = orangeTotalcost+ cherryTotalcost; 
   totalNumber.innerHTML ="Total: " + totalAmount;
   console.log(total);
   
   let inputElement = document.querySelector("input").value;

   if(totalAmount > inputElement){
        alert("you can choose only less than or equal to your budget");
    }
    else{
        console.log("you can choose");
    }
}

function balanceAmount(){
    let inputElement = document.querySelector("input").value;
   let balance = document.querySelector("#balance");
   balance.innerHTML ="Balance: " + (inputElement - totalAmount);
   console.log(balance);
}