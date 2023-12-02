import './App.css';

function App() {
  const handleSearch = (event) => {
    event.preventDefault();
    // Твоя логика обработки поиска
    console.log("Выполняется поиск");
  };

  return (
    <div className="App">
      <header className="black-bar">
      <div className="spacer" /> {/* Добавим пустой элемент для пространства между логотипом и поисковой строкой */}
        <form onSubmit={handleSearch} className="search-bar">
            <input type="text" placeholder="Поиск" />
          </form>
      </header>
    </div>
  );
}

export default App;
