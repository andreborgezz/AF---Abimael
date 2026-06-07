/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Copa do Mundo 2026
Aluno 1: André Borges - RA: 250898
Aluno 2: Luiz Amaral - RA: 251676
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

document.addEventListener("DOMContentLoaded", function() {
    
    // primeira funcao: cria e controla o botao de voltar pro topo da pagina
    const btnTopo = document.createElement("button");
    btnTopo.innerHTML = "↑";
    btnTopo.className = "btn-topo";
    btnTopo.setAttribute("title", "Voltar ao topo");
    document.body.appendChild(btnTopo);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // segunda funcao: valida os dados que o usuario digitou no formulario de contato
    const formulario = document.querySelector('#formContato');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nome = document.querySelector('#nome').value.trim();
            const email = document.querySelector('#email').value.trim();
            const assunto = document.querySelector('#assunto').value;
            const mensagem = document.querySelector('#mensagem').value.trim();

            if (nome === '' || email === '' || assunto === '' || mensagem === '') {
                alert('⚠️ Por favor, preencha todos os campos obrigatórios corretamente.');
            } else {
                alert(`✨ Obrigado pelo contato, ${nome}! Sua mensagem sobre "${assunto.toUpperCase()}" foi enviada com sucesso à Central da Copa 2026.`);
                formulario.reset();
            }
        });
    }


    // terceira funcao: coloca e tira a classe de animacao nos cards quando passa o mouse
    const cards = document.querySelectorAll('.card-personalizado');
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.classList.add('card-destaque-js');
        });

        card.addEventListener('mouseleave', function() {
            card.classList.remove('card-destaque-js');
        });
    });

});