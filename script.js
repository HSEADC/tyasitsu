export const isValidName = (name) => {
  const nameArr = name.split(" ");

  if (nameArr.length == 1) {
    return "не хватает пробела";
  }

  if (
    nameArr[0][0] == nameArr[0][0].toUpperCase() &&
    nameArr[1][0] == nameArr[1][0].toUpperCase()
  ) {
    return "валидное имя";
  } else {
    return "одно из слов начинается не с заглавной буквы";
  }
};
