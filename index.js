const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

//This code snippet to redirect the user to index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Route to get all users
app.get('/users', (req, res) => {
    console.log('req.body:', req.body);
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
            return;
        }
        res.json(results);
    });
});

// Route to add a new user to the database
app.post('/add-user', (req, res) => {
    console.log('req.body:', req.body);
    const { name, email, password } = req.body;
    const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send('User added successfully');
    });
});

// Route to update an existing user in the database
app.put('/update-user', (req, res) => {
    const { id, name, email, password } = req.body;
    const query = `UPDATE users SET name = '${name}', email = '${email}', password ='${password}' WHERE id = ${id}`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send('User updated successfully');
    });
});

// Route to delete an existing user in the database
app.post('/delete-user', (req, res) => {
    const { id } = req.body;
    const query = `DELETE FROM users WHERE id = ${id}`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send('User deleted successfully');
    });
});



// New Route for user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            res.status(500).send('Server error');
            return;
        }

        if (results.length > 0) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

// New Route for searching users by name or email
app.get('/search', (req, res) => {
    const { term } = req.query;
    const query = 'SELECT * FROM users WHERE name LIKE ? OR email LIKE ?';

    db.query(query, [`%${term}%`, `%${term}%`], (err, results) => {
        if (err) {
            console.error('Error during search:', err);
            res.status(500).send('Error during search');
            return;
        }

        res.json(results);
    });
});

