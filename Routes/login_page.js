const express = require('express');
const router = express.Router();

const User = require('../Structure/Users');

// Запрос на получение id пользователя по имени
router.get('/get_user_id/:username', async (req, res) => {
  const username = req.params.username;
  
  try {
      // Поиск пользователя в базе данных по имени
      const user = await User.findOne({ username: username });
      if (user) {
          res.json({ id: user._id }); // Если пользователь найден, возвращаем его id
      } else {
          res.status(404).json({ message: 'Пользователь не найден' }); // Если пользователь не найден, возвращаем ошибку 404
      }
  } catch (err) {
      console.error('Ошибка при получении id пользователя:', err);
      res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Запрос на проверку имени пользователя
router.get('/check_username/:username', async (req, res) => {
  const username = req.params.username;
  
  try {
      // Проверка имени пользователя в базе данных
      const user = await User.findOne({ username: username });
      if (user) {
          res.json({ exists: true }); // Если пользователь существует, возвращаем true
      } else {
          res.json({ exists: false }); // Если пользователь не существует, возвращаем false
      }
  } catch (err) {
      console.error('Ошибка при проверке имени пользователя:', err);
      res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Запрос на проверку совпадения пароля
router.get('/check_password/:username/:password', async (req, res) => {
  const username = req.params.username;
  const password = req.params.password;

  try {
      // Проверка совпадения пароля для указанного имени пользователя
      const user = await User.findOne({ username: username, password: password });
      if (user) {
          res.json({ match: true }); // Если пароль совпадает, возвращаем true
      } else {
          res.json({ match: false }); // Если пароль не совпадает, возвращаем false
      }
  } catch (err) {
      console.error('Ошибка при проверке пароля:', err);
      res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;