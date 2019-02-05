let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
  console.log('minusOne');
};
const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('reset');
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

// const multiplier = {
//   numbers: [1, 2, 3],
//   multiplyBy: 7,
//   multiply() {
//     return this.numbers.map((number) => number * this.multiplyBy);
//   }
// };

// console.log(multiplier.multiply());
