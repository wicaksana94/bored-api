export function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

export function uncapitalize(word) {
  return word[0].toLowerCase() + word.substring(1).toLowerCase();
}
