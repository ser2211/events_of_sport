import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { listOfEvents } from './reducers'
import { App } from './container';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const store = createStore(listOfEvents);

store.dispatch({
    type: 'INC_CATALOG',
});

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root'),
);

