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
var elSpan1  = document.querySelector(".list__span-man");
var elSpan2  = document.querySelector(".list__span-biycle");
var elSpan3  = document.querySelector(".list__span-car");
var elSpan4  = document.querySelector(".list__span-airplane");



elForm.addEventListener("submit",function(event) {
   event.preventDefault();
   
   
   
   var elResult =  document.querySelector(".result");
   var elInputVal = elInput.value;
   var bike = 20.1;
   var car = 70;
   var airplane = 800;
   var speed = 3.6;

   if (elInputVal <= 0 || isNaN(elInputVal)) {
      elResult.textContent = "0 dan katta raqam kiriting,faqat raqam";

      elResult.classList.add("result-error");
      return;
   }

   else{

      elError.textContent = "";
  
      elError.classList.remove("result-error");
    }
  
   
   function calculateTime1(elInputVal) {
      
      
      var hour = Math.floor(elInputVal / speed);
      var minute = Math.floor(((elInputVal / speed) - hour) * 60);
      
      return hour + " soat " + minute + " minut ";
   }

   function calculateTime2(distance,speed) {
      
     
      var hour = Math.floor(elInputVal / bike);
      var minute = Math.floor((elInputVal / bike - hour) * 60);
      
      return hour + " soat " + minute + " minut ";
   }

   
   function calculateTime3(distance,speed) {
    
      
      var hour = Math.floor(elInputVal / car);
      var minute = Math.floor((elInputVal / car - hour) * 60);
      
      return hour + " soat " + minute + " minut ";
   }
  
  
   
   function calculateTime4(distance,speed) {
      
      
      var hour = Math.floor(elInputVal / airplane);
      var minute = Math.floor((elInputVal / airplane - hour) * 60);
      
      return hour + " soat " + minute + " minut ";
   }
  
  
         
         elSpan1.textContent = calculateTime1(elInputVal);
         elSpan2.textContent = calculateTime2();
         elSpan3.textContent = calculateTime3();
         elSpan4.textContent = calculateTime4();
         
      })
      


       
   // function biycle (y) {
      
   //    elForm.addEventListener("submit",function(event){
   //       event.preventDefault();
         
         
   //       var elInputVal = elInput.value;
         
   //       return elSpan2.textContent = Math.round (elInputVal / y)
   //    })  }
      
      
   //    function car (z) {
         
   //       elForm.addEventListener("submit",function(event){
   //          event.preventDefault();
            
            
   //          var elInputVal = elInput.value;
            
   //          return elSpan3.textContent = Math.round (elInputVal / z)
   //       })  }
         
         
   //       function airplane (d) {
            
   //          elForm.addEventListener("submit",function(event){
   //             //    event.preventDefault();
               
               
   //             var elInputVal = elInput.value;
               
   //             return elSpan4.textContent = Math.round (elInputVal / d);
   //          })  
            
   //       }
      
      
      
      // console.log(standMan(3.6));
      // console.log(biycle(20.1));
      // console.log(car(70));
      // console.log(airplane(800));
      
      