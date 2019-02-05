// add app.title form app object that I need to create

//  add button and logic to toggle button in template that I will need to create

const app = {
  title: 'Visibility Toggle',
  hidden: true
};

const toggle = () => {
  //simpler solution
  // app.hidden = !app.hidden;

  if (app.hidden) {
    app.hidden = false;
  } else {
    app.hidden = true;
  }
  render();
};

const render = () => {
  const template = (
    <div id="app">
      <h1>{app.title}</h1>
      <button onClick={toggle}>
        {app.hidden ? 'Show details' : 'Hide Details'}
      </button>
      <p>{app.hidden > 0 ? '' : 'These are the details that you requested!'}</p>
    </div>
  );

  const appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
};
render();
