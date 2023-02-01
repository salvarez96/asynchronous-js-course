(() => {
  function* gen() {
    yield 1;
    yield 2;
    yield 1+2;
  }

  const generator = gen();

  console.log(generator.next());
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().done);

  function* iterate(arr: any[]) {
    /* forEach doesn't work because yield must be directly inside a generator function */
    for (let value of arr) {
      yield value;
    }
  }

  const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);

  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
})();