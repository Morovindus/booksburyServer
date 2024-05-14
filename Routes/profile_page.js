const express = require('express');
const router = express.Router();

const User = require('../Structure/Users');

// Маршрут для получения имени и email по id пользователя
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId; // Получаем ID пользователя из запроса
  try {
    const user = await User.findById(userId); // Находим пользователя по ID
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    const { username, email } = user; // Извлекаем имя и email пользователя
    res.json({ username, email }); // Отправляем имя и email пользователя в ответе
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных' });
  }
});

module.exports = router;