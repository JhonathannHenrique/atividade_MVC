const projects = []

class Project {
    constructor(id,name, descrition) {
        this.id = id;
        this.name = name;
        this.descrition = descrition;
        
    }

    save() {
        projects.push(this);
    }

    static fetchAll() {
        return projects;
    }
    
    static update(id, name, descrition) {  
        const projeto = projects.find(p => p.id === id);  
        if (projeto) {  
            projeto.name = name;
            projeto.descrition = descrition;
            return projeto;  
        }  
        return null;  
    }  

    static delete(id) {  
        const index = projects.findIndex(p => p.id === id);  
        if (index !== -1) {  
            projects.splice(index, 1);  
            return true;  
        }  
        return false;  
    }  
}

module.exports = Project;