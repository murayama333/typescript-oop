# TypeScriptで学ぶOOP

## TypeScript

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

TypeScriptはJavaScriptのサブセットです。TypeScriptのコードはコンパイルすることでJavaScriptコードに変換できます。TypeScriptはオープンソースです。ブラウザやホスト、OSに依存しません。


## Install

```
$ npm install -g typescript
```

## OOP

> Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.

オブジェクト指向プログラミング（OOP）はオブジェクトをコンセプトとしたプログラミング手法です。オブジェクトはデータを含みます。オブジェクトの持つデータはフィールドやアトリビュートなどと呼ばれます。オブジェクトはコードを持ちます。オブジェクトの持つコードはプロシージャ、メソッドなどと呼ばれます。

> A feature of objects is that an object's procedures can access and often modify the data fields of the object with which they are associated (objects have a notion of "this" or "self").

オブジェクトの機能（振る舞い）は、オブジェクトのメソッドによって定義され、フィールドにアクセスすることができます。フィールドにアクセスするには"this"や"self"といったキーワードを使うことが一般的です。


> In OOP, computer programs are designed by making them out of objects that interact with one another.

オブジェクト指向プログラミング言語は、他のオブジェクトと協調して動作するように設計されています。

> There is significant diversity of OOP languages, but the most popular ones are class-based, meaning that objects are instances of classes, which typically also determine their type.

オブジェクト指向言語にはいくつかのアプローチが存在しますが、代表的なものはクラスベースのオブジェクト指向です。クラスベースのオブジェクト指向では、オブジェクトは所属するクラスにより型が決まります。

---

## 準備

任意のフォルダ（デスクトップにts_sampleなど）を作成してください。

以降はLessonごとにサブフォルダを作成します。

+ ts_sample
    + lesson1
    + lesson2
    + lesson3
    + exercise


---

## Lesson1 - クラスとインスタンス

lesson1フォルダにCar.tsファイルを作成します。

```ts
class Car {
    name: string;
    gas: number;

    constructor(name: string, gas: number) {
        this.name = name;
        this.gas = gas;
    }

    move() {
        if (this.gas > 0) {
            this.gas--;
            console.log(this.name + ":move");
        } else {
            console.log(this.name + ":stop");
        }
    }
}
export { Car };
```

lesson1フォルダにMain.tsファイルを作成します。

```ts
import { Car } from './Car';

const car1: Car = new Car("Kbox", 3);
const car2: Car = new Car("Kwagon", 5);

for (let i = 0; i < 5; i++) {
    car1.move();
    car2.move();
}
```

JavaScriptファイルにコンパイルします。

```
$ tsc Main.ts
```

> コンパイルすると*.jsファイルが生成されます。

生成されたMain.jsを実行します。


```
$ node Main.js
Kbox:move
Kwagon:move
Kbox:move
Kwagon:move
Kbox:move
Kwagon:move
Kbox:stop
Kwagon:move
Kbox:stop
Kwagon:move
```

> オブジェクト指向の真髄について語りましょう。

---

## Lesson2 - 継承

lesson2フォルダにFireTruck.tsファイルを作成します。

```ts
import { Car } from '../lesson1/Car';

export class FireTruck extends Car {
    water: number;

    constructor(name: string, gas: number, water: number) {
        super(name, gas);
        this.water = water;
    }

    spray() {
        let water = "";
        for (let i = 0; i < this.water; i++) {
            water += "=";
        }
        console.log(this.name + ":spray:" + water);
        this.water = 0;
    }
}
```

> FireTruckクラスはCarクラスを継承しています。

lesson2フォルダにMain.tsファイルを作成します。


```ts
import {FireTruck} from './FireTruck';

const fireTruck: FireTruck = new FireTruck("kfire", 5, 10);

fireTruck.move();
fireTruck.spray();
```

JavaScriptファイルにコンパイルします。

```
$ tsc Main.ts
```

> コンパイルすると*.jsファイルが生成されます。

生成されたMain.jsを実行します。

```
$ node Main.js
kfire:move
kfire:spray:==========
```

> 変数fireTruckの型をCar型にするとどうなるでしょう。アクセス修飾子についても検討してみましょう。


---

## Lesson3 - インタフェース

lesson3フォルダにLoadable.tsファイルを作成します。

```ts
export interface Loadable {
    info();
}
```

> クラスではなくLoadableインタフェースです。


lesson3フォルダにContainer.tsファイルを作成します。

```ts
import { Loadable } from "./Loadable";

export class Container implements Loadable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    info() {
        console.log(this.name);
    }
}
```

> ContainerクラスはLoadableインタフェースを実装しています。


lesson3フォルダにLoadableFireTruck.tsファイルを作成します。

```ts
import { FireTruck } from '../lesson2/FireTruck';
import { Loadable } from './Loadable';

export class LoadableFireTruck extends FireTruck implements Loadable {
    info() {
        console.log(this.name);
    }
}
```

lesson3フォルダにShip.tsファイルを作成します。

```ts
import {Loadable} from './Loadable';

export class Ship {
    loadables: Loadable[] = [];

    push(loadable: Loadable){
        this.loadables.push(loadable);
    }

    pop(): Loadable{
        return this.loadables.pop();
    }
}
```

lesson3フォルダにMain.tsファイルを作成します。

```ts
import { Ship } from "./Ship";
import { Container } from "./Conteiner";
import { LoadableFireTruck } from "./LoadableFireTruck";
import { Loadable } from "./Loadable";

const ship: Ship = new Ship();
const container1: Container = new Container("container1");
const container2: Container = new Container("container2");
const fireTruck: LoadableFireTruck = new LoadableFireTruck("kfire", 5, 10);

ship.push(container1);
ship.push(container2);
ship.push(fireTruck);

let loadable: Loadable = ship.pop();
while(loadable != null) {
    loadable.info();
    loadable = ship.pop();
}
```


JavaScriptファイルにコンパイルします。

```
$ tsc Main.ts
```

> コンパイルすると*.jsファイルが生成されます。

生成されたMain.jsを実行します。

```
$ node Main
kfire
container2
container1
```

---


## Exercise 1 - Adapter Pattern

> exercise1フォルダにtsファイルを作成します。

次のクラス、インタフェースがあります。

+ Printable.ts
+ LegacyPrinter.ts
+ Main.ts

LegacyPrinterクラスは過去の開発プロジェクトで作成したクラスです。

今回の開発ではMain.tsの中で、Printableインタフェースを使って、LegacyPrinterクラスのインスタンスを扱いたいのですが、PrintableインタフェースとLegacyPrinterクラスには互換性がありません。

### Printable.ts

```ts
export interface Printable {
    print(message: string);
}
```

### LegacyPrinter.ts

```ts
export class LegacyPrinter {
    public doPrint(data: string) {
        console.log("Legacy : " + data);
    }
}
```

### Main.ts

```ts
import { Printable } from "./Printer";
import { PrinterAdapter } from "./PrinterAdapter";
import { LegacyPrinter } from "./LegacyPrinter";

// const printer: Printable = new LegacyPrinter();
const printer: Printable = ???;
printer.print("Hello World");
```


### 実行結果

```
Legacy : Hello World
```

### 課題

Printable型の変数printerでLegacyPrinterを扱えるように、Main.tsの???の部分を考えてください。ただし、既存のPrintable、LegacyPrinterを修正してはいけません。新規クラスを作成することでこの問題を処理します。
