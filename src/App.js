import './App.css';
import Header from './components/Header'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import '../src/styles/Cardcontainer.css';

function App() {
  const selectedTopic = useSelector((state) => state.topic[0])
  const [cards, setCards] = useState("Cargando...")

  useEffect(() => {
    if(!selectedTopic) {
      setCards("Selecciona un tema");
    } else if (selectedTopic.length > 1) {
      const updatedCards = selectedTopic.map(item => (
        <Card 
          key={item.id}
          title={item.title}
          subreddit={item.subreddit}
          score={item.score}
          permalink={item.link}
          created={item.date}
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
