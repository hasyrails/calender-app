import { INCREMENT, DECREMENT } from "./constants";

const iniState = 0;

export const count = (state = iniState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
