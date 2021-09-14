const dataEvento = 12/10/2021;
const dataHoje = 11/10/2021;
idade = 18;
participantes = [];

if ((dataEvento - dataHoje) <= 0) {
    console.log("Data inválida");
}
else {
    if (idade < 18){
        console.log("Impossível marcar, pois idade é inferior a 18 anos.");
    }
    else {       
        if (participantes.length <100) {
            participantes.push ("Anderson de Carvalho");
            console.log("Participante adicionado");
            console.log(participantes);
        }
            else {
                console.log("Limite de participantes atingido");
            }
            
        }        
    }
