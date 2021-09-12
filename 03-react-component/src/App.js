import {useState} from 'react';
import './App.css';
import Card from './Card';
// import faker from 'faker';

function App() {
  const [cards, setCards] = useState([
    {
      id:'asd',
      name: "name 1",
      title: "title 1",
      avatar: 'https://cdn.fakercloud.com/avatars/ceekaytweet_128.jpg'
    },
    {
      id:'sdf',
      name: "name 2",
      title: "title 2",
      avatar: 'https://cdn.fakercloud.com/avatars/ceekaytweet_128.jpg'
    },
    {
      id:'dfg',
      name: "name 3",
      title: "title 3",
      avatar: 'https://cdn.fakercloud.com/avatars/ceekaytweet_128.jpg'
    },
  ]);
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = ()=>{ setShowCard(!showCard) }

  const deleteCardHandler = (cardIndex) => {
    const cardsCopy = [...cards];
    cardsCopy.splice(cardIndex,1);
    setCards(cardsCopy);
  }

  const changeNameHandler = (event, id) => {
    const cardIndex = cards.findIndex((card, index)=>card.id === id); // which card
    const cardsCopy = [...cards]; // make a copy of the cards
    cardsCopy[cardIndex].name = event.target.value; // change the name of the specific card
    setCards(cardsCopy); // set the cards with the latest change
  }

  const classes = ['button'];
  if (cards.length < 3) classes.push('pink');
  if (cards.length < 2) classes.push('red');
  const cardsMarkup =  showCard && (
    cards.map((card, index) => 
      <Card 
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        key={card.id}
        onDelete={()=>deleteCardHandler(index)}
        onChangeName={(event)=>changeNameHandler(event,card.id)}
      />)
    );
  
  return (
    <div className="App">
      <button 
        className={classes.join(' ')} 
        onClick={toggleShowCard}>
        Toggle show/hide
      </button>
      { cardsMarkup }
    </div>
  );
}

export default App;
