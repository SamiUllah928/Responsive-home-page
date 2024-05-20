const selectBar = document.querySelector(".fa-bars-staggered");
console.log(selectBar);

const selectDiv = document.querySelector(".icons");
console.log(selectDiv);
let isTrue = true;
selectBar.onclick = () => {
  if (isTrue == true) {
    selectDiv.classList = "icons mobile-view ";
    isTrue = false;
  } else {
    selectDiv.classList = "icons";
    isTrue = true;
  }
};

const isClick = document.getElementById("clickme");
console.log(isClick);

isClick.onclick = () => {
  alert("This is Your Home page.");
};
