String.prototype.isEmpty = function () {
    return this == null || this.length == 0;
};
String.prototype.leftPad = function (len, ch) {
    if (ch === void 0) { ch = " "; }
    var result = this;
    for (var i = 0; i < len - this.length; i++) {
        result = ch + result;
    }
    return result;
};
var data = "test";
console.log("".isEmpty());
console.log(data.isEmpty());
console.log(data.leftPad(10));
console.log(data.leftPad(10, "*"));
