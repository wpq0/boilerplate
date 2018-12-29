import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('App', () => {
  it('Runs and passes', () => {
    expect(true).toBe(true);
  });

  it('Renders without errors', () => {
    render(<App />);
  });
});
