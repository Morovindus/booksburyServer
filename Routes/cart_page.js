const express = require('express');
const router = express.Router();

router.use(express.json());

const User = require('../Structure/Users');
const Book = require('../Structure/Book');

// Маршрут для получения названия книги по id книги
router.get('/titleBook/:bookId/:lang', async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const lang = req.params.lang;

    // Ищем книгу по ее id
    const book = await Book.findById(bookId);

    // Если книга с указанным id не найдена
    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }

    // Проверяем, существует ли название книги на указанном языке
    const title = book[lang].title;

    // Возвращаем название книги
    res.send(title);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

// Маршрут для получения всех уведомлений пользователя
router.get('/:userId/notifications', async (req, res) => {
  try {
    const userId = req.params.userId;
    
    // Найти пользователя по ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    // Проверить, что массив уведомлений не пуст
    if (!user.notifications || user.notifications.length === 0) {
      return res.status(400).json({ message: 'Массив уведомлений пользователя пуст' });
    }

    // Вернуть массив всех уведомлений пользователя
    res.json(user.notifications);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения уведомлений', error: err });
  }
});

// Маршрут для добавления книги в купленные книги
router.post('/add_purchased/:userId/:bookId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookId = parseInt(req.params.bookId);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    // Проверяем, есть ли уже книга в купленных
    if (user.purchasedBooks.includes(bookId)) {
      return res.status(400).json({ message: 'Книга уже в избранном' });
    }

    // Добавляем книгу в купленные
    user.purchasedBooks.push(bookId);
    await user.save();

    res.status(200).json({ message: 'Книга добавлена в купленные', purchasedBooks: user.purchasedBooks });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка добавления книги в купленное', error: err });
  }
});

// Маршрут для добавления нового уведомления
router.post('/:userId/new_notifications', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { bookId, time, image } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const newNotification = {
      bookId: bookId,
      time: time,
      image: image
    };

    user.notifications.push(newNotification);
    await user.save();

    res.status(201).json({ message: 'Уведомление добавлено', notification: newNotification });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка добавления уведомления', error: err });
  }
});

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