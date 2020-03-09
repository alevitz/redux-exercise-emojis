
$(function () {

  $("#happy").on("click", function () {
    store.dispatch({ type: "Happy" });
  });

  $("#sad").on("click", function () {
    store.dispatch({ type: "Sad" });
  });

  $("#angry").on("click", function () {
    store.dispatch({ type: "Angry" });
  });

  $("#confused").on("click", function () {
    store.dispatch({ type: "Confused" });
  });

  $("#random-mood").on("click", function () {
    const randNum = Math.random();
    let actionType;
    if (randNum <= .25) {
      actionType = "Happy";
    } else if (randNum <= .5) {
      actionType = "Sad";
    } else if (randNum <= .75) {
      actionType = "Angry";
    } else {
      actionType = "Confused";
    }
    store.dispatch({ type: actionType });
  });

  store.subscribe(() => {
    const $faceHolder = $("#emoji-container");
    const { face, color } = store.getState();
    $faceHolder.empty().append(face);
    $("#body").css("background-color", color);
  })
})
