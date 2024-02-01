export const toggleArrayItem = <T>(array: T[], item: T): T[] => {
  const itemIndex = array.indexOf(item);

  if (itemIndex !== -1) {
    return array.filter((i) => i !== item);
  } else {
    return [...array, item];
  }
};
