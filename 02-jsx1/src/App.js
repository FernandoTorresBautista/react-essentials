import "./Custom.css";

function App() {
  const style = {
    outerDiv:{padding: '70px 0',backgroundColor: 'blue'},
    innerDiv:{  
      textAlign: 'center',
      margin: 'auto',
      width: '60%',
      border: '3px solid black',
      backgroundColor: '#73AD21',
      padding: '70px 0'
    }
  };
  const someText = 'sometext'
  const someDiv = <div style={{backgroundColor:'white'}}>somediv</div>
  return (
    <div style={style.outerDiv}>
      <div style={style.innerDiv}>
        {someText}
        {someDiv}
      </div>
    </div>
  );
}

export default App;
