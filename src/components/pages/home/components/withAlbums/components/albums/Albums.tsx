import { IAlbum } from '@/api/types/albumResponses';
import { memo } from 'react';
import { useHorizontalScroll } from '@/components/hooks/useHorizontalScroll';

import { Container, Album } from './Albums.styles';

interface IAlbumsProps {
    albums: IAlbum[];
}

function Albums({ albums }: IAlbumsProps) {
    const scrollRef = useHorizontalScroll();

    return (
        <Container>
            <header>
                Albums
            </header>
            <div className="albums-container" ref={scrollRef}>
                {
                    albums.map((album: IAlbum, index) => {
                        return (
                            <Album key={index} to={`/albums/${album.albumId}`}>
                                <img className="cover"
                                     src={album.cover} alt="album cover"/>
                                <span className="name">{album.name}</span>
                            </Album>
                        );
                    })
                }
            </div>

        </Container>
    );
}



export default memo(Albums);
