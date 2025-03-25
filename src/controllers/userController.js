const User = require('../models/user');  

class userController {  
    static insert(req, res) {  
        const { name, email, password } = req.body;  
        const id = User.fetchAll().length + 1;  
        const user = new User(id, name, email, password);  
        user.save();  
        res.status(201).json(user);  
    }  
 
    static findAll(req, res) {  
        const users = User.fetchAll();  
        res.json(users);  
    }  

    static update(req, res) {  
        const { id } = req.params;  
        const { name, email, password } = req.body;  
        const userAtualizado = User.update(parseInt(id), name, email, password);  
        if (userAtualizado) {  
            res.json(userAtualizado);  
        } else {  
            res.status(404).json({ message: 'Usuário não encontrado' });  
        }  
    }  

    static remove(req, res) {  
        const { id } = req.params;  
        const userDeletado = User.delete(parseInt(id));  
        if (userDeletado) {  
            res.status(204).send();  
        } else {  
            res.status(404).json({ message: 'Usuário não encontrado' });  
        }  
    }  
}  

module.exports = userController;  