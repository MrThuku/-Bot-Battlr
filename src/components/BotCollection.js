import React from 'react'

const BotCollection = ({ bots, handleArmyBots}) => {
    return (
        <section className='botCollection'>
            {bots.map((element) => {
                return (
                    <div key={element.id} className='singleBot' onClick={()=> handleArmyBots(element)}>
                        <img src={element.avatar_url} />
                        <p>{element.name}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default BotCollection