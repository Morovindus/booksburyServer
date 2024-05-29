const express = require('express');
const router = express.Router();

const Book = require('../Structure/Book.js');

router.use(express.json());

// Маршрут для поиска книг по названию
router.get('/search', async (req, res) => {
  const query = req.query.query;
  const language = req.query.language;

  try {
    const languageField = `${language}.title`;

    const books = await Book.find({
      [languageField]: { $regex: query, $options: 'i' }
    });

    if (books.length === 0 || query == "") {
      return res.status(404).json({ message: 'Книги не найдены' });
    }

    // Преобразуем каждую книгу, чтобы возвращать только необходимые поля
    const formattedBooks = books.map(book => ({
      id: book._id,
      imageResource: book.images.smallCover,
      titleBook: book[language].title,
      nameAuthor: book[language].authorName,
      stars: calculateAverageStars(book.reviews),
      ratings: book.reviews.length,
      price: book.price
    }));

    res.json(formattedBooks);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

// Функция для вычисления средней оценки
function calculateAverageStars(reviews) {
  if (reviews.length === 0) return 0;
  
  const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
  return Math.round(totalStars / reviews.length); // Округляем результат до ближайшего целого числа
}

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

    // Формируем объект с данными книги и средней оценкой
    const formattedBook = {
      id: randomBook[0]._id,
      imageResource: randomBook[0].images[imageType],
      titleBook: randomBook[0][lang].title,
      nameAuthor: randomBook[0][lang].authorName,
      stars: calculateAverageStars(randomBook[0].reviews),
      ratings: randomBook[0].reviews.length,
      price: randomBook[0].price
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
        id: book._id,
        imageResource: book.images.smallCover,
        titleBook: book[lang].title,
        nameAuthor: book[lang].authorName,
        stars: averageStars,
        ratings,
        price: book.price
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
    res.send(book.images.authorImage);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

module.exports = router;