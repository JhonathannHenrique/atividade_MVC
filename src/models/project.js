const projects = []

class Project {
    constructor(id, name, descrition) {
        this.id = id
        this.name = name
        this.descrition = descrition    }

    save() {
        projects.push(this)
    }

    static findAll() {
        return projects
    }
}

module.exports = Project