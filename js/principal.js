(function Principal() {
    var titulo = document.querySelector('.titulo');
    titulo.textContent = 'Aparecida Nutricionista';

    var paciente = document.querySelector('#primeiro-paciente');
    var dadosPaciente = obtemDadosDoPaciente(paciente);
    var infoImc = paciente.querySelector('.info-imc');

    if (!validaPeso(dadosPaciente.peso)) {
        var mensagem = "Peso inválido";
        console.log(mensagem);
        infoImc.textContent = mensagem;
        return;
    }
    if(!validaAltura(dadosPaciente.altura)) {
        var mensagem = "Altura inválida";
        console.log(mensagem);
        infoImc.textContent = mensagem;
        return;
    }

    dadosPaciente.imc = calculaImc(dadosPaciente.peso, dadosPaciente.altura);
    paciente.querySelector('.info-imc').textContent = dadosPaciente.imc;

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

    console.log(dadosPaciente);

})();