let num1 = document.getElementById("number");
let num2 = document.getElementById("numbertwo");
let bTn = document.getElementById("btn");
let point = document.getElementById("score");
let copoint = document.getElementById("compoint");

let mark = 0;
let coscore = 0;


function generate(){
 
let random = Math.random() * 5;
let final = Math.floor(random);

let randomm = Math.random() * 5;
let finalk = Math.floor(randomm);
   
    num1.innerHTML = final;
    num2.innerHTML = finalk;

    if( final == finalk) {
        mark = mark + 1;
        point.innerText = mark;
    } else {
        coscore = coscore + 1;
        copoint.innerText = coscore;

    }
}
//reset to zero all numbers
function reset() {
   mark = mark - mark;
   point.innerText = mark;
   num1.innerText = 0;
   num2.innerText = 0;
   coscore = coscore - coscore;
   copoint.innerText = coscore;
}




