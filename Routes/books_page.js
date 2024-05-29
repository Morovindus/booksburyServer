const express = require('express');
const router = express.Router();

const User = require('../Structure/Users');
const Book = require('../Structure/Book');

// Возврашаем поля книги по id, языку и размеру изображения
router.get('/book/bookById/:bookId/:lang/:imageType', async (req, res) => {
  try {
    const lang = req.params.lang;
    const bookId = req.params.bookId;
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

    // Ищем книгу по ее id, возвращаем только указанные поля
    const book = await Book.findOne({ _id: bookId }, fields);

    // Если книга с указанным id не найдена
    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }

    // Вычисляем среднюю оценку и количество отзывов
    const ratings = book.reviews.length;
    let averageStars = 0;
    if (ratings > 0) {
      const totalStars = book.reviews.reduce((acc, review) => acc + review.stars, 0);
      averageStars = Math.round(totalStars / ratings); // Округляем результат до ближайшего целого числа
    }

    // Формируем объект с данными книги и средней оценкой
    const formattedBook = {
      id: book._id,
      imageResource: book.images[imageType],
      titleBook: book[lang].title,
      nameAuthor: book[lang].authorName,
      stars: averageStars,
      ratings,
      price: book.price
    };

    // Возвращаем отформатированную книгу
    res.json(formattedBook);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});


// Маршрут для получения всех купленных книг по id пользователя
router.get('/api/users/:userId/purchasedBooks', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    const purchasedBooks = user.purchasedBooks;
    if (!purchasedBooks || purchasedBooks.length === 0) {
      return res.status(404).json({ message: '404' });
    }
    res.json(purchasedBooks);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения купленных книг пользователя', error: err });
  }
});

module.exports = router;