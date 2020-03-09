
$(function () {
  const $faceHolder = $("#emoji-container");

  $("#happy").on("click", function () {
    store.dispatch({ type: "Happy" });
    const currentFace = store.getState().face;
    $faceHolder.empty().append(currentFace);
  });

  $("#sad").on("click", function () {
    store.dispatch({ type: "Sad" });
    const currentFace = store.getState().face;
    $faceHolder.empty().append(currentFace);
  });

  $("#angry").on("click", function () {
    store.dispatch({ type: "Angry" });
    const currentFace = store.getState().face;
    $faceHolder.empty().append(currentFace);
  });

  $("#confused").on("click", function () {
    store.dispatch({ type: "Confused" });
    const currentFace = store.getState().face;
    $faceHolder.empty().append(currentFace);
  });
})