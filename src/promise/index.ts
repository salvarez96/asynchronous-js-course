const promise = new Promise((resolve, reject) => {
  resolve('sup')
})

const cows = 19;

const countCows = new Promise((resolve, reject) => {
  if (cows >= 10) {
    resolve(`Minimum requirement achieved with ${cows} cows`);
  } else {
    reject(`You need ${10 - cows} more cow${10 - cows > 1 ? 's' : ''}`)
  }
});

countCows
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('Finished'))