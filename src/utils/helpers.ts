export const toggleArrayItem = <T>(array: T[], item: T): T[] => {
  const itemIndex = array.indexOf(item);

  if (itemIndex !== -1) {
    return array.filter((i) => i !== item);
  } else {
    return [...array, item];
  }
};

export const flattenTreeArray = <T>(array: T[], childsKey: keyof T): T[] => {
  let output: T[] = [];

  array.forEach(item => {
    output.push(item);

    if (item[childsKey] && Array.isArray(item[childsKey])) {
      output = output.concat(flattenTreeArray(item[childsKey] as T[], childsKey));
    }
  });

  return output;
}
