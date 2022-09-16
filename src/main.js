const button1 = document.querySelector("#button1");
const div1 = document.querySelector("#div1");
button1.addEventListener("click", () => {
  const event = new CustomEvent("csg", {
    detail: { name: "csg", age: 18 },
    bubbles: true,
    cancelable: false,
  });
  button1.dispatchEvent(event);
});
div1.addEventListener("csg", (e) => {
  console.log("csg被触发了");
  console.log(e.detail);
});
