var buscarPaciente = document.querySelector('#buscar-paciente-integracao');

buscarPaciente.addEventListener('click', function(event) {
    var apiLink = 'https://api-pacientes.herokuapp.com/pacientes';
    var xhr = new XMLHttpRequest()
    xhr.open('GET', apiLink);
    xhr.send();
    xhr.addEventListener('load', function() {
       var resposta = xhr.responseText;
       var pacientes = JSON.parse(resposta);
       adicionaListaDePacientesNaTabela(pacientes);
    });

    function adicionaListaDePacientesNaTabela(pacientes) {
        for(var i = 0; i < pacientes.length; i++) {
            adicionaPacienteNaTabela(pacientes[i]);
        }
    }
});
