const form = document.getElementById('formContato');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        const telefone = "5519971244436"; 
        const texto = `Olá! Meu nome é ${nome} (%0AEmail: ${email})%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;
        const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${texto}`;

        window.open(url, '_blank');
    });