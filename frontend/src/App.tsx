import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';

import Home from './pages/Home';
import store from './store';
import Global from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <DndProvider options={HTML5toTouch}>
        <Global />
        <Home />
      </DndProvider>
    </Provider>
  );
}

export default App;
