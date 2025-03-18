const Task = require('../models/task')

class TaskController {
    
    static insert(req, res) {
        const { id, title, status, id_project, id_user} = req.body

        const task = new Task(id, title, status, id_project, id_user)
        task.save()

        res.status(201).json(task)
    }

    static findAll(req, res) {
        const tasks = Task.findAll()

        res.json(tasks)
    }
}

module.exports = TaskController;

