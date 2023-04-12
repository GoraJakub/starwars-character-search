export interface Film {
    title: string,
    release_date: string,
    opening_crawl: string
}

export interface SearchResult {
    name: string,
    homeworldName: string,
    homeworldPopulation: number,
    films: Array<Film>
}

export interface SearchResultsProps {
    results: Array<SearchResult>
}

export interface Character {
    name: string,
    homewolrd: string,
    films: Array<string>
  }

export interface SearchBarProps {
    onSearch: (searchTerm: string) => void,
    pending: Boolean
}

