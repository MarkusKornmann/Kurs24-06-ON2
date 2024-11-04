import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());
server.use(express.json());

let todos = [];

const loadTodos = async () => {
    try {
        const data = await fs.readFile('todos.json', 'utf8');
        todos = JSON.parse(data);
    } catch (err) {
        console.error('Fehler beim Laden der Todos:', err);
    }
};

const saveTodos = async () => {
    try {
        await fs.writeFile('todos.json', JSON.stringify(todos, null, 2));
    } catch (err) {
        console.error('Fehler beim Speichern der Todos:', err);
    }
};

loadTodos();

server.get("/todos", (req, res) => {
    console.log("Ich bekomme ein Get");
    res.json(todos);
});

server.post("/todos", async (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    await saveTodos();
    res.status(201).json(newTodo);
});

console.log("Server Online");
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

