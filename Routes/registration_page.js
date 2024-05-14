const express = require('express');
const router = express.Router();

const User = require('../Structure/Users');

router.use(express.json());

// Маршрут для добавления нового пользователя
router.post('/new_user', async (req, res) => {
    try {
      // Получаем данные нового пользователя из запроса
      const userData = req.body;
  
      // Создаем нового пользователя
      const newUser = new User(userData);
  
      // Сохраняем нового пользователя в базе данных
      const savedUser = await newUser.save();
  
      res.json(savedUser);
    } catch (err) {
        console.log(err)
      res.status(500).json({ message: 'Ошибка при добавлении нового пользователя', error: err });
    }
});

// Маршрут для получения всех id пользователей
router.get('/users/ids', async (req, res) => {
    try {
      const users = await User.find({}, '_id');
      res.json(users);
    } catch (err) {
        console.log(err)
      res.status(500).json({ message: 'Ошибка получения _id пользователей', error: err });
    }
});

module.exports = router;