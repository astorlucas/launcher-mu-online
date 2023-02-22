function executeMain() {
  var exec = require("child_process").exec;
  exec("main.exe", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

function executeConfig() {
  window.open(
    "index.html",
    "_blank",
    "top=200,left=200,frame=true,nodeIntegration=no,icon=favicon.ico"
  );
}

function changeRes1() {
  var exec = require("child_process").exec;
  exec("800x600.reg", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

const progressBarContainer = document.querySelector(".progress-bar__container");
const progressBar = document.querySelector(".progress-bar");
const progressBarText = document.querySelector(".progress-bar__text");

const progressBarStates = [0, 7, 27, 34, 68, 80, 95, 100];

let time = 0;
let endState = 100;

progressBarStates.forEach((state) => {
  let randomTime = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    if (state == endState) {
      gsap.to(progressBar, {
        x: `${state}%`,
        duration: 2,
        backgroundColor: "#4895ef",
        onComplete: () => {
          progressBarText.style.display = "initial";
          progressBarContainer.style.boxShadow = "0 0 5px #4895ef";
        },
      });
    } else {
      gsap.to(progressBar, {
        x: `${state}%`,
        duration: 2,
      });
    }
  }, randomTime + time);
  time += randomTime;
});
