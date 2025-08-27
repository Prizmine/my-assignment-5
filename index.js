let heartCount = 0;

document.querySelectorAll(".heart-button").forEach(button => {
  button.addEventListener("click", function () {
    heartCount++
    document.querySelector(".heart-count-number").innerText = heartCount;
  });
});
