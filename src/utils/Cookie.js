import { useCookies } from 'react-cookie';

const [cookies, setCookie, removeCookie] = useCookies();

export const setCookieFn = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookieFn = (name) => {
  return cookies.get(name);
};
