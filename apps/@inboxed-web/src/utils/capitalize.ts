export default (phrase: string): string => {
  if (!phrase) return '';
  return phrase[0].toUpperCase() + phrase.slice(1);
};
