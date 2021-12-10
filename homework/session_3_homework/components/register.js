import { InputGroup } from "./input_group.js";

class Register{
    $container
    $title;

    $formRegister;
    $inputGroupDisplayName;
    $inputGroupEmail;
    $inputGroupPhone;
    $inputGroupPassword;
    $inputGroupConfirmPassword;

    $feedbackMessage;
    $btnSubmit;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('center', 'h-screen', 'flex-col', 'container');
        this.$title = document.createElement('h2');
        this.$title.innerHTML = 'Register';

        this.$formRegister = document.createElement('form');
        this.$formRegister.addEventListener('submit', this.handleSubmit);
       
        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email');
        this.$inputGroupDisplayName = new InputGroup('text', 'Display Name', 'displayName');
        this.$inputGroupPhone = new InputGroup('text', 'Phone', 'phone');
        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password');
        this.$inputGroupConfirmPassword = new InputGroup('password', 'Confirm PassWord', 'confirmPassword');

        this.$feedbackMessage = document.createElement('div');

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Register';
    }
    handleSubmit = (evt)=>{
        evt.preventDefault();
        const email = this.$inputGroupEmail.getInputValue();
        const displayName = this.$inputGroupDisplayName.getInputValue();
        const phone = this.$inputGroupPhone.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();

        this.$inputGroupEmail.setError(null);
        this.$inputGroupDisplayName.setError(null);
        this.$inputGroupPhone.setError(null);
        this.$inputGroupPassword.setError(null);
        this.$inputGroupConfirmPassword.setError(null);

        if(!email){
            this.$inputGroupEmail.setError('Email cannot be empty!');
        }

        if(!displayName){
            this.$inputGroupDisplayName.setError('Display name cannot be empty!');
        }

        if(phone.length != 10){
            this.$inputGroupPassword.setError('Phone number length must be equal 10');
        }

        if(password.length < 6){
            this.$inputGroupPassword.setError('Password length must be greater or equal than 6!');
        }
        if(confirmPassword != password){
            this.$inputGroupConfirmPassword.setError('Confirm password not matched!');
        }
        // firebase.auth().createUserWithEmailAndPassword(email,password)
        //     .then(()=>{
        //         this.$feedbackMessage.innerHTML = 'Register successfully! Please check your inbox';
        //         firebase.auth().currentUser.sendEmailVerification();
        //         this.$inputGroupEmail.setInputValue('');
        //         this.$inputGroupDisplayName.setInputValue('');
        //         this.$inputGroupPhone.setInputValue('');
        //         this.$inputGroupPassword.setInputValue('');
        //         this.$inputGroupConfirmPassword.setInputValue('');
        //     })
        //     .catch((error) =>{
        //         this.$feedbackMessage.innerHTML = error.toString();
        //         console.log(error);
        //     })
    }
    render(){
        this.$formRegister.appendChild(this.$inputGroupEmail.render());
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
        this.$formRegister.appendChild(this.$inputGroupPhone.render());
        this.$formRegister.appendChild(this.$inputGroupPassword.render());
        this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
        this.$formRegister.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$feedbackMessage);
        this.$container.appendChild(this.$formRegister);
        return this.$container;
    }
}

export {Register};