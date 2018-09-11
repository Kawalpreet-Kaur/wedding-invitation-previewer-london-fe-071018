document.addEventListener("DOMContentLoaded", (e) => {

let styleSelected='classic';
document.getElementsByClassName("container-display")[0].style.backgroundImage="url('floral.jpg')";
console.log('theTarget', event.target);
/*for style one*/
document.getElementById('classic').addEventListener('click',event=>{
  console.log('event called');
  styleSelected='classic' 
  let element= document.getElementsByClassName("container-display")[0];
  console.log('element=',element);
  document.getElementById('initials').style.color = "blue";
// element.setAttribute("style","background-color: blue");
// element.style.backgroundColor = "blue"; /*--this also works*/
  element.style.backgroundImage="url('floral.jpg')";
// element.setAttribute("style","background-image: url('background1.jpg')");
})

/*for style two*/
document.getElementById('spring').addEventListener('click',event=>{
  console.log('event called');
  let element= document.getElementsByClassName("container-display")[0];
  console.log('element=',element);
  styleSelected='spring';
  element.style.backgroundImage="url('floral.jpg')";
})

/*for style three*/
document.getElementById('different').addEventListener('click',event=>{
  console.log('event called');
  styleSelected='different';
  let element= document.getElementsByClassName("container-display")[0];
  console.log('element=',element);
  element.style.backgroundImage="url('floral.jpg')";
})

/*for inputs*/
document.getElementById('firstname').addEventListener('input',event=>{
  console.log('event input');
  let initial=document.getElementById('firstname').value;
  console.log('value=',initial);
  console.log(document.getElementById('initials'));
  document.getElementById('initials').innerHTML=initial.substring(0, 1);
  
})

})