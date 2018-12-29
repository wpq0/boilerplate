import React from 'react';
class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Hello world 1</h1>
      </main>
    );
  }
}

if (process.env.NODE_ENV === 'development') {
  const hotLoader = require('react-hot-loader/root');
  App = hotLoader.hot(App);
}

export default App;
