let timer; // Variável para armazenar o timer do setInterval
let funcionando = false; // Boolean para ver se o cronômetro está funcionando
let segundos = 0;
let minutos = 0;
let horas = 0;

function iniciarTimer(){ //Função para iniciar
    if(!funcionando){
        timer = setInterval(updateTimer, 1000); // A cada 1 segundo, a função updateTimer é chamada
        document.getElementById('iniciar').disabled = true;
        document.getElementById('parar').disabled = false;
        funcionando = true;
    }
}

function pararTimer(){ // Função para parar
    if (funcionando) {
        clearInterval(timer); // Para o timer
        document.getElementById('iniciar').disabled = false;
        document.getElementById('parar').disabled = true;
        funcionando = false;
    }
}

function updateTimer(){ // Função para converter os segundos em minutos e horas
    segundos++;
    if (segundos == 60){
        segundos = 0;
        minutos++;
        if (minutos == 60){
            minutos = 0;
            horas++;
        }
    }

    let mostrarHoras = (horas < 10) ? '0' + horas : horas;
    let mostrarMinutos = (minutos < 10) ? '0' + minutos : minutos;
    let mostrarSegundos = (segundos < 10) ? '0' + segundos : segundos;

    document.getElementById('cronometro').innerHTML = mostrarHoras + ':' + mostrarMinutos + ':' + mostrarSegundos;
}


function zerarTimer(){ // Função para zerar o timer
    clearInterval(timer);
    funcionando = false;
    segundos, minutos, horas = 0;
    document.getElementById('cronometro').innerHTML = '00:00:00'
    document.getElementById('iniciar').disabled = false;
    document.getElementById('parar').disabled = true;
}
