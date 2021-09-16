import {useState, useEffect} from 'react';
import './App.css';
import Card from './Card';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

function App() {

  const [card, setCard] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        console.log(res.data);
        setCard(res.data)
      })
  }, [id]) // }) -> infinity calls

  const changeNameHandler = (event, id) => {
    //2. make a copy of card
    const cards_copy = {...card}
    //3. change the name of the specific card
    cards_copy.name = event.target.value
    //4. set the cards with the latest version of card copy
    setCard(cards_copy)
  }

  // 
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <Card
          name={card.name}
          phone={card.phone}
          key={card.id}
          onChangeName={(event) => changeNameHandler(event, card.id)}
        />
      </div>
    </ThemeProvider>
  );  
}

export default App;
