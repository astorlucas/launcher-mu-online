function executeMain() {
  window.alert("ALERTA");
  var shell = new ActiveXObject("WScript.shell");
  shell.run("notepad.exe", 1, True);
}
