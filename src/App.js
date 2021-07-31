import React from 'react';
import CardList from './components/CardList';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <CardList />
    </Provider>
  );
}

export default App;
