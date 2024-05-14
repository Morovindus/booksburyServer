const express = require('express');
const router = express.Router();

const User = require('../Structure/Users');

// Маршрут для удаления книги из корзины по id книги и id пользователя
router.delete('/:userId/cart/:bookId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookId = req.params.bookId;

    // Находим пользователя по userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    // Проверяем, содержит ли корзина пользователя указанную книгу
    const index = user.cart.indexOf(bookId);
    if (index === -1) {
      return res.status(404).json({ message: 'Книга не найдена в корзине пользователя' });
    }

    // Удаляем книгу из корзины пользователя
    user.cart.splice(index, 1);

    // Сохраняем обновленного пользователя в базе данных
    await user.save();

    res.json({ message: 'Книга успешно удалена из корзины пользователя' });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при удалении книги из корзины пользователя', error: err });
  }
});

// Маршрут для получения всех книг находящихся в корзине по id пользователя
router.get('/:userId/cart', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    const cartItems = user.cart;
    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ message: '404' });
    }
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения элементов корзины пользователя', error: err });
  }
});

module.exports = router;