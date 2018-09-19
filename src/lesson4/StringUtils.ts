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
