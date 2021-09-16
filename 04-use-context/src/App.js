import React from 'react;'
import './App.css';
import ComponentA from './components/ComponentA';
export const NameContext = React.createConntext()
export const ColorContext = React.createConntext()
function App() {
  return (
    <div className="App">
      <div>blank</div>
      <NameContext.Provider value={'Smith'} >
        <ColorContext.Provider>
          <ComponentA/>
        </ColorContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

export default App;
