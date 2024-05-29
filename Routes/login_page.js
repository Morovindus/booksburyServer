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
            res.send(user._id.toString()); // Если пользователь найден, возвращаем его id в виде строки
        } else {
            res.status(404).send('Пользователь не найден'); // Если пользователь не найден, возвращаем ошибку 404
        }
    } catch (err) {
        console.error('Ошибка при получении id пользователя:', err);
        res.status(500).send('Ошибка сервера');
    }
  });

// Запрос на проверку имени пользователя
router.get('/check_username/:username', async (req, res) => {
  const username = req.params.username;
  
  try {
      // Проверка имени пользователя в базе данных
      const user = await User.findOne({ username: username });
      if (user) {
        res.send('true'); // Если пользователь существует, возвращаем true
      } else {
        res.send('false'); // Если пользователь не существует, возвращаем false
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
          res.send('true'); // Если пароль совпадает, возвращаем "true"
      } else {
          res.send('false'); // Если пароль не совпадает, возвращаем "false"
      }
  } catch (err) {
      console.error('Ошибка при проверке пароля:', err);
      res.status(500).send('false'); // В случае ошибки также возвращаем "false"
  }
});

module.exports = router;