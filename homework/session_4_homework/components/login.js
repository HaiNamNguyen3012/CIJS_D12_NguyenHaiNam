import {setScreen} from '../app.js'
import { InputGroup } from './input_group.js'
import { Register } from './register.js'

class Login{
    $container;
    $container_child;
    $title;
    $inputGroupEmail;
    $inputGroupPassword;
    $form;
    $button;
    $linkToRegister;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('container', 'login');

        this.$container_child = document.createElement('div');
        this.$container_child.classList.add('container_child');

        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Login';

        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email');
        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password');

        this.$form = document.createElement('form');
        this.$form.addEventListener('click', this.handleSubmit);

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Login';

        this.$linkToRegister = document.createElement('div');
        this.$linkToRegister.classList.add('btn-link');
        this.$linkToRegister.addEventListener('click', this.moveToRegister);
        this.$linkToRegister.innerHTML = ' > Create new Account';
    }

    moveToRegister = () =>{
        const register = new Register();
        setScreen(register);
    }
    handleSubmit = (evt) =>{
        evt.preventDefault();
        const email = this.$inputGroupEmail.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        firebase.auth().signInWithEmailAndPassWord(email, password)
        .then((userInfo)=>{
            console.log(userInfo);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        this.$form.appendChild(this.$inputGroupEmail.render());
        this.$form.appendChild(this.$inputGroupPassword.render());
        this.$form.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$container_child);
        this.$container_child.appendChild(this.$title);
        this.$container_child.appendChild(this.$form);
        this.$container_child.appendChild(this.$linkToRegister);
        return this.$container;
    }
}

export{Login};