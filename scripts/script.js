const menuButton = document.querySelectorAll(".menu-button");

menuButton.forEach(button => {
    button.addEventListener('click',()=> {
        const activeItem = button.dataset.item
        const headerHeight = document.querySelector('nav').offsetHeight
        const sectionTop = document.getElementById(activeItem).offsetTop
        window.scrollTo({
            top: sectionTop-headerHeight,
            behavior:'smooth'
        })
    })
})
