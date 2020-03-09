
$(function () {
  const $faceHolder = $("#emoji-container");

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
    store.dispatch({ type: "Random-Mood" });
  });


  store.subscribe(()=> {
    const currentFace = store.getState().face;
    const currentColor = store.getState().color;
      $faceHolder.empty().append(currentFace);
      $("#body").css("background-color", currentColor);
  })
})
