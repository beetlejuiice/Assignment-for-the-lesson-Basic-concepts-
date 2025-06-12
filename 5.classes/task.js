// Задача №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

const memories = new PrintEditionItem(
  'Воспоминания воображаемого друга',
  2013,
  416
);
console.log(memories.releaseDate);
console.log(memories.state);
memories.fix();
console.log(memories.state);
memories.state = -4;
console.log(memories.state);
memories.state = 101;
console.log(memories.state);
memories.state = 70;
console.log(memories.state);

const magazine = new Magazine('Вопросы кибербезопасности', 2023, 114);
console.log(magazine.type);

const authorName = 'Александр Грибоедов';
const warAndPeace = new Book(authorName, 'Горе от ума', 1833, 320);
console.log(warAndPeace.author);
console.log(warAndPeace.type);

const coraline = new FantasticBook('Нил Гейман', 'Коралина', 2002, 224);
console.log(coraline.author);
console.log(coraline.type);
coraline.state = 11;
console.log(coraline.state);
coraline.fix();
console.log(coraline.state);

// Задача №2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}

const library = new Library('Центральная городская библиотека');

library.addBook(new DetectiveBook('Артур Конан Дойл', 'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе', 2019, 1008));
library.addBook(new FantasticBook('Нил Гейман', 'Коралина', 2002, 224));
library.addBook(new NovelBook('Лун Фуцан', 'Маньтоу и сливовая ветвь', 2025, 144));
library.addBook(new Magazine('Вопросы кибербезопасности', 2023, 114));

let book1919 = library.findBookBy('releaseDate', 1919);
if (!book1919) {
  book1919 = new Book('Джон Рид', 'Десять дней, которые потрясли мир', 1919, 448);
  library.addBook(book1919);
}

console.log('Количество книг до выдачи: ' + library.books.length);

const givenBook = library.giveBookByName('Десять дней, которые потрясли мир');
console.log('Выдана книга: ' + (givenBook ? givenBook.name : 'не найдена'));

if (givenBook) {
  givenBook.state = 30;
  console.log(`Состояние книги '${givenBook.name}' после повреждения: ${givenBook.state}`);
}

if (givenBook) {
  givenBook.fix();
  console.log(`Состояние книги '${givenBook.name}' после восстановления: ${givenBook.state}`);
}

library.addBook(givenBook);
console.log('Количество книг после возврата: ' + library.books.length);

console.log('Поиск книги по названию: "Коралина"', library.findBookBy('name', 'Коралина'));
console.log('Поиск книги по году 2023:', library.findBookBy('releaseDate', 2023));
console.log('Попытка найти несуществующую книгу:', library.findBookBy('name', 'Милые кости'));
console.log('Общий список книг:');
console.log(library.books);

// Дополнительная задача*
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (typeof mark !== 'number' || mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject) || this.marks[subject].length === 0) {
      return 0;
    }
    const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    const totalSum = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);
    return totalSum / subjects.length;
  }
}

const student = new Student('Иван Иванов');
student.addMark(5, 'химия');
student.addMark(5, 'химия');
student.addMark(5, 'физика');
student.addMark(4, 'физика');
student.addMark(6, 'физика');

console.log(student.getAverageBySubject('физика'));
console.log(student.getAverageBySubject('биология'));
console.log(student.getAverage());