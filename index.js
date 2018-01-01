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
