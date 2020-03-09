
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
  store.subscribe(()=> {
    const currentFace = store.getState().face;
      $faceHolder.empty().append(currentFace);
  })
})
