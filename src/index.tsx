import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Theme from './context/Theme';
import store from './store/store';
import StyledGlobal from './styles';
import './fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <StyledGlobal />
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
