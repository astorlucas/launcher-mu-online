function executeMain() {
  var exec = require("child_process").exec;
  exec(
    "main.exe",
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    }
  );
}
