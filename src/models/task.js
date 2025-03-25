const tasks = []

class Task {
    constructor(id,title, status, idProject, idUser) {
        this.id = id;
        this.title = title;
        this.status = status | false;
        this.idPidProject =idProject;
        this.idUser = idUser;
    }

    save() {
        tasks.push(this);
    }

    static fetchAll() {
        return tasks;
    }

    static update(id, title, status,idProject, idUser) {  
        const task = tasks.find(p => p.id === id);  
        if (task) {  
            task.title = title;
            task.status = status;
            task.idPidProject =idProject;
            task.idUser = idUser;
            return task;  
        }  
        return null;  
    }  

    static delete(id) {  
        const index = tasks.findIndex(p => p.id === id);  
        if (index !== -1) {  
            tasks.splice(index, 1);  
            return true;  
        }  
        return false;  
    }  
}

module.exports = Task;