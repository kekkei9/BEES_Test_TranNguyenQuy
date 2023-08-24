const decimalToHexMapper: Record<number, string> = {
  //convert 0 to 9 to string since they have the same logic number->string
  ...[...Array(9 + 1)].reduce((prev, _, currIndex) => {
    prev[currIndex] = currIndex.toString();
    return prev;
  }, {}),
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

const convertFromDecimalToHex = (number: number): string => {
  let tempNumber = number;
  let returnHex = "";
  while (tempNumber > 0) {
    returnHex = decimalToHexMapper[tempNumber % 16] + returnHex;
    tempNumber = Math.floor(tempNumber / 16);
  }
  return returnHex;
};

export function rgb(r: number, g: number, b: number): string {
  return [r, g, b]
    .map((number) => {
      if (number === 0) return "00";
      if (number > Math.pow(2, 8) - 1) return "FF";
      return convertFromDecimalToHex(number);
    })
    .join("");
}
