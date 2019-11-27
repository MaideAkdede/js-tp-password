/*
* 1. Écoutez le clic sur l'élément .showPass.
* 2. Changer le type de l'input de password vers text.
* 3. Assurez de pouvoir retourner à l'état initial quand l'utilisateur clique une seconde fois.
*/

// DÉFINI OBJET
const togglePassword = {
    start() {
        document.querySelector('html').className = 'js-enabled';
        this.input = document.querySelector('input'); //récupérer la barre
        document.querySelector('button').addEventListener("click",  ()=> {
            this.showPass();
        });
    },
    showPass(){
        this.input.type === "password" ?  this.input.type = 'text': this.input.type = 'password';
        /*
        * Opérateur ternaire > CONDITION ? IF : ELSE
        *
        * if(this.input.type === 'password'){
        *   this.input.type = 'text';
        *} else {
        *   this.input.type = 'password';
        }*/
    }
};

// APPEL DE L'OBJET
togglePassword.start()

