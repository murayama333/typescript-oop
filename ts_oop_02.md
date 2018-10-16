# TypeScriptで学ぶOOP - Part2

## Lesson4 - static

lesson4フォルダにStringUtils.tsファイルを作成します。

```ts
class StringUtils {

  public static isEmpty(str: string): boolean {
    return str == null || str.length == 0;
  }

  public static leftPad(str: string, len: number, ch: string = " "): string {
    let result: string = str;
    for(let i = 0; i < len - str.length; i++) {
      result = ch + result;
    }
    return result;
  }
}


let data: string = "test";

console.log(StringUtils.isEmpty(null));
console.log(StringUtils.isEmpty(""));
console.log(StringUtils.isEmpty(data));

console.log(StringUtils.leftPad(data, 10));
console.log(StringUtils.leftPad(data, 10, "*"));
```

JavaScriptファイルにコンパイルします。

```
$ tsc StringUtils.ts
```

> コンパイルすると*.jsファイルが生成されます。

生成されたStringUtils.jsを実行します。


```
$ node StringUtils.js
true
true
false
     test
******test
```

> ユーティリティメソッドをstaticメソッドとして実装しています。


### Prototypeによる実装

lesson4フォルダにMyPrototype.tsファイルを作成します。

```ts
interface String {
    isEmpty(): boolean;
    leftPad(len: number, ch?: string): string;
}

String.prototype.isEmpty = function () {
  return this == null || this.length == 0;
}

String.prototype.leftPad = function (len: number, ch: string = " "): string {
  let result: string = this;
  for(let i = 0; i < len - this.length; i++) {
    result = ch + result;
  }
  return result;
}

let data: string = "test";

console.log("".isEmpty());
console.log(data.isEmpty());

console.log(data.leftPad(10));
console.log(data.leftPad(10, "*"));
```

JavaScriptファイルにコンパイルします。

```
$ tsc MyPrototype.ts
```

> コンパイルすると*.jsファイルが生成されます。

生成されたMyPrototype.jsを実行します。


```
$ node MyPrototype.js
true
false
     test
******test
```

> JSらしく実装するとPrototypeベースな実装になりますが、TypeScriptだと微妙です。

---

## Exercise 2 - Singleton

> exercise2フォルダにtsファイルを作成します。

次のクラスがあります。

+ Counter.ts
+ Main.ts

Singletonとは単独という意味の言葉です。Counterクラスのインスタンスは一つしか生成できないように設計します。

### Counter.ts

```ts
export class Counter {

	private max: number;

  // TODO singleton

	public countUp():void  {
		for (let i = 1; i <= this.max; i++) {
			console.log(i);
		}
	}

	public setMax(max: number): void {
		this.max = max;
	}
}
```

### Main.ts

```ts
import { Counter } from './Counter';

const counter1: Counter = Counter.getInstance();
const counter2: Counter = Counter.getInstance();

counter1.setMax(5);
counter1.countUp();
counter2.countUp();

console.log(counter1 == counter2);
```

### 実行結果

```
$ node Main.js
1
2
3
4
5
1
2
3
4
5
true
```

### 課題

Counterクラスのインスタンスを1つしか生成できないようにCounterクラスを修正してください。

---

## Exercise 3 - Active Record

> exercise3フォルダにtsファイルを作成します。

次のクラスがあります。

+ Book.ts
+ Main.ts

Bookクラスは書籍データを表現するクラスで、ActiveRecordパターンで実装しています。

Bookクラスには次のプロパティがあります。

|プロパティ|型|static|
|:--|:--|:--|
|id|number|<br>|
|title|string|<br>|
|price|number|<br>|
|books|Array<Book>|static|

Bookクラスには次のコンストラクタがあります。

|引数|
|:--|
|id: number, title: string, price: number|


Bookクラスには次のメソッドがあります。

|メソッド|引数|戻り値型|static|
|:--|:--|:--|:--|
|all|<br>|Array<Book>|static|
|find|id: number|Book|static|
|save|<br>|void|<br>|
|destroy|<br>|void|<br>|


### Book.ts

```ts
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

  public save(): void {
    Book.books.push(this);
  }
}
```

### Main.ts

```ts
import { Book } from './Book';

const book1: Book = new Book(1, "HTML Book", 1000);
book1.save();
const book2: Book = new Book(2, "CSS Book", 2000);
book2.save();
const book3: Book = new Book(3, "JS Book", 3000);
book3.save();

console.log(Book.all());
```

### 実行結果

```
$ node Main.js
[ Book { id: 1, title: 'HTML Book', price: 1000 },
 Book { id: 2, title: 'CSS Book', price: 2000 },
 Book { id: 3, title: 'JS Book', price: 3000 } ]
```

### 課題

Main.tsを次のように修正します。

```ts
import { Book } from './Book';

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
```

次の実行結果となるように、Bookクラスにfindメソッド、saveメソッド、destroyメソッドを実装してください。

#### 実行結果

```
[ Book { id: 1, title: 'HTML5 Book', price: 1000 },
  Book { id: 3, title: 'JS Book', price: 3000 } ]
```
