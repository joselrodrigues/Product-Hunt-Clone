import app from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from "./config";


class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
    }

    async registrar({nombre, email, password}){
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(
            email,password
        );

        return await nuevoUsuario.user.updateProfile({displayName:nombre});
    }

    async login(){

    }
}

const firebase = new Firebase();

export default firebase;
