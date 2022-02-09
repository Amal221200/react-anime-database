import React from 'react'

const SideBar = (props) => {
    const { topAnime } = props
  return (
    <aside>
        <nav>
            <h3>TopAnime</h3>
            {topAnime.map( (anime) => (
                <a href={anime.url} target="_blank" rel='noreferrer' key={anime.mal_id}>{anime.title}</a>
            ))}
        </nav>
    </aside>
  )
}

export default SideBar