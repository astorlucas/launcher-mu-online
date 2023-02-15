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
    "config.html",
    "_blank",
    "top=500,left=200,frame=false,nodeIntegration=no,icon=favicon.ico"
  );
}
