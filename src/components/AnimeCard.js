import React from 'react'

const AnimeCard = (props) => {
    return (
        <article className='anime-card'>
            <a href={props.anime.url}>
                <figure>
                    <img src={props.anime.image_url} alt="" />
                </figure>
                <h3>{props.anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard