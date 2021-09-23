export const capitalize = (value: string): string => {
  value = value.trim();
  return value.charAt(0).toUpperCase() + value.slice(1);
};
