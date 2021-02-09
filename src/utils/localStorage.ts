import { TPage, TPages } from '../types';

type lsFieldNames = 'pages';

const setRaw = (key: lsFieldNames, value: string) =>
  localStorage.setItem(key, value);
const getRaw = (key: lsFieldNames) => localStorage.getItem(key);

const set = (key: lsFieldNames, value: any) =>
  setRaw(key, JSON.stringify(value));

const get = (key: lsFieldNames) => {
  const val = getRaw(key);
  if (val) {
    return JSON.parse(val);
  }
  return null;
};

export const getPages = (): TPages => {
  try {
    return get('pages') || [];
  } catch (e) {
    return [];
  }
};

export const addPage = (page: TPage) => {
  const pages = getPages();
  pages.push(page);
  set('pages', pages);
};

export const deletePage = (id: string) => {
  let pages = getPages();
  pages = pages.filter(({ id: i }) => id !== i);
  set('pages', pages);
};
