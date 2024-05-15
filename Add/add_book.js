const mongoose = require('mongoose');
const Book = require('../Structure/Book');

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/booksbury', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Подключение к MongoDB успешно');

    // Создаем новую книгу
    const newBook = new Book({
      _id: '572139',
      price: 4499,
      released: 2008,
      part: 4,
      page: 223,
      en: {
        title: "Magic_in_the_Ancient_Greek_World_4",
        synopsis: "In 'Magic in the Ancient Greek World', the author delves into the intricate world of magic as perceived and practiced in ancient Greece. Exploring the various facets of magical beliefs and practices prevalent in the ancient Greek civilization, the book sheds light on how magic was intertwined with religion, philosophy, and everyday life. From spells and incantations to the roles of magicians and the perception of magic in society, this book provides a comprehensive overview of the mystical realm in ancient Greece. Through meticulous research and analysis, it unveils the profound influence of magic on the psyche and culture of the ancient Greeks, offering fascinating insights into this captivating aspect of their civilization.",
        details: "Magic in the Ancient Greek World’ offers an immersive journey into the rich tapestry of magical beliefs and practices that permeated the ancient Greek society. Delving beyond the surface, the book meticulously examines the multifaceted nature of magic, from its roots in ancient religious rites to its integration into various aspects of daily life. Through a captivating narrative, readers are transported to a world where spells, charms, and rituals held profound significance, shaping the beliefs, behaviors, and destinies of individuals and communities alike. Drawing upon a wealth of archaeological evidence, literary sources, and scholarly insights, the author unravels the complexities of Greek magic, shedding light on its practitioners, techniques, and societal perceptions. This compelling exploration not only illuminates the mystical underpinnings of ancient Greek civilization but also offers valuable perspectives on the enduring allure of magic throughout human history.",
        authorName: "Derek Collins",
        authorAbout: "Derek Collins is a distinguished scholar known for his expertise in ancient Greek literature and culture. He has made significant contributions to the field through his research, publications, and academic pursuits. With a focus on Greek poetry, drama, and religion, Collins has delved into various aspects of ancient Greek society, offering valuable insights into its literature, mythology, and philosophical underpinnings. His work is characterized by meticulous scholarship, interdisciplinary approach, and a deep appreciation for the complexities of the ancient world. As a respected authority in his field, Collins's writings continue to inspire and enrich our understanding of classical antiquity.",
        genre: "Classic",
        book: "URL_to_PDF",
        bookAudio: "URL_to_audio"
      },
      ru: {
        title: "Магия в Древнем Греческом Мире",
        synopsis: "В книге 'Магия в Древнем Греческом Мире' автор погружается в сложный мир магии, так, как её воспринимали и практиковали в Древней Греции. Исследуя различные аспекты магических верований и практик, преобладавших в древнегреческой цивилизации, книга приоткрывает завесу над тем, как магия переплеталась с религией, философией и повседневной жизнью. От заклинаний и заклинаний до роли магов и восприятия магии в обществе, эта книга предоставляет всесторонний обзор мистического мира в Древней Греции. Через тщательные исследования и анализ автор раскрывает глубокое влияние магии на психику и культуру древних греков, предлагая увлекательные идеи в этом захватывающем аспекте их цивилизации.",
        details: "Книга 'Магия в Древнем Греческом Мире' предлагает погружение в богатую ткань магических верований и практик, которые проникали в древнегреческое общество. Она детально исследует многогранную природу магии, от её корней в древних религиозных обрядах до её интеграции в различные аспекты повседневной жизни. Через увлекательное повествование читатели переносятся в мир, где заклинания, обереги и обряды имели глубокое значение, формируя верования, поведение и судьбы отдельных личностей и общин в целом. Основываясь на богатом археологическом материале, литературных источниках и научных исследованиях, автор раскрывает сложности греческой магии, проливая свет на её практиков и техники, а также общественное восприятие. Это увлекательное исследование не только проливает свет на мистические основы древнегреческой цивилизации, но и предлагает ценные перспективы на постоянное влечение к магии на протяжении всей истории человечества.",
        authorName: "Дерек Коллинз",
        authorAbout: "Дерек Коллинз - выдающийся ученый, известный своими знаниями в области древнегреческой литературы и культуры. Он внёс значительный вклад в область благодаря своим исследованиям, публикациям и научным стремлениям. С фокусом на греческой поэзии, драме и религии, Коллинз погружался в различные аспекты древнегреческого общества, предлагая ценные идеи по его литературе, мифологии и философским основам. Его работа характеризуется тщательным научным подходом, междисциплинарным подходом и глубоким уважением к сложностям древнего мира. Как уважаемый авторитет в своей области, писания Коллинза продолжают вдохновлять и обогащать наше понимание классической античности.",
        genre: "Классика",
        book: "URL_к_PDF",
        bookAudio: "URL_к_аудио"
      },

      images: {
        bigCover: "http://192.168.1.42:3000/Images/Magic_in_the_Ancient_Greek_World_4/bigPicture.png",
        middleCover: "http://192.168.1.42:3000/Images/Magic_in_the_Ancient_Greek_World_4/middlePicture.png",
        averageCover: "http://192.168.1.42:3000/Images/Magic_in_the_Ancient_Greek_World_4/averagePicture.png",
        smallCover: "http://192.168.1.42:3000/Images/Magic_in_the_Ancient_Greek_World_4/smallPicture.png",
        authorImage: "http://192.168.1.42:3000/Images/Magic_in_the_Ancient_Greek_World_4/authorPicture.png"
      },

      reviews: [
        {
          "_id": 356789,
          "nameUser": "Eleanor Johnson",
          "date": "17 May 2024",
          "textUser": "I thoroughly enjoyed reading 'Magic in the Ancient Greek World'. The author's insights into the intricate world of ancient Greek magic were fascinating. The book provided a comprehensive overview of magical beliefs and practices in ancient Greece, and I particularly appreciated the thorough research and analysis. Highly recommended!",
          "stars": 5
        },
        {
          "_id": 235678,
          "nameUser": "William Anderson",
          "date": "12 Apr 2024",
          "textUser": "A captivating exploration of ancient Greek magic! 'Magic in the Ancient Greek World' offers a deep dive into the mystical realm of the past. I found the book both informative and engaging, with a wealth of intriguing insights.",
          "stars": 4
        },
        {
          "_id": 789345,
          "nameUser": "Sophia Martinez",
          "date": "3 Feb 2024",
          "textUser": "Fascinating read! 'Magic in the Ancient Greek World' provided a comprehensive understanding of magic in ancient Greece. The author's meticulous research and compelling narrative made it an enriching experience.",
          "stars": 5
        },
        {
          "_id": 456234,
          "nameUser": "Oliver Thompson",
          "date": "8 Jun 2024",
          "textUser": "An insightful journey into ancient Greek magic! I was captivated by the author's exploration of the intertwining of magic with religion and everyday life. Highly recommend for anyone interested in the subject.",
          "stars": 5
        },
        {
          "_id": 823456,
          "nameUser": "Emma Wilson",
          "date": "19 Mar 2024",
          "textUser": "A must-read for history enthusiasts! 'Magic in the Ancient Greek World' offers a comprehensive overview of magic in ancient Greece, shedding light on its significance and societal perceptions.",
          "stars": 4
        },
        {
          "_id": 567823,
          "nameUser": "James Garcia",
          "date": "27 Aug 2024",
          "textUser": "Thoroughly enjoyed reading this book! The author's in-depth analysis of ancient Greek magic was both enlightening and thought-provoking. Highly recommended for anyone interested in ancient history.",
          "stars": 5
        },
        {
          "_id": 934567,
          "nameUser": "Isabella Davis",
          "date": "9 Jan 2024",
          "textUser": "A fascinating exploration of magic in ancient Greece! 'Magic in the Ancient Greek World' provided valuable insights into the mystical beliefs and practices of the past.",
          "stars": 4
        },
        {
          "_id": 678345,
          "nameUser": "Liam Rodriguez",
          "date": "14 Jul 2024",
          "textUser": "An engaging read! The author's exploration of ancient Greek magic was both informative and captivating. I particularly enjoyed learning about the various aspects of magic in Greek society.",
          "stars": 4
        },
        {
          "_id": 345678,
          "nameUser": "Charlotte Martinez",
          "date": "22 May 2024",
          "textUser": "Highly recommend! 'Magic in the Ancient Greek World' offers a fascinating glimpse into the world of ancient Greek magic, exploring its role in religion, philosophy, and everyday life.",
          "stars": 5
        },
        {
          "_id": 892345,
          "nameUser": "Noah Taylor",
          "date": "5 Nov 2024",
          "textUser": "A captivating exploration of ancient Greek magic! 'Magic in the Ancient Greek World' provided a comprehensive overview of magical beliefs and practices in ancient Greece.",
          "stars": 5
        },
        {
          "_id": 456789,
          "nameUser": "Ava Rodriguez",
          "date": "18 Sep 2024",
          "textUser": "Thoroughly enjoyed reading this book! The author's insights into ancient Greek magic were both enlightening and thought-provoking. A fascinating journey into the mystical realm of the past.",
          "stars": 4
        },
        {
          "_id": 678912,
          "nameUser": "Mia Johnson",
          "date": "7 Dec 2024",
          "textUser": "An excellent read! 'Magic in the Ancient Greek World' provided a comprehensive overview of magic in ancient Greece, shedding light on its significance and societal perceptions.",
          "stars": 5
        },
        {
          "_id": 123456,
          "nameUser": "Ethan Brown",
          "date": "11 Aug 2024",
          "textUser": "Fascinating exploration of ancient Greek magic! 'Magic in the Ancient Greek World' offered valuable insights into the mystical beliefs and practices of the past.",
          "stars": 4
        },
        {
          "_id": 456123,
          "nameUser": "Amelia Garcia",
          "date": "29 Apr 2024",
          "textUser": "A must-read for history buffs! 'Magic in the Ancient Greek World' provided a captivating glimpse into the world of ancient Greek magic, exploring its role in society and everyday life.",
          "stars": 5
        },
        {
          "_id": 789123,
          "nameUser": "Lucas Hernandez",
          "date": "2 Mar 2024",
          "textUser": "An insightful journey into ancient Greek magic! 'Magic in the Ancient Greek World' provided a comprehensive overview of magical beliefs and practices in ancient Greece.",
          "stars": 4
        },
        {
          "_id": 567891,
          "nameUser": "Harper Smith",
          "date": "16 Oct 2024",
          "textUser": "Highly recommend! 'Magic in the Ancient Greek World' offered a fascinating exploration of ancient Greek magic, shedding light on its significance and societal perceptions.",
          "stars": 5
        },
        {
          "_id": 234567,
          "nameUser": "Benjamin Taylor",
          "date": "25 Feb 2024",
          "textUser": "A captivating read! 'Magic in the Ancient Greek World' provided valuable insights into the mystical beliefs and practices of ancient Greece.",
          "stars": 4
        },
        {
          "_id": 891234,
          "nameUser": "Evelyn Martinez",
          "date": "13 Jun 2024",
          "textUser": "Thoroughly enjoyed reading this book! 'Magic in the Ancient Greek World' offered a comprehensive overview of magic in ancient Greece, exploring its role in society and everyday life.",
          "stars": 5
        },
        {
          "_id": 234891,
          "nameUser": "Alexander Brown",
          "date": "4 Sep 2024",
          "textUser": "An excellent exploration of ancient Greek magic! 'Magic in the Ancient Greek World' provided fascinating insights into the mystical beliefs and practices of the past.",
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