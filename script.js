if (window.matchMedia("(min-width: 1400px)").matches) {
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { rootMargin: "0px 0px -50% 0px" });

    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => myObserver.observe(element));

} else {
    // Se a tela for menor que 450px, mostrar todos sem animação
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        element.classList.remove('hidden');
        element.classList.add('show'); // Se quiser aplicar o estilo final direto
    });
}