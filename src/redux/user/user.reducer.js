import { UserActionTypes } from "./user.types";

const init = {
  currentUser: null,
};

const userReducer = (state = init, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
