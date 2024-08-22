const menuBtn = document.getElementById('mobile-menu');
const menuList = document.getElementById('menu-list');

menuBtn.addEventListener('click', function() {
    if (menuList.style.display === 'none' || menuList.style.display === '') {
        menuList.style.display = 'flex';
        menuList.style.flexDirection = 'column';
        menuBtn.style.opacity = 0.4;
    } else {
        menuList.style.display = 'none';
        menuBtn.style.opacity = 1;
    }
});
