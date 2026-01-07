import { BrowserRouter } from 'react-router';
import React from 'react';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App(): React.JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
