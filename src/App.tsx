import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { SearchResult } from './interfaces/interfaces';
import { API } from './constants/api';


const App = () => {
  const [searchResults, setSearchResults] = useState<Array<SearchResult>>([])
  const [isPending, setIsPending] = useState<Boolean>(false)

  const handleSearch = async (searchTerm: string) => {
    setIsPending(true)
    const response = await fetch(`${API.URL}${searchTerm}`)
    const data = await response.json()

    const characterList: Array<SearchResult> = [];

    for(let character of data.results) {
      const homeworldResponse = await fetch(character.homeworld);
      const homeworldData = await homeworldResponse.json();
      
      const filmsData = await Promise.all(
        character.films.map(async (filmUrl: string) => {
          const response = await fetch(filmUrl);
          return response.json();
        })
      );

      characterList.push({
        name: character.name,
        homeworldName: homeworldData.name,
        homeworldPopulation: homeworldData.population,
        films: filmsData.map((film) => ({
          title: film.title,
          release_date: film.release_date,
          opening_crawl: film.opening_crawl.slice(0, 130),
        })),
      });
    }
    setIsPending(false)
    setSearchResults(characterList)
  }


  return (
    <div>
      <SearchBar onSearch={handleSearch} pending={isPending}/>
      <SearchResults results={searchResults} />
    </div>
  )
}

export default App;
