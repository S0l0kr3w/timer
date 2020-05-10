const sorter = (a, b) => (a - b);
const seconds = process.argv.slice(2).sort(sorter).filter(num => num > 0);

const timer = function(seconds) {
  
  for (let time in seconds) {

    setTimeout(() => {
      process.stdout.write('.');
    }, 1000 * seconds[time]);

  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, 1000 * seconds[seconds.length - 1]);
};

timer(seconds);

