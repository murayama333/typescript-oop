"use strict";
exports.__esModule = true;
var Book = /** @class */ (function () {
    function Book(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    Book.all = function () {
        return Book.books;
    };
    Book.find = function (id) {
        return Book.books.filter(function (b) { return b.id == id; }).pop();
    };
    Book.prototype.save = function () {
        var book = Book.find(this.id);
        if (book != null) {
            book.id = this.id;
            book.title = this.title;
            book.price = this.price;
        }
        else {
            Book.books.push(this);
        }
    };
    Book.prototype.destroy = function () {
        var _this = this;
        Book.books = Book.books.filter(function (b) { return b.id != _this.id; });
    };
    Book.books = [];
    return Book;
}());
exports.Book = Book;
