const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(
        `Nome: ${nome}\n` +
        `Email: ${email}\n` +
        `Assunto: ${assunto}\n` +
        `Mensagem: ${mensagem}`
    );

    
    contactForm.reset(); 
});
