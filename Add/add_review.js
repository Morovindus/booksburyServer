const mongoose = require('mongoose');

// Подключение к базе данных
mongoose.connect('mongodb://localhost:27017/booksbury', { useNewUrlParser: true, useUnifiedTopology: true });

// Модель для книг
const Book = require('./Book');

// Функция для добавления нового отзыва к книге с определенным ID
async function addReviewToBook(bookId, newReview) {
  try {
    // Используем метод findOneAndUpdate для поиска книги по ID и добавления нового отзыва в массив отзывов
    const updatedBook = await Book.findOneAndUpdate(
      { _id: bookId }, // Условие поиска
      { $push: { reviews: newReview } }, // Оператор $push для добавления нового отзыва в массив
      { new: true } // Параметр new: true возвращает обновленный документ
    );
    return updatedBook;
  } catch (err) {
    console.error('Ошибка при добавлении отзыва:', err);
    return null;
  }
}

// Пример использования функции
const newReview = {
  _id: 476070, // ID нового отзыва
  nameUser: 'Sophia Reynolds',
  date: '12 May 2024',
  textUser: '"The Homeric Hymns" is a timeless treasure trove of Greek mythology that effortlessly captivates the imagination. Authored by the renowned poet Homer, this collection of hymns offers a mesmerizing glimpse into the world of ancient Greece, where gods and mortals intertwine in epic tales of love, betrayal, and heroism. As I delved into these enchanting narratives, I found myself entranced by Homers masterful command of language and his ability to evoke the splendor of Mount Olympus and the depths of the human soul. Each hymn is a testament to the enduring power of storytelling, serving as a bridge between the past and the present, and reminding us of the timeless themes that unite humanity across cultures and epochs.',
  stars: 3
};

const bookId = 124729; // ID книги, к которой добавляем отзыв
addReviewToBook(bookId, newReview)
  .then(updatedBook => {
    if (updatedBook) {
      console.log('Новый отзыв успешно добавлен:', updatedBook);
    } else {
      console.log('Книга не найдена');
    }
    mongoose.disconnect(); // Закрываем соединение с базой данных
  })
  .catch(err => {
    console.error('Ошибка:', err);
    mongoose.disconnect(); // Закрываем соединение с базой данных в случае ошибки
  });