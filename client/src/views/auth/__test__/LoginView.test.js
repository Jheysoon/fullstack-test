import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByLabelText,
} from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';

import LoginView from '../LoginView';

it('renders the component correctly', () => {
  render(
    <BrowserRouter>
      <LoginView />
    </BrowserRouter>
  );

  const input = screen.getByLabelText('Email Address');

  fireEvent.change(input, { target: { value: '' } });

  fireEvent.click(screen.getByText('Sign in now'));
});
