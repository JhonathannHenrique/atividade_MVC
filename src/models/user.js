const users = []

class User {
    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    save() {
        users.push(this)
    }

    static findAll() {
        return users
    }
}

module.exports = User