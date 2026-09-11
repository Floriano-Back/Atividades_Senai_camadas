class User {
    #id;
    #name;
    #email;
    #password;
    #role;

    constructor(name, email, password, role, id = null){
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#role = role;
        this.#id = id;    
    }
    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }
    
    set name(value){
        this.#name = value;
    }

    get email(){
        return this.#email;
    }
    
    set email(value){
        this.#email = value;
    }

    get password(){
        return this.#password;
    }

    set password(value){
        this.#password = value;
    }

    get role(){
        return this.#role;
    }

    set role(value){
        this.#role = value;
    }
}

export default User;