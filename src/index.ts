import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const store = createStore()

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
