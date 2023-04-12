import { SearchResultsProps } from '../interfaces/interfaces'
import Accordion from 'react-bootstrap/Accordion';


const SearchResults = ({results}: SearchResultsProps) => {


    return (
        <Accordion style={{maxWidth: '800px', margin: '0 auto'}}>
            {results.map((result, index) => (
                <Accordion.Item eventKey={String(index)} key={result.name}>
                    <Accordion.Header>
                        <div>
                            <h2 style={{display: 'block'}}>{result.name}</h2>
                            <p>{`Homeworld: ${result.homeworldName} (Population: ${result.homeworldPopulation})`}</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                    {result.films.map((movie) => (
                        <div key={movie.title} className='film_container'>
                            <h3>{movie.title}</h3>
                            <p>{`Release Date: ${movie.release_date}`}</p>
                            <p>{`Opening Crawl: ${movie.opening_crawl}...`}</p>
                        </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export default SearchResults