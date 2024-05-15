const express = require('express');
const router = express.Router();

router.use(express.json());

const User = require('../Structure/Users');

// Маршрут для добавления книги в избранное
router.post('/add_favorite/:userId/:bookId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = parseInt(req.params.bookId);
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
  
      // Проверяем, есть ли уже книга в корзине
      if (user.favoriteBooks.includes(bookId)) {
        return res.status(400).json({ message: 'Книга уже в избранном' });
      }
  
      // Добавляем книгу в корзину
      user.favoriteBooks.push(bookId);
      await user.save();
  
      res.status(200).json({ message: 'Книга добавлена в избранное', favoriteBooks: user.favoriteBooks });
    } catch (err) {
      res.status(500).json({ message: 'Ошибка добавления книги в избранное', error: err });
    }
  });

// Маршрут для удаления книги из избранного по id книги и id пользователя
router.delete('/api/users/:userId/deleteFavorite/:bookId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = req.params.bookId;
  
      // Находим пользователя по userId
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
  
      // Проверяем, содержит ли корзина пользователя указанную книгу
      const index = user.favoriteBooks.indexOf(bookId);
      if (index === -1) {
        return res.status(404).json({ message: 'Книга не найдена в избранном' });
      }
  
      // Удаляем книгу из корзины пользователя
      user.favoriteBooks.splice(index, 1);
  
      // Сохраняем обновленного пользователя в базе данных
      await user.save();
  
      res.json({ message: 'Книга успешно удалена из избранного' });
    } catch (err) {
      res.status(500).json({ message: 'Ошибка при удалении книги из избранного', error: err });
    }
  });

// Маршрут для проверки наличия книги в корзине пользователя по ID пользователя и ID книги
router.get('/:userId/cart/:bookId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookId = Number(req.params.bookId);

    // Ищем пользователя по ID
    const user = await User.findById(userId);

    // Если пользователь не найден
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    // Проверяем, есть ли книга в корзине пользователя
    const isBookInCart = user.cart.includes(bookId);

    // Возвращаем результат проверки
    res.json({ isBookInCart });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка проверки книги в корзине пользователя', error: err });
  }
});

// Маршрут для проверки наличия книги в купленных книга пользователя по ID пользователя и ID книги
router.get('/:userId/purchasedBooks/:bookId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = Number(req.params.bookId);
  
      // Ищем пользователя по ID
      const user = await User.findById(userId);
  
      // Если пользователь не найден
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
  
      // Проверяем, есть ли книга в уже купленных книгах
      const isBookPurchased = user.purchasedBooks.includes(bookId);
  
      // Возвращаем результат проверки
      res.json({ isBookPurchased });
    } catch (err) {
      res.status(500).json({ message: 'Ошибка проверки книги в купленных книгах', error: err });
    }
  });

// Маршрут для проверки наличия книги в избранных книгах пользователя по ID пользователя и ID книги
router.get('/:userId/favoriteBooks/:bookId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = Number(req.params.bookId);
  
      // Ищем пользователя по ID
      const user = await User.findById(userId);
  
      // Если пользователь не найден
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
  
      // Проверяем, есть ли книга в уже купленных книгах
      const isBookFavorite = user.favoriteBooks.includes(bookId);
  
      // Возвращаем результат проверки
      res.json({ isBookFavorite });
    } catch (err) {
      res.status(500).json({ message: 'Ошибка проверки книги в избранных книгах', error: err });
    }
  });

// Маршрут для добавления книги в корзину пользователя
router.post('/add_cart/:userId/:bookId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookId = parseInt(req.params.bookId);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    // Проверяем, есть ли уже книга в корзине
    if (user.cart.includes(bookId)) {
      return res.status(400).json({ message: 'Книга уже в корзине' });
    }

    // Добавляем книгу в корзину
    user.cart.push(bookId);
    await user.save();

    res.status(200).json({ message: 'Книга добавлена в корзину', cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка добавления книги в корзину', error: err });
  }
});

module.exports = router;