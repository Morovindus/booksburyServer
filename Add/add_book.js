const mongoose = require('mongoose');
const Book = require('../Structure/Book');

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/booksbury', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Подключение к MongoDB успешно');

    // Создаем новую книгу
    const newBook = new Book({
      _id: '190430',
      price: 1500,
      released: -380,
      part: 1,
      page: 416,
      en: {
        "title": "The Republic",
        "synopsis": "Plato's 'The Republic' is a seminal work in Western philosophy, exploring the meaning of justice, the nature of a just society, and the role of the individual within it. Through a series of dialogues, primarily between Socrates and other Athenians, Plato examines the ideal state and the philosopher-king who would rule it.",
        "details": "'The Republic' delves into various philosophical themes, including the theory of forms, the immortality of the soul, and the role of education. Plato's vision of a utopian society is both a critique of contemporary Athenian politics and a timeless reflection on the human condition. The dialogues discuss the virtues necessary for the ruling class, the structure of the ideal city-state, and the relationship between the individual and the collective.",
        "authorName": "Plato",
        "authorAbout": "Plato was a philosopher in Classical Greece and the founder of the Academy in Athens, the first institution of higher learning in the Western world. A student of Socrates and the teacher of Aristotle, Plato's works have profoundly influenced Western thought and philosophy.",
        "genre": "Philosophy",
        "book": "http://192.168.1.42:3000/Database/books/en/PDF/The_Republic.pdf",
        "bookAudio": "http://192.168.1.42:3000/Database/books/en/Audio/The_Republic.mp3"
      },
      ru: {
        "title": "Государство",
        "synopsis": "'Государство' Платона — это основополагающее произведение в западной философии, исследующее смысл справедливости, природу справедливого общества и роль личности в нем. Через серию диалогов, главным образом между Сократом и другими афинянами, Платон рассматривает идеальное государство и философа-царя, который должен им править.",
        "details": "'Государство' углубляется в различные философские темы, включая теорию форм, бессмертие души и роль образования. Видение Платона утопического общества является одновременно критикой современной ему афинской политики и вечным размышлением о человеческой природе. Диалоги обсуждают добродетели, необходимые правящему классу, структуру идеального города-государства и взаимоотношения между личностью и коллективом.",
        "authorName": "Платон",
        "authorAbout": "Платон был философом классической Греции и основателем Академии в Афинах, первого высшего учебного заведения в западном мире. Ученик Сократа и учитель Аристотеля, работы Платона глубоко повлияли на западную мысль и философию.",
        "genre": "Философия",
        "book": "http://192.168.1.42:3000/Database/books/ru/PDF/The_Republic.pdf",
        "bookAudio": "http://192.168.1.42:3000/Database/books/ru/Audio/The_Republic.mp3"
      },
      images: {
        bigCover: "http://192.168.1.42:3000/Images/The_Republic/bigPicture.png",
        middleCover: "http://192.168.1.42:3000/Images/The_Republic/middlePicture.png",
        averageCover: "http://192.168.1.42:3000/Images/The_Republic/averagePicture.png",
        smallCover: "http://192.168.1.42:3000/Images/The_Republic/smallPicture.png",
        authorImage: "http://192.168.1.42:3000/Images/The_Republic/authorPicture.png"
      },

      reviews: [
        {
          "_id": 654321,
          "nameUser": "Ethan Anderson",
          "date": "10 Jan 2024",
          "textUser": "A timeless classic! 'The Republic' by Plato offers profound insights into justice, society, and the human soul. The philosophical arguments are as relevant today as they were in ancient times.",
          "stars": 5
        },
        {
          "_id": 876543,
          "nameUser": "Sophia Wilson",
          "date": "22 Feb 2024",
          "textUser": "A must-read for anyone interested in philosophy! Plato's 'The Republic' delves deep into concepts of justice, politics, and morality. The dialogues are thought-provoking and engaging.",
          "stars": 5
        },
        {
          "_id": 432189,
          "nameUser": "Liam Johnson",
          "date": "14 Mar 2024",
          "textUser": "An enlightening read! 'The Republic' presents complex philosophical ideas in a dialogue format that is both engaging and intellectually stimulating. A foundational text in Western philosophy.",
          "stars": 5
        },
        {
          "_id": 564738,
          "nameUser": "Isabella Martinez",
          "date": "6 Apr 2024",
          "textUser": "A profound exploration of justice and society. Plato's 'The Republic' is a thought-provoking work that challenges readers to think deeply about the nature of a just society.",
          "stars": 5
        },
        {
          "_id": 789456,
          "nameUser": "James Davis",
          "date": "18 May 2024",
          "textUser": "Highly recommended for students of philosophy! 'The Republic' by Plato explores essential themes of justice, governance, and the ideal state through Socratic dialogue.",
          "stars": 5
        },
        {
          "_id": 321789,
          "nameUser": "Emily Taylor",
          "date": "30 Jun 2024",
          "textUser": "A captivating philosophical journey! 'The Republic' offers deep insights into Plato's vision of a just society and the philosopher-king. The dialogues are rich with meaning and relevance.",
          "stars": 5
        },
        {
          "_id": 987654,
          "nameUser": "Noah Brown",
          "date": "12 Jul 2024",
          "textUser": "A cornerstone of Western philosophy! 'The Republic' by Plato explores profound questions about justice, governance, and the ideal state. A challenging but rewarding read.",
          "stars": 5
        },
        {
          "_id": 456789,
          "nameUser": "Olivia Garcia",
          "date": "24 Aug 2024",
          "textUser": "An essential read for anyone interested in political philosophy! 'The Republic' offers a comprehensive examination of justice, the ideal state, and the role of the philosopher in society.",
          "stars": 5
        },
        {
          "_id": 321456,
          "nameUser": "William Hernandez",
          "date": "5 Sep 2024",
          "textUser": "A timeless masterpiece! Plato's 'The Republic' explores fundamental questions about justice and the ideal state through engaging dialogues. A must-read for philosophy enthusiasts.",
          "stars": 5
        },
        {
          "_id": 789123,
          "nameUser": "Ava Martinez",
          "date": "17 Oct 2024",
          "textUser": "Thought-provoking and profound! 'The Republic' by Plato examines the nature of justice and the ideal society. The philosophical discussions are as relevant today as they were in ancient Greece.",
          "stars": 5
        },
        {
          "_id": 654987,
          "nameUser": "Lucas Thompson",
          "date": "29 Nov 2024",
          "textUser": "A must-read for any student of philosophy! 'The Republic' presents Plato's vision of a just society and the philosopher-king through compelling dialogues. Rich with intellectual depth.",
          "stars": 5
        },
        {
          "_id": 123789,
          "nameUser": "Mia Johnson",
          "date": "11 Dec 2024",
          "textUser": "An enlightening journey into the world of Plato's philosophy! 'The Republic' offers profound insights into justice, governance, and the human soul. A foundational text in Western thought.",
          "stars": 5
        },
        {
          "_id": 456123,
          "nameUser": "Ethan Robinson",
          "date": "23 Jan 2024",
          "textUser": "A deep and thought-provoking read! 'The Republic' by Plato explores complex ideas about justice, politics, and the ideal state through engaging Socratic dialogues.",
          "stars": 5
        },
        {
          "_id": 987321,
          "nameUser": "Emma Gonzalez",
          "date": "5 Feb 2024",
          "textUser": "A profound exploration of justice and the ideal state! Plato's 'The Republic' presents philosophical arguments that challenge readers to think deeply about society and governance.",
          "stars": 5
        },
        {
          "_id": 789654,
          "nameUser": "Oliver Smith",
          "date": "17 Mar 2024",
          "textUser": "An essential text in Western philosophy! 'The Republic' by Plato offers a detailed examination of justice, the ideal society, and the role of the philosopher. A must-read for anyone interested in philosophy.",
          "stars": 5
        },
        {
          "_id": 456789,
          "nameUser": "Charlotte Martinez",
          "date": "29 Apr 2024",
          "textUser": "Highly engaging and intellectually stimulating! 'The Republic' presents Plato's vision of a just society through thought-provoking dialogues. A foundational work in political philosophy.",
          "stars": 5
        },
        {
          "_id": 321987,
          "nameUser": "James Lewis",
          "date": "10 May 2024",
          "textUser": "A captivating journey through Plato's philosophy! 'The Republic' offers profound insights into justice, the ideal state, and the role of the philosopher in society. A challenging but rewarding read.",
          "stars": 5
        },
        {
          "_id": 654123,
          "nameUser": "Amelia Harris",
          "date": "22 Jun 2024",
          "textUser": "An intellectually enriching read! 'The Republic' by Plato explores complex philosophical ideas through engaging dialogues. A must-read for anyone interested in justice and political philosophy.",
          "stars": 5
        },
        {
          "_id": 789456,
          "nameUser": "Alexander Clark",
          "date": "4 Jul 2024",
          "textUser": "A profound and thought-provoking exploration of justice and society! 'The Republic' by Plato presents philosophical arguments that challenge readers to think deeply about the nature of a just society.",
          "stars": 5
        },
        {
          "_id": 123654,
          "nameUser": "Evelyn Rodriguez",
          "date": "16 Aug 2024",
          "textUser": "A timeless philosophical masterpiece! 'The Republic' by Plato offers deep insights into justice, the ideal state, and the human soul. The dialogues are engaging and intellectually stimulating.",
          "stars": 5
        }
      ]
    });

    // Сохраняем книгу в базе данных
    newBook.save()
      .then(savedBook => {
        console.log('Книга успешно добавлена:', savedBook);
        mongoose.disconnect(); // Закрываем соединение с базой данных
        process.exit(); // Завершаем работу скрипта
      })
      .catch(err => {
        console.error('Ошибка при добавлении книги в базу данных:', err);
        mongoose.disconnect(); // Закрываем соединение с базой данных
        process.exit(1); // Завершаем работу скрипта с ошибкой
      });
  })
  .catch(err => {
    console.error('Ошибка подключения к MongoDB:', err);
  });