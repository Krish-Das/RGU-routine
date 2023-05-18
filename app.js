const routineData = [
  //! THIS DATASET DOES NOT CONTAIN RECESS TIME
  ["", "", "", "JLD / SS", "", ""], // MON
  ["", "", "", "AS", "JLD", ""], // TUES
  ["JLD", "", "", "", "AS", "LS"], // WED
  ["", "", "Delete", "", "", ""], // THURS
  ["", "", "AS", "", "", ""], // FRI
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
    element.innerText = data[idx][newIdx];
  });
});

console.log(loopCount);
