const express = require('express')
const userController = require('./controllers/userController')
const projectController = require('./controllers/projectController')
const taskController = require('./controllers/taskController')
const app = express()

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/user', userController.insert);
app.get('/user', userController.findAll);
app.put('/user/:id', userController.update);
app.delete('/user/:id', userController.remove);

app.post('/project', projectController.insert);
app.get('/project', projectController.findAll);
app.put('/project/:id', projectController.update);
app.delete('/project/:id', projectController.remove);

app.post('/task', taskController.insert);
app.get('/task', taskController.findAll);
app.put('/task/:id', taskController.update);
app.delete('/task/:id', taskController.remove);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})