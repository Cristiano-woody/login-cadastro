//imports
import FormRegisterOrLogin from "./classForm.js";

//manipulação do DOM
const formHtml = document.getElementById('form');
const nameInput = document.getElementById('nome');
const spanErrorLengthName = document.getElementById('spanErrorNome');
const spanErrorLengthCPF = document.getElementById('spanErrorTamanhoCPF');
const spanErrorLengthSenha = document.getElementById('spanErrorSenhaTamanho')
const cpfInput = document.getElementById('cpf');
const dateBirth = document.getElementById('dateBirth');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
const confirmPassword = document.getElementById('confirmarSenha');
const errorPassword = document.getElementById('spanErrorSenha');
const errorUser = document.getElementById('spanErrorCPF');
const buttonclosemodal = document.getElementById('closemodal');
const modal = document.getElementById('containerModal');

function closeModal() {
    modal.style.display = 'none';
    window.location = '../index.html'
}

//eventos
formHtml.addEventListener('submit', event => handleSubmit(event));

buttonclosemodal.addEventListener('click', () => closeModal());

// manipulaçao dos dados
let formValue = {
    name: '',
    senha: '',
    cpf: '',
    email: '',
    dateRegister: '',
    dateBirth: ''
}

const date = new Date();

const form = new FormRegisterOrLogin();

function handleSubmit(event) {
    event.preventDefault();
    formValue.name = nameInput.value;
    formValue.senha = passwordInput.value;
    formValue.cpf = cpfInput.value;
    formValue.email = emailInput.value;
    formValue.dateRegister = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`
    formValue.dateBirth = dateBirth.value;

    spanErrorLengthName.style.display = 'none';
    spanErrorLengthCPF.style.display = 'none';
    errorPassword.style.display = 'none';
    spanErrorLengthSenha.style.display = 'none';
    errorUser.style.display = 'none';

    if(formValue.name.length < 3) {
        return (
            spanErrorLengthName.style.display = 'flex'
        )
    }
    if (formValue.cpf.length !== 11) {
        return (
            spanErrorLengthCPF.style.display = 'flex'
        )
    }
    if(formValue.senha.length < 6 || formValue.senha.length > 10){
        return (
            spanErrorLengthSenha.style.display = 'flex'
        )
    }
    if (passwordInput.value != confirmPassword.value) {
        return (
            errorPassword.style.display = 'flex'
        )
    }

    if (!form.itIsRegistered(formValue.cpf)) {
        form.register(formValue);
        modal.style.display = 'flex';

    }
    else{
        return (
            errorUser.style.display = 'flex'
        )
    }
}
