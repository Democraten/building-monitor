var menuButton = document.getElementById('menu-button')
var menu = document.getElementById('menu')
menuButton.onclick = function(){
    toggleMenu();
};
function toggleMenu(){
    menu.classList.toggle('menu-active');
}
document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == menuButton;
    const menu_is_active = menu.classList.contains('menu-active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});