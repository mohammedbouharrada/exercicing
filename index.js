<<<<<<< HEAD
var x1 = document.getElementById('d1');

function hello(){

//   document.bgColor = "pink";
//
//
//        x1.style.backgroundColor = "red";
//
// x1.setAttribute('name','thisi');
//
// console.log(x1.getAttribute('name'));

var v = prompt('enter your name : ');

console.log(v);

}

//document.getElementById('b1').click();

//
// var m = prompt('enter a text');
//
// document.getElementById('d1').innerHTML = m;

function ccc(){

var a ;
var b ;
var c ;
var d ;

a = Number(document.getElementById('in1').value);
c = document.getElementById('slt').value;
b = Number(document.getElementById('in2').value);

if(c == '+'){ d = a + b; }
else if (c == '-') { d = a - b; }
else if (c == '*') { d = a * b; }
else if (c == '/') { d = a / b; }
else if ( c == '%') { d = a % b;}
else { alert('error'); }

document.getElementById('in3').value = d ; 

}
=======
document.getElementById("hor").setAttribute("disabled","true");
setInterval("horloge()",1000);
  function horloge(){
         var date = new Date;
          var seconds = date.getSeconds();
          var minutes = date.getMinutes();
          var hours = date.getHours();
          var dateVersion = hours + ':' + minutes+ ':'+seconds;
          var ipt = document.getElementById("hor");
          ipt.value = dateVersion;
 }
>>>>>>> c8c5957e150feda2384305c90c17807d9e626e99
