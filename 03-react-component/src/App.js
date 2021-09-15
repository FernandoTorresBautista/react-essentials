import {useState, Component} from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';
import { ThemeProvider } from 'styled-components';
import Button from './element/Button';

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

class  App extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
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
      ],
      showCard: true
    }
  }

  toggleShowCard = ()=> this.setState({ showCard: !this.state.showCard })

  deleteCardHandler = (cardIndex) => {
    const cardsCopy = [...this.state.cards];
    cardsCopy.splice(cardIndex,1);
    this.setState({cards:cardsCopy})
  }

  changeNameHandler = (event, id) => {
    const cardIndex = this.state.cards.findIndex(card=>card.id === id); // which card
    const cardsCopy = [...this.state.cards]; // make a copy of the cards
    cardsCopy[cardIndex].name = event.target.value; // change the name of the specific card
    this.setState({cards:cardsCopy})
  }

  render() {
    const classes = ['button'];
    if (this.state.cards.length < 3) classes.push('pink');
    if (this.state.cards.length < 2) classes.push('red');
    const cardsMarkup =  this.state.showCard && (
      this.state.cards.map((card, index) => 
        <Card 
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          key={card.id}
          onDelete={()=>this.deleteCardHandler(index)}
          onChangeName={(event)=>this.changeNameHandler(event,card.id)}
        />)
      );
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color="mango" length={this.state.cards.length} onClick={this.toggleShowCard}>
            Toggle
          </Button>
          <button 
            className={classes.join(' ')} 
            onClick={this.toggleShowCard}>
            Toggle show/hide
          </button>
          { cardsMarkup }
        </div>
      </ThemeProvider>
    )
  }

}

export default App;
