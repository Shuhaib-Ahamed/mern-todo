import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

test('renders header', () => {
  render(<App/>);
  const linkElement = screen.getAllByTitle;
  expect(linkElement).toBeInTheDocument();
});