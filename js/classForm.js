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
        if (formobject) {
            let user = JSON.parse(localStorage.getItem(formobject.cpf));

            if (user.senha === formobject.senha) {
                console.log(user)
                return true
            }
            else {
                return false
            }
        }
        else{
            return console.log('error: object not found.')
        }

    }
}


export default FormRegisterOrLogin