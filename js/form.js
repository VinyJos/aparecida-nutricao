var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    if(!validaPaciente(paciente)) {
        console.log('Paciente inválido');
        return;
    }

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    form.reset();
});

function obtemPacienteDoFormulario(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
}

function montaTr(paciente) {
    var tr = document.createElement('tr');
    tr.classList.add('paciente');
    tr.appendChild(montaTd(paciente.nome, 'nome'));
    tr.appendChild(montaTd(paciente.peso, 'peso'));
    tr.appendChild(montaTd(paciente.altura, 'altura'));
    tr.appendChild(montaTd(paciente.gordura, 'gordura'));
    tr.appendChild(montaTd(paciente.imc, 'imc'));
    return tr;
}

function montaTd(dado, sufixoDaClasse) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add('info-' + sufixoDaClasse);
    return td;
}

function validaPaciente(paciente) {
    if(validaPeso(paciente.peso)) {
        return true;
    }
}