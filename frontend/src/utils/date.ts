export const dateToReadableString = (dateTime: Date): string => {
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();
  return `${date}-${month}-${year}`;
};
