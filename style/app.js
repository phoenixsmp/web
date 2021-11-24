const navSlide= ()=>{
    const burger=document.querySelector('.burger'); 
    const nav = document.querySelector('.nav-links ');
    const navLinks =document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        // tooglenav
        nav.classList.toggle('nav-open');

    //   animate link 
   navLinks.forEach((link,index) => {
       if (link.style.animation) {
           link.style.animation='';
           } else{
               link.style.animation= `navLinkFade 0.5s ease forwards  ${index/7+0.3}s`;    
           }
   });
  burger.classList.toggle('toggle');            
});

}
navSlide();     

function toggle(){ 
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
}

const logo=document.querySelectorAll("#logo path")

for (let i=0; i< logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}


const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);


$(window).load(function(myFunction) {
    $(".preloader").fadeOut(1000, function() {
        $('body').removeClass('loading');
    });
  });


// happy

