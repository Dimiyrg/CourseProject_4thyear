import React from "react"
import { Link } from "react-router-dom"
import Llogo from '../Header/Logo';
const MainPage = () => {
  const gamesNames = [
    {name: 'Witcher 3', image: './images/Witcher32.png'},
    {name: 'Saya no Uta', image: './images/SayanoUta.png'},
    {name: 'Everlasting Summer', image: './images/EverlastingSummer.png'},
    {name: 'Higurashi', image: './images/Higurashi.png'},
    {name: 'Hunt: Showdown', image: './images/HuntShowdown.png'},
    {name: 'Devil May Cry 5', image: './images/DevilMayCry.png'},
    {name: 'Doom Eternal', image: './images/DoomEternal.png'},
    {name: 'Dark Souls 3', image: './images/DarkSouls.png'},
    {name: 'Escape from Tarkov', image: './images/EscapefromTarkov.png'},
    {name: 'Helltaker', image: './images/Helltaker.png'},
  ]

  return (
    <div className="backk"><header className="black-bar">
    <Llogo sitename='./images/Logo.png'></Llogo>
    </header>
    
      <div style={{ display: 'flex', flexWrap: "wrap", gap: 15, width: '100%', justifyContent: 'space-around'}}>
    {gamesNames.map((gamesName, index) => 
    <Link style={{display: 'block', marginBottom: '20px'}}key={index} to={`/game/${gamesName.name}`}>
      <img style={{ display: 'block', width: '300px', height: '400px'}} src={gamesName.image} />
    </Link>)}
  </div> 
  </div>
  )
}

export default MainPage