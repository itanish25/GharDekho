const slide=document.querySelector('.slide');
const slideW=document.querySelector('.slide-w');
const house=document.querySelector('.house');
const optnS=document.querySelector('.optnS'); 
const optnB=document.querySelector('.optnB'); 
const optnR=document.querySelector('.optnR');
const homepage=document.querySelector('.homepage');
const houseOptn=document.querySelector('.houseOptn'); 

house.addEventListener('mouseenter',()=>{
    houseOptn.classList.add('houseHover');
});
house.addEventListener('mouseleave',()=>{
    houseOptn.classList.remove('houseHover');
});
optnS.addEventListener('click',navopenS); 
optnB.addEventListener('click',navopenB);  
optnR.addEventListener('click',navopenR);   
homepage.addEventListener('click',navopenH);  
function navopenS(){
    slide.classList.add('active');
    setTimeout(()=>{
        navcloseS();
    },1000);
}
function navopenH(){
    slide.classList.add('active');
    setTimeout(()=>{
        navcloseH();
    },1000);
}
function navopenB(){
    slide.classList.add('active');
    setTimeout(()=>{
        navcloseB();
    },1000);
}
function navopenR(){
    slide.classList.add('active');
    setTimeout(()=>{
        navcloseR();
    },1000);
}

function navcloseS(){
    slide.classList.remove('active');
    slideW.classList.add('active');
    setTimeout(()=>{ 
        slideW.classList.remove('active');
        window.location.href="../sell.html";
    },1000);
}
function navcloseH(){
    slide.classList.remove('active');
    slideW.classList.add('active');
    setTimeout(()=>{ 
        slideW.classList.remove('active');
        window.location.href="../index.html";
    },1000);
}
function navcloseB(){
    slide.classList.remove('active');
    slideW.classList.add('active');
    setTimeout(()=>{ 
        slideW.classList.remove('active');
        window.location.href="../buy.html";
    },1000);
}
function navcloseR(){
    slide.classList.remove('active');
    slideW.classList.add('active');
    setTimeout(()=>{ 
        slideW.classList.remove('active');
        window.location.href="../rent.html";
    },1000);
}

 
/**slider */
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}