import React from 'react'
import {CiCircleRemove} from 'react-icons/ci'

const YourBotArmy = ({ armyBots, setArmyBots, setBots, bots }) => {

    //remove bot from yourArmyBot
    function removeArmyBot(element) {
        const filteredBots = armyBots.filter((bot) => {
            return element.id !== bot.id;
        })
        setArmyBots(filteredBots);
    }

    //remove bot from yourBotArmy and botCollection
    function removeArmyBotFromList(element) {
        const filteredBots = bots.filter((bot) => {
            return element.id !== bot.id;
        })

        setBots(filteredBots);

        /*Delete bot in database */
        // fetch(`http://localhost:3001/bots/${element.id}`, {
        //     method: 'DELETE', 
        //     headers: {
        //         "Content-Type": "Application/Json"
        //     }
        // })
        //     .then(res => res.json())
        //     .then(res => console.log(res))
    }
    
    return (
        <section className='yourBotArmy'>
            {armyBots.map((element) => {
                return (
                    <div className='singleArmyBot' key={element.id} onClick={()=> removeArmyBot(element)}>
                        <img src={element.avatar_url} />
                        <p className='botName'>{element.name}</p>
                        <p className='catchPhrase'>{element.catchphrase}</p>
                        <span className='removeBot' onClick={()=> removeArmyBotFromList(element)}><CiCircleRemove/></span>
                    </div>
                )
            })}
        </section>
    )
}

export default YourBotArmy