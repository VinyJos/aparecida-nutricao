

// Buscar todos paciente
var pacientes = document.querySelectorAll(".paciente");

// Fazer a iteração para calcular para todos os pacientes
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
var botaoAdicionar = document.querySelector("#adicionar-paciente")
// adiciona um escutador de evento (evento: click, chama: uma função)
botaoAdicionar.addEventListener("click", function(event) {
    //mudar comportamento padrão, para que ele execute a ação
    event.preventDefault();
    //---------------------------------------------
    // OBTER VALORES DO FORMULÁRIO

    // selecionando o formulário
    var form = document.querySelector("#form-adiciona")
    // para pegar os valores dos campos
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // --------------------------------------------
    //  COLOCAR NA PLANILHA

    // criar um elemento
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // colocando o valor nas td 
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc.toFixed(2);

    // colocar as td(filhos) dentro da tr(pai)
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    // colocar o Tr dentro da tabela (tbody) - id:tabela-pacientes
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});



