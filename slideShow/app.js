let slideIndex = 1;
function slideShow(n){
    let slides = document.getElementsByClassName("mySlides");
   console.log(slides);
   if (n > slides.length){
       slideIndex = 1;
   }
   if(n < 1){
       slideIndex = slides.length;
   }
   for(let i = 0;i<slides.length;i++){
       slides[i].style.display ="none";
   }
   slides[slideIndex-1].style.display= "block";
}

slideShow(slideIndex);

function plusSlides(n){
    slideShow(slideIndex += n);
}