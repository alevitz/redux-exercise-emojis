
const INITIAL_STATE = {face: "乁༼☯‿☯✿༽ㄏ"}

function faceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "Happy":
      return {...state, face: "(＾ω＾)"}
    
    case "Sad":
      return {...state, face: "●︿●"}

    case "Angry":
      return {...state, face: "(╬ಠ益ಠ)"}

    case "Confused":
      return {...state, face: "ಠ_ರೃ)"}

    default: 
      return state;
  }
}

const store = Redux.createStore(faceReducer);

