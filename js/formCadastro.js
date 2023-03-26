class FormCadastroOrLogin {
    constructor() {

    }

    register(formobject) {
        //verifica se o usuario ja esta cadastrado 
        if (localStorage.hasOwnProperty(`${formobject.cpf}`)) {
            const errorUser = document.getElementById('spanErrorUser');
            errorUser.style.display = 'flex';
        }
        else {
            const modal = document.getElementById('containerModal');
            localStorage.setItem(formobject.cpf, JSON.stringify(formobject));
            modal.style.display = 'flex';
            console.log(`registration done`);
        }
    }

    login(formobject) {
        //verifica se o usuario ja foi cadastrado
        if (localStorage.hasOwnProperty(formobject.cpf)) {
            let user = localStorage.getItem(formobject.cpf);
        }
        else {
            return console.log('error: unregistered user');
        }
    }

}

export default FormCadastroOrLogin