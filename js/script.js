let displayArea = document.querySelector(".display-area");

document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("click", (e) => {
    let btnAttValue = e.currentTarget.getAttribute("data-key");

    if (btnAttValue == "clear") displayArea.value = "";
    else if (btnAttValue == "delete")
      displayArea.value = displayArea.value.slice(
        0,
        displayArea.value.length - 1
      );
    else if (btnAttValue == "=") {
      if (displayArea.value == "") return;
      let exp = displayArea.value.replaceAll("x", "*");
      try {
        displayArea.value = math.evaluate(exp);
      } catch (error) {
        console.error("Invalid Expression", e.error);
      }
    } else displayArea.value += btnAttValue;
  });
});
