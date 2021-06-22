const slide=document.querySelector('.slide');
const slideW=document.querySelector('.slide-w');
const house=document.querySelector('.house');
const houseOptn=document.querySelector('.houseOptn');
const close=document.querySelector('.close');

house.addEventListener('mouseenter',()=>{
    houseOptn.classList.add('houseHover');
});
house.addEventListener('mouseleave',()=>{
    houseOptn.classList.remove('houseHover');
});
houseOptn.addEventListener('click',navopen); 
function navopen(){
    slide.classList.add('active');
    setTimeout(()=>{
        navclose();
    },1000);
}

function navclose(){
    slide.classList.remove('active');
    slideW.classList.add('active');
    setTimeout(()=>{ 
        slideW.classList.remove('active');
    },1000);
}
 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}