import { AUTH } from "./actions";

const init = {};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case AUTH:
      return payload;

    default:
      return state;
  }
};
