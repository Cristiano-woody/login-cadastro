//imports
import FormCadastroOrLogin from "./formCadastro.js";

//manipulação do DOM
const formHtml = document.getElementById('form');
const nameInput = document.getElementById('nome');
const cpfInput = document.getElementById('cpf');
const passwordInput = document.getElementById('senha');
const confirmPassword = document.getElementById('confirmarSenha');
const errorPassword = document.getElementById('spanErrorSenha');
const errorUser = document.getElementById('spanErrorUser');
const buttonclosemodal = document.getElementById('closemodal');
const modal = document.getElementById('containerModal');

function closeModal(){
    modal.style.display = 'none';
}

//eventos
formHtml.addEventListener('submit', event => handleSubmit(event));

buttonclosemodal.addEventListener('click', () => closeModal());

// manipulaçao dos dados
let formValue = {
    name: '',
    cpf: '',
    senha: ''
}

const form = new FormCadastroOrLogin();

function handleSubmit(event) {
    event.preventDefault();

    if (passwordInput.value === confirmPassword.value) {
        errorPassword.style.display = 'none';
        errorUser.style.display = 'none';

        formValue.name = nameInput.value;
        formValue.cpf = cpfInput.value;
        formValue.senha = passwordInput.value;

        form.register(formValue);
    }
    else{
        errorPassword.style.display = 'flex';
    }
}
