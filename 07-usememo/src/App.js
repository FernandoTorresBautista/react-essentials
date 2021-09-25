import { useState, useMemo } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import './App.css';

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const imcrementA = () => {
    setCountA(countA + 1)
  };
  const imcrementB = () => {
    setCountB(countB + 1)
  };
  const memoComponentA = useMemo(()=>{
    return <ComponentA count={countA} />
  },[countA]) // ,[]) render one time only
  return (
    <div className="App">    
      App js countA: {countA}
      <p>
        <button onClick={imcrementA}>Increment A</button>
        <button onClick={imcrementB}>Increment B</button>
      </p>
      {memoComponentA}
      <p></p>
      <ComponentB count={countB} />
    </div>
  );
}

export default App;
