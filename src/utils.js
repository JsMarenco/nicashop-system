export const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
export const deleteSpaces = (text) => {
  let arr = text.split(" ").filter((x) => x !== "");
  let finalText = "";

  for (let item of arr) {
    finalText += item + " ";
  }

  return finalText.toLowerCase();
};
