// esse codigo modifica a cor do botão
const buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function() {
    
    valor1 = document.getElementById('numeroInput').value

    if (valor1 >10) {
            buttonElement.classList.add('button-green');
            buttonElement.classList.remove('button-red');
    }   else {
                buttonElement.classList.add('button-red');
                buttonElement.classList.remove('button-green');
                }   

})

// esse codigo modifica a cor da DIV
