export const setLocal = (key: string, value: any): void => {
  window.localStorage.setItem(key, value);
};

export const getLocal = (key: string): any => {
  window.localStorage.getItem(key);
};
