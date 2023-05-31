$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<li>${nomeTarefa}</li>`);
        $('#lista-tarefas').append(novaTarefa);
        $('#nome-tarefa').val('');
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('checked');
    })
})
