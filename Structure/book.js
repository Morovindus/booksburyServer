const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: Number,
  nameUser: String,
  date: String,
  textUser: String,
  stars: Number
});

const bookSchema = new mongoose.Schema({
  _id: Number,
  price: Number,
  released: Number,
  part: Number,
  page: Number,
  en: {
    title: String,
    synopsis: String,
    details: String,
    authorName: String,
    authorAbout: String,
    genre: String,
    book: String, // Ссылка на PDF
    bookAudio: String // Ссылка на аудиофайл
  },

  ru: {
    title: String,
    synopsis: String,
    details: String,
    authorName: String,
    authorAbout: String,
    genre: String,
    book: String, // Ссылка на PDF
    bookAudio: String // Ссылка на аудиофайл
  },

  images: {
    bigCover: String, // Ссылка на большое изображение обложки
    middleCover: String,  //Ссылка на среднее изображение обложки
    averageCover: String,
    smallCover: String, // Ссылка на маленькое изображение обложки
    authorImage: String // Ссылка на изображение автора
  },
  
  reviews: [reviewSchema] // Массив отзывов
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;