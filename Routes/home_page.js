const express = require('express');
const router = express.Router();

const Book = require('../Structure/Book.js');

// Маршрут для получения 1 случайной книги
router.get('/randomBook/:lang/:imageType', async (req, res) => {
  try {
    const lang = req.params.lang;
    const imageType = req.params.imageType;

    // Поля, которые будут возвращены в зависимости от выбранного языка и типа изображения
    const fields = {
      _id: 1,
      price: 1,
      [`${lang}.title`]: 1,
      [`${lang}.authorName`]: 1,
      'reviews.length': 1,
      'reviews.stars': 1
    };

    // Добавляем поле для указанного языка и типа изображения
    fields[`images.${imageType}`] = 1;

    // Получаем случайную книгу из коллекции
    const randomBook = await Book.aggregate([
      { $sample: { size: 1 } }, // Выбираем одну случайную книгу
      { $project: fields } // Выбираем только нужные поля
    ]);

    // Если книга не найдена
    if (!randomBook || randomBook.length === 0) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }

    // Вычисляем среднюю оценку и количество отзывов
    const ratings = randomBook[0].reviews.length;
    let averageStars = 0;
    if (ratings > 0) {
      const totalStars = randomBook[0].reviews.reduce((acc, review) => acc + review.stars, 0);
      averageStars = Math.round(totalStars / ratings); // Округляем результат до ближайшего целого числа
    }

    // Формируем объект с данными книги и средней оценкой
    const formattedBook = {
      _id: randomBook[0]._id,
      price: randomBook[0].price,
      title: randomBook[0][lang].title,
      authorName: randomBook[0][lang].authorName,
      [imageType]: randomBook[0].images[imageType], // Добавляем поле для выбранного типа изображения
      ratings,
      averageStars
    };

    // Возвращаем отформатированную книгу
    res.json(formattedBook);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

// Маршрут для получения 10 случайных книг
router.get('/special/random/:lang', async (req, res) => {
  try {
    const lang = req.params.lang;

    // Получаем 10 случайных книг
    const randomBooks = await Book.aggregate([
      { $sample: { size: 10 } }
    ]);

    // Преобразуем каждую случайную книгу, вычисляя среднюю оценку и количество отзывов
    const specialBooks = await Promise.all(randomBooks.map(async (book) => {
      const ratings = book.reviews.length;
      let averageStars = 0;
      if (ratings > 0) {
        const totalStars = book.reviews.reduce((acc, review) => acc + review.stars, 0);
        averageStars = Math.round(totalStars / ratings); // Округляем результат до ближайшего целого числа
      }
      return {
        _id: book._id,
        price: book.price,
        title: book[lang].title,
        authorName: book[lang].authorName,
        smallCover: book.images.smallCover,
        ratings,
        averageStars
      };
    }));

    res.json(specialBooks);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});


// Маршрут для получения _id каждой книги
router.get('/ids', async (req, res) => {
  try {
    const books = await Book.find({}, '_id');
    const ids = books.map(book => book._id); // Преобразование в массив _id
    res.json(ids);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения _id книг', error: err });
  }
});

// Маршрут для получения изображения автора по id книги
router.get('/authorImage/:bookId', async (req, res) => {
  try {
    const bookId = req.params.bookId;

    // Ищем книгу по ее id
    const book = await Book.findById(bookId);

    // Если книга с указанным id не найдена
    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }

    // Возвращаем изображение автора
    res.json({ imageAuthor: book.images.authorImage });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

module.exports = router;