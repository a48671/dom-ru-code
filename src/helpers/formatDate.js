export const formatDate = date => {
  const year = new Date(date).getFullYear();
  const currentMonth = new Date(date);
  const month =
    currentMonth.getMonth() + 1 < 10
      ? '0' + (currentMonth.getMonth() + 1)
      : currentMonth.getMonth() + 1;
  const day = new Date(date).getDate();

  return `${year}-${month}-${day}`;
};
