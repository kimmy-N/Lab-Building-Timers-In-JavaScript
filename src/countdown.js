/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 */
function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  let remainingTime = startTime;
  // Set up a timer using setInterval
  const timerId = setInterval(() => {
    // Log the remaining time and decrement it
    console.log(remainingTime);
    // Stop the timer when time reaches 0
    if (remainingTime <= 1) {
      clearInterval(timerId);
    }
    remainingTime--;
  }, interval);
  // Return the timer ID for validation
  return timerId;
}
//console.log(countdownTimer(10, 1000));
module.exports = { countdownTimer };