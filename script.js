const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
}, {rootMargin: "0px 0px -10% 0px"})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))