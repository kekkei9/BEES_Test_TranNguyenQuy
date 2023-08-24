// Just work for integer
export const numberThousandSeparator = (number: number): string => {
  const [integerPart, floatPart] = number.toString().split(".");
  return (
    integerPart
      .split("")
      .map(
        (char, index, list) =>
          `${(list.length - index) % 3 === 0 && index !== 0 ? "," : ""}${char}`
      )
      .join("") + (floatPart ?? "")
  );
};
