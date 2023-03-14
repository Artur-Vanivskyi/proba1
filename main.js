const countt = document.querySelector(".counter");
const buttton = document.querySelector(".myButton");
let count = 0;

// buttton.addEventListener("click", () => {
//   count++;
//   countt.innerText = count;
// });

buttton.addEventListener("click", () => {
  dataLayer.push({
    event: "buttonClick",
    eventCategory: "button",
    eventAction: "click",
    eventLabel: "myButton",
  });
});
