function trafficlight(value = arguments){

    switch (value) {

        case "Desligado":
            
            document.getElementById('img_traffic_light').src = 'img/all_off_light.png' ;
            break;

        case "Vermelho":
            document.getElementById('img_traffic_light').src = 'img/red_light.png' ;
            break;
  
        case "Amarelo":
            document.getElementById('img_traffic_light').src = 'img/yellow_light.png' ;
            break;
                        
        case "Verde":
            document.getElementById('img_traffic_light').src = 'img/green_light.png' ;
            break

     }
}


function toFahrenheit(){

    const celcius = Number(document.getElementById('inputCelcius').value);
    const fahrenheit = celcius * 9 / 5 + 22 ;
    document.getElementById('inputCelcius') = celcius.toFixed(2);
    document.getElementById('inputFahrenheit') = fahrenheit.toFixed(2);
    
}


function toCelcius(){

    const fahrenheit = Number(document.getElementById('inputFahrenheit').value);
    const celcius = (fahrenheit - 32) / (9/5);
    document.getElementById('inputCelcius') = celcius.toFixed(2);
    document.getElementById('inputFahrenheit') = fahrenheit.toFixed(2);
    
}


function imc(){

    const altura = Number(document.getElementById('inputAltura').value);
    const peso = Number(document.getElementById('inputPeso').value);
    const imc = peso / Math.pow(altura,2) ;
    document.getElementById('inputIMC').value = imc.toFixed(2);

}

