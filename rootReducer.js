
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

    case "Random-Mood":
      const randNum = Math.random();
      console.log(randNum);
      if (randNum <= .25) {
        return { ...state, face: "(＾ω＾)", color: "yellow" };
      } else if (randNum <= .5) {
        return { ...state, face: "●︿●", color: "blue" };
      } else if (randNum <= .75) {
        return { ...state, face: "(╬ಠ益ಠ)", color: "red" };
      } else {
        return { ...state, face: "ಠ_ರೃ)", color: "gray" };
      }
    default:
      return state;
  }
}



const store = Redux.createStore(faceReducer);

