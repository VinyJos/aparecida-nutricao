(function Principal() {
    var titulo = document.querySelector('.titulo');
    titulo.textContent = 'Aparecida Nutricionista';

    var pacientes = document.querySelectorAll('.paciente');
    defineAcoesDaPagina();

    for(var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var pesoEhInvalido = false;
        var alturaEhInvalida = false;

        var dadosPaciente = obtemDadosDoPaciente(paciente);
        var infoImc = paciente.querySelector('.info-imc');

        if (!validaPeso(dadosPaciente.peso)) {
            pesoEhInvalido = true;
            var mensagem = "Peso inválido";
            console.log(mensagem);
            infoImc.textContent = mensagem;
            destacaErro(paciente);
        }

        if(!validaAltura(dadosPaciente.altura)) {
            alturaEhInvalida = true;
            var mensagem = "Altura inválida";
            console.log(mensagem);
            infoImc.textContent = mensagem;
            destacaErro(paciente);
        }

        if(!pesoEhInvalido && !alturaEhInvalida) {
            dadosPaciente.imc = calculaImc(dadosPaciente.peso, dadosPaciente.altura).toFixed(2);
            paciente.querySelector('.info-imc').textContent = dadosPaciente.imc;
        }
    }

    function obtemDadosDoPaciente(paciente) {
        return {
            nome: paciente.querySelector('.info-nome').textContent,
            peso: parseFloat(paciente.querySelector('.info-peso').textContent),
            altura: parseFloat(paciente.querySelector('.info-altura').textContent),
            gordura: paciente.querySelector('.info-gordura').textContent,
        }
    }

    function calculaImc(peso, altura) {
        return peso / (altura * altura);
    }

    function validaPeso(peso) {
        if(peso > 0 && peso < 1000) return true;
    }

    function validaAltura(altura) {
        if(altura < 3.00) return true;
    }

    function destacaErro(item) {
        item.classList.add('paciente-invalido')
    }

    function defineAcoesDaPagina() {
        var botaoAdicionar = document.querySelector('#adicionar-paciente');

        botaoAdicionar.addEventListener('click', function(event) {
            event.preventDefault();
            var form = document.querySelector('#form-adiciona');

            var tdNome = document.createElement('td');
            var tdPeso = document.createElement('td');
            var tdAltura = document.createElement('td');
            var tdGordura = document.createElement('td');
            var tdImc = document.createElement('td');

            tdNome.textContent = form.nome.value;
            tdPeso.textContent = form.peso.value;
            tdAltura.textContent = form.altura.value;
            tdGordura.textContent = form.gordura.value;
            tdImc.textContent = calculaImc(form.peso.value, form.altura.value).toFixed(2);

            var tr = document.createElement('tr');
            tr.appendChild(tdNome);
            tr.appendChild(tdPeso);
            tr.appendChild(tdAltura);
            tr.appendChild(tdGordura);
            tr.appendChild(tdImc);

            document.querySelector('#tabela-pacientes').appendChild(tr);

        });
    }

})();