import React, { useState, useRef, useEffect } from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player';
import PlayButton from '../assets/images/PlayButton.png';
import "../AudioPlayer.css";
const GamePage = () => {
  const games = [
    { name: 'Witcher 3', color: '#e0e0e0', soundtracks: ['The Witcher 3: Wild Hunt Music', 'Geralt of Rivia', 'Eredin, King of the Hunt','Wake Up, Ciri', 'Aen Seidhe','Commanding the Fury','Emhyr var Emreis','Spikeroog',"King Bran's Final Voyage",'Silver for Monsters', 'Whispers of Oxenfurt'], image: '/images/WitcherBack2.png', music: "/audio/Witcher 3.mp3", button1: '/images/PauseButton.png', button2: '/images/PlayButton.png'},
    { name: 'Saya no Uta', color: '#e0e0e0', soundtracks: ['Saya no Uta OST- Song of Saya II', 'Saya no Uta OST - Spooky Scape', 'Saya no Uta OST - Silent Sorrow','Saya no Uta OST - Sin','Saya no Uta OST - Sabbath','Saya no Uta OST - Seek','Saya no Uta OST- Shapeshift','Saya no Uta OST - Savage','Saya no Uta OST- Song of Saya I','Saya no Uta OST - Schizophrenia','Saya no Uta OST- Scare Shadow','Saya no Uta OST - Scream','Saya no Uta OST - Sunset','Saya no Uta OST - Song of Saya','Saya no Uta OST- Shoes of Glass'], image: '/images/SayanoUtaBack.png', music: "/audio/SayanoUtaOST.mp3", button1: '/images/PauseButtonWhite.png', button2: '/images/PlayButtonWhite.png'},
    { name: 'Everlasting Summer', color: '#e0e0e0', soundtracks: ['«Everlasting Summer» — SERGEY EYBOG', '«Door To Nightmare» — SERGEY EYBOG', '«A Promise From Distant Days» — SERGEY EYBOG', '«I Want To Play» — SERGEY EYBOG', '«Raindrops» — SERGEY EYBOG', '«Blow with the Fires» — BETWEEN AUGUST AND DECEMBER', '«Orchid» — BETWEEN AUGUST AND DECEMBER', "«You Won't Let Me Down» — BETWEEN AUGUST AND DECEMBER", '«Awakening Power» — BETWEEN AUGUST AND DECEMBER', '«Into the Unknown» — BETWEEN AUGUST AND DECEMBER', '«Doomed to be Defeated» — BETWEEN AUGUST AND DECEMBER', '«Drown» — BETWEEN AUGUST AND DECEMBER',], image: '/images/EverlastingSummerBack.png', music: "/audio/EverlastingSummer.mp3", button1: '/images/PauseButton.png', button2: '/images/PlayButton.png'},
    { name: 'Higurashi', color: '#e0e0e0', soundtracks: ['Silver Mirror - Higurashi no Naku Koro ni', 'Spring Step (Mion)', 'Lunch Time - Rena', 'Paris no Gogo', 'Digital Network','Sutakorasassa (Helter Skelter)','Orenji iro no Toki (Orange colored Time)','Asagiri (Morning Fog)','Small Town (Satoko)',"Baby's Walk (Rika)"], image: '/images/HigurashiBack.png', music: "/audio/Higurashi.mp3", button1: '/images/PauseButtonWhite.png', button2: '/images/PlayButtonWhite.png'},
    { name: 'Hunt: Showdown', color: 'black', soundtracks: ['Death Is a Bird Flying','Rise up Dead Man (Instrumental)', 'Sinners Blues', 'Devil in the Churchyard','End Will Come', 'Rise up Dead Man', 'Poison Curse','End Will Come','Trinity Instrumental', 'Rise Up Dead Man (Hunt: Showdown OST)'], image: '/images/HuntShowdownBack.png', music: "/audio/HuntShowdown.mp3", button1: '/images/PauseButton.png', button2: '/images/PlayButton.png'},
    { name: 'Devil May Cry 5', color: '#e0e0e0', soundtracks: ["Devil Trigger - Nero's Battle Theme from Devil May Cry 5 OST", "Bury the Light - Vergil's battle theme from Devil May Cry 5 Special Edition", "Subhuman - Dante's battle theme from Devil May Cry 5 OST","Crimson Cloud - V's Battle Theme from Devil May Cry 5",'Devil May Cry 5 OST - Crimson Cloud','DEVIL MAY CRY 5 OST: Legacy'], image: '/images/DevilMayCryBack.png', music: "/audio/DevilMayCry.mp3", button1: '/images/PauseButtonWhite.png', button2: '/images/PlayButtonWhite.png'},
    { name: 'Doom Eternal', color: 'black', soundtracks: ['Doom Eternal OST - The Only Thing They Fear Is You (Mick Gordon) [Doom Eternal Theme]', 'Mick Gordon - The Super Gore Nest', 'DOOM Eternal OST - Cultist Base','DOOM Eternal OST - The Only Thing They Fear Is You (Extended Intro)','Meathook - Mick Gordon','DOOM Hunted - Mick Gordon','Phobos Space - Mick Gordon'], image: '/images/DoomEternalBack.png', music: "/audio/DoomEternal.mp3", button1: '/images/PauseButton.png', button2: '/images/PlayButton.png'},
    { name: 'Dark Souls 3', color: 'black', soundtracks: ['Dark Souls III | Yuka Kitamura', 'Crystal Sages | Motoi Sakuraba', 'Vordt of the Boreal Valley | Motoi Sakuraba', 'Prologue | Yuka Kitamura', 'Nameless King | Motoi Sakuraba','Yhorm The Giant | Yuka Kitamura', ' Soul of Cinder | Yuka Kitamura','Pontiff Sulyvahn | Yuka Kitamura', 'Abyss Watchers | Yuka Kitamura',], image: '/images/DarkSoulsBack.png', music: "/audio/DarkSouls.mp3", button1: '/images/PauseButton.png', button2: '/images/PlayButton.png'},
    { name: 'Escape from Tarkov', color: 'black', soundtracks: ['Prepare for Escape', 'Denial', 'Escape from Tarkov - OST','Hostile Illusion','Betrayal','Dark Horizon','Countdown'], image: '/images/EscapefromTarkovBack.png', music: "/audio/EscapefromTarkov.mp3", button1: '/images/PauseButton.png', button2: '/images/PlayButton.png'},
    { name: 'Helltaker', color: '#e0e0e0', soundtracks: ['Vitality', 'Apropos', 'Epitomize','Luminescent', 'Alchemy','Titanium', 'Epitomize(VIP edit)', 'Vitality(VIP edit)', "Epitomize(Simmer's VIP edit)",'Brimstone'], image: '/images/HelltakerBack.png', music: "/audio/Helltaker.mp3", button1: '/images/PauseButton.png', button2: '/images/PlayButton.png'},

  ]
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Установите начальное значение громкости после загрузки компонента
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);
  const toggleAudio = () => {
    const audio = document.getElementById('myAudio');
   
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };
  
    const getImageSrc = () => (isPlaying ? currentGame.button1 : currentGame.button2);
  const { slug } = useParams()
  /*{currentBacks.map((currentBack) => <img style={{ display: 'block', width: '300px', height: '400px'}} src={currentBack} />)}*/
  const currentGame = games.find(game => game.name === slug);
  const soundtracksToRender = currentGame.soundtracks;
  const currentBacks = currentGame.image;
  const containerStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${currentBacks})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'fixed', // Добавлено фиксированное позиционирование
    top: 0, // Устанавливаем верхний край вверху
    left: 0, // Устанавливаем левый край влево
    
  };
  /*<img src={currentBacks}></img> */
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '20px', // Пример добавления внутреннего отступа
    marginLeft: '35px',
  };
  const listStyle = {
    color: currentGame.color,
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: "bold",
  };
  const listItemStyle = {
    margin: '12px 0', // Добавляем отступы между элементами списка
    fontSize: '1.5em', // Размер шрифта для элементов списка
    color: currentGame.color, // Цвет текста
    // Другие стили, которые вам нужны
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: "bold",
  };
  return (
    <div style={containerStyle}>
       
      <div style={contentStyle}>
      <h1 style={listStyle}>{`Список музыки для ${slug}:`}</h1>
      <img 
        src={getImageSrc()}
        alt="Play/Pause"
        onClick={toggleAudio}
        style={{width:'50px',height:'50px', cursor: 'pointer', maxWidth: '100%', maxHeight: '100%' }}
      />
      <audio id="myAudio" ref={audioRef} controls={false} autoPlay >
    <source src={currentGame.music} type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>
      <ol>
        {soundtracksToRender.map((soundtrack) => <li style={listItemStyle}>{soundtrack}</li>)}
      </ol>
    </div>
    </div>
  )
}

export default GamePage