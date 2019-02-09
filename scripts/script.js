const hamMenu = document.querySelector(".nav-menu-container");






hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('change');
    document.querySelector('.nav-items').classList.toggle('transform-menu')
    document.querySelector('body').scroll
})