// function  username (name) {
//    return "Hello " + name.trim()
// }

// console.log(username("                User        "));



// function checkage(name,age) {
//    if (age < 12 ) {
//       return name + " " + "chaqaloq" ;
//    }
//    else if (age >= 12 && age < 16) {
//       return name + " " + "o`spirin";
//    }
//    else if (age >= 16 && age < 21) {
//       return name + " " + "balag'ot yoshi";
//    }
//    else if (age >= 21 && age < 50) {
//       return name + " " + "o'rta yosh";
//    }
//    else if (age >= 50 ) {
//       return name + " " + "qariya"
//    }
// }

// console.log(checkage("Ibrohim", 3))



var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elButton = document.querySelector(".form__button");
var elSpan  = document.querySelector(".list__span-man");
var elSpan2  = document.querySelector(".list__span-biycle");
var elSpan3  = document.querySelector(".list__span-car");
var elSpan4  = document.querySelector(".list__span-airplane");



     var speed2 = 20.1;
     var speed3 = 70;
     var speed4 = 800;
     var speed1 = 3.6;

  function standMan (x) {

   elForm.addEventListener("submit",function(event){
      event.preventDefault();
   
   
     var elInputVal = elInput.value;

   return elSpan.textContent = Math.round (elInputVal / x)
})  }

function biycle (y) {

   elForm.addEventListener("submit",function(event){
      event.preventDefault();
   
   
     var elInputVal = elInput.value;

   return elSpan2.textContent = Math.round (elInputVal / y)
})  }


function car (z) {

   elForm.addEventListener("submit",function(event){
      event.preventDefault();
   
   
     var elInputVal = elInput.value;

   return elSpan3.textContent = Math.round (elInputVal / z)
})  }


function airplane (d) {

   elForm.addEventListener("submit",function(event){
      event.preventDefault();
   
   
     var elInputVal = elInput.value;

   return elSpan4.textContent = Math.round (elInputVal / d)
})  }



console.log(standMan(3.6));
console.log(biycle(20.1));
console.log(car(70));
console.log(airplane(800));

