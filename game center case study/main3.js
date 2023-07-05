
// document.addEventListener("DOMContentLoaded", function(){
//   window.addEventListener('scroll', function() {
//       if (window.scrollY > 50) {
//         document.getElementById('navbar_top').classList.add('fixed-top');
//         // add padding top to show content behind navbar
//         navbar_height = document.querySelector('.navbar').offsetHeight;
//         document.body.style.paddingTop = navbar_height + 'px';
//       } else {
//         document.getElementById('navbar_top').classList.remove('fixed-top');
//          // remove padding top from body
//         document.body.style.paddingTop = '0';
//       } 
//   });
// }); 
// DOMContentLoaded  end

// window.addEventListener('scroll',(e)=>{
//   const nav = document.querySelector('.navbar');
//   if(window.scrollY>0){
//     nav.classList.add("add-shadow");
//   }else{
//     nav.classList.remove("add-shadow");
//   }
// });


/* --Contact Me Popup-- */

// Get the contact
var contact = document.getElementById("myContact");

// Get the button that opens the contact
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the contact
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the contact 
btn.onclick = function() {
  contact.style.display = "block";
}

// When the user clicks on <span> (x), close the contact
span.onclick = function() {
  contact.style.display = "none";
}

// When the user clicks anywhere outside of the contact, close it
window.onclick = function(event) {
  if (event.target == contact) {
    contact.style.display = "none";
  }
}


/* --TOP BUTTON-- */

//Get the button:
mybutton = document.getElementById("myBtn1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}