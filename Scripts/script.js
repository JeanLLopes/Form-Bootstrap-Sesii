$(function () {
    $('#btnProsseguir').on('click', function () {
        $('#sectionInformacoesPessoais').fadeOut('slow');
        $('#sectionAcademicos,#sectionMsgSuccessInformacoesPessoais').fadeIn('slow');
    });
    $('#btnConcluir').on('click', function () {
        $('#sectionAcademicos,#sectionMsgSuccessInformacoesPessoais').fadeOut('fast');
        var aluno = $('#inputNome').val();
        bootbox.dialog({
            message: "Cadastro Efetuado com Sucesso",
            title: "Aluno " + aluno,
            buttons: {
                main: {
                    label: "OK",
                    className: "btn-primary",
                    callback: function () {
                        //LIMPA OS CAMPOS
                        $('input[type=text').val('');
                        $('#sectionInformacoesPessoais').fadeIn('fast');
                        $('#sectionAcademicos,#sectionMsgAcademicos,#sectionMsgSuccessInformacoesPessoais').fadeOut('fast');
                    }

                },
            }
        });

    });
})
