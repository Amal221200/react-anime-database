import AnimeCard from './AnimeCard';

const MainContent = (props) => {
  return (
    <main>
        <div className="main-head">
            <form className="search-box" onSubmit={props.handleSearch}>
                <input type="search" value={props.search} onChange={e => props.setSearch(e.target.value)} placeholder="Search for an anime..." />
            </form>
        </div>
        <div className="anime-list">
            {props.loading? <h1>Loading</h1>:
                props.animeList.map(anime => (
                <AnimeCard anime={anime} key={anime.mal_id}/>
            ))}
        </div>
    </main>
  )
}

export default MainContent