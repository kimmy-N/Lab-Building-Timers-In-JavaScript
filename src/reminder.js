/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
function delayedReminder(message, delay) {
  // Return a promise
  return new Promise((resolve) => {
    setTimeout(() => {
      // Use setTimeout to log the message after the specified delay
      console.log(message);
      // Resolve the promise once the message is logged
      resolve();
    }, delay);
  });
}
//delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));

module.exports = { delayedReminder };