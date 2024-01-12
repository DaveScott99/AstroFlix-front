import React from "react";
import { FeaturedButtons, FeaturedContainer, FeaturedDescription, FeaturedGenres, FeaturedHorizontal, FeaturedInfo, FeaturedName, FeaturedPoints, FeaturedVertical, FeaturedYear } from "./styles";

export default function Featured({ item }) {

    console.log(item);

    let firstDate = new Date(item.release_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return(
        <FeaturedContainer style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <FeaturedVertical>
                <FeaturedHorizontal>

                <FeaturedName>
                    {item.title}
                </FeaturedName>

                <FeaturedInfo>
                    <FeaturedPoints>
                        {item.vote_average} pontos
                    </FeaturedPoints>

                    <FeaturedYear>
                        {firstDate.getFullYear()}
                    </FeaturedYear>
                    
                </FeaturedInfo>

                <FeaturedDescription>
                    {item.overview}
                </FeaturedDescription>

                <FeaturedButtons>   
                    <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                    <a href={`/list/${item.id}`} className="featured--listbutton">+ Minha Lista</a>
                </FeaturedButtons>


                <FeaturedGenres>
                    <strong>Gêneros: </strong> 
                    {genres.join(', ')}
                </FeaturedGenres>

                </FeaturedHorizontal>
            </FeaturedVertical>
        </FeaturedContainer>
    );
}