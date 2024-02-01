let screen = document.getElementById("screen");
let screenOutput = " ";
buttons = document.querySelectorAll("button");
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenOutput += buttonText;
      screen.value = screenOutput;
    } else if (buttonText == "=") {
      screen.value = eval(screenOutput);
    } else if (buttonText == "©") {
      screenOutput = " ";
      screen.value = screenOutput;
    } else if (buttonText == "sqrt") {
      screen.value = Math.sqrt(screenOutput);
    } else if (buttonText == "←") {
      screen.value.slice(0, screen.length);
    } else if (buttonText == "->") {
      addEventListener("keydown", function (event) {
        const key = event.key;
        if (key === "Backspace" || key === "Delete") {
          $("#GFG_DOWN").html(key + " is Pressed!");
        }
      });
    } else {
      screenOutput += buttonText;
      screen.value = screenOutput;
    }
  });
}
