const Task = require('../models/task');  

class taskController {  
    static insert(req, res) {  
        const { title, idProject, idUser } = req.body;  
        const id = Task.fetchAll().length + 1;  
        const task = new task(id, title, false, idProject, idUser); 
        task.save();  
        res.status(201).json(task);  
    }  

    static findAll(req, res) {  
        const task = Task.fetchAll();  
        res.json(task);  
    }  
 
    static update(req, res) {  
        const { id } = req.params;  
        const { title, status } = req.body;  
        const taskAtualizada = Task.update(parseInt(id), title, status);  
        if (taskAtualizada) {  
            res.json(taskAtualizada);  
        } else {  
            res.status(404).json({ message: 'task não encontrada' });  
        }  
    }  

    static remove(req, res) {  
        const { id } = req.params;  
        const taskDeletada = Task.delete(parseInt(id));  
        if (taskDeletada) {  
            res.status(204).send(); 
        } else {  
            res.status(404).json({ message: 'task não encontrada' });  
        }  
    }  
}  

module.exports = taskController;  