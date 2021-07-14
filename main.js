// Abre e fecha o menu quando clicar no icone: hambuguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')



for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// Quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* Mudar o header da página quando der o scroll*/
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener("scroll", function() {
    if(window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})

//Testimols carrosel

const swiper = new Swiper('.swiper-container',{
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

/* scrollReveal: mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'topo',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,{interval: 100}
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})


