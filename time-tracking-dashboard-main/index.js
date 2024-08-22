const transQuery = document.querySelectorAll(".trans");
const dataQuery = document.querySelectorAll(".space-between");
transQuery.forEach((choice) => {
  choice.addEventListener("click", function (event) {
    const id = this.id;
    const targetData = document.querySelectorAll(`.${id}-data`);
    transQuery.forEach((trans) => {
      trans.style.color = "var(--cl-Desaturatedblue)";
    });
    this.style.color = "white";

    dataQuery.forEach((data) => {
      data.style.display = "none";
    });
    targetData.forEach((data) => {
      data.style.display = "flex";
    });
  });
});
