import { setScreen } from "./app.js";
import { Login } from "./components/login.js";

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        const login = new Login();
        setScreen(login);
    } 
    else{
        
    }
})