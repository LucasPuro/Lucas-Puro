/*
   Função para exibir uma seção específica na página.
   Parâmetro:
   sectionId: o ID da seção que deve ser exibida.
*/

function showSection(sectionId) {

    // Oculta todas as seções da página
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção selecionada
    document.getElementById(sectionId).style.display = 'block';
}
