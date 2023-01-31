function executeMain() {
  // var child = require("child_process").execFile;
  // var executablePath = "CLIENTE BASE\\main.exe";

  // child(executablePath, function (err, data) {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }

  //   console.log(data.toString());
  // });
  const path = require("CLIENTE BASE\\main.exe");
  const { execFile } = require("child_process");

  describe("cli test", () => {
    test("thing", () => {
      const myCli = execFile(
        `sh ${path.resolve(__dirname, "..")}/cli.js`,
        ["--foo", "Bar"],
        (err, stdout, stderr) => {
          if (err) {
            console.log("err: ", err);
          }
        }
      );
    });
  });
}
