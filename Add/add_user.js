const mongoose = require('mongoose');
const User = require('../Structure/Users'); // Импортируем модель User

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/booksbury', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Подключение к MongoDB успешно');

    // Создаем нового пользователя с пустыми массивами
    const newUser = new User({
      _id: 592708,
      username: 'Onyia Chikamso',
      email: 'onyua_chikamso@gmail.com',
      password: '1234',
      notifications: [],
      purchasedBooks: [],
      favoriteBooks: [],
      cart: []
    });

    // Сохраняем пользователя в базе данных
    newUser.save()
      .then(savedUser => {
        console.log('Пользователь успешно добавлен:', savedUser);
        mongoose.disconnect(); // Закрываем соединение с базой данных
        process.exit(); // Завершаем работу скрипта
      })
      .catch(err => {
        console.error('Ошибка при добавлении пользователя в базу данных:', err);
        mongoose.disconnect(); // Закрываем соединение с базой данных
        process.exit(1); // Завершаем работу скрипта с ошибкой
      });
  })
  .catch(err => {
    console.error('Ошибка подключения к MongoDB:', err);
  });