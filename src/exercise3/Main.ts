import {Book} from './Book';

const book1: Book = new Book(1, "HTML Book", 1000);
book1.save();
const book2: Book = new Book(2, "CSS Book", 2000);
book2.save();
const book3: Book = new Book(3, "JS Book", 3000);
book3.save();

const book4 = Book.find(1);
book4.title = "HTML5 Book";
book4.save();

const book5 = Book.find(2);
book5.destroy()

console.log(Book.all());
