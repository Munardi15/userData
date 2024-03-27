const express = require('express');
const router = express.Router();
const userController = require('./src/controller/userController');
const { generateToken, authenticateToken } = require('./src/middleware/auth');

router.post('/auth', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'admin' && password === 'admin123') {
        const token = generateToken({ username });
        return res.json({ token });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});
router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.post('/users', authenticateToken, userController.createUser);
router.get('/users', authenticateToken, userController.getUsers);
router.get('/users/:id', authenticateToken, userController.getUserById);
router.put('/users/:id', authenticateToken, userController.updateUser);
router.delete('/users/:id', authenticateToken, userController.deleteUser);

module.exports = router;
