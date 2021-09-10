import {useState} from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {
  const [name, setName] = useState('Fer TB');
  const [showCard, setShowCard] = useState(true);
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  );
  const changeNameHandler = name => { setName(name) }
  const changeInputHandler = e=>{ setName(e.target.value) }
  const toggleShowCard = ()=>{ setShowCard(!showCard) }
  const cardsMarkup =  showCard && <Card 
    avatar={faker.image.avatar()}
    name={name}
    title='Lead Quality Producer' 
    onChangeName={()=>changeNameHandler('Fer Tor')}
    onChangeInput={changeInputHandler}
    > {buttonsMarkup}
  </Card>;
  return (
    <div className="App">
      <button 
        className="button" 
        onClick={toggleShowCard}>
        Toggle show/hide
      </button>
      { cardsMarkup }
    </div>
  );
}

export default App;
