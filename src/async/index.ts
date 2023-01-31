(() => {
  const promiseFunction = () => {
    return new Promise((resolve, reject) => {
      true ? setTimeout(() => resolve('async!'), 2000) : reject(new Error('Error!'));
    });
  }

  const asyncFunction = async () => {
    const something = await promiseFunction();
    console.log(something);
    console.log('This last');
  }

  console.log('This first');
  asyncFunction();
})();