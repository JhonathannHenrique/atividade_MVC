const users = [];

class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    save() {
        users.push(this);
    }

    static findAll() {
        return users;
    }

    static findID(id) {
        console.log(User.users);
        return User.users.find(user => user.id == id);
    }

    static deleteUser(id) {
        const index = User.users.findIndex(user => user.id == id);
        if(index !== -1) {
            User.users.splice(index, 1);
        }
    }
}

module.exports = User;