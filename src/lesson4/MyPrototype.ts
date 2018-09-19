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
