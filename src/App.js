import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  //fetch data from the database
  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then(res => res.json())
      .then(res => {
        setBots(res);
      })
  }, []);

  //check if the bot already exits in yourBot army
  function handleArmyBots(element) {
    const itemFound = armyBots.find((bot => {
      return bot.id === element.id
    }))

    //add bot to yourBorArmy
    if (!itemFound) {
      setArmyBots([...armyBots, element]);
    }
  }

  return (
    <>
      
      <YourBotArmy armyBots={armyBots} setArmyBots={setArmyBots} setBots={setBots} bots={bots} />
      <BotCollection bots={bots} handleArmyBots={handleArmyBots} armyBots={armyBots}  />
      
    </>
  );
}

export default App;
