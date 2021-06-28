const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('nav-links');

hamburger.addEventListener('click', ()=>{
	navLink.classList.toggle('show');
});



// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-links");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }




// <script>
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "nav-links") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-links";
//   }
// }
// </script>





// 
// const myFunction =()=>{
// 	const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-links");

// hamburger.addEventListener("click", ()=>{
// 	 hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// });
// }

// function myFunction();


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
   









// <script>
// function myFunction(){
// 	var x = document.getElementByClass("nav-links");
// 	if(x.style.display === "block"){
// 		x.style.display = "none";
// 	}else{
// 		x.style.display = "block";
// 	}
// }
// </script>