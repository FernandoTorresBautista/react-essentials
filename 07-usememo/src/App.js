import { useState, useMemo } from 'react';
import ComponentA from './components/ComponentA';
import './App.css';

function App() {
  const [countA, setCountA] = useState(0);
  const imcrementA = () => {
    setCountA(countA + 1)
  };
  const memoComponentA = useMemo(()=>{
    return <ComponentA />
  },[]) // ,[]) render one time only
  return (
    <div className="App">    
      App js countA: {countA}
      <p>
        <button onClick={imcrementA}>Increment A</button>
      </p>
      {memoComponentA}
    </div>
  );
}

export default App;
