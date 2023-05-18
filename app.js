const routineData = [
  ["", "", "", "JLD / SS", "", "LS"], // MON
  ["", "", "", "AS", "JLD", ""], // TUES
  ["JLD", "", "", "", "AS", "LS"], // WED
  ["", "", "SS", "", "", ""], // THURS
  ["", "", "AS", "", "LS", ""], // FRI
];

const allClasses = [];
let loopCount = 0;

const dynamicContent = [...document.querySelectorAll(".content__dynamic")];

dynamicContent.forEach((content, idx) => {
  let usableChild = [];

  [...content.children].forEach((child, newIdx) => {
    loopCount++;
    if (newIdx !== 0 && newIdx !== 4) {
      child.classList.add("is__class");
      usableChild.push(child);
    }
  });

  allClasses.push(usableChild);
});

allClasses.forEach((element, idx) => {
  element.forEach((element, newIdx) => {
    loopCount++;
    element.innerText = routineData[idx][newIdx];
  });
});

console.log(loopCount);
