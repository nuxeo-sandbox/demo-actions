// This automation script is used only to validate that the UI is working.
function run(input, params) {
  var timeTosleepMs = 10000;
  Console.info("Sleeping for "+timeTosleepMs+"ms...");
  sleep(timeTosleepMs);
  Console.info("Done.");
  
  var message="Test ok.";
  Console.info(message);
  
  return message;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {
    // Busy wait
  }
}
