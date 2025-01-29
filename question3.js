const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST /register route handler
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    // In a real application, you would save the data to a database here
    // For now, just return a success message

    res.status(200).json({
        message: 'Registration successful!',
        user: { name, email }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
