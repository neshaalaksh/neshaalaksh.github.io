let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<a class="navbar-brand" href="index.html">Neshaa Laksh </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>
</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item"><a class="nav-link" href="index.html#projects">Projects</a></li>
   <li class="nav-item"><a class="nav-link" href="rb.html">Recipe book</a></li>
   <li class="nav-item"><a class="nav-link" href="Piano.html">Piano</a></li>
   <li class="nav-item"><a class="nav-link" href="extracurriculars.html">Extra-Curriculars</a></li>
  </ul>
</div>
</nav>`);


let footer = $(`

`);



// Window Loads
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
  
//toggler hamburger functions
    const menuBtn = document.querySelector('.navbar-toggler');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
      }
      else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
  });

});
// var dict={}
// function updateForm(){
//   var f1 = document.forms["Contact"]["field1"].value;
//   var f2 = document.forms["Contact"]["field2"].value;
//   var f3 = document.forms["Contact"]["field3"].value;
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();
//   today = dd + '-' + mm + '-' + yyyy;
//   dict={
//     'Date':today,
//     'Name':f1,
//     'Email id':f2,
//     'Message':f3
//   };
//   alert(f1+f2+f3+today)
// }
// function for toggling hamburger is-active class
$(function(){
  
  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
  });

});

// Navbar current page highlight

$(function(){
  $('a.nav-link').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current-link');
    }
  });
});

//function to remove underline on hover

$(document).ready(function(){

  $("a.nav-link").hover(
       function () {
         $(this).removeClass("current-link");
       },
       function () {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current-link');
        }
      }
  );
});
//     // Basice Code keep it 
//     $(document).ready(function () {
//         $(document).on("scroll", onScroll);

//         //smoothscroll
//         $('a[href^="#"]').on('click', function (e) {
//             e.preventDefault();
//             $(document).off("scroll");

//             $('a').each(function () {
//                 $(this).removeClass('active');
//             })
//             $(this).addClass('active');

//             var target = this.hash,
//                 menu = target;
//             $target = $(target);
//             $('html, body').stop().animate({
//                 'scrollTop': $target.offset().top+2
//             }, 500, 'swing', function () {
//                 window.location.hash = target;
//                 $(document).on("scroll", onScroll);
//             });
//         });
//     });

// // Use Your Class or ID For Selection 

//     function onScroll(event){
//         var scrollPos = $(document).scrollTop();
//         $('#menu-center a').each(function () {
//             var currLink = $(this);
//             var refElement = $(currLink.attr("href"));
//             if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                 $('#menu-center ul li a').removeClass("active");
//                 currLink.addClass("active");
//             }
//             else{
//                 currLink.removeClass("active");
//             }
//         });
//     }
// export default dict;
