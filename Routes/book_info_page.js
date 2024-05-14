const express = require('express');
const router = express.Router();

const Book = require('../Structure/Book');

// Маршрут для получения synopsis конкретной книги по ее ID и языку
router.get('/:id/synopsis/:lang', async (req, res) => {
  const bookId = req.params.id;
  const lang = req.params.lang;
  
  try {
      const book = await Book.findOne({ _id: bookId }, `${lang}.synopsis`);
      if (!book) {
          return res.status(404).json({ message: 'Книга не найдена' });
      }
      res.json(book[lang].synopsis);
  } catch (err) {
      res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
    }
});

// Маршрут всех отзывов конкретной книги по ее ID
router.get(`/:id/reviews`, async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findOne({ _id: bookId });
    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }
    res.json(book.reviews);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения отзывов из базы данных', error: err });
  }
});

// Маршрут для получения определенных полей конкретной книги по ее ID и языку
router.get('/more/:id/:lang', async (req, res) => {
  const bookId = req.params.id;
  const lang = req.params.lang; // Получаем выбранный язык
  
  try {
      // Определяем поля книги для указанного языка
      const fields = {
          _id: 1,
          price: 1,
          released: 1,
          part: 1,
          page: 1,
          [`${lang}.title`]: 1,
          [`${lang}.authorName`]: 1,
          'images.middleCover': 1
      };
      
      const book = await Book.findOne({ _id: bookId }, fields);
      
      if (!book) {
           return res.status(404).json({ message: 'Книга не найдена' });
      }
      
      res.json(book);
  } catch (err) {
      res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

// Маршрут для получения details конкретной книги по ее ID и языку
router.get('/:id/details/:lang', async (req, res) => {
  const bookId = req.params.id;
  const lang = req.params.lang;
  
  try {
      // Находим книгу по ее ID, возвращаем только детали для указанного языка
      const book = await Book.findOne({ _id: bookId }, `${lang}.details`);
      if (!book) {
          return res.status(404).json({ message: 'Книга не найдена' });
      }
      // Отправляем только детали книги на указанном языке
      res.json(book[lang].details);
  } catch (err) {
      res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

// Маршрут для получения информации об авторе конкретной книги по ее ID и языку
router.get('/:id/author/:lang', async (req, res) => {
  const bookId = req.params.id;
  const lang = req.params.lang;
  
  try {
    // Определяем поля книги для указанного языка
    const fields = {
      _id: 1,
      [`${lang}.authorName`]: 1,
      [`${lang}.authorAbout`]: 1,
      'images.authorImage': 1
    };
  
    const book = await Book.findOne({ _id: bookId }, fields);

    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }
    const authorInfo = {
      authorName: book[lang].authorName,
      authorAbout: book[lang].authorAbout,
      authorImage: book.images.authorImage
    };
    res.json(authorInfo);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

module.exports = router;