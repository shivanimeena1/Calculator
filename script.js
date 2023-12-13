function display(val){
    document.getElementById('display').value+=val;
    }
    
function calculator() {
let x= document.getElementById('display').value;
let y=eval(x);
document.getElementById('display').value=y;
}
   
function allclear() {
    let string="";
 document.getElementById("display").value=string;
 }

 function remove() {
    let input=document.getElementById("display").value.slice(0,-1);
    document.getElementById("display").value=input;
}