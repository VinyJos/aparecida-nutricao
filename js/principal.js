

// Buscar todos paciente
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
   
    var paciente = pacientes[i]
    
    // Depois a partir do paciente, busca o peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; // pegando apenas o texto
    
    // Fazemos  a mesma coisas com a altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    // fazemos a mesma coisa para pegar onde o IMC vai ser calculado;
    var tdImc = paciente.querySelector(".info-imc");
    
    // Validação
    if (peso <= 0 || peso >= 1000 ) {
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido")
    
    }else if(altura <= 0 || altura >= 3.00){
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    
    }else{
        // calculo do imc
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


