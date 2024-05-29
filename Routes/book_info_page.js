const express = require('express');
const router = express.Router();

const Book = require('../Structure/Book');

router.use(express.json());

// Маршрут для получения mp3 книги
router.get('/:id/mp3/:lang', async (req, res) => {
  const bookId = req.params.id;
  const lang = req.params.lang;

  try {
    const book = await Book.findOne({ _id: bookId }, `${lang}.bookAudio`);
    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }
    res.json({ audioUrl: book[lang].bookAudio });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

// Маршрут для получения pdf книги
router.get('/:id/pdf/:lang', async (req, res) => {
  const bookId = req.params.id;
  const lang = req.params.lang;

  try {
    const book = await Book.findOne({ _id: bookId }, `${lang}.book`);
    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }
    res.json({ pdfUrl: book[lang].book });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных', error: err });
  }
});

// Маршрут для добавления нового отзыва
router.post('/:bookId/reviews', async (req, res) => {
  const { bookId } = req.params;
  const { _id, nameUser, date, textUser, stars } = req.body;

  // Создание нового отзыва
  const newReview = {
    _id,
    nameUser,
    date,
    textUser,
    stars
  };

  try {
    // Найти книгу по ID и добавить новый отзыв в массив отзывов
    const book = await Book.findByIdAndUpdate(
      bookId,
      { $push: { reviews: newReview } },
      { new: true, useFindAndModify: false }
    );

    if (!book) {
      return res.status(404).send('Книга не найдена');
    }

    res.status(200).json(book);
  } catch (error) {
    console.error('Ошибка при добавлении отзыва:', error);
    res.status(500).send('Ошибка сетевого соединения');
  }
});

// Маршрут для получения synopsis конкретной книги по ее ID и языку
router.get('/:id/synopsis/:lang', async (req, res) => {
  const bookId = req.params.id;
  const lang = req.params.lang;
  
  try {
      const book = await Book.findOne({ _id: bookId }, `${lang}.synopsis`);
      if (!book) {
          return res.status(404).json({ message: 'Книга не найдена' });
      }
      res.send(book[lang].synopsis);
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
  const lang = req.params.lang;

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
      
      // Динамически формируем ответ
      const response = {
          _id: book._id,
          price: book.price,
          released: book.released,
          part: book.part,
          page: book.page,
          title: book[lang].title,
          authorName: book[lang].authorName,
          images: book.images.middleCover
      };

      res.json(response);
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
      res.send(book[lang].details);
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