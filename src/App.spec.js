import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('test', () => {
  it('runs', () => {
    expect(true).toBe(true);
  });
});

describe('App', () => {
  it('Renders without errors', () => {
    render(<App />);
  });
});
