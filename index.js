const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Book = require('./Structure/Book'); // Импортируем модель Book
//const User = require('./Structure/Users'); // Импортируем модель User

const app = express();
const port = 3000;

//const imagesFolderPath = path.join(__dirname, 'Images');

// Импортируем маршруты
const homeRoutes = require('./Routes/home_page');
const cartRoutes = require('./Routes/cart_page');
const profileRoutes = require('./Routes/profile_page');
const booksRoutes = require('./Routes/books_page');
const bookInfoRoutes = require('./Routes/book_info_page');
const favoriteRoutes = require('./Routes/favorite_page');
const exploreRoutes = require('./Routes/explore_page');
const loginRoutes = require('./Routes/login_page');
const registrationRoutes = require('./Routes/registration_page');

// Используем маршруты
app.use('/api/books', homeRoutes);
app.use('/api/users', cartRoutes);
app.use('/api/user', profileRoutes);
app.use('', booksRoutes);
app.use('/api/books', bookInfoRoutes);
app.use('/api/users', favoriteRoutes);
app.use('', exploreRoutes);
app.use('/api', loginRoutes);
app.use('/api', registrationRoutes);

// Настройка статического обслуживания файлов из папки images
app.use('/images', express.static(path.join(__dirname, 'Images')));

app.use(express.json());


// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/booksbury')
  .then(() => console.log('Подключение к MongoDB успешно'))
  .catch(err => console.error('Ошибка подключения к MongoDB:', err));


// Маршрут для получения всех книг
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения данных из базы данных' });
  }
});


app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});