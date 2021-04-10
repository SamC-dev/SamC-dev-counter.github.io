let h1 = document.getElementsByTagName("h1");
let button = document.getElementsByTagName("button");
var display = h1[0];
var minus = button[0];
var plus = button[1];
var reset = button[2];

var counter = 0;

clickMe();   //callback

plus.addEventListener("click",()=>{   //arrow function
counter++;
clickMe();
});

minus.addEventListener("click",()=>{
  if(counter <= 0){         //counter doesn't counts negative numbers 
    counter=o;
  }
 else {
    counter--;
    clickMe();
  }
});

reset.addEventListener("click",()=>{
  counter = 0;
  clickMe();
});


function clickMe(){
  display.innerHTML = counter;    //replace display with counter
}
