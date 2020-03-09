
const INITIAL_STATE = {
  face: "乁༼☯‿☯✿༽ㄏ",
  color: "tan"
};

function faceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "Happy":
      return { ...state, face: "(＾ω＾)", color: "yellow" };

    case "Sad":
      return { ...state, face: "●︿●", color: "blue" };

    case "Angry":
      return { ...state, face: "(╬ಠ益ಠ)", color: "red" };

    case "Confused":
      return { ...state, face: "ಠ_ರೃ)", color: "gray" };

    default:
      return state;
  }
}

const store = Redux.createStore(faceReducer);

