document.getElementById('formal').addEventListener('click',event=>{
  console.log('event called');
 let element= document.getElementsByClassName("container-display")[0];
  console.log('element=',element);
// element.setAttribute("style","background-color: blue");
// element.style.backgroundColor = "blue"; --this also works

element.setAttribute("style","background-image: url('background1.jpg')");
})