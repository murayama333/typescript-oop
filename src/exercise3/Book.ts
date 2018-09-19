export class Book {

  private static books: Array<Book> = [];

  id: number;
  title: string;
  price: number;

  public constructor(id: number, title: string, price: number) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  public static all(): Array<Book>{
    return Book.books;
  }

  public static find(id: number): Book {
    return Book.books.filter(b => { return b.id == id }).pop();
  }

  public save(): void {
    const book = Book.find(this.id);
    if (book != null) {
      book.id = this.id;
      book.title = this.title;
      book.price = this.price;
    } else {
      Book.books.push(this);
    }
  }

  public destroy(): void {
    Book.books = Book.books.filter(b => { return b.id != this.id })
  }
}
