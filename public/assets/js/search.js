const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input");

const TODOS_LS = "toDos";

function paintToDo(text) {
  if (text == "bbq") location.href = "paris.html";
  else {
    alert(text + "는 없습니다");
  }
}
function paris() {
  var url = "paris.html";
  var name = "popup test";
  var option =
    "width = 500, height = 600, top = 100, left = 200, location = no";
  location.href(url, name, option);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
