const arrow = document.querySelector('.arrow');
const navBarItems = document.querySelector('.navbar-items');

const openNavBarItems = function(e){
   navBarItems.style.height = 'auto';
}

const closeNavbarItems = function(e){
    navBarItems.style.height = 0;
}

arrow.addEventListener('mouseover', openNavBarItems);
//arrow.addEventListener('mouseleave', closeNavbarItems);

navBarItems.addEventListener('mouseover', openNavBarItems);
navBarItems.addEventListener('mouseleave', closeNavbarItems);