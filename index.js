document.addEventListener("DOMContentLoaded", (e) => {

function displaybackgrnds(input){
  styleSelected=input; 
  let element= document.getElementsByClassName("container-display")[0];
  console.log("url('floral.jpg')");
  element.style.backgroundImage="url(floral.jpg')";
}

let styleSelected='classic';
document.getElementsByClassName("container-display")[0].style.backgroundImage="url('classic.jpg')";
console.log('theTarget', event.target);
/*for style one*/
document.getElementById('classic').addEventListener('click',event=>{
  console.log('event called');
  styleSelected='classic' 
  let element= document.getElementsByClassName("container-display")[0];
  console.log('element=',element);
  document.getElementById('initials').style.color = "blue";
  document.getElementById('sentence').style.color = "blue";
  // displaybackgrnds('classic');
// element.setAttribute("style","background-color: blue");
// element.style.backgroundColor = "blue"; /*--this also works*/
  element.style.backgroundImage="url('classic.jpg')";
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
  document.getElementById('initials').innerHTML=initial.substring(0, 1).toUpperCase();
  document.getElementById('initials').innerHTML=document.getElementById('initials').innerHTML+' & ';
})

document.getElementById('secondname').addEventListener('input',event=>{
  console.log('event input');
  let initial=document.getElementById('secondname').value;
  let value=document.getElementById('initials').innerHTML;
  console.log('value=',initial);
  console.log(document.getElementById('initials'));
  if (initial.length===1) {
  document.getElementById('initials').innerHTML=
  value+initial.substring(0, 1).toUpperCase();
  }
  
  if (initial.length===0) {
    document.getElementById('initials').innerHTML=document.getElementById('initials').innerHTML.substring(0, 1)
  }
  
})

})