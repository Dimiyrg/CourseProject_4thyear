import React, { useState } from 'react';
import './App.css';
import Llogo from './Header/Logo';

function App() {
  const [currentContent, setCurrentContent] = useState('default');

  const handleLinkClick = (content) => {
    setCurrentContent(content);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    // Твоя логика обработки поиска
    console.log("Выполняется поиск");
  };
  const handleImageClick = (imageName) => {
    console.log(`Клик по изображению ${imageName}`);
    handleLinkClick(imageName);
  };
//<div className="spacer" /> {/* Добавим пустой элемент для пространства между логотипом и поисковой строкой */}
  return (
    
    <div className="App">
      {currentContent === 'default' && (
       <div> 
            <header className="black-bar">
      <Llogo sitename="GameMusicSearcher"></Llogo>
        <form onSubmit={handleSearch} className="search-bar">
            <input type="text" placeholder="Поиск" />
          </form>
      </header>
      <div className="main"><section className="main__content">
       <div className="card-item">
         <div className="card-item__image-viewport">
          
         <a href="#" onClick={() => handleImageClick('Witcher')}>
           <img
             src="/images/Witcher32.png"
             alt="The Witcher"
             className="card-item__image"
           />
          </a>
         </div>
         <header className="card-item__title">The Witcher 3</header>
       </div>
      </section></div>
      </div>
    )}
      {currentContent === 'Witcher' && (
       <div> 
            
      </div>
    )}
      
    </div>
  );
}

export default App;
