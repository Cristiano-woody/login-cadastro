class FormRegisterOrLogin {
    constructor() {

    }

    itIsRegistered(cpf) {
        return localStorage.hasOwnProperty(cpf);
    }

    register(formobject) {
        if (formobject) {
            localStorage.setItem(formobject.cpf, JSON.stringify(formobject));
            console.log(`registration done`);
        }
        else {
            return console.log(`error: object form not found`);
        }
    }

    login(formobject) {
        //verifica se o usuario ja foi cadastrado
        if (localStorage.hasOwnProperty(formobject.cpf)) {
            let user = JSON.parse(localStorage.getItem(formobject.cpf));

            if (user.senha === formobject.senha) {
                console.log(user)
                return true
            }
            else {
                return console.log('error: Wrong CPF or Password');
            }
        } 
        else {
            return console.log("Cpf not registered")
        }

    }
}


export default FormRegisterOrLogin