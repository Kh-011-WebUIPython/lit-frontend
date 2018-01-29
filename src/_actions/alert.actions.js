import { alertConstants } from '../_constants';

export const alertActions = {
  error,
  clear,
};

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
