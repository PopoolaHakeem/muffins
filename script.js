const Menu = document.querySelector ('#menu');
const Cancel = document.querySelector ('#cancel');
const NavList = document.querySelector ('#mobile-list');


Menu.onclick = function () {
    Menu.style.display = 'none'
    Cancel.style.display = 'block'
    NavList.style.display = 'block'
    
}

Cancel.onclick = function () {
    Menu.style.display = 'block'
    Cancel.style.display = 'none'
    NavList.style.display = 'none'
   
}


