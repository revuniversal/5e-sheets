// @flow
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import store from './store';
import theme from './theme';
import './index.css';

const state = store.getState();

render(
  <ThemeProvider theme={theme}>
    <App character={state.character}/>
  </ThemeProvider>,
  document.getElementById('root')
)