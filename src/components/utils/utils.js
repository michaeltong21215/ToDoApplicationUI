export const NOOP = () => {};

export const isLoggedIn = (location) =>
  location !== '/' && location !== '/classification' && location !== '/signup';
