import React from 'react';
import { hot } from 'react-hot-loader/root';
import '@babel/polyfill';

const Warning = React.lazy(() => import('./Warning'));
class App extends React.Component {
  state = {
    count: 0
  };
  increase = () => {
    this.setState(state => ({ ...state, count: state.count + 1 }));
  };
  decrease = () => {
    this.setState(state => ({ ...state, count: state.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>Hello world 1</h1>
        <h2 className={this.state.count > 5 ? 'warning' : null}>
          Count: {this.state.count}
        </h2>
        <img src="" alt="Logo" />
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        {this.state.count > 5 ? (
          <React.Suspense fallback={null}>
            {' '}
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(App);
