const mongoose = require('mongoose');
const Book = require('../Structure/Book');

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/booksbury', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Подключение к MongoDB успешно');

    // Создаем новую книгу
    const newBook = new Book({
      _id: '946107',
      price: 399,
      released: 2019,
      part: 1,
      page: 256,
      en: {
        title: "History of the Ancient World's Society",
        synopsis: "An in-depth exploration of ancient civilizations, their societies, cultures, and legacies.",
        details: "This book offers a comprehensive overview of ancient societies from around the world, covering their rise, development, and eventual decline. From the majestic pyramids of Egypt to the grandeur of Rome, Dr. Tikendranath Sarkar takes readers on a captivating journey through the annals of history.",
        authorName: "Dr. Tikendranath Sarkar",
        authorAbout: "Dr. Tikendranath Sarkar is a renowned historian specializing in ancient civilizations. With decades of research and teaching experience, Dr. Sarkar brings a wealth of knowledge and expertise to this insightful exploration of the ancient world.",
        genre: "Classic",
        book: "URL_to_PDF",
        bookAudio: "URL_to_audio"
      },
      ru: {
        title: "История Обществ Древнего Мира",
        synopsis: "Глубокое исследование древних цивилизаций, их обществ, культур и наследия.",
        details: "Эта книга предлагает всесторонний обзор древних обществ со всего мира, описывая их восхождение, развитие и последующий упадок. От величественных пирамид Египта до великолепия Рима, доктор Тикендранат Саркар ведет читателей по захватывающему пути через просторы истории.",
        authorName: "Доктор Тикендранат Саркар",
        authorAbout: "Доктор Тикендранат Саркар – известный историк, специализирующийся на древних цивилизациях. Обладая десятилетиями опыта исследований и преподавания, доктор Саркар приносит богатство знаний и экспертизы в этот проницательный обзор древнего мира.",
        genre: "Классика",
        book: "URL_к_PDF",
        bookAudio: "URL_к_аудио"
      },

      images: {
        bigCover: "http://192.168.1.42:3000/Images/History_of_the_Ancient_World's_Society/bigPicture.png",
        middleCover: "http://192.168.1.42:3000/Images/History_of_the_Ancient_World's_Society/middlePicture.png",
        averageCover: "http://192.168.1.42:3000/Images/History_of_the_Ancient_World's_Society/averagePicture.png",
        smallCover: "http://192.168.1.42:3000/Images/History_of_the_Ancient_World's_Society/smallPicture.png",
        authorImage: "http://192.168.1.42:3000/Images/History_of_the_Ancient_World's_Society/authorPicture.png"
      },

      reviews: [
        {
          _id: 909998,
          nameUser: 'Maya Patel',
          date: '15 May 2024',
          textUser: 'History of the Ancient Worlds Society is a captivating journey through the annals of history, expertly crafted by Dr. Tikendranath Sarkar. As I delved into the pages of this comprehensive exploration of ancient civilizations, I was mesmerized by Sarkars meticulous research and engaging prose. From the rise of Mesopotamia to the glory of ancient Greece, each chapter offers a rich tapestry of cultures, societies, and legacies that have shaped our world. Sarkars depth of knowledge and passion for the subject shine through, making this book both enlightening and enthralling. Whether youre a seasoned historian or a casual enthusiast, History of the Ancient Worlds Society is a must-read that will leave you enlightened and inspired.',
          stars: 5
        },
        {
          _id: 727667,
          nameUser: 'Benjamin Hayes',
          date: '26 Sep 2022',
          textUser: '"History of the Ancient Worlds Society" by Dr. Tikendranath Sarkar is a scholarly masterpiece that transports readers through the corridors of time to explore the rich tapestry of ancient civilizations. Sarkars meticulous research and eloquent prose bring to life the rise and fall of empires, the development of cultures, and the enduring legacies of the past. Each chapter is a captivating journey into the depths of history, offering profound insights into the complexities of human society. As I immersed myself in Sarkars narrative, I found myself captivated by the depth of knowledge and passion evident in every page. This book is not only a testament to Sarkars expertise but also a valuable resource for anyone seeking to understand the foundations of our modern world. Highly recommended for both scholars and enthusiasts alike.',
          stars: 3
        },
        {
          _id: 604531,
          nameUser: 'Sofia Ramirez',
          date: '7 Oct 2023',
          textUser: '"History of the Ancient Worlds Society" by Dr. Tikendranath Sarkar is a mesmerizing journey through the annals of time, expertly weaving together the intricate tapestry of ancient civilizations. Sarkars meticulous research and insightful narrative paint a vivid picture of the rise and fall of empires, the evolution of cultures, and the enduring legacy of humanitys past. Each chapter is a captivating exploration of the human experience, offering readers a deeper understanding of our shared history. As I delved into this captivating book, I found myself immersed in Sarkars world, eagerly turning each page to uncover the secrets of the past. This book is a testament to Sarkars expertise and passion for the subject, making it a must-read for anyone interested in unraveling the mysteries of ancient civilizations.',
          stars: 5
        },
        {
          _id: 971602,
          nameUser: 'Ethan Carter',
          date: '19 Jul 2019',
          textUser: '"History of the Ancient Worlds Society" by Dr. Tikendranath Sarkar is a captivating exploration of the foundations of human civilization. Sarkars expertise and passion for the subject shine through in this meticulously researched book, which offers readers a comprehensive overview of ancient societies. From the awe-inspiring monuments of Egypt to the philosophical teachings of ancient Greece, each chapter is a fascinating journey through time. Sarkars engaging narrative style and insightful analysis make this book an invaluable resource for anyone interested in understanding the complexities of the ancient world. As I immersed myself in the pages of this enlightening work, I couldnt help but marvel at the enduring legacy of these ancient civilizations and their profound impact on our modern society.',
          stars: 4
        },
        {
          _id: 736810,
          nameUser: 'Isabella Khan',
          date: '1 Apr 2023',
          textUser: '"History of the Ancient Worlds Society" by Dr. Tikendranath Sarkar is an enlightening journey through the corridors of time, offering a profound exploration of ancient civilizations. Sarkars meticulous research and captivating storytelling breathe life into the past, allowing readers to immerse themselves in the vibrant tapestry of human history. With each chapter, Sarkar unveils the triumphs and tribulations of ancient societies, shedding light on their cultural achievements, political intrigues, and enduring legacies. As I delved into this captivating book, I found myself transported to distant lands and epochs, gaining a deeper appreciation for the rich diversity of human experience. "History of the Ancient Worlds Society" is a testament to Sarkars scholarship and passion for the subject, making it a must-read for anyone seeking to uncover the secrets of the past.',
          stars: 5
        },
        {
          _id: 162119,
          nameUser: 'Liam Thompson',
          date: '19 May 2024',
          textUser: 'The exploration of ancient civilizations within this societys framework was an illuminating journey through the annals of time. Each session offered a captivating delve into the intricate tapestry of human history, shedding light on the myriad cultures and societies that shaped our world millennia ago. The depth of research and passion displayed by the speakers was palpable, enriching the discussions and fostering a profound appreciation for the complexities of ancient civilizations. From the rise and fall of empires to the everyday lives of ordinary people, every aspect was meticulously examined, painting a vivid portrait of our collective past. Moreover, the inclusive and welcoming atmosphere fostered engaging exchanges among participants, enhancing the learning experience. Overall, this society provides a stimulating platform for enthusiasts and scholars alike to delve into the captivating realm of ancient history.',
          stars: 3
        },
        {
          _id: 519123,
          nameUser: 'Ava Garcia',
          date: '8 Nov 2023',
          textUser: 'Engaging with the History of the Ancient Worlds Society was a thoroughly enriching experience. The depth of knowledge and passion exhibited by the speakers truly brought ancient civilizations to life, making each session a captivating journey through time. The diverse range of topics covered provided a comprehensive understanding of various cultures and epochs, from the monumental achievements of empires to the intricacies of daily life. Moreover, the welcoming environment fostered stimulating discussions among participants, offering valuable insights and perspectives. Whether youre a seasoned enthusiast or a newcomer to the subject, this society offers a compelling platform to explore and appreciate the fascinating tapestry of our ancient past.',
          stars: 2
        },
        {
          _id: 831387,
          nameUser: 'Noah Campbell',
          date: '30 Dec 2024',
          textUser: 'Attending sessions with the History of the Ancient Worlds Society was a truly enlightening experience. The depth of insight into various ancient civilizations provided by the speakers was both impressive and captivating. Each session was meticulously crafted to offer a comprehensive understanding of different aspects of ancient history, from political structures to daily life. What truly stood out was the interactive nature of the discussions, which encouraged active participation and fostered a sense of community among attendees. Whether youre a history enthusiast or someone just beginning to explore the ancient world, this society offers a welcoming space to delve into the richness of our shared past.',
          stars: 1
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