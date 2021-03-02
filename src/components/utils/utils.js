import moment from 'moment';

export const NOOP = () => {};

export const isLoggedIn = (location) =>
  location !== '/' && location !== '/classification' && location !== '/signup';

export const getTaskTimeFormat = (time) => moment(time).format('LLL');
