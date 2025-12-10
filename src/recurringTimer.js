/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 * Example Usage:
 * const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds.
 */

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 * Example Usage:
 * stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID.
 */
function recurringTimer(message, interval) {
  // Set up a timer using setInterval to log the message
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);
  // Return the timer ID
  return timerId;
}

function stopRecurringTimer(timerId) {
  // Stop the timer using clearInterval
  clearInterval(timerId);
}


module.exports = { recurringTimer, stopRecurringTimer };