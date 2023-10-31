import './App.css';
import Header from './components/Header'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import '../src/styles/Cardcontainer.css';
import milisegundosPasados from './utility/milisegundosPasados';

function App() {
  const selectedTopic = useSelector((state) => state.topic[0])
  const [cards, setCards] = useState("Cargando...")

  useEffect(() => {
    if(!selectedTopic) {
      setCards("Selecciona un tema");
    } else if (selectedTopic.length > 1) {
      const sortedTopic = [...selectedTopic].sort((a, b) => b.score - a.score);
      const filteredTopic = sortedTopic.filter(item => {
        return milisegundosPasados(item.date) < 259200000;
      })
      const updatedCards = filteredTopic.map(item => (
        <Card 
          key={item.id}
          title={item.title}
          subreddit={item.subreddit}
          selftext={item.selftext}
          score={item.score}
          permalink={item.link}
          created={item.date}
          thumbnail={item.thumbnail}
        />
      ))
      setCards(updatedCards);
      
    }
  }, [selectedTopic])

  return (
    <div className="App">
      <Header />
      <div className="cardscontainer">
        {cards}
      </div>
    </div>
    
  );
}

export default App;
