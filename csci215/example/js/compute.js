

// -----------------------------------
// Global Variables Go Here
var I = ["http://munsellb.people.cofc.edu/img/pound.jpeg", "http://munsellb.people.cofc.edu/img/euro.jpeg","http://munsellb.people.cofc.edu/img/kroon.jpeg","http://munsellb.people.cofc.edu/img/canadian.jpeg","http://munsellb.people.cofc.edu/img/yuan.jpeg"]


// -----------------------------------
// Convert Function Goes Here

function convert() {
    var dollar = document.getElementsByName("dollars")[0].value;
    var selectElement = document.getElementById('currency');
    var exchangeRate = selectElement.value;
    var index = selectElement.selectedIndex;
    var currency = selectElement.options[index].text;
    
    updateExchange(dollar, exchangeRate, currency, index);
    
}

// -----------------------------------
// Calculate Function Goes Here


function calculate(dollar, exchangeRate) {
    
    var result = dollar * exchangeRate;
    return result;
    
}

// -----------------------------------
// Functions that are given
// Do not modify

function updateImage( index ) { 
    
    var url = 'url(' + I[index] + ')';
    document.getElementById('bill_img').style.backgroundImage=url;
    
}

function updateExchange( dollar, exchangeRate, currency, index ) {
    
    document.getElementsByName("exchange")[0].value = calculate( dollar, exchangeRate ).toPrecision(4) + ' ' + currency;
    
    updateImage( index );
    
}





