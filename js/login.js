import FormCadastroOrLogin from "./classForm.js";

//manipulação do DOM
const formlogin = document.getElementById('formlogin');
const cpfInput = document.getElementById('cpf');
const senhaInput = document.getElementById('senha');

//events
formlogin.addEventListener('submit', event => handleSubmit(event));

//manipulação de dados
const formValue = {
  cpf: '',
  senha: ''
};

const form = new FormCadastroOrLogin();

function handleSubmit(event) {
  event.preventDefault();
  formValue.cpf = cpfInput.value
  formValue.senha = senhaInput.value

 
  if(form.login(formValue)){
    window.location = '../homePage.html'
  }
 
}