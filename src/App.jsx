import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

function App() {
  const cardElement = cardData.map((card) => {
    return <Card 
              key={card.id}
              card={card}
            />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container">
        {cardElement}
      </div>
    </div>
  )
}

export default App;