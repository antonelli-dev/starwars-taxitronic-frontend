import { useState } from 'react';
import MainLayout from './components/template/MainLayout';
import FilmSelectSection from './components/organisms/FilmSelectSection';
import CharacterTableSection from './components/organisms/CharacterTableSection';

function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleFilmSelect = (filmId) => {
    setSelectedFilm(filmId); 
  };

  return (
    <MainLayout>
      <FilmSelectSection onFilmSelect={handleFilmSelect} />
      {selectedFilm && <CharacterTableSection selectedFilm={selectedFilm} />}
    </MainLayout>
  );
}

export default App;
