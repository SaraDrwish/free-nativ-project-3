
document.getElementById('year').textContent = new Date().getFullYear();
///toggle spin
let geerr = document.querySelector(".togglesitting .geerr");
let setingbox = document.querySelector(".setingbox");
geerr.onclick = function(){
this.classList.toggle("fa-spin");
setingbox.classList.toggle("open");
};
// ------------
// ------------
let bgoptions = true;
let bginterval ;
let bglocalitemoptions = localStorage.getItem("bglocalitemoptions");
if(bglocalitemoptions !== null){
if(bglocalitemoptions === "true"){
bgoptions = true ;
}else{
bgoptions = false ;
}
document.querySelectorAll(".randbackgr span").forEach(el=>{
el.classList.remove("activ");
});
if(bglocalitemoptions === "true"){
document.querySelector(".randbackgr .yes").classList.add("activ");
}else{
document.querySelector(".randbackgr .no").classList.add("activ");
}
} 
let coloroptions = localStorage.getItem("coloroptions"); 
if(coloroptions !== null){
document.documentElement.style.setProperty( '--maincolor' , localStorage.getItem("coloroptions") );
document.querySelectorAll(".boxoption li").forEach( (elm)=>{
elm.classList.remove("act");
if(elm.dataset.color === coloroptions ){
elm.classList.add("act");
}
});
}
const colorslist = document.querySelectorAll(".settingcontainer .boxoption ul li");
colorslist.forEach(li =>{
li.addEventListener("click" , (e)=>{
document.documentElement.style.setProperty( '--maincolor' ,  e.target.dataset.color);
localStorage.setItem("coloroptions",e.target.dataset.color);
e.target.parentElement.querySelectorAll(".act").forEach( (elm)=>{
elm.classList.remove("act");
});
e.target.classList.add("act");
});
});
const randbackgr = document.querySelectorAll(".randbackgr span");
randbackgr.forEach( span =>{
span.addEventListener("click", (e)=>{
handelAcriv(e);
if(e.target.dataset.bg === 'yes'){
bgoptions = true;
randomizimgs();
localStorage.setItem("bglocalitemoptions" , true);
}else {
bgoptions = false;
clearInterval(bginterval);
localStorage.setItem("bglocalitemoptions" , false);
}
});
});
// ------------
// ------------
function randomizimgs(){
if(bgoptions === true){
let landing = document.querySelector(".landing");
let imgArray = ["1.jpg","2.jpg","4.jpg","6.jpg"];
bginterval = setInterval(()=>{
for(let i =0 ; i<= imgArray.length ; i++){
let randomimg = Math.floor(Math.random() * imgArray.length );
landing.style.backgroundImage='url("img/'+ imgArray[randomimg]+'")';
}
}
,3000
);
}
}
randomizimgs();
//---------------
// ----------------------------------------------------------------------bullets
const bullets = document.querySelectorAll(".nav-bullets .bullets");
// // ---------------------------------------------------------------------------------
const links = document.querySelectorAll(".header-area .nav  a ");
// // ----------------------------------------------------------------------------------
function scrollFunctionsInSite(elements){
elements.forEach( el=>{
el.addEventListener( "click" , (e) =>{
e.preventDefault();
document.querySelector(e.target.dataset.section).scrollIntoView({
behavior: "smooth"
});
});
} );
}
scrollFunctionsInSite(bullets);
scrollFunctionsInSite(links);
// --------------------------------------------------------------------------------------
function handelAcriv(ev){
ev.target.parentElement.querySelectorAll(".activ").forEach(elem =>{
elem.classList.remove("activ");
});
ev.target.classList.add("activ");
}
// ----------------------------------------------------------------------------------
let bulletSpans = document.querySelectorAll(".bulletsoptions span");
let navbullets = document.querySelector(".nav-bullets");
let bulletsOptionsStorg = localStorage.getItem("bulletsOptionsStorg");

if(bulletsOptionsStorg !== null){
bulletSpans.forEach(span =>{
span.classList.remove("activ");
});
if(bulletsOptionsStorg === 'none'){
navbullets.style.display="none";
document.querySelector(".bulletsoptions .no").classList.add("activ");
}else{
navbullets.style.display = "block";
document.querySelector(".bulletsoptions .yes").classList.add("activ");
}
}
bulletSpans.forEach(spa =>{
spa.addEventListener("click" , (el) => {

if(spa.dataset.options === "hide"){
navbullets.style.display="none";
localStorage.setItem("bulletsOptionsStorg" , 'none');
}else{
navbullets.style.display = "block";
localStorage.setItem("bulletsOptionsStorg" , 'block');
}
handelAcriv(el);
});
});
//    ----------------------------------------------------------------------------
let resetOptions = document.querySelector(".reset-site-options");
resetOptions.onclick = function(){
localStorage.removeItem("bglocalitemoptions");
localStorage.removeItem("coloroptions");
localStorage.removeItem("bulletsOptionsStorg");
window.location.reload();
};
// --------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
let navLinks = document.querySelector(".nav");
let togglMenu = document.querySelector(".toggle-menu");
togglMenu.onclick = function(e){
e.stopPropagation();
this.classList.toggle("menu-active");
navLinks.classList.toggle("open");
}
document.addEventListener("click" , e=>{
if( e.target !== navLinks && e.target !== togglMenu){
if(navLinks.classList.contains("open")){
togglMenu.classList.toggle("menu-active");
navLinks.classList.toggle("open");
}
}
});
navLinks.onclick = function(e){
e.stopPropagation();
}
// --------------------------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();
// --------------------------------------------------------------------------------
 

 /* ============================
   Testimon Slider - 3 items per view
   ============================ */
(function () {
    const slider = document.querySelector(".tes-contain-box");
    const slides = document.querySelectorAll(".tes-contain-box .tes-box");
    if (!slider || slides.length === 0) return;

    const prevBtn = document.querySelector(".ts-prev");
    const nextBtn = document.querySelector(".ts-next");

    let index = 0;
    const visibleCount = 3;  
    const maxIndex = slides.length - visibleCount;

    function updateSlider() {
        const shift = index * (100 / visibleCount);
        slider.style.transform = `translateX(-${shift}%)`;
    }

    nextBtn.addEventListener("click", () => {
        index = Math.min(index + 1, maxIndex);
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        index = Math.max(index - 1, 0);
        updateSlider();
    });

    updateSlider();
})();


const container = document.querySelector('.tes-contain-box');
const nextBtn = document.querySelector('.ts-next');
const prevBtn = document.querySelector('.ts-prev');

let isDragging = false;
let startX;
let scrollLeft;

// أزرار Next و Prev
nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
});

// السحب بالماوس
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    container.classList.add('active');  
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});
container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.classList.remove('active');
});
container.addEventListener('mouseup', () => {
    isDragging = false;
    container.classList.remove('active');
});
container.addEventListener('mousemove', (e) => {
    if(!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;  
    container.scrollLeft = scrollLeft - walk;
});

const boxWidth = container.querySelector(".tes-box").offsetWidth + 20;  

nextBtn.addEventListener("click", () => {
  container.scrollBy({ left: boxWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  container.scrollBy({ left: -boxWidth, behavior: "smooth" });
});

// ظظظظ

const slider = document.querySelector('.tes-contain-box');
let isDown = false;
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});


// ظظظظ
// --------------------------------------------------------------------------------
