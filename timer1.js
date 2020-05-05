const sorter = (a, b) => (a - b)
const seconds = process.argv.slice(2).sort(sorter).filter(num => num > 0);

const timer = function(seconds) {
  
  for(let time in seconds) {

    setTimeout(() => {
      process.stdout.write('.');;
    }, 1000 * seconds[time]);

  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, 1000 * seconds[seconds.length - 1] )
};

timer(seconds);

// For this app, we can think of at least these three:

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.