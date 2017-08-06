var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);
    var erros = validaPaciente(paciente);

    if(erros.length) {
        exibeMensagensDeErros(erros);
        return;
    }

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    form.reset();
    document.querySelector('#mensagens-erro').innerHTML = '';
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
    var erros = [];
    if(!paciente.nome) erros.push('Nome não pode estar em branco');
    if(!validaPeso(paciente.peso)) erros.push('Peso inválido');
    if(!validaAltura(paciente.altura)) erros.push('Altura inválida');
    if(!paciente.gordura || paciente.gordura < 1) erros.push('Gordura em branco ou inválida');
    return erros;
}

function exibeMensagensDeErros(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
    for(var i = 0; i < erros.length; i++) {
        var li = document.createElement('li');
        li.textContent = erros[i];
        ul.appendChild(li);
    }
}