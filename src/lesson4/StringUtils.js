var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.isEmpty = function (str) {
        return str == null || str.length == 0;
    };
    StringUtils.leftPad = function (str, len, ch) {
        if (ch === void 0) { ch = " "; }
        var result = str;
        for (var i = 0; i < len - str.length; i++) {
            result = ch + result;
        }
        return result;
    };
    return StringUtils;
}());
var data = "test";
console.log(StringUtils.isEmpty(null));
console.log(StringUtils.isEmpty(""));
console.log(StringUtils.isEmpty(data));
console.log(StringUtils.leftPad(data, 10));
console.log(StringUtils.leftPad(data, 10, "*"));
