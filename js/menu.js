// Select DOM Item
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
    // Set Menu State
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

//
//
//
// $('.panel-collapse').on('show.bs.collapse', function () {
//    $(this).siblings('.panel-heading').addClass('active');
//  });
//
//  $('.panel-collapse').on('hide.bs.collapse', function () {
//    $(this).siblings('.panel-heading').removeClass('active');
//  });
//


 // var acc = document.getElementsByClassName("accordion")
 // var i;
 // for(i = 0; i < acc.length; i++) {
 //   acc[i].addEventListener("click", function(){
 //     this.classList.toggle("active");
 //
 //     var panel = this.next.nextElementSibling;
 //     if (panel.style.display === "block"){
 //       panel.style.display = "none";
 //     } else {
 //       panel.style.display = "block";
 //     }
 //   });
 // }
