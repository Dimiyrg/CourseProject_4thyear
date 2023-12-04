import './App.css';
import Llogo from './Header/Logo';
function App() {
  const handleSearch = (event) => {
    event.preventDefault();
    // Твоя логика обработки поиска
    console.log("Выполняется поиск");
  };
//<div className="spacer" /> {/* Добавим пустой элемент для пространства между логотипом и поисковой строкой */}
  return (
    <div className="App">
      <header className="black-bar">
      <Llogo sitename="GameMusicSearcher"></Llogo>
        <form onSubmit={handleSearch} className="search-bar">
            <input type="text" placeholder="Поиск" />
          </form>
      </header>
    </div>
  );
}

export default App;
