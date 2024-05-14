const express = require('express');
const router = express.Router();

const User = require('../Structure/Users');

// Маршрут для получения всех купленных книг по id пользователя
router.get('/:userId/favoriteBooks', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    const favoriteBooks = user.favoriteBooks;
    if (!favoriteBooks || favoriteBooks.length === 0) {
      return res.status(404).json({ message: '404' });
    }
    res.json(favoriteBooks);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения купленных книг пользователя', error: err });
  }
});

module.exports = router;