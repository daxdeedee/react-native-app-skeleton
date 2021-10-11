export const isStringEmpty = (checkString?: string): boolean => {
  return !checkString || checkString?.length < 1;
};
