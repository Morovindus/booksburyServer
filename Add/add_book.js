const mongoose = require('mongoose');
const Book = require('../Structure/Book');

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/booksbury', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Подключение к MongoDB успешно');

    // Создаем новую книгу
    const newBook = new Book({
      _id: '190435',
      price: 1999,
      released: 2018,
      part: 1,
      page: 312,
      en: {
        "title": "A History of Babylon, 2200 BC - AD 75",
        "synopsis": "This comprehensive history of Babylon traces the city's development from its early beginnings to its status as a major center of civilization in the ancient world. Paul-Alan Beaulieu explores the political, social, and cultural aspects of Babylonian life, providing a detailed account of the city's rise to power and its eventual decline. The book covers significant events, notable rulers, and the city's influence on surrounding regions, offering readers a thorough understanding of Babylon's place in history.",
        "details": "Babylon, one of the most famous cities of antiquity, has left an indelible mark on the history of the ancient Near East. This book delves into the rich tapestry of Babylonian civilization, examining its contributions to law, literature, science, and art. The author meticulously details the reigns of prominent kings such as Hammurabi and Nebuchadnezzar, the construction of iconic structures like the Hanging Gardens and the Ishtar Gate, and the city's role in various conflicts and alliances. Through a blend of archaeological evidence and historical records, 'A History of Babylon' brings the ancient city to life, providing insights into its enduring legacy.",
        "authorName": "Paul-Alan Beaulieu",
        "authorAbout": "Paul-Alan Beaulieu is a renowned historian and scholar specializing in the ancient Near East. With a PhD in Assyriology from Harvard University, Beaulieu has dedicated his career to the study of Mesopotamian history and culture. He has published numerous articles and books on the subject, and his research has significantly advanced our understanding of Babylonian civilization. Beaulieu is a professor of ancient history at the University of Toronto, where he continues to inspire students with his passion for the ancient world.",
        "genre": "Classic",
        "book": "http://192.168.1.42:3000/Database/books/en/PDF/A_History_of_Babylon_2200_BC_Ad_75.pdf",
        "bookAudio": "http://192.168.1.42:3000/Database/books/en/Audio/A_History_of_Babylon_2200_BC_Ad_75.mp3"
      },
      ru: {
        "title": "История Вавилона, 2200 до н.э. - 75 н.э.",
        "synopsis": "Эта всеобъемлющая история Вавилона прослеживает развитие города с его ранних начал до его статуса как крупного центра цивилизации в древнем мире. Пол-Алан Больё исследует политические, социальные и культурные аспекты жизни вавилонян, предоставляя подробный отчет о подъеме города к власти и его окончательном упадке. Книга охватывает значимые события, известных правителей и влияние города на окружающие регионы, предлагая читателям полное понимание места Вавилона в истории.",
        "details": "Вавилон, один из самых известных городов древности, оставил неизгладимый след в истории древнего Ближнего Востока. Эта книга углубляется в богатую ткань вавилонской цивилизации, исследуя её вклад в право, литературу, науку и искусство. Автор тщательно описывает правления выдающихся царей, таких как Хаммурапи и Навуходоносор, строительство знаковых сооружений, таких как Висячие сады и Ворота Иштар, и роль города в различных конфликтах и союзах. Сочетая археологические данные и исторические записи, 'История Вавилона' оживляет древний город, предоставляя понимание его долговечного наследия.",
        "authorName": "Пол-Алан Больё",
        "authorAbout": "Пол-Алан Больё — известный историк и ученый, специализирующийся на древнем Ближнем Востоке. С докторской степенью по ассириологии из Гарвардского университета, Больё посвятил свою карьеру изучению истории и культуры Месопотамии. Он опубликовал множество статей и книг по этой теме, и его исследования значительно продвинули наше понимание вавилонской цивилизации. Больё является профессором древней истории в Торонтском университете, где он продолжает вдохновлять студентов своей страстью к древнему миру.",
        "genre": "Классика",
        "book": "http://192.168.1.42:3000/Database/books/ru/PDF/A_History_of_Babylon_2200_BC_Ad_75.pdf",
        "bookAudio": "http://192.168.1.42:3000/Database/books/ru/Audio/A_History_of_Babylon_2200_BC_Ad_75.mp3"
      },

      images: {
        bigCover: "http://192.168.1.42:3000/Images/A_History_of_Babylon_2200_BC_Ad_75/bigPicture.png",
        middleCover: "http://192.168.1.42:3000/Images/A_History_of_Babylon_2200_BC_Ad_75/middlePicture.png",
        averageCover: "http://192.168.1.42:3000/Images/A_History_of_Babylon_2200_BC_Ad_75/averagePicture.png",
        smallCover: "http://192.168.1.42:3000/Images/A_History_of_Babylon_2200_BC_Ad_75/smallPicture.png",
        authorImage: "http://192.168.1.42:3000/Images/A_History_of_Babylon_2200_BC_Ad_75/authorPicture.png"
      },

      reviews: [
        {
          "_id": 548726,
          "nameUser": "Ethan Anderson",
          "date": "10 Jan 2024",
          "textUser": "An incredible read! 'A History of Babylon, 2200 BC - AD 75' offers a detailed and fascinating exploration of Babylonian history. The author's thorough research and engaging narrative make this book a must-read.",
          "stars": 4
        },
        {
          "_id": 672849,
          "nameUser": "Sophia Wilson",
          "date": "22 Feb 2024",
          "textUser": "A comprehensive overview of Babylon's history! The book delves into the rich history of Babylon, offering insights into its culture, politics, and significant events. Highly recommended for history enthusiasts.",
          "stars": 4
        },
        {
          "_id": 893745,
          "nameUser": "Liam Johnson",
          "date": "14 Mar 2024",
          "textUser": "Fascinating and informative! 'A History of Babylon, 2200 BC - AD 75' provided a thorough understanding of Babylonian history. The author's meticulous research and engaging writing style made it a pleasure to read.",
          "stars": 4
        },
        {
          "_id": 245687,
          "nameUser": "Isabella Martinez",
          "date": "6 Apr 2024",
          "textUser": "An excellent exploration of Babylon's past! The book offers a detailed look into the history of Babylon, from its early days to the AD 75 period. A must-read for anyone interested in ancient history.",
          "stars": 3
        },
        {
          "_id": 678123,
          "nameUser": "James Davis",
          "date": "18 May 2024",
          "textUser": "Highly engaging and informative! 'A History of Babylon, 2200 BC - AD 75' provides an in-depth look into Babylonian history, shedding light on its culture and significant historical events. Highly recommended!",
          "stars": 4
        },
        {
          "_id": 345789,
          "nameUser": "Emily Taylor",
          "date": "30 Jun 2024",
          "textUser": "A captivating read! The book offers a thorough exploration of Babylon's history, culture, and key events. The author's research and writing are top-notch. A highly recommended read for history lovers.",
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