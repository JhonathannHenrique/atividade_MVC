const users = []

class User {
    constructor(id,name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passord = password;
    }

    save() {
        users.push(this)
    }

    static fetchAll() {
        return users;
    }

    static update(id, name, email, password) {  
        const user = users.find(p => p.id === id);  
        if (users) {  
            user.name = name;
            user.email = email;
            user.password = password;
            return user;  
        }  
        return null;  
    }  

    static delete(id) {  
        const index = users.findIndex(p => p.id === id);  
        if (index !== -1) {  
            users.splice(index, 1);  
            return true;  
        }  
        return false;  
    }  
}

module.exports = User;