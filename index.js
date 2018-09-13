document.addEventListener("DOMContentLoaded", (e) => {
const images={
  'classic': 'classic.jpg',
  'formal': 'formal1.jpg',
  'different': 'funky.jpg'
  };
  
  const style={
  'classic': {'color': 'blue' },
  'formal':{'color':'lightpink'},
  'different':{'color':'white'}
  };
const containerDisplay=document.getElementsByClassName("container-display")[0];

const classic=document.getElementById('classic');
const formal=document.getElementById('formal');
const diferent=document.getElementById('diferent');
const initials=document.getElementById('initials');
const sentence= document.getElementById('sentence');

function displaybackgrnds(input){
  styleSelected=input; 
  console.log(input);
  console.log(`${images[input]}`);
  containerDisplay.style.backgroundImage=`url(${images[input]})`;
  initials.style.color = style[input].color;
  sentence.style.color = style[input].color;
}

let styleSelected='classic';
containerDisplay.style.backgroundImage="url('classic.jpg')";
console.log('theTarget', event.target);


/*for style one*/
  classic.addEventListener('click',event=>{
  styleSelected='classic' ;
  displaybackgrnds(styleSelected);
})

/*for style two*/
formal.addEventListener('click',event=>{
  styleSelected='formal';
  console.log(styleSelected);
   displaybackgrnds(styleSelected);
})

/*for style three*/
different.addEventListener('click',event=>{
  styleSelected='different';
  displaybackgrnds(styleSelected);
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