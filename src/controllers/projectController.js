const Project = require('../models/project');  

class projectController {   
    static insert(req, res) {  
        const { name, descrition } = req.body;  
        const id = Project.fetchAll().length + 1;
        const project = new project(id, name, descrition);  
        project.save();  
        res.status(201).json(project);  
    }  

    static findAll(req, res) {  
        const projects = Project.fetchAll();  
        res.json(projects);  
    }  

    static update(req, res) {  
        const { id } = req.params;  
        const { name, descrition } = req.body;  
        const projectAtualizado = Project.update(parseInt(id), name, descrition);  
        if (projectAtualizado) {  
            res.json(projectAtualizado);  
        } else {  
            res.status(404).json({ message: 'project não encontrado' });  
        }  
    }  

    static remove(req, res) {  
        const { id } = req.params;  
        const projectDeletado = Project.delete(parseInt(id));  
        if (projectDeletado) {  
            res.status(204).send(); 
        } else {  
            res.status(404).json({ message: 'project não encontrado' });  
        }  
    }  
}  

module.exports = projectController;  