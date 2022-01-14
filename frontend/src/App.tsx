import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Home from './pages/Home';
import store from './store';
import Global from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Global />
        <Home />
      </DndProvider>
    </Provider>
  );
}

export default App;
