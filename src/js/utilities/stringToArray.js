export function stringToArray(inputString) {
    return inputString.trim().split(",").map(item => item.trim());
  }