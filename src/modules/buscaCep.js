const axios = require('axios');
const inputCepText = document.querySelector('.cep-text');
const btnBuscaCep = document.querySelector('.btn-busca');
const resultado = document.querySelector('.resultado');

export function btnFunction() {
    btnBuscaCep.addEventListener('click', () => {
        getAddressFromCep(inputCepText.value);
    });
}

function getAddressFromCep(cepText) {
    axios(`https://cep.awesomeapi.com.br/json/${cepText}`)
    .then(response => {
        return response.data;
    })
    .then(data => {
        resultado.innerHTML = `${data.address}, ${data.district}, ${data.city}/${data.state}`;
        console.log(data);
    })
    .catch(err => {console.log(err)});
}
