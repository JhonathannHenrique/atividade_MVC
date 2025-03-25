const express = require('express');
const UsersController = require('./controllers/userController');
const ProjectsController = require('./controllers/projectController');
const TasksController = require('./controllers/taskController');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/users', UsersController.insert);
app.get('/users', UsersController.findAll);
app.delete('/users/:id', UsersController.deleteUser);

app.post('/projects', ProjectsController.insert);
app.get('/projects', ProjectsController.findAll);

app.post('/tasks', TasksController.insert);
app.get('/tasks', TasksController.findAll);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});