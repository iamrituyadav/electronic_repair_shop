// action types
export const AUTH = "AUTH";

// Action Creators
export const Auth = (data) => {
  return {
    type: AUTH,
    payload: data,
  };
};
